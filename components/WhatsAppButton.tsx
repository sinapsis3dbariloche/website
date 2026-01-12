import React from 'react';
import { CONTACT } from '../constants';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}`;

  const handleClick = () => {
    if ((window as any).trackConversion) {
      (window as any).trackConversion('clic_whatsapp_flotante', 'conversión');
    }
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95 group"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
      <span className="absolute right-20 bg-white text-zinc-900 px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        ¡Escribinos ahora!
      </span>
    </a>
  );
};

export default WhatsAppButton;