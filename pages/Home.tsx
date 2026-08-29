import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sinapsis Impresiones Bariloche | Diseño, Impresión 3D y Gráfica Patagonia</title>
        <meta name="description" content="Expertos en Diseño, Impresión 3D y Gráfica en Bariloche. Destacamos por la personalización total de nuestros trabajos a medida: temáticas, nombres y diseños exclusivos en toda la Patagonia." />
        <link rel="canonical" href="https://www.sinapsis3dbariloche.com.ar/" />
      </Helmet>
      
      <Hero />
      
      {/* Services / Feature Strip */}
      <section className="py-12 glass relative z-10 -mt-10 overflow-hidden border-y border-zinc-800">
         <div className="flex whitespace-nowrap animate-infinite-scroll gap-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 text-zinc-400 font-bold uppercase tracking-widest text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-gift text-orange-500"></i>
                  <span>Souvenirs Temáticos</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-lightbulb text-orange-500"></i>
                  <span>Lightboxes Personalizadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-cookie text-orange-500"></i>
                  <span>Cortantes y Toppers 3D</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-bolt text-orange-500"></i>
                  <span>Tatuajes Temporales</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-mug-hot text-orange-500"></i>
                  <span>Mates Personalizados</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-puzzle-piece text-orange-500"></i>
                  <span>Juegos Didácticos</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-award text-orange-500"></i>
                  <span>Medallas y Trofeos</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-note-sticky text-orange-500"></i>
                  <span>Stickers y Calcos</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-shirt text-orange-500"></i>
                  <span>Etiquetas Textiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-pencil text-orange-500"></i>
                  <span>Lápices Decorados 3D</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check-double text-orange-500"></i>
                  <span>Impresión 3D Mayorista</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-truck text-orange-500"></i>
                  <span>Envíos a todo el país</span>
                </div>
              </div>
            ))}
         </div>
      </section>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: fit-content;
          animation: infinite-scroll 50s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Home;
