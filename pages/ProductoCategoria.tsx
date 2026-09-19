import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import SEO from '../components/SEO';
import { trackWhatsAppClick } from '../utils/analytics';

const categoryMap: Record<string, { title: string, desc: string, portfolioCategory: string, h1: string }> = {
  'eventos': {
    title: 'Productos para Eventos | Sinapsis 3D Bariloche',
    desc: 'Impresión 3D para eventos en Bariloche. Souvenirs, centros de mesa y detalles únicos para que tu evento sea inolvidable.',
    portfolioCategory: 'Souvenirs y Eventos',
    h1: 'Productos para Eventos'
  },
  'cumpleanos': {
    title: 'Productos para Cumpleaños | Sinapsis 3D Bariloche',
    desc: 'Artículos y souvenirs impresos en 3D para cumpleaños. Decoración, cake toppers y sorpresas personalizadas.',
    portfolioCategory: 'Souvenirs y Eventos',
    h1: 'Artículos para Cumpleaños'
  },
  'coleccionables': {
    title: 'Figuras y Coleccionables 3D | Sinapsis 3D Bariloche',
    desc: 'Figuras impresas en 3D y artículos coleccionables. Personajes, funkos, y diseños a medida con excelente nivel de detalle.',
    portfolioCategory: 'Figuras y Coleccionables',
    h1: 'Figuras y Coleccionables'
  },
  'deco-y-hogar': {
    title: 'Decoración y Hogar 3D | Sinapsis 3D Bariloche',
    desc: 'Objetos decorativos y soluciones prácticas para el hogar impresas en 3D. Lámparas, macetas, organizadores y más.',
    portfolioCategory: 'Hogar y Decoración',
    h1: 'Decoración y Hogar'
  },
  'trofeos': {
    title: 'Trofeos y Medallas Personalizadas | Sinapsis 3D Bariloche',
    desc: 'Trofeos y medallas deportivas impresas en 3D. Diseños exclusivos y personalizados para torneos y reconocimientos.',
    portfolioCategory: 'Trofeos y Medallas',
    h1: 'Trofeos y Medallas'
  },
  'escolar': {
    title: 'Artículos Escolares y Didácticos | Sinapsis 3D Bariloche',
    desc: 'Material didáctico, juegos educativos y artículos escolares fabricados en impresión 3D.',
    portfolioCategory: 'Escolar y Didáctico',
    h1: 'Material Escolar y Didáctico'
  },
  'pasteleria': {
    title: 'Artículos para Pastelería y Repostería | Sinapsis 3D Bariloche',
    desc: 'Cortantes de galletitas, cake toppers y herramientas para repostería impresas en 3D. Diseños personalizados.',
    portfolioCategory: 'Pastelería y Repostería',
    h1: 'Artículos de Pastelería'
  }
};

const ProductoCategoria: React.FC = () => {
  const { categoria } = useParams<{ categoria: string }>();
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  if (!categoria || !categoryMap[categoria]) {
    // Si la categoría no existe en el mapa, redirigir al portfolio principal
    return <Navigate to="/portfolio" replace />;
  }

  const categoryData = categoryMap[categoria];

  return (
    <>
      <SEO 
        title={categoryData.title}
        description={categoryData.desc}
        canonical={`https://www.sinapsis3dbariloche.com.ar/productos/${categoria}`}
      />
      
      <div className="pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              {categoryData.h1.split(' ').map((word, i, arr) => (
                <React.Fragment key={i}>
                  {i === arr.length - 1 ? <span className="text-orange-500">{word}</span> : `${word} `}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-zinc-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-6">
              {categoryData.desc}
            </p>

            <div>
              <a
                href={`https://wa.me/5492944914816?text=${encodeURIComponent(`Hola Sinapsis 3D! Me interesa cotizar productos de la categoría "${categoryData.h1}".`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('categoria_header', `Cotizar Categoria: ${categoryData.h1}`)}
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-orange-950/40 hover:scale-105"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                Consultar por {categoryData.h1} en WhatsApp
              </a>
            </div>
        </div>

        <Portfolio 
          forceCategory={categoryData.portfolioCategory}
          onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} 
        />
      </div>

      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default ProductoCategoria;
