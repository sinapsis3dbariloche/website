import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';

const PortfolioPage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <Helmet>
        <title>Portfolio de Trabajos Personalizados | Sinapsis 3D Bariloche</title>
        <meta name="description" content="Galería de trabajos personalizados en Impresión 3D y Gráfica. Diseños a medida, temáticas exclusivas y creaciones con nombres para eventos y empresas." />
        <link rel="canonical" href="https://www.sinapsis3dbariloche.com.ar/portfolio" />
      </Helmet>
      
      <div className="pt-10">
        <Portfolio onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} />
      </div>
      
      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default PortfolioPage;
