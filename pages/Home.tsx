import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CategorySlider from '../components/CategorySlider';
import SEO from '../components/SEO';

const HOME_CATEGORIES = [
  {
    title: 'Souvenirs y Eventos',
    image: '/images/centros-de-mesa-infantiles-personalizados-fiestas-eventos.jpeg',
    link: '/portfolio?category=Souvenirs+y+Eventos'
  },
  {
    title: 'Pastelería y Repostería',
    image: '/images/topper-torta-personalizado-plim-plim.png',
    link: '/portfolio?category=Pastelería+y+Repostería'
  },
  {
    title: 'Lámparas y Lightboxes',
    image: '/images/lightbox_stich.png',
    link: '/portfolio?category=Lámparas+y+Lightboxes'
  },
  {
    title: 'Trofeos y Medallas',
    image: '/images/trofeos-personalizados-futbol-impresion-3d.png',
    link: '/portfolio?category=Trofeos+y+Medallas'
  },
  {
    title: 'Figuras y Coleccionables',
    image: '/images/figuras-brain-rot-3d.png',
    link: '/portfolio?category=Figuras+y+Coleccionables'
  },
  {
    title: 'Corporativo y Marcas',
    image: '/images/llaveros-corporativos-con-logo-regalos-empresariales-3d.jpeg',
    link: '/portfolio?category=Corporativo+y+Marcas'
  },
  {
    title: 'Mates y Accesorios',
    image: '/images/mate-pelota-futbol-3d.png',
    link: '/portfolio?category=Mates+y+Accesorios'
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
  },
  {
    title: 'Tatuajes Temporales',
    image: '/images/tatuajes-temporales-argentina-campeones-del-mundo-souvenirs.jpeg',
    link: '/portfolio?category=Tatuajes+Temporales'
  },
  {
    title: 'Etiquetas Escolares',
    image: '/images/kit-etiquetas-y-llaveros-personalizados-para-mochilas-y-utiles.jpeg',
    link: '/portfolio?category=Etiquetas+Escolares'
  },
  {
    title: 'Identidad Comercial',
    image: '/images/tarjetas-de-presentacion-personalizadas-para-clubes-y-negocios.jpeg',
    link: '/portfolio?category=Identidad+Comercial'
  },
  {
    title: 'Papelería y Regalos',
    image: '/images/marcapaginas-harry-potter-impresion-3d-clip.jpeg',
    link: '/portfolio?category=Papelería+y+Regalos'
  }
];

const Home: React.FC = () => {
  const trackClick = (label: string) => {
    if ((window as any).trackConversion) {
      (window as any).trackConversion(label, 'interés');
    }
  };

  return (
    <>
      <SEO 
        title="Sinapsis Impresiones | Diseño e Impresión 3D Bariloche"
        description="Especialistas en Impresión 3D y Gráfica en Bariloche. Fabricamos souvenirs, trofeos personalizados, y merchandising con envíos a toda la Patagonia."
        canonical="https://www.sinapsis3dbariloche.com.ar/"
      />
      
      <Hero />
      
      <div>
        <CategorySlider categories={HOME_CATEGORIES} />
      </div>

      <section className="pb-20 flex flex-col items-center bg-zinc-950">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 w-full max-w-5xl opacity-70 px-4">
           <div className="flex flex-col items-center group">
              <i className="fa-solid fa-cube text-2xl text-orange-500 mb-2 group-hover:scale-110 transition-transform"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">Impresión 3D</span>
           </div>
           <div className="flex flex-col items-center group">
              <i className="fa-solid fa-print text-2xl text-orange-500 mb-2 group-hover:scale-110 transition-transform"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">Gráfica y Papelería</span>
           </div>
           <div className="flex flex-col items-center group">
              <i className="fa-solid fa-cake-candles text-2xl text-orange-500 mb-2 group-hover:scale-110 transition-transform"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">Souvenirs y Toppers</span>
           </div>
           <div className="flex flex-col items-center group">
              <i className="fa-solid fa-trophy text-2xl text-orange-500 mb-2 group-hover:scale-110 transition-transform"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">Trofeos y Medallas</span>
           </div>
           <div className="flex flex-col items-center group md:col-span-1 col-span-2">
              <i className="fa-solid fa-star text-2xl text-orange-500 mb-2 group-hover:scale-110 transition-transform"></i>
              <span className="text-xs font-bold text-white uppercase tracking-widest text-center">Diseños Exclusivos</span>
           </div>
        </div>
      </section>

      {/* Services / Feature Strip */}
      <section className="py-12 glass relative z-10 overflow-hidden border-y border-zinc-800">
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
