import React, { useState } from 'react';
import GraphicsServices from '../components/GraphicsServices';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import CategorySlider from '../components/CategorySlider';
import SEO from '../components/SEO';

const GRAFICA_CATEGORIES = [
  {
    title: 'Tatuajes Temporales',
    image: '/images/tatuajes-temporales-argentina-campeones-del-mundo-souvenirs.jpeg',
    link: '/portfolio?category=Tatuajes+Temporales'
  },
  {
    title: 'Etiquetas Escolares',
    image: '/images/kit-etiquetas-y-llaveros-personalizados-para-mochilas-y-utiles.jpeg',
    link: '/portfolio?category=Etiquetas+Escolares'
  },
  {
    title: 'Identidad Comercial',
    image: '/images/tarjetas-de-presentacion-personalizadas-para-clubes-y-negocios.jpeg',
    link: '/portfolio?category=Identidad+Comercial'
  },
  {
    title: 'Papelería y Regalos',
    image: '/images/marcapaginas-harry-potter-impresion-3d-clip.jpeg',
    link: '/portfolio?category=Papelería+y+Regalos'
  }
];

const Servicios: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <SEO 
        title="Gráfica, Diseño y Papelería | Sinapsis Impresiones"
        description="Servicios integrales de gráfica y diseño totalmente personalizados en Bariloche. Creamos stickers, papelería y diseños a medida."
        canonical="https://www.sinapsis3dbariloche.com.ar/grafica"
      />
      
      <GraphicsServices onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} />

      <div className="pb-20 bg-zinc-950">
        <CategorySlider 
          title="Nuestros Trabajos Gráficos" 
          subtitle="Explorá los productos personalizados impresos en alta calidad"
          categories={GRAFICA_CATEGORIES} 
        />
      </div>
      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default Servicios;
