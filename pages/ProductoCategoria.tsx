import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import SEO from '../components/SEO';
import { trackWhatsAppClick } from '../utils/analytics';

const categoryMap: Record<string, { title: string, desc: string, portfolioCategory: string, h1: string }> = {
  'eventos': {
    title: 'Productos para Eventos, Fiestas y Empresas en Bariloche | Sinapsis 3D',
    desc: 'Soluciones integrales para eventos en Bariloche: souvenirs 3D, trofeos personalizados, toppers y gráfica para cumpleaños, egresados y empresas.',
    portfolioCategory: 'Souvenirs y Eventos',
    h1: 'Productos para Eventos'
  },
  'cumpleanos': {
    title: 'Souvenirs y Decoración para Cumpleaños en Bariloche | Sinapsis 3D',
    desc: 'Decoración y recuerdos para cumpleaños infantiles en Bariloche: combos personalizados, bolsitas golosineras, llaveros y adornos 3D. Pedí tu cotización.',
    portfolioCategory: 'Souvenirs y Eventos',
    h1: 'Artículos para Cumpleaños'
  },
  'coleccionables': {
    title: 'Figuras y Coleccionables 3D en Bariloche | Sinapsis 3D',
    desc: 'Figuras impresas en 3D y coleccionables en Bariloche: animé, películas, gaming y funkos con pintura detallada. ¡Consultanos por tu personaje favorito!',
    portfolioCategory: 'Figuras y Coleccionables',
    h1: 'Figuras y Coleccionables'
  },
  'deco-y-hogar': {
    title: 'Decoración y Hogar en Impresión 3D | Diseños Bariloche',
    desc: 'Lámparas velador personalizadas, portallaves de pared, macetas y organizadores 3D para tu hogar. Diseños originales fabricados en Bariloche con envíos.',
    portfolioCategory: 'Hogar y Decoración',
    h1: 'Decoración y Hogar'
  },
  'trofeos': {
    title: 'Trofeos Deportivos y Medallas en Bariloche | Sinapsis 3D',
    desc: 'Diseño y fabricación de trofeos y medallas personalizadas con impresión 3D en Bariloche. Grabado de logos y textos para torneos y clubes deportivos.',
    portfolioCategory: 'Trofeos y Medallas',
    h1: 'Trofeos y Medallas'
  },
  'escolar': {
    title: 'Material Didáctico y Juegos Escolares 3D en Bariloche',
    desc: 'Juegos didácticos, fracciones y materiales escolares sensoriales en 3D para escuelas y jardines en Bariloche. Material seguro, resistente y educativo.',
    portfolioCategory: 'Escolar y Didáctico',
    h1: 'Material Escolar y Didáctico'
  },
  'pasteleria': {
    title: 'Cake Toppers y Cortantes de Galletitas en Bariloche | Sinapsis 3D',
    desc: 'Toppers personalizados para tortas con nombres en relieve y cortantes de galletitas en Bariloche. Material atóxico apto repostería. Cotizá en el día.',
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
