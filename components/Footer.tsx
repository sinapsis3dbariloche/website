
import React from 'react';
import { SOCIALS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <i className="fa-solid fa-cube text-white text-sm"></i>
             </div>
             <span className="text-lg font-bold text-white tracking-tighter">
               SINAPSIS <span className="text-orange-500">3D</span>
             </span>
          </div>

          <div className="text-zinc-500 text-sm text-center">
             © {new Date().getFullYear()} Sinapsis 3D Bariloche. Todos los derechos reservados. <br className="md:hidden" />
             Diseñado con precisión en la Patagonia.
          </div>

          <div className="flex items-center gap-6">
            {SOCIALS.map(social => (
              <a 
                key={social.platform}
                href={social.url}
                target="_blank"
                className="text-zinc-500 hover:text-white transition-colors"
                title={social.platform}
              >
                <i className={`${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
