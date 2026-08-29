import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import CategorySlider from '../components/CategorySlider';
import SEO from '../components/SEO';

const IMPRESION3D_CATEGORIES = [
  {
    title: 'Souvenirs y Eventos',
    image: '/images/centros-de-mesa-infantiles-personalizados-fiestas-eventos.jpeg',
    link: '/portfolio?category=Souvenirs+y+Eventos'
  },
  {
    title: 'Trofeos y Medallas',
    image: '/images/trofeos-personalizados-futbol-impresion-3d.png',
    link: '/portfolio?category=Trofeos+y+Medallas'
  },
  {
    title: 'Lámparas y Lightboxes',
    image: '/images/lightbox_stich.png',
    link: '/portfolio?category=Lámparas+y+Lightboxes'
  },
  {
    title: 'Pastelería y Repostería',
    image: '/images/topper-torta-personalizado-plim-plim.png',
    link: '/portfolio?category=Pastelería+y+Repostería'
  },
  {
    title: 'Figuras y Coleccionables',
    image: '/images/figuras-brain-rot-3d.png',
    link: '/portfolio?category=Figuras+y+Coleccionables'
  },
  {
    title: 'Mates y Accesorios',
    image: '/images/mate-pelota-futbol-3d.png',
    link: '/portfolio?category=Mates+y+Accesorios'
  },
  {
    title: 'Corporativo y Marcas',
    image: '/images/llaveros-corporativos-con-logo-regalos-empresariales-3d.jpeg',
    link: '/portfolio?category=Corporativo+y+Marcas'
  },
  {
    title: 'Escolar y Didáctico',
    image: '/images/set-patrio-didactico-cabildo-3d-escuelas-jardines.jpeg',
    link: '/portfolio?category=Escolar+y+Didáctico'
  },
  {
    title: 'Hogar y Decoración',
    image: '/images/portallaves-de-pared-gatito-3d-organizador-de-llaves.jpeg',
    link: '/portfolio?category=Hogar+y+Decoración'
  },
  {
    title: 'Ventas Mayoristas',
    image: '/images/exhibidor-llaveros-futbol-messi-mayorista-3d.png',
    link: '/portfolio?category=Ventas+Mayoristas+y+Comercios'
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
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-orange-500 uppercase tracking-wider">Diseños Únicos</span>
              <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-orange-500 uppercase tracking-wider">Nombres a Medida</span>
              <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-orange-500 uppercase tracking-wider">Temáticas Exclusivas</span>
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
