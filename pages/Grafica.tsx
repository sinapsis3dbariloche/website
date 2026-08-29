import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import GraphicsServices from '../components/GraphicsServices';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import CategorySlider from '../components/CategorySlider';

const GRAFICA_CATEGORIES = [
  {
    title: 'Tatuajes Temporales',
    image: '/images/tatuajes-temporales-argentina-campeones-del-mundo-souvenirs.jpeg',
    link: '/grafica#grafica'
  },
  {
    title: 'Etiquetas Escolares',
    image: '/images/kit-etiquetas-y-llaveros-personalizados-para-mochilas-y-utiles.jpeg',
    link: '/grafica#grafica'
  },
  {
    title: 'Identidad Comercial',
    image: '/images/tarjetas-de-presentacion-personalizadas-para-clubes-y-negocios.jpeg',
    link: '/grafica#grafica'
  },
  {
    title: 'Papelería y Regalos',
    image: '/images/marcapaginas-harry-potter-impresion-3d-clip.jpeg',
    link: '/grafica#grafica'
  }
];

const Servicios: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <Helmet>
        <title>Gráfica, Diseño y Papelería Personalizada | Sinapsis Impresiones Bariloche</title>
        <meta name="description" content="Servicios integrales de gráfica y diseño totalmente personalizados. Creamos stickers, papelería y cartelería a medida, adaptando temáticas y nombres a tus necesidades en Bariloche." />
        <link rel="canonical" href="https://www.sinapsis3dbariloche.com.ar/grafica" />
      </Helmet>
      
      <div className="pt-10 bg-zinc-950">
        <CategorySlider 
          title="Nuestros Trabajos Gráficos" 
          subtitle="Explorá los productos personalizados impresos en alta calidad"
          categories={GRAFICA_CATEGORIES} 
        />
      </div>

      <GraphicsServices onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} />
      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default Servicios;
