import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import SEO from '../components/SEO';

const PortfolioPage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <SEO 
        title="Portfolio de Impresión 3D y Gráfica | Sinapsis Bariloche"
        description="Mirá nuestra galería de fotos reales: souvenirs, lámparas led, figuras, cake toppers y merchandising 3D fabricados en San Carlos de Bariloche. ¡Inspirate!"
        canonical="https://www.sinapsis3dbariloche.com.ar/portfolio"
      />
      
      <div className="pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            Portfolio de <span className="text-orange-500">Trabajos Realizados</span>
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Explorá nuestra galería de trabajos personalizados en impresión 3D y gráfica.
          </p>
        </div>
        <Portfolio onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} />
      </div>
      
      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default PortfolioPage;
