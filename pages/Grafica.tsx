import React, { useState } from 'react';
import GraphicsServices from '../components/GraphicsServices';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import CategorySlider from '../components/CategorySlider';
import FeaturedPortfolioShowcase from '../components/FeaturedPortfolioShowcase';
import SEO from '../components/SEO';
import { trackWhatsAppClick } from '../utils/analytics';

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
        title="Stickers, Etiquetas y Gráfica Personalizada en Bariloche | Vinilo y Packaging | Sinapsis 3D"
        description="Impresión gráfica de alta resolución, vinilos resistentes al agua, stickers troquelados y etiquetas personalizadas para marcas y packaging en Bariloche. Cotizá online por WhatsApp."
        canonical="https://www.sinapsis3dbariloche.com.ar/grafica"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Sinapsis 3D Bariloche - Gráfica, Stickers y Packaging",
          "url": "https://www.sinapsis3dbariloche.com.ar/grafica",
          "description": "Servicio de diseño e impresión gráfica personalizada, stickers troquelados, vinilos, etiquetas comerciales y packaging en San Carlos de Bariloche.",
          "telephone": "+542944914816",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Altos del Cóndor",
            "addressLocality": "San Carlos de Bariloche",
            "addressRegion": "Río Negro",
            "addressCountry": "AR"
          },
          "areaServed": ["San Carlos de Bariloche", "Dina Huapi", "Patagonia"]
        }}
      />
      
      <GraphicsServices onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} />

      <div className="max-w-4xl mx-auto px-4 text-center pb-8">
        <a
          href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Quiero consultar por trabajos de gráfica y papelería personalizada.')}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('grafica_cta', 'Consultar Gráfica y Papelería por WhatsApp')}
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-orange-950/40 hover:scale-105"
        >
          <i className="fa-brands fa-whatsapp text-lg"></i>
          Pedir Presupuesto de Gráfica por WhatsApp
        </a>
      </div>

      <div className="pb-12 bg-zinc-950">
        <CategorySlider 
          title="Nuestros Trabajos Gráficos" 
          subtitle="Explorá los productos personalizados impresos en alta calidad"
          categories={GRAFICA_CATEGORIES} 
        />
      </div>

      <FeaturedPortfolioShowcase 
        title="Portfolio de Gráfica y Piezas Reales"
        subtitle="Stickers en vinilo, packaging, papelería y combinaciones con impresión 3D realizadas en Bariloche"
      />

      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default Servicios;
