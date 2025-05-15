
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { AgendaForm } from './AgendaForm';
import { AgendaPopupHeader } from './AgendaPopupHeader';

const AgendaPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenPopup = () => {
      setIsOpen(true);
    };

    document.addEventListener('openAgendaPopup', handleOpenPopup);
    
    return () => {
      document.removeEventListener('openAgendaPopup', handleOpenPopup);
    };
  }, []);

  const handleSuccess = () => {
    // O redirecionamento já é tratado no AgendaForm, mas poderíamos adicionar lógica adicional aqui se necessário
    setIsOpen(false);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-md shadow-xl w-full max-w-md p-8 m-4 relative animate-fade-in">
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-economiza-vinho transition-colors"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>
        
        <AgendaPopupHeader 
          title="Agende sua consultoria" 
          subtitle="Preencha seus dados para continuar com o agendamento" 
        />
        
        <AgendaForm onSuccess={handleSuccess} />
      </div>
    </div>
  );
};

export default AgendaPopup;
