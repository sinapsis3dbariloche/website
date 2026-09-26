import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import CategorySlider from '../components/CategorySlider';
import SEO from '../components/SEO';
import { trackWhatsAppClick } from '../utils/analytics';

const MAYORISTA_CATEGORIES = [
  {
    title: 'Ventas Mayoristas y Comercios',
    image: '/images/exhibidor-llaveros-futbol-messi-mayorista-3d.png',
    link: '/mayorista'
  },
  {
    title: 'Figuras y Coleccionables',
    image: '/images/figuras-brain-rot-3d.png',
    link: '/productos/coleccionables'
  },
  {
    title: 'Escolar y Didáctico',
    image: '/images/set-patrio-didactico-cabildo-3d-escuelas-jardines.jpeg',
    link: '/productos/escolar'
  },
  {
    title: 'Pastelería y Repostería',
    image: '/images/cortantes-galletitas-tematicos-cumpleanos-3d.png',
    link: '/productos/pasteleria'
  }
];

const Mayorista: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <SEO 
        title="Impresión 3D Mayorista en Bariloche | Precios para Comercios"
        description="Precios por mayor en impresión 3D para cotillones, librerías y comercios en Bariloche y la Patagonia. Llaveros, exhibidores y figuras. ¡Descargá la lista!"
        canonical="https://www.sinapsis3dbariloche.com.ar/mayorista"
      />
      
      <div className="pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Ventas <span className="text-orange-500">Mayoristas</span>
            </h1>
            <div className="text-zinc-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-6 space-y-4">
              <p>
                Diseñamos y fabricamos una amplia variedad de productos ideales para la reventa en <strong>cotillones, artísticas, kioscos, librerías y tiendas de regalos</strong>. 
              </p>
              <p>
                Ofrecemos <span className="text-white font-semibold">precios diferenciales por cantidad</span>, permitiéndote incorporar artículos novedosos, rentables y de alta rotación a tu catálogo. Contamos con cortantes de repostería, llaveros, merchandising, artículos escolares, didácticos y más.
              </p>
            </div>

            <div>
              <a
                href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Me gustaría solicitar el catálogo y lista de precios mayorista para comercios.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('mayorista_header', 'Solicitar Catálogo Mayorista por WhatsApp')}
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-orange-950/40 hover:scale-105"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                Solicitar Lista Mayorista por WhatsApp
              </a>
            </div>
        </div>

        <div className="mb-12">
          <CategorySlider 
            categories={MAYORISTA_CATEGORIES} 
            title="Categorías Destacadas" 
            subtitle="Los rubros más elegidos por comercios"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
            Galería <span className="text-orange-500">Mayorista</span>
          </h2>
          <p className="text-zinc-400 mt-2 max-w-2xl mx-auto text-sm md:text-base">
            Mirá algunos de los trabajos y lotes que preparamos para comercios y revendedores.
          </p>
        </div>
        
        {/* Usamos el Portfolio con filtro inicial apuntando a mayoristas y relacionados */}
        <Portfolio onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} />
      </div>

      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default Mayorista;
