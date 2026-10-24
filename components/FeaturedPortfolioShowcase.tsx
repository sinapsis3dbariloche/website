import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { trackWhatsAppClick } from '../utils/analytics';
import Lightbox, { LightboxImage } from './Lightbox';

interface FeaturedWork {
  id: string;
  title: string;
  category: string;
  tagColor: string;
  desc: string;
  image: string;
  imageOff?: string;
  hasLightToggle?: boolean;
}

const FEATURED_WORKS: FeaturedWork[] = [
  {
    id: 'lightbox-personalizada',
    title: 'Lámparas y Carteles Lightbox 3D',
    category: 'Deco & Luz',
    tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    desc: 'Cajas de luz LED personalizadas con logos comerciales, personajes y streaming. Difusor multicapa antirreflejo y conexión USB 5V de bajo consumo.',
    image: '/images/lightbox_capibara.png',
    hasLightToggle: true
  },
  {
    id: 'llaveros-corporativos',
    title: 'Llaveros Corporativos con Relieve',
    category: 'Corporativo',
    tagColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    desc: 'Fusión de doble extrusión sin tintas que se borren. Tu logotipo en altorrelieve macizo con anilla de acero sinfín para empresas, hoteles y cabañas.',
    image: '/images/llaveros-corporativos-con-logo-regalos-empresariales-3d.jpeg'
  },
  {
    id: 'trofeos-reconocimiento',
    title: 'Trofeos y Placas de Reconocimiento',
    category: 'Premiaciones',
    tagColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    desc: 'Copas deportivas y distinciones institucionales con pedestales pesados texturizados, placa grabada con datos del torneo y acabados satinados.',
    image: '/images/trofeos-personalizados-futbol-impresion-3d.png'
  },
  {
    id: 'stickers-vinilo',
    title: 'Stickers Troquelados y Vinilos',
    category: 'Gráfica',
    tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    desc: 'Impresión en vinilo mate y brillante resistente al agua, lavados y rayos UV. Troquelado de silueta por pliego o corte individual para packaging.',
    image: '/images/tarjetas-de-presentacion-personalizadas-para-clubes-y-negocios.jpeg'
  },
  {
    id: 'repuestos-tecnicos',
    title: 'Prototipos y Repuestos Funcionales',
    category: 'Técnico',
    tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    desc: 'Modelado y fabricación de piezas descatalogadas, engranajes, soportes mecánicos reforzados en PETG y prototipos con tolerancias milimétricas.',
    image: '/images/soportes-celular-personalizados-municipales-regalos-institucionales.jpeg'
  }
];

interface FeaturedPortfolioShowcaseProps {
  title?: string;
  subtitle?: string;
}

const FeaturedPortfolioShowcase: React.FC<FeaturedPortfolioShowcaseProps> = ({
  title = 'Trabajos Reales Destacados',
  subtitle = 'Conocé la calidad de terminación, texturas y precisión de nuestras piezas fabricadas en Bariloche'
}) => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const [isLightOn, setIsLightOn] = useState(true);

  const handleWhatsAppQuote = (workTitle?: string) => {
    const details = workTitle ? `Pieza: ${workTitle}` : 'Showcase Destacado';
    trackWhatsAppClick('featured_portfolio', details);
    const message = workTitle
      ? `Hola Sinapsis 3D! Vi en su portfolio destacado el trabajo "${workTitle}" y me gustaría cotizar una pieza similar personalizada en Bariloche.`
      : 'Hola Sinapsis 3D! Estuve viendo sus trabajos destacados y me gustaría cotizar una pieza personalizada.';
    window.open(`https://wa.me/5492944914816?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-20 bg-zinc-950/80 border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            <i className="fa-solid fa-shapes text-orange-500"></i>
            Portfolio & Casos de Éxito
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Grid de 5 trabajos destacados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FEATURED_WORKS.map((work) => (
            <div
              key={work.id}
              className="group bg-zinc-900/60 border border-zinc-800 hover:border-orange-500/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  onClick={() => setActiveImage({ src: work.image, title: work.title, desc: work.desc })}
                  className="relative aspect-video w-full bg-zinc-950 overflow-hidden cursor-zoom-in"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      work.hasLightToggle && !isLightOn ? 'brightness-40 contrast-125' : 'brightness-100'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${work.tagColor} backdrop-blur-md bg-zinc-950/80`}>
                      {work.category}
                    </span>
                  </div>

                  {work.hasLightToggle && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsLightOn(!isLightOn);
                      }}
                      className="absolute top-3 right-3 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer shadow-lg"
                      title="Alternar simulación de luz"
                    >
                      <i className={`fa-solid fa-lightbulb ${isLightOn ? 'text-amber-400' : 'text-zinc-500'}`}></i>
                      <span>{isLightOn ? 'Luz ON' : 'Luz OFF'}</span>
                    </button>
                  )}

                  <div className="absolute bottom-2 right-2 bg-zinc-900/80 px-2 py-1 rounded-lg text-zinc-400 text-[10px] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="fa-solid fa-magnifying-glass-plus text-orange-400"></i> Ampliar
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {work.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => handleWhatsAppQuote(work.title)}
                  className="w-full py-2.5 px-4 bg-zinc-800/80 hover:bg-orange-600 text-zinc-200 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-sm"></i>
                  Cotizar pieza similar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de Acción al pie del componente */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-zinc-900">
          <Link
            to="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-bold px-7 py-3.5 rounded-xl text-sm border border-zinc-800 transition-colors"
          >
            <i className="fa-solid fa-images text-orange-500"></i>
            Ver galería completa de trabajos
          </Link>

          <button
            onClick={() => handleWhatsAppQuote()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-orange-950/60 hover:scale-105 cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            Cotizá una pieza como esta por WhatsApp
          </button>
        </div>
      </div>

      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  );
};

export default FeaturedPortfolioShowcase;
