
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import { Calendar, PiggyBank, ChartBar, Briefcase, Users, Handshake } from 'lucide-react';

const Index = () => {
  const openAgendaPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    document.dispatchEvent(new CustomEvent('openAgendaPopup'));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-economiza min-h-screen flex items-center text-white pt-16">
        <div className="absolute inset-0 bg-economiza-azul-escuro opacity-40"></div>
        <div className="container mx-auto px-4 z-10 pt-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Organize suas finanças com estratégia e clareza
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Consultoria para pessoas físicas e empresas
            </p>
            <Button 
              onClick={openAgendaPopup}
              className="bg-economiza-vinho hover:bg-economiza-rosa text-white text-lg px-8 py-6 rounded-md shadow-lg transition-colors animate-float"
            >
              <Calendar className="mr-2" size={24} />
              Agende sua consultoria gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços para Pessoas Físicas e Empresas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-economiza-azul-escuro">
              Soluções financeiras para cada necessidade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos consultoria especializada para quem deseja organizar as finanças pessoais e para empresas que buscam crescimento sustentável.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Pessoas Físicas */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-economiza-azul-escuro p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <Users size={24} className="mr-2" />
                  Para Pessoas Físicas
                </h3>
                <p>Organize suas finanças e alcance seus objetivos</p>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-700">
                  Transforme sua relação com o dinheiro através de um planejamento completo que inclui:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-economiza-vinho mr-2 mt-1">•</span>
                    <span>Organização financeira e controle de gastos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-economiza-vinho mr-2 mt-1">•</span>
                    <span>Estratégias para eliminação de dívidas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-economiza-vinho mr-2 mt-1">•</span>
                    <span>Planejamento personalizado para metas e sonhos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-economiza-vinho mr-2 mt-1">•</span>
                    <span>Acompanhamento e suporte contínuo</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link to="/servicos" className="inline-flex items-center text-economiza-azul-medio hover:text-economiza-vinho transition-colors">
                    <span className="underline">Ver todos os serviços</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Empresas */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-economiza-vinho p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <Briefcase size={24} className="mr-2" />
                  Para Empresas
                </h3>
                <p>Estruture suas finanças e potencialize resultados</p>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-700">
                  Otimize a saúde financeira do seu negócio com estratégias que incluem:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-economiza-azul-medio mr-2 mt-1">•</span>
                    <span>Gestão eficiente de fluxo de caixa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-economiza-azul-medio mr-2 mt-1">•</span>
                    <span>Precificação estratégica de produtos e serviços</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-economiza-azul-medio mr-2 mt-1">•</span>
                    <span>Estruturação financeira e análise de lucratividade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-economiza-azul-medio mr-2 mt-1">•</span>
                    <span>Consultoria e treinamentos personalizados</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link to="/servicos" className="inline-flex items-center text-economiza-vinho hover:text-economiza-rosa transition-colors">
                    <span className="underline">Ver todos os serviços</span>
                  </Link>
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
            O primeiro passo para organizar suas finanças é conversarmos sobre sua situação atual e objetivos futuros.
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

      {/* Por que escolher a ECONOMIZA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-economiza-azul-escuro">
              Por que escolher a ECONOMIZA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa abordagem combina estratégia, educação e acompanhamento personalizado para resultados reais e duradouros.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Handshake size={48} />}
              title="Atendimento Personalizado"
              description="Cada cliente é único, por isso desenvolvemos estratégias sob medida para cada situação financeira."
            />
            <ServiceCard 
              icon={<PiggyBank size={48} />}
              title="Educação Financeira"
              description="Não apenas orientamos, mas ensinamos como manter uma relação saudável com o dinheiro a longo prazo."
              className="border-t-4 border-economiza-vinho"
            />
            <ServiceCard 
              icon={<ChartBar size={48} />}
              title="Foco em Resultados"
              description="Trabalhamos com metas claras e acompanhamento constante para garantir o progresso financeiro."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
