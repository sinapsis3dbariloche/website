import React from 'react';
import { CONTACT } from '../constants';
import { trackWhatsAppClick } from '../utils/analytics';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hola Sinapsis 3D! Quisiera consultar por un trabajo personalizado en Bariloche.')}`;

  const handleClick = () => {
    trackWhatsAppClick('flotante', 'Botón Flotante WhatsApp Principal');
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-green-400/50"
      aria-label="Contactar a Sinapsis 3D por WhatsApp"
    >
      {/* Pulse ring for high mobile visibility */}
      <span className="absolute -inset-1 rounded-full bg-green-500 opacity-30 animate-ping pointer-events-none"></span>
      <i className="fa-brands fa-whatsapp text-3xl relative z-10"></i>
      <span className="absolute right-20 bg-zinc-900 border border-zinc-700 text-white px-3.5 py-2 rounded-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
        💬 ¡Consultanos por WhatsApp!
      </span>
    </a>
  );
};

export default WhatsAppButton;