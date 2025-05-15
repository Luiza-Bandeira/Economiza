
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Sobre = () => {
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
              Sobre a ECONOMIZA
            </h1>
            <p className="text-xl">
              Transformando a relação de pessoas e empresas com suas finanças
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-economiza-azul-escuro">
                Nossa História
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                A ECONOMIZA Planejamento Financeiro nasceu da paixão por transformar a vida financeira das pessoas e negócios. Identificamos que muitas pessoas e empresas possuem grandes potenciais, mas são limitadas pela desorganização financeira e falta de estratégia.
              </p>
              <p>
                Nossa consultoria foi fundada com a missão de desmistificar o planejamento financeiro e torná-lo acessível e prático para todos os perfis. Acreditamos que, com as ferramentas certas e orientação adequada, qualquer pessoa ou empresa pode alcançar seus objetivos financeiros.
              </p>
              <p>
                Ao longo dos anos, desenvolvemos uma metodologia própria que combina educação financeira com planejamento estratégico, sempre adaptada às necessidades específicas de cada cliente, seja pessoa física ou jurídica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-economiza-azul-escuro">
              Nossa Missão, Visão e Valores
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-economiza-vinho">Missão</h3>
              <p className="text-gray-700">
                Transformar a relação das pessoas e empresas com o dinheiro através da educação e estratégia, promovendo decisões financeiras conscientes e resultados sustentáveis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-economiza-vinho">Visão</h3>
              <p className="text-gray-700">
                Ser referência em consultoria financeira, reconhecida pela excelência no atendimento personalizado e pelos resultados transformadores na vida dos nossos clientes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-economiza-vinho">Valores</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Transparência em todas as orientações</li>
                <li>• Compromisso com resultados reais</li>
                <li>• Atendimento humanizado e empático</li>
                <li>• Educação contínua e atualização constante</li>
                <li>• Ética e responsabilidade nas recomendações</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Abordagem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-economiza-azul-escuro">
                Nossa Abordagem
              </h2>
              <p className="text-xl text-gray-600">
                O que diferencia a ECONOMIZA no mercado de consultoria financeira
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-economiza-azul-escuro flex items-center justify-center text-white text-3xl font-bold">
                    1
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3 text-economiza-azul-medio">Diagnóstico Completo</h3>
                  <p className="text-gray-700">
                    Antes de qualquer recomendação, realizamos um diagnóstico detalhado da situação financeira atual, identificando pontos fortes, desafios e oportunidades de melhoria.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-economiza-azul-medio flex items-center justify-center text-white text-3xl font-bold">
                    2
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3 text-economiza-azul-medio">Planejamento Personalizado</h3>
                  <p className="text-gray-700">
                    Desenvolvemos estratégias sob medida para cada cliente, considerando sua realidade, objetivos específicos e prazo para alcançá-los.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-economiza-vinho flex items-center justify-center text-white text-3xl font-bold">
                    3
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3 text-economiza-vinho">Implementação e Educação</h3>
                  <p className="text-gray-700">
                    Além de implementar as estratégias, fornecemos o conhecimento necessário para que nossos clientes compreendam cada decisão financeira e se tornem mais autônomos.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-economiza-rosa flex items-center justify-center text-white text-3xl font-bold">
                    4
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3 text-economiza-rosa">Acompanhamento Contínuo</h3>
                  <p className="text-gray-700">
                    Oferecemos suporte constante com reuniões periódicas, ajustes no planejamento quando necessário e celebração de cada conquista no caminho para a saúde financeira.
                  </p>
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
            Vamos começar sua jornada financeira?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agende uma consulta gratuita para conhecer melhor nossa abordagem e descobrir como podemos ajudá-lo a alcançar seus objetivos financeiros.
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

export default Sobre;
