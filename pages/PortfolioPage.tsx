import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import SEO from '../components/SEO';

const PortfolioPage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <SEO 
        title="Portfolio de Trabajos | Sinapsis 3D Bariloche"
        description="Galería de trabajos personalizados en Impresión 3D y Gráfica. Diseños a medida, temáticas exclusivas y creaciones."
        canonical="https://www.sinapsis3dbariloche.com.ar/portfolio"
      />
      
      <div className="pt-10">
        <Portfolio onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} />
      </div>
      
      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default PortfolioPage;
