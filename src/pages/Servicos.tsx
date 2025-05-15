
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, PiggyBank, ChartBar, ChartLine, Briefcase, Users, Handshake } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const Servicos = () => {
  const openAgendaPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    document.dispatchEvent(new CustomEvent('openAgendaPopup'));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-economiza text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl">
              Soluções financeiras personalizadas para cada necessidade
            </p>
          </div>
        </div>
      </section>

      {/* Serviços para Pessoa Física */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <Users size={32} className="text-economiza-vinho mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-economiza-azul-escuro">
                Para Pessoas Físicas
              </h2>
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Transforme sua relação com o dinheiro e conquiste a paz financeira com nossos serviços personalizados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <ServiceCard 
              icon={<ChartBar size={48} />}
              title="Diagnóstico Financeiro"
              description="Análise completa da sua situação financeira atual, identificando pontos de melhoria e oportunidades."
              className="border-t-4 border-economiza-vinho"
            />
            
            <ServiceCard 
              icon={<ChartLine size={48} />}
              title="Planejamento para Metas"
              description="Estratégias personalizadas para alcançar seus objetivos financeiros a curto, médio e longo prazo."
            />
            
            <ServiceCard 
              icon={<PiggyBank size={48} />}
              title="Quitação de Dívidas"
              description="Plano estruturado para eliminação de dívidas, reduzindo juros e recuperando sua saúde financeira."
              className="border-t-4 border-economiza-vinho"
            />
            
            <ServiceCard 
              icon={<Calendar size={48} />}
              title="Acompanhamento Mensal"
              description="Suporte contínuo com reuniões periódicas para ajustes e orientações no seu planejamento."
            />
          </div>

          <div className="mt-12 text-center">
            <Button 
              onClick={openAgendaPopup}
              className="bg-economiza-vinho hover:bg-economiza-rosa text-white text-lg px-6 py-3 rounded-md shadow-md transition-colors"
            >
              <Calendar className="mr-2" size={20} />
              Agende sua consultoria personalizada
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços para Empresas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <Briefcase size={32} className="text-economiza-azul-medio mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-economiza-azul-escuro">
                Para Empresas
              </h2>
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Potencialize os resultados do seu negócio com gestão financeira estratégica e estruturada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <ServiceCard 
              icon={<ChartBar size={48} />}
              title="Diagnóstico e Estruturação"
              description="Análise completa da saúde financeira da empresa, com organização de fluxo financeiro e relatórios gerenciais."
            />
            
            <ServiceCard 
              icon={<ChartLine size={48} />}
              title="Precificação Estratégica"
              description="Metodologia para formação de preços que equilibra competitividade no mercado e lucratividade para seu negócio."
              className="border-t-4 border-economiza-azul-medio"
            />
            
            <ServiceCard 
              icon={<PiggyBank size={48} />}
              title="Gestão de Fluxo de Caixa"
              description="Implementação de controles e ferramentas para otimizar o fluxo de caixa e melhorar a liquidez do negócio."
            />
            
            <ServiceCard 
              icon={<Handshake size={48} />}
              title="Treinamentos e Consultorias"
              description="Capacitação de equipes e consultoria contínua para implementação de melhores práticas financeiras."
              className="border-t-4 border-economiza-azul-medio"
            />
          </div>

          <div className="mt-12 text-center">
            <Button 
              onClick={openAgendaPopup}
              className="bg-economiza-azul-medio hover:bg-economiza-azul-escuro text-white text-lg px-6 py-3 rounded-md shadow-md transition-colors"
            >
              <Calendar className="mr-2" size={20} />
              Solicite uma proposta para sua empresa
            </Button>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-economiza-azul-escuro">
              Nossa Metodologia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo estruturado com foco em resultados reais e duradouros
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-economiza-azul-medio"></div>
              
              {/* Timeline items */}
              <div className="space-y-16">
                {/* Item 1 */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-economiza-azul-escuro text-white w-12 h-12 rounded-full flex items-center justify-center z-10 text-xl font-bold">
                      1
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-3 text-economiza-azul-medio">Diagnóstico Completo</h3>
                    <p className="text-gray-700">
                      Nossa primeira etapa é compreender profundamente sua situação financeira atual, através de uma análise detalhada de receitas, despesas, dívidas, investimentos e objetivos.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-economiza-vinho text-white w-12 h-12 rounded-full flex items-center justify-center z-10 text-xl font-bold">
                      2
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-3 text-economiza-vinho">Planejamento Estratégico</h3>
                    <p className="text-gray-700">
                      Desenvolvemos um plano de ação personalizado, considerando seu perfil, prioridades e metas específicas, com cronograma realista e estratégias claras.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-economiza-azul-medio text-white w-12 h-12 rounded-full flex items-center justify-center z-10 text-xl font-bold">
                      3
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-3 text-economiza-azul-medio">Implementação Guiada</h3>
                    <p className="text-gray-700">
                      Acompanhamos de perto a implementação das estratégias definidas, oferecendo suporte contínuo e ferramentas práticas para execução do plano.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-economiza-rosa text-white w-12 h-12 rounded-full flex items-center justify-center z-10 text-xl font-bold">
                      4
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-3 text-economiza-rosa">Monitoramento e Ajustes</h3>
                    <p className="text-gray-700">
                      Realizamos revisões periódicas do progresso, ajustando estratégias quando necessário para garantir que você permaneça no caminho certo para alcançar seus objetivos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-economiza text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar sua vida financeira?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e descubra como podemos ajudar você ou sua empresa a alcançar o equilíbrio e sucesso financeiro.
          </p>
          <Button 
            onClick={openAgendaPopup}
            className="bg-economiza-vinho hover:bg-economiza-rosa text-white text-lg px-8 py-6 rounded-md shadow-lg transition-colors"
          >
            <Calendar className="mr-2" size={24} />
            Agende sua consultoria gratuita
          </Button>
        </div>
      </section>
    </>
  );
};

export default Servicos;
