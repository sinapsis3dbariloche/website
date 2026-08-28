import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  const trackClick = (label: string) => {
    if ((window as any).trackConversion) {
      (window as any).trackConversion(label, 'interés');
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600 blur-[120px] rounded-full"></div>
         <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-blue-900 blur-[150px] rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-block p-1 rounded-full bg-zinc-800 border border-zinc-700 mb-6">
          <span className="px-4 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-truck-fast"></i> Impresión 3D y Gráfica en Bariloche con envíos a todo el País
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4 flex flex-col items-center">
          <span className="text-xl md:text-2xl text-orange-500 mb-2 font-bold tracking-widest uppercase text-orange-glow">Impresión 3D Bariloche</span>
          <span>SINAPSIS 3D</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-zinc-200 mb-6 tracking-tight">
          Diseño y Gráfica Personalizada en la Patagonia
        </h2>
        
        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
          Ofrecemos <span className="text-white font-semibold">venta minorista y mayorista de impresión 3D y Gráfica.</span> <br />
          Especialistas en stickers, tatuajes temporales, souvenirs, toppers de torta, medallas y trofeos 3D. <br />
          <span className="text-orange-500 font-bold italic">Diseño e Impresión Personalizada en Bariloche y envíos a todo el País.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href="https://www.instagram.com/sinapsis3dbariloche/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick('ver_catalogo_hero')}
            className="w-full sm:w-auto px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-orange-900/40 transform hover:-translate-y-1"
          >
            Ver Catálogo Online
          </a>
          <a 
            href="#contacto"
            onClick={() => trackClick('ver_presupuesto_hero')}
            className="w-full sm:w-auto px-10 py-4 glass text-white rounded-xl font-bold text-lg transition-all hover:bg-white/10 border-zinc-700"
          >
            Pedir Presupuesto
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-8 w-full max-w-5xl opacity-70">
           <div className="flex flex-col items-center group">
              <i className="fa-solid fa-cube text-2xl text-orange-500 mb-2 group-hover:scale-110 transition-transform"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">Impresión 3D</span>
           </div>
           <div className="flex flex-col items-center group">
              <i className="fa-solid fa-print text-2xl text-orange-500 mb-2 group-hover:scale-110 transition-transform"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">Gráfica y Papelería</span>
           </div>
           <div className="flex flex-col items-center group">
              <i className="fa-solid fa-cake-candles text-2xl text-orange-500 mb-2 group-hover:scale-110 transition-transform"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">Souvenirs y Toppers</span>
           </div>
           <div className="flex flex-col items-center group">
              <i className="fa-solid fa-trophy text-2xl text-orange-500 mb-2 group-hover:scale-110 transition-transform"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">Trofeos y Medallas</span>
           </div>
           <div className="flex flex-col items-center group md:col-span-1 col-span-2">
              <i className="fa-solid fa-star text-2xl text-orange-500 mb-2 group-hover:scale-110 transition-transform"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">Diseños Exclusivos</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;