import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CategorySlider from '../components/CategorySlider';
import SEO from '../components/SEO';
import { trackWhatsAppClick } from '../utils/analytics';

const HOME_CATEGORIES = [
  {
    title: 'Souvenirs y Eventos',
    image: '/images/centros-de-mesa-infantiles-personalizados-fiestas-eventos.jpeg',
    link: '/souvenirs'
  },
  {
    title: 'Pastelería y Repostería',
    image: '/images/topper-torta-personalizado-plim-plim.png',
    link: '/productos/pasteleria'
  },
  {
    title: 'Lámparas y Lightboxes',
    image: '/images/lightbox_stich.png',
    link: '/portfolio?category=Lámparas+y+Lightboxes'
  },
  {
    title: 'Trofeos y Medallas',
    image: '/images/trofeos-personalizados-futbol-impresion-3d.png',
    link: '/productos/trofeos'
  },
  {
    title: 'Figuras y Coleccionables',
    image: '/images/figuras-brain-rot-3d.png',
    link: '/productos/coleccionables'
  },
  {
    title: 'Corporativo y Marcas',
    image: '/images/llaveros-corporativos-con-logo-regalos-empresariales-3d.jpeg',
    link: '/productos/merchandising'
  },
  {
    title: 'Mates y Accesorios',
    image: '/images/mate-pelota-futbol-3d.png',
    link: '/portfolio?category=Mates+y+Accesorios'
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
        title="Impresión 3D en Bariloche | Souvenirs y Diseños a Medida | Sinapsis 3D"
        description="Taller de impresión 3D y gráfica en Bariloche. Fabricamos souvenirs, trofeos, figuras y diseños personalizados a medida. ¡Pedí tu presupuesto hoy por WhatsApp!"
        canonical="https://www.sinapsis3dbariloche.com.ar/"
      />
      
      <Hero />

      <div>
        <CategorySlider categories={HOME_CATEGORIES} />
      </div>

      {/* Featured Party & Souvenirs Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-orange-500/30 bg-gradient-to-r from-orange-950/40 via-zinc-900 to-zinc-950 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-zinc-950">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3 border border-orange-500/30">
              <i className="fa-solid fa-cake-candles"></i> Especial Cumpleaños & Fiestas en Bariloche
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">
              Combos de Cumpleaños y Recuerdos 3D
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
              ¡Resolvé la mesa principal, sorpresitas y recuerdos en un solo lugar! Descubrí nuestros 3 combos 100% personalizados, animalitos flexi articulados, llaveros y toppers para tortas.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-zinc-400">
              <span className="flex items-center gap-1.5"><i className="fa-solid fa-check text-orange-500"></i> Vos elegís la temática</span>
              <span className="flex items-center gap-1.5"><i className="fa-solid fa-check text-orange-500"></i> Retiro en Bariloche</span>
              <span className="flex items-center gap-1.5"><i className="fa-solid fa-check text-orange-500"></i> Pedidos con anticipación</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 justify-center">
            <Link
              to="/souvenirs"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-orange-950/50 hover:scale-105"
            >
              <i className="fa-solid fa-gift"></i>
              Ver Combos y Souvenirs
            </Link>
            <a
              href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Quisiera consultar por los combos de cumpleaños y souvenirs.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('home_souvenirs_lead', 'WhatsApp Souvenirs Home')}
              className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm border border-zinc-700 transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Direct Quote / Lead CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden glass border border-zinc-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-orange-950/30 via-zinc-900 to-zinc-950">
          <div className="flex-1 text-center md:text-left">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-1">
              Atención Personalizada en Bariloche
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              ¿Querés un presupuesto para tu idea?
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Escribinos con tu temática, cantidad o diseño y te asesoramos al instante sin compromiso.
            </p>
          </div>
          <a
            href="https://wa.me/5492944914816?text=Hola%20Sinapsis%203D!%20Tengo%20una%20consulta%20para%20un%20pedido%20personalizado."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('home_banner_lead', 'Banner Presupuesto WhatsApp Home')}
            className="flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-4 rounded-2xl text-base transition-all shadow-xl shadow-green-950/40 hover:scale-105 shrink-0"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            Pedir Presupuesto por WhatsApp
          </a>
        </div>
      </section>

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

      <div className="bg-zinc-950 px-4 py-16 md:py-20 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
            Impresión 3D, Diseño y Gráfica en Bariloche
          </h1>
          <div className="text-zinc-400 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              En Sinapsis 3D Bariloche somos especialistas en materializar tus ideas a través de la <strong>impresión 3D y el diseño gráfico</strong>. Nos apasiona crear productos únicos y personalizados, desde regalos originales hasta soluciones prácticas para tu día a día, empresa o evento.
            </p>
            <p>
              Ofrecemos un servicio integral que abarca desde el modelado tridimensional hasta la impresión final, garantizando la máxima calidad en cada detalle. Realizamos <strong>souvenirs para cumpleaños, centros de mesa, trofeos, medallas, merchandising corporativo y papelería personalizada</strong>, adaptándonos siempre a tus necesidades específicas.
            </p>
            <p>
              Ubicados en la Patagonia Argentina, combinamos tecnología avanzada con dedicación artesanal para ofrecerte resultados excepcionales. Explorá nuestro catálogo y descubrí cómo podemos transformar tus proyectos en realidad con diseños a medida y envíos a todo el país.
            </p>
          </div>
        </div>
      </div>

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
