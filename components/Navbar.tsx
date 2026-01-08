
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
               <i className="fa-solid fa-cube text-white text-xl"></i>
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">
              SINAPSIS <span className="text-orange-500 underline decoration-2 underline-offset-4">3D</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-zinc-300 hover:text-orange-500 transition-colors">Inicio</a>
            <a href="#portfolio" className="text-zinc-300 hover:text-orange-500 transition-colors">Catálogo</a>
            <a href="#novedades" className="text-zinc-300 hover:text-orange-500 transition-colors">Novedades</a>
            <a href="#contacto" className="text-zinc-300 hover:text-orange-500 transition-colors">Contacto</a>
          </div>
          
          <div>
            <a 
              href={`https://wa.me/5492944914816`}
              target="_blank"
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-orange-900/20"
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
