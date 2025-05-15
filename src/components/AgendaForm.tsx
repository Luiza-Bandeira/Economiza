
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from '@/hooks/use-toast';

// Esquema de validação com Zod
const formSchema = z.object({
  nome: z.string().min(1, 'O nome é obrigatório'),
  email: z.string().email('Formato de e-mail inválido'),
  telefone: z.string().min(1, 'O telefone é obrigatório')
    .regex(/^[0-9()-\s]+$/, 'Formato de telefone inválido'),
});

export type FormValues = z.infer<typeof formSchema>;

interface AgendaFormProps {
  onSuccess: () => void;
}

export const AgendaForm: React.FC<AgendaFormProps> = ({ onSuccess }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  // Configurando React Hook Form com validação do Zod
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    
    try {
      // Enviando dados para o Supabase
      const { error } = await supabase
        .from('agendamentos')
        .insert([
          {
            nome: values.nome,
            email: values.email,
            telefone: values.telefone,
          }
        ]);

      if (error) throw error;
      
      toast({
        title: "Sucesso!",
        description: "Seus dados foram enviados com sucesso!",
      });
      
      // Redireciona para o Google Agenda após o envio bem-sucedido
      window.location.href = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2NKKykzH1HQ-P5s5oKMoZVh8FGlo3aBJqFdG7vFjYnBivcVOSja6d7HccZLHtSrKxtW9VZgZEM';
      
      // Notifica o componente pai que o envio foi bem-sucedido
      onSuccess();
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      toast({
        variant: "destructive",
        title: "Erro!",
        description: "Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-economiza-azul-escuro font-semibold text-base">
                Nome completo
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-gray-50 border-2 border-gray-200 focus:border-economiza-vinho focus:ring-economiza-vinho rounded-lg py-3 px-4"
                  placeholder="Digite seu nome completo"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-economiza-azul-escuro font-semibold text-base">
                E-mail
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="bg-gray-50 border-2 border-gray-200 focus:border-economiza-vinho focus:ring-economiza-vinho rounded-lg py-3 px-4"
                  placeholder="Digite seu e-mail"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="telefone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-economiza-azul-escuro font-semibold text-base">
                Telefone
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  className="bg-gray-50 border-2 border-gray-200 focus:border-economiza-vinho focus:ring-economiza-vinho rounded-lg py-3 px-4"
                  placeholder="Digite seu telefone"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-economiza-vinho hover:bg-economiza-rosa text-white font-semibold text-lg py-4 rounded-lg transition-colors shadow-md mt-2"
        >
          {isLoading ? "Processando..." : "Continuar para agendamento"}
        </Button>
      </form>
    </Form>
  );
};
