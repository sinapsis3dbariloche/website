import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import SEO from '../components/SEO';
import { trackWhatsAppClick } from '../utils/analytics';

const PortfolioPage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  return (
    <>
      <SEO 
        title="Portfolio de Trabajos de Impresión 3D y Gráfica | Sinapsis Bariloche"
        description="Conocé nuestros trabajos realizados en Bariloche: souvenirs infantiles, trofeos deportivos, cartelería, stickers y piezas a medida en 3D."
        canonical="https://www.sinapsis3dbariloche.com.ar/portfolio"
      />
      
      <div className="pt-6 sm:pt-10">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-camera-retro"></i> Trabajos Reales • Hecho en San Carlos de Bariloche
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Portfolio de Trabajos de <span className="text-orange-500">Impresión 3D y Gráfica</span>
          </h1>
          <p className="text-zinc-300 mt-4 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Conocé nuestra galería de proyectos terminados en nuestro taller de Bariloche. Fabricamos piezas a medida con tecnología FDM en filamentos premium (PLA biodegradable y PETG de alta resistencia), además de papelería personalizada, vinilos troquelados y grabado de logos.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Estuve viendo su portfolio de trabajos y quisiera consultar por un proyecto personalizado.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('portfolio_header_cta', 'Consultar desde Portfolio')}
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-orange-950/40 hover:scale-105"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              Consultar por un Trabajo Similar
            </a>
          </div>
        </header>

        <Portfolio onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} />

        {/* Indexable Technical & Service Information for SEO */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-900 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-zinc-400 text-sm leading-relaxed">
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center text-xl mb-4">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <h2 className="text-white font-bold text-base mb-2">Materiales & Calidad en Bariloche</h2>
              <p>
                Trabajamos con termoplásticos técnicos como <strong>PLA biodegradable</strong> de origen vegetal, apto para piezas decorativas y souvenirs de fiestas infantiles, y <strong>PETG / ABS</strong> para repuestos de alta resistencia mecánica y térmica frente al clima patagónico.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center text-xl mb-4">
                <i className="fa-solid fa-compass-drafting"></i>
              </div>
              <h2 className="text-white font-bold text-base mb-2">Modelado y Prototipado 3D</h2>
              <p>
                No necesitás tener el archivo 3D listo. Nuestro equipo te asesora desde la idea inicial: digitalizamos tu logotipo o boceto, realizamos prototipos rápidos y adaptamos escalas y encastres para que la pieza final sea exacta y funcional.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center text-xl mb-4">
                <i className="fa-solid fa-boxes-stacked"></i>
              </div>
              <h2 className="text-white font-bold text-base mb-2">Lotes y Venta Mayorista</h2>
              <p>
                Atendemos tanto pedidos unitarios personalizados como tiradas medianas y grandes para cotillones, torneos deportivos, empresas y clubes de San Carlos de Bariloche, Dina Huapi y toda la provincia de Río Negro con despacho nacional.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default PortfolioPage;
