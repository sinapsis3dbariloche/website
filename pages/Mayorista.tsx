import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import CategorySlider from '../components/CategorySlider';
import SEO from '../components/SEO';

const MAYORISTA_CATEGORIES = [
  {
    title: 'Ventas Mayoristas y Comercios',
    image: '/images/exhibidor-llaveros-futbol-messi-mayorista-3d.png',
    link: '/portfolio?category=Ventas+Mayoristas+y+Comercios'
  },
  {
    title: 'Figuras y Coleccionables',
    image: '/images/figuras-brain-rot-3d.png',
    link: '/portfolio?category=Figuras+y+Coleccionables'
  },
  {
    title: 'Escolar y Didáctico',
    image: '/images/set-patrio-didactico-cabildo-3d-escuelas-jardines.jpeg',
    link: '/portfolio?category=Escolar+y+Didáctico'
  },
  {
    title: 'Pastelería y Repostería',
    image: '/images/cortantes-galletitas-tematicos-cumpleanos-3d.png',
    link: '/portfolio?category=Pastelería+y+Repostería'
  }
];

const Mayorista: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <SEO 
        title="Ventas Mayoristas | Sinapsis 3D Bariloche"
        description="Servicio de venta mayorista para cotillones, artísticas, kioskos y comercios. Accedé a precios por mayor y revendé nuestros productos."
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
