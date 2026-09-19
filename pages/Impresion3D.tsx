import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import CategorySlider from '../components/CategorySlider';
import SEO from '../components/SEO';
import { trackWhatsAppClick } from '../utils/analytics';

const IMPRESION3D_CATEGORIES = [
  {
    title: 'Souvenirs y Eventos',
    image: '/images/centros-de-mesa-infantiles-personalizados-fiestas-eventos.jpeg',
    link: '/productos/eventos'
  },
  {
    title: 'Trofeos y Medallas',
    image: '/images/trofeos-personalizados-futbol-impresion-3d.png',
    link: '/productos/trofeos'
  },
  {
    title: 'Lámparas y Lightboxes',
    image: '/images/lightbox_stich.png',
    link: '/portfolio?category=Lámparas+y+Lightboxes'
  },
  {
    title: 'Pastelería y Repostería',
    image: '/images/topper-torta-personalizado-plim-plim.png',
    link: '/productos/pasteleria'
  },
  {
    title: 'Figuras y Coleccionables',
    image: '/images/figuras-brain-rot-3d.png',
    link: '/productos/coleccionables'
  },
  {
    title: 'Mates y Accesorios',
    image: '/images/mate-pelota-futbol-3d.png',
    link: '/portfolio?category=Mates+y+Accesorios'
  },
  {
    title: 'Corporativo y Marcas',
    image: '/images/llaveros-corporativos-con-logo-regalos-empresariales-3d.jpeg',
    link: '/productos/merchandising'
  },
  {
    title: 'Escolar y Didáctico',
    image: '/images/set-patrio-didactico-cabildo-3d-escuelas-jardines.jpeg',
    link: '/productos/escolar'
  },
  {
    title: 'Hogar y Decoración',
    image: '/images/portallaves-de-pared-gatito-3d-organizador-de-llaves.jpeg',
    link: '/productos/deco-y-hogar'
  },
  {
    title: 'Ventas Mayoristas',
    image: '/images/exhibidor-llaveros-futbol-messi-mayorista-3d.png',
    link: '/mayorista'
  }
];

const Impresion3D: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <SEO 
        title="Impresión 3D en Bariloche | Diseños a Medida | Sinapsis 3D"
        description="Especialistas en Impresión 3D personalizada en Bariloche. Creamos diseños únicos a medida en trofeos, souvenirs y merchandising."
        canonical="https://www.sinapsis3dbariloche.com.ar/impresion-3d"
      />
      
      <div className="pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Impresión 3D <span className="text-orange-500">100% Personalizada</span>
            </h1>
            <p className="text-zinc-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-6">
              Diseñamos y fabricamos soluciones tridimensionales totalmente a tu medida. Nuestro fuerte es la <strong className="text-white">personalización absoluta</strong> de cada pieza: desde agregar nombres específicos hasta adaptar la estética completa a la temática de tu evento o marca.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-orange-500 uppercase tracking-wider">Diseños Únicos</span>
              <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-orange-500 uppercase tracking-wider">Nombres a Medida</span>
              <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-orange-500 uppercase tracking-wider">Temáticas Exclusivas</span>
            </div>

            <div>
              <a
                href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Me gustaría pedir un presupuesto para un trabajo personalizado en Impresión 3D.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('impresion3d_header', 'Cotizar Impresión 3D por WhatsApp')}
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-orange-950/40 hover:scale-105"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                Cotizar Proyecto 3D por WhatsApp
              </a>
            </div>
        </div>

        <div className="pb-10">
          <CategorySlider 
            title="Categorías 3D Destacadas" 
            subtitle="Hacé click para ver la galería filtrada de cada sección"
            categories={IMPRESION3D_CATEGORIES} 
          />
        </div>

        <Portfolio onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} />
      </div>

      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default Impresion3D;
