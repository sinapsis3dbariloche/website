
import React from 'react';
import { SOCIALS } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
             <Logo variant="icon" className="w-8 h-8" />
             <div className="flex flex-col -space-y-1">
                <span className="text-lg font-black text-white tracking-widest leading-none">
                  SINAPSIS
                </span>
                <span className="text-[0.65rem] text-orange-500 font-bold tracking-[0.2em] uppercase mt-1">Bariloche</span>
             </div>
          </div>

          <div className="text-zinc-500 text-sm text-center">
             <span className="text-orange-500 font-bold text-base uppercase tracking-widest block mb-2">Imprimimos Tus Ideas</span>
             © {new Date().getFullYear()} Sinapsis Impresiones Bariloche. Todos los derechos reservados. <br className="md:hidden" />
             <span className="text-zinc-600 block mt-2">
               Referente en <strong>Diseño</strong>, <strong>Impresión 3D</strong> y <strong>Gráfica</strong> en <strong>Bariloche</strong>, Patagonia Argentina.
             </span>
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
