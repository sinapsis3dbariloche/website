
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600 blur-[120px] rounded-full"></div>
         <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-blue-900 blur-[150px] rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-block p-1 rounded-full bg-zinc-800 border border-zinc-700 mb-6">
          <span className="px-4 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-truck-fast"></i> Envíos a todo el país y a domicilio
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4">
          SINAPSIS 3D <br />
          <span className="text-orange-500 text-orange-glow">Bariloche</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-zinc-200 mb-6 tracking-tight">
          Diseños e Impresiones 3D
        </h2>
        
        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
          <span className="text-white font-semibold">Venta Minorista y Mayorista.</span> <br />
          Especialistas en regalos únicos, souvenirs para eventos, toppers de torta, medallas y trofeos. 
          Desarrollamos prototipos y repuestos a medida con precisión industrial.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href="#portfolio"
            className="w-full sm:w-auto px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-orange-900/40 transform hover:-translate-y-1"
          >
            Ver Catálogo
          </a>
          <a 
            href="#especialidades"
            className="w-full sm:w-auto px-10 py-4 glass text-white rounded-xl font-bold text-lg transition-all hover:bg-white/10"
          >
            Nuestros Servicios
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl opacity-70">
           <div className="flex flex-col items-center">
              <i className="fa-solid fa-cake-candles text-2xl text-orange-500 mb-2"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Eventos</span>
           </div>
           <div className="flex flex-col items-center">
              <i className="fa-solid fa-trophy text-2xl text-orange-500 mb-2"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Trofeos</span>
           </div>
           <div className="flex flex-col items-center">
              <i className="fa-solid fa-shop text-2xl text-orange-500 mb-2"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Mayorista</span>
           </div>
           <div className="flex flex-col items-center">
              <i className="fa-solid fa-gears text-2xl text-orange-500 mb-2"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Prototipos</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
