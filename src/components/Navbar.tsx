import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handlePathChange = () => {
      setActivePath(window.location.pathname);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePathChange);
    
    setActivePath(window.location.pathname);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <span className="font-display text-2xl font-bold">
            <span className="text-economiza-azul-escuro">ECONO</span><span className="text-economiza-vinho">MIZA</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-economiza-azul-escuro hover:text-economiza-azul-medio transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn("nav-link font-sans font-medium", activePath === "/" && "active")}
          >
            Início
          </Link>
          <Link 
            to="/sobre" 
            className={cn("nav-link font-sans font-medium", activePath === "/sobre" && "active")}
          >
            Sobre
          </Link>
          <Link 
            to="/servicos" 
            className={cn("nav-link font-sans font-medium", activePath === "/servicos" && "active")}
          >
            Serviços
          </Link>
          {/* Aba "Contato" removida aqui */}
          <Link to="#!" onClick={(e) => {
            e.preventDefault();
            document.dispatchEvent(new CustomEvent('openAgendaPopup'));
          }}>
            <Button className="bg-economiza-vinho hover:bg-economiza-rosa text-white font-sans font-medium rounded-none px-6 transition-colors">
              Agende uma Consultoria
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6 transition-transform duration-300 ease-in-out transform md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <nav className="flex flex-col space-y-6 text-lg">
            <Link 
              to="/" 
              className={cn("nav-link text-center text-xl font-sans font-medium", activePath === "/" && "active")}
              onClick={closeMenu}
            >
              Início
            </Link>
            <Link 
              to="/sobre" 
              className={cn("nav-link text-center text-xl font-sans font-medium", activePath === "/sobre" && "active")}
              onClick={closeMenu}
            >
              Sobre
            </Link>
            <Link 
              to="/servicos" 
              className={cn("nav-link text-center text-xl font-sans font-medium", activePath === "/servicos" && "active")}
              onClick={closeMenu}
            >
              Serviços
            </Link>
            {/* Aba "Contato" removida aqui */}
            <div className="pt-4">
              <Link 
                to="#!" 
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                  document.dispatchEvent(new CustomEvent('openAgendaPopup'));
                }}
                className="block w-full"
              >
                <Button className="bg-economiza-vinho hover:bg-economiza-rosa text-white font-sans font-medium w-full justify-center rounded-none px-6 transition-colors">
                  Agende uma Consultoria
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
