
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-economiza-azul-escuro text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ECONOMIZA</h3>
            <p className="mb-4">Planejamento Financeiro LTDA</p>
            <p className="mb-4">CNPJ: 60.302.044/0001-06</p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/econo.m.iza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-economiza-rosa transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="mailto:luizamariellybc@gmail.com" 
                className="text-white hover:text-economiza-rosa transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="tel:+553186460883" 
                className="text-white hover:text-economiza-rosa transition-colors"
                aria-label="Telefone"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="hover:text-economiza-rosa transition-colors"
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                className="hover:text-economiza-rosa transition-colors"
              >
                Sobre
              </Link>
              <Link 
                to="/servicos" 
                className="hover:text-economiza-rosa transition-colors"
              >
                Serviços
              </Link>
              <a 
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  document.dispatchEvent(new CustomEvent('openAgendaPopup'));
                }}
                className="hover:text-economiza-rosa transition-colors"
              >
                Agende sua Sessão Gratuita
              </a>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <address className="not-italic">
              <p className="mb-2">Av. Augusto de Lima, 233</p>
              <p className="mb-2">Bloco 1, Sala 1510 – Centro</p>
              <p className="mb-2">Belo Horizonte/MG – CEP 30.190-000</p>
              <p className="mb-2">
                <a 
                  href="mailto:luizamariellybc@gmail.com" 
                  className="hover:text-economiza-rosa transition-colors"
                >
                  luizamariellybc@gmail.com
                </a>
              </p>
              <p>
                
        </div>
        
        <div className="border-t border-economiza-azul-medio mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} ECONOMIZA Planejamento Financeiro LTDA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
