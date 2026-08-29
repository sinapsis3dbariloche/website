import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';

const Impresion3D: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <Helmet>
        <title>Impresión 3D a Medida y Personalizada en Bariloche | Sinapsis 3D</title>
        <meta name="description" content="Especialistas en Impresión 3D personalizada en Bariloche. Nos destacamos por crear diseños únicos a medida, adaptando nombres, temáticas y formas en trofeos, souvenirs y merchandising." />
        <link rel="canonical" href="https://www.sinapsis3dbariloche.com.ar/impresion-3d" />
      </Helmet>
      
      <div className="pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Impresión 3D <span className="text-orange-500">100% Personalizada</span>
            </h1>
            <p className="text-zinc-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-6">
              Diseñamos y fabricamos soluciones tridimensionales totalmente a tu medida. Nuestro fuerte es la <strong className="text-white">personalización absoluta</strong> de cada pieza: desde agregar nombres específicos hasta adaptar la estética completa a la temática de tu evento o marca.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-orange-500 uppercase tracking-wider">Diseños Únicos</span>
              <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-orange-500 uppercase tracking-wider">Nombres a Medida</span>
              <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-orange-500 uppercase tracking-wider">Temáticas Exclusivas</span>
            </div>
        </div>
        <Portfolio onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} />
      </div>
      
      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default Impresion3D;
