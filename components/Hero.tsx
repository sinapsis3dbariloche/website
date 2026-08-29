import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-6 pb-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600 blur-[120px] rounded-full"></div>
         <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-blue-900 blur-[150px] rounded-full opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4 flex flex-col items-center mt-4">
          <span className="text-xl md:text-2xl text-orange-500 mb-2 font-bold tracking-widest uppercase text-orange-glow">Imprimimos tus ideas</span>
          <span>SINAPSIS</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-zinc-200 mb-6 tracking-tight flex flex-col items-center gap-1">
          <span>Diseños y Creaciones</span>
          <span className="text-orange-500">100% Personalizadas</span>
          <span className="text-lg md:text-2xl text-zinc-400 font-medium mt-1">en Impresión 3D y/o Gráfica</span>
        </h2>
        
        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed mb-4">
          Nuestro mayor diferencial es la <span className="text-white font-semibold">personalización absoluta</span>. Transformamos tus ideas en piezas únicas: desde <span className="text-white font-medium">souvenirs temáticos y toppers de pastelería</span>, hasta <span className="text-white font-medium">merchandising corporativo, trofeos y material escolar didáctico</span>. <br />
          Adaptamos nombres, formas y diseños para que cada creación sea exactamente como la imaginaste. <br />
          <span className="text-orange-500 font-bold italic">Creaciones únicas en Bariloche, con envíos a todo el País.</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
