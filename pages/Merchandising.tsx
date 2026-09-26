import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import CategorySlider from '../components/CategorySlider';
import SEO from '../components/SEO';
import { trackWhatsAppClick } from '../utils/analytics';

const MERCHANDISING_CATEGORIES = [
  {
    title: 'Corporativo y Marcas',
    image: '/images/llaveros-corporativos-con-logo-regalos-empresariales-3d.jpeg',
    link: '/productos/merchandising?category=Corporativo+y+Marcas'
  },
  {
    title: 'Identidad Comercial',
    image: '/images/tarjetas-de-presentacion-personalizadas-para-clubes-y-negocios.jpeg',
    link: '/productos/merchandising?category=Identidad+Comercial'
  },
  {
    title: 'Ventas Mayoristas y Comercios',
    image: '/images/exhibidor-llaveros-futbol-messi-mayorista-3d.png',
    link: '/productos/merchandising?category=Ventas+Mayoristas+y+Comercios'
  }
];

const Merchandising: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <SEO 
        title="Merchandising Empresarial en Bariloche | Regalos con Logo 3D"
        description="Merchandising corporativo en Bariloche: llaveros 3D con logo de tu empresa, soportes y regalos institucionales a medida. Fortalecé tu marca con Sinapsis 3D."
        canonical="https://www.sinapsis3dbariloche.com.ar/merchandising"
      />
      
      <div className="pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Merchandising <span className="text-orange-500">Corporativo & Marcas</span>
            </h1>
            <div className="text-zinc-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-6 space-y-4">
              <p>
                Potenciá la imagen de tu empresa o marca con nuestras soluciones en <strong>merchandising corporativo y artículos promocionales B2B</strong>. En Sinapsis 3D creamos piezas que comunican el valor de tu marca de manera efectiva y original.
              </p>
              <p>
                Desde <strong>llaveros corporativos con el logo de tu empresa, regalos empresariales personalizados, soportes institucionales</strong> hasta tarjetas de presentación y exhibidores. Trabajamos tanto en pedidos unitarios como mayoristas para instituciones, clubes deportivos y comercios de la región, garantizando una excelente calidad de terminación.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-orange-500 uppercase tracking-wider">Regalos Empresariales</span>
              <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-orange-500 uppercase tracking-wider">Pedidos Mayoristas</span>
              <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-orange-500 uppercase tracking-wider">Logos en 3D</span>
            </div>

            <div>
              <a
                href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Me interesa cotizar merchandising corporativo o regalos empresariales para mi marca.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('merchandising_header', 'Cotizar Merchandising Corporativo por WhatsApp')}
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-orange-950/40 hover:scale-105"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                Cotizar Merchandising para tu Empresa
              </a>
            </div>
        </div>

        <div className="pb-10">
          <CategorySlider 
            title="Merchandising Destacado" 
            subtitle="Opciones y regalos para tu empresa"
            categories={MERCHANDISING_CATEGORIES} 
          />
        </div>

        <Portfolio 
          onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} 
          forceCategory="Corporativo y Marcas"
          allowedCategories={['Corporativo y Marcas', 'Identidad Comercial', 'Ventas Mayoristas y Comercios']}
          title={<>Productos de <span className="text-orange-500">Merchandising, Corporativo y Marcas</span></>}
          subtitle="Catálogo de productos corporativos con logotipo, relieve de alta definición y terminaciones profesionales para empresas, alojamientos turísticos y marcas en Bariloche."
        />
      </div>

      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default Merchandising;
