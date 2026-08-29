import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import GraphicsServices from '../components/GraphicsServices';
import Lightbox, { LightboxImage } from '../components/Lightbox';

const Servicios: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <Helmet>
        <title>Gráfica, Diseño y Papelería Personalizada | Sinapsis Impresiones Bariloche</title>
        <meta name="description" content="Servicios integrales de gráfica y diseño totalmente personalizados. Creamos stickers, papelería y cartelería a medida, adaptando temáticas y nombres a tus necesidades en Bariloche." />
        <link rel="canonical" href="https://www.sinapsis3dbariloche.com.ar/grafica" />
      </Helmet>
      
      <GraphicsServices onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} />
      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default Servicios;
