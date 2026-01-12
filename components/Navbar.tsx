
import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <Logo variant="icon" className="w-10 h-10 transform group-hover:scale-110 transition-transform" />
            <div className="flex flex-col -space-y-1">
              <span className="text-lg font-black tracking-tighter text-white">
                SINAPSIS <span className="text-orange-500">3D</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase">Patagonia</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium">Inicio</a>
            <a href="#portfolio" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium">Catálogo</a>
            <a href="#novedades" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium">Novedades</a>
            <a href="#contacto" className="text-zinc-300 hover:text-orange-500 transition-colors font-medium">Contacto</a>
          </div>
          
          <div>
            <a 
              href={`https://wa.me/5492944914816`}
              target="_blank"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-orange-900/40"
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
