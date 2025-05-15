
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5538999273737"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
      aria-label="Contato pelo WhatsApp"
    >
      <MessageSquare size={24} />
    </a>
  );
};

export default WhatsAppButton;
