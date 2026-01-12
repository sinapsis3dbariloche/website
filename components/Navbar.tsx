import React from 'react';
import Logo from './Logo';
import { SOCIALS } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-14 h-14 flex items-center justify-center transform group-hover:scale-110 transition-transform">
               <Logo variant="icon" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-lg font-black tracking-tighter text-white">
                SINAPSIS <span className="text-orange-500">3D</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase">Bariloche</span>
            </div>
          </div>
          
          {/* Main Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium text-sm uppercase tracking-wider">Inicio</a>
            <a href="#servicios" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium text-sm uppercase tracking-wider">Servicios</a>
            <a 
              href="https://www.instagram.com/sinapsis3dbariloche/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-orange-500 transition-colors font-medium text-sm uppercase tracking-wider flex items-center gap-2"
            >
              Catálogo <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
            <a href="#contacto" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium text-sm uppercase tracking-wider">Contacto</a>
          </div>
          
          {/* Socials and CTA */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4 border-r border-zinc-800 pr-6 mr-0">
              {SOCIALS.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors text-lg"
                  aria-label={social.platform}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            
            <a 
              href={`https://wa.me/5492944914816`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg shadow-orange-900/40 whitespace-nowrap"
            >
              Consultar Proyecto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;