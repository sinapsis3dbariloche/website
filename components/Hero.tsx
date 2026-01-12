import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600 blur-[120px] rounded-full"></div>
         <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-blue-900 blur-[150px] rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* El logo que estaba aquí ha sido eliminado para que la home comience con el siguiente bloque */}

        <div className="inline-block p-1 rounded-full bg-zinc-800 border border-zinc-700 mb-6">
          <span className="px-4 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-truck-fast"></i> Impresión 3D en Bariloche con envíos a toda la Patagonia
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4">
          SINAPSIS 3D <br />
          <span className="text-orange-500 text-orange-glow">Bariloche</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-zinc-200 mb-6 tracking-tight">
          Referente en Diseño e Impresión 3D de la Patagonia
        </h2>
        
        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
          Ofrecemos <span className="text-white font-semibold">venta minorista y mayorista de impresión 3D.</span> <br />
          Especialistas en regalos únicos, souvenirs para eventos, toppers de torta personalizados, medallas y trofeos 3D. <br />
          <span className="text-orange-500 font-bold italic">Diseños 3D personalizados y exclusivos en Bariloche.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href="#servicios"
            className="w-full sm:w-auto px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-orange-900/40 transform hover:-translate-y-1"
          >
            Ver Catálogo 3D
          </a>
          <a 
            href="#contacto"
            className="w-full sm:w-auto px-10 py-4 glass text-white rounded-xl font-bold text-lg transition-all hover:bg-white/10 border-zinc-700"
          >
            Presupuesto Diseño 3D
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl opacity-70">
           <div className="flex flex-col items-center group">
              <i className="fa-solid fa-cake-candles text-2xl text-orange-500 mb-2 group-hover:scale-110 transition-transform"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">Souvenirs y Toppers</span>
           </div>
           <div className="flex flex-col items-center group">
              <i className="fa-solid fa-trophy text-2xl text-orange-500 mb-2 group-hover:scale-110 transition-transform"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">Trofeos y Medallas</span>
           </div>
           <div className="flex flex-col items-center group">
              <i className="fa-solid fa-shop text-2xl text-orange-500 mb-2 group-hover:scale-110 transition-transform"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">Venta Mayorista</span>
           </div>
           <div className="flex flex-col items-center group">
              <i className="fa-solid fa-gears text-2xl text-orange-500 mb-2 group-hover:scale-110 transition-transform"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">Diseño Industrial</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;