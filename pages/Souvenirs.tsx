import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import CategorySlider from '../components/CategorySlider';
import SEO from '../components/SEO';
import { trackWhatsAppClick } from '../utils/analytics';

const SOUVENIRS_CATEGORIES = [
  {
    title: 'Souvenirs y Eventos',
    image: '/images/centros-de-mesa-infantiles-personalizados-fiestas-eventos.jpeg',
    link: '/productos/eventos'
  },
  {
    title: 'Pastelería y Repostería',
    image: '/images/topper-torta-personalizado-plim-plim.png',
    link: '/productos/pasteleria'
  }
];

const Souvenirs: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <SEO 
        title="Souvenirs 3D en Bariloche | Cumpleaños y Fiestas | Sinapsis 3D"
        description="Souvenirs personalizados en impresión 3D para cumpleaños y eventos en Bariloche. Centros de mesa, llaveros y adornos únicos con nombre y temática. ¡Escribinos!"
        canonical="https://www.sinapsis3dbariloche.com.ar/souvenirs"
      />
      
      <div className="pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              Souvenirs para <span className="text-orange-500">Eventos y Cumpleaños</span>
            </h1>
            <div className="text-zinc-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-6 space-y-4">
              <p>
                En Sinapsis 3D nos especializamos en fabricar <strong>souvenirs y artículos para cumpleaños y eventos</strong> de forma completamente personalizada. Transformá tus festejos con detalles únicos que tus invitados van a conservar y recordar.
              </p>
              <p>
                Fabricamos todo a medida mediante impresión 3D: desde <strong>llaveros con nombres y temáticas infantiles, centros de mesa exclusivos, adornos para tortas (cake toppers)</strong> hasta detalles para mesas dulces, bodas y fiestas infantiles. Ya sea un evento íntimo o una gran celebración, aportamos creatividad y calidad para que cada recuerdo sea inolvidable.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-orange-500 uppercase tracking-wider">Llaveros Temáticos</span>
              <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-orange-500 uppercase tracking-wider">Centros de Mesa</span>
              <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-orange-500 uppercase tracking-wider">Cake Toppers</span>
            </div>

            <div>
              <a
                href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Me gustaría consultar y cotizar souvenirs personalizados para un evento.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('souvenirs_header', 'Cotizar Souvenirs por WhatsApp')}
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-orange-950/40 hover:scale-105"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                Consultar Souvenirs por WhatsApp
              </a>
            </div>
        </div>

        <div className="pb-10">
          <CategorySlider 
            title="Categorías de Souvenirs" 
            subtitle="Explorá nuestros trabajos para eventos"
            categories={SOUVENIRS_CATEGORIES} 
          />
        </div>

        {/* You could optionally filter the portfolio directly here if it supports it, 
            but for now we'll just show the portfolio and they can filter. 
            A better way is to pass an initial filter to Portfolio if it supported it. */}
        <Portfolio onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} />
      </div>

      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default Souvenirs;
