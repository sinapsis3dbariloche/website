import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import CategorySlider from '../components/CategorySlider';
import SEO from '../components/SEO';
import { trackWhatsAppClick } from '../utils/analytics';

const IMPRESION3D_CATEGORIES = [
  {
    title: 'Souvenirs y Eventos',
    image: '/images/centros-de-mesa-infantiles-personalizados-fiestas-eventos.jpeg',
    link: '/souvenirs'
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
        title="Impresión 3D en Bariloche | Prototipos, Repuestos y Modelos | Sinapsis"
        description="Taller de impresión 3D en Bariloche: prototipado rápido, repuestos a medida, piezas técnicas y figuras en PLA/PETG. Asesoramiento personalizado."
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

        {/* Featured Souvenirs Callout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-r from-orange-950/40 via-zinc-900 to-zinc-900 p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center text-2xl shrink-0 hidden sm:flex">
                🎉
              </div>
              <div>
                <h4 className="text-white font-bold text-base sm:text-lg">¿Organizando un cumpleaños o evento infantil?</h4>
                <p className="text-zinc-400 text-xs sm:text-sm">Conocé nuestros 3 combos de cumpleaños completos y souvenirs 3D temáticos (llaveros, animalitos flexi y toppers).</p>
              </div>
            </div>
            <Link
              to="/souvenirs"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shrink-0 hover:scale-105"
            >
              <i className="fa-solid fa-gift"></i>
              Ver Combos de Cumpleaños →
            </Link>
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
