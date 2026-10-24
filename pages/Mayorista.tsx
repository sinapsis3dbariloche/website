import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import { trackWhatsAppB2BClick } from '../utils/analytics';

interface ProductionLine {
  title: string;
  subtitle: string;
  desc: string;
  icon: string;
  badge: string;
  image: string;
  link: string;
  items: string[];
}

const PRODUCTION_LINES: ProductionLine[] = [
  {
    title: 'Merchandising Corporativo',
    subtitle: 'Identidad tangible de alta durabilidad',
    desc: 'Llaveros con logotipo en relieve 3D, pines institucionales, soportes porta-celular con marca y artículos promocionales para empresas, hoteles, cabañas y comercios.',
    icon: 'fa-briefcase',
    badge: 'Alta Rotación',
    image: '/images/llaveros-corporativos-con-logo-regalos-empresariales-3d.jpeg',
    link: '/llaveros-corporativos-bariloche',
    items: ['Llaveros relieve 2D/3D', 'Soportes de celular con logo', 'Exhibidores de mostrador', 'Pines y credenciales']
  },
  {
    title: 'Eventos & Fiestas',
    subtitle: 'Novedades temáticas para ambientación y recuerdos',
    desc: 'Souvenirs personalizados, centros de mesa estables con personajes infantiles, cajitas milk box con broche 3D, cake toppers y recuerdos para cumpleaños, 15 años y egresados.',
    icon: 'fa-cake-candles',
    badge: 'Para Cotillones',
    image: '/images/centros-de-mesa-infantiles-personalizados-fiestas-eventos.jpeg',
    link: '/souvenirs',
    items: ['Cajitas Milk Box con broche 3D', 'Centros de mesa temáticos', 'Toppers para tortas', 'Souvenirs para armar']
  },
  {
    title: 'Pastelería & Repostería',
    subtitle: 'Cake toppers, cortantes y texturadores para artísticas y reposteras',
    desc: 'Cake toppers personalizados con nombres y siluetas en relieve, cortantes con filo de precisión de 0.4 mm y rueditas texturizadoras para arcilla, fondant y masas. Material PLA biodegradable apto para alimentos.',
    icon: 'fa-cookie-bite',
    badge: 'Apto Gastronómico',
    image: '/images/toppers-torta-mayorista-cotillon-3d.png',
    link: '/productos/pasteleria',
    items: ['Cake toppers con nombre y edad', 'Cortantes temáticos con expulsor', 'Rueditas y rodillos texturadores', 'Sellos de relieve para fondant']
  },
  {
    title: 'Línea Escolar & Didáctica',
    subtitle: 'Kits para mochilas, juegos matemáticos y recursos para aulas',
    desc: 'Kits de etiquetas escolares combinadas con llaveros identificadores 3D para mochilas, juegos de fracciones matemáticas, material sensorial y sets didácticos para colegios y jardines de infantes.',
    icon: 'fa-graduation-cap',
    badge: 'Colegios & Familias',
    image: '/images/kit-etiquetas-y-llaveros-personalizados-para-mochilas-y-utiles.jpeg',
    link: '/productos/escolar',
    items: ['Kits etiquetas + llavero mochila', 'Juegos de fracciones matemáticas', 'Material didáctico sensorial', 'Toppers para lápices y útiles']
  },
  {
    title: 'Gráfica & Packaging',
    subtitle: 'Vinilos resistentes y presentación comercial',
    desc: 'Stickers troquelados en vinilo mate y brillante resistentes al agua, etiquetas autoadhesivas por pliego o corte individual, fajas de seguridad y papelería comercial.',
    icon: 'fa-tag',
    badge: 'Vinilo Impermeable',
    image: '/images/tarjetas-de-presentacion-personalizadas-para-clubes-y-negocios.jpeg',
    link: '/grafica',
    items: ['Stickers por pliego o corte', 'Etiquetas para frascos y botellas', 'Etiquetas adhesivas para packaging', 'Tarjetas comerciales']
  }
];

const TALLER_BENEFITS = [
  {
    title: 'Cero inversión en máquinas',
    desc: 'Ofrecé impresión 3D profesional en tu mostrador sin comprar equipos costosos, repuestos ni lidiar con calibraciones.',
    icon: 'fa-coins'
  },
  {
    title: 'Cero merma de filamento',
    desc: 'Las pruebas, mermas y ajustes corren por nuestra cuenta. Vos solo recibís productos terminados de máxima calidad.',
    icon: 'fa-recycle'
  },
  {
    title: 'Asesoramiento en materiales',
    desc: 'Te guiamos en la elección óptima entre PLA biodegradable, PETG técnico o vinilo adhesivo según la aplicación requerida.',
    icon: 'fa-headset'
  },
  {
    title: 'Entregas acordadas en Bariloche',
    desc: 'Producción continua con plazos de entrega firmes en San Carlos de Bariloche y envíos rápidos a toda la Patagonia.',
    icon: 'fa-truck-fast'
  }
];

const Mayorista: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);

  const handlePriceListWhatsApp = () => {
    trackWhatsAppB2BClick('Solicitar_Lista_Mayorista', 'Boton_Hero_Principal');
    const message = 'Hola Sinapsis 3D, quiero consultar por precios mayoristas y cantidades mínimas.';
    const url = `https://wa.me/5492944914816?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleLineWhatsApp = (lineTitle: string) => {
    trackWhatsAppB2BClick('Consulta_Linea_Mayorista', lineTitle);
    const message = `Hola Sinapsis 3D! Me interesa consultar por producción mayorista de la línea "${lineTitle}". ¿Podrían brindarme lista de precios y escalas por volumen?`;
    const url = `https://wa.me/5492944914816?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEO 
        title="Venta Mayorista y Taller Aliado 3D en Bariloche | Merchandising y Regalos Empresariales | Sinapsis 3D"
        description="Fabricación 3D y gráfica por volumen para comercios, eventos corporativos, souvenirs y revendedores en Bariloche y la Patagonia. Taller aliado con precios por escala."
        canonical="https://www.sinapsis3dbariloche.com.ar/mayorista"
        schema={{
          "@context": "https://schema.org",
          "@type": "WholesaleStore",
          "name": "Sinapsis 3D Bariloche - Producción Mayorista y Taller Aliado 3D",
          "url": "https://www.sinapsis3dbariloche.com.ar/mayorista",
          "description": "Fabricación 3D y gráfica por volumen para comercios, empresas y revendedores en Bariloche y la Patagonia.",
          "telephone": "+542944914816",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Altos del Cóndor",
            "addressLocality": "San Carlos de Bariloche",
            "addressRegion": "Río Negro",
            "addressCountry": "AR"
          }
        }}
      />

      <div className="pt-6 pb-20 bg-zinc-950">
        {/* 1. HERO DIRECTO CON PROPUESTA DE VALOR (CRO OPTIMIZADO PARA RESOLVER REBOTE) */}
        <section className="relative overflow-hidden pt-12 pb-16">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 blur-[140px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
              <i className="fa-solid fa-handshake-angle text-orange-500"></i>
              Canal Mayorista & Taller Aliado B2B · Bariloche y Patagonia
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase max-w-5xl mx-auto mb-4 text-balance">
              Producción Mayorista y <span className="text-orange-500">Taller Aliado 3D</span> en Bariloche
            </h1>

            <h2 className="text-lg sm:text-2xl text-zinc-300 font-semibold max-w-3xl mx-auto mb-6">
              Capacidad de producción continua para empresas, revendedores y organizadores de eventos.
            </h2>

            <p className="text-zinc-400 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
              Fabricación directa sin intermediarios en San Carlos de Bariloche. Incorporá productos 3D y gráfica de alta rotación en tu mostrador o tercerizá pedidos personalizados con margen comercial rentable y plazos de entrega pactados.
            </p>

            {/* Pastillas / Badges Visibles Above-the-Fold */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-orange-500/30 text-xs sm:text-sm font-bold text-orange-400 shadow-md">
                <i className="fa-solid fa-percent text-orange-500"></i>
                Descuentos por escala
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-orange-500/30 text-xs sm:text-sm font-bold text-orange-400 shadow-md">
                <i className="fa-solid fa-truck-fast text-orange-500"></i>
                Entregas en Bariloche y envíos regionales
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-orange-500/30 text-xs sm:text-sm font-bold text-orange-400 shadow-md">
                <i className="fa-solid fa-layer-group text-orange-500"></i>
                Asesoramiento técnico en materiales (PLA / PETG / Vinilo)
              </span>
            </div>

            {/* 2. BOTÓN PRINCIPAL DE CONTACTO (CTA) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button
                onClick={handlePriceListWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold px-9 py-4 rounded-xl text-base transition-all shadow-xl shadow-orange-950/60 hover:scale-105 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                Solicitar Lista de Precios Mayorista
              </button>
              <a
                href="#lineas-produccion"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-semibold px-7 py-4 rounded-xl text-sm border border-zinc-800 transition-colors"
              >
                <i className="fa-solid fa-arrow-down text-orange-500"></i>
                Ver Líneas de Producción
              </a>
            </div>
            <p className="text-zinc-500 text-xs font-medium">Respuesta directa por WhatsApp de lunes a sábados</p>
          </div>
        </section>

        {/* 3. BLOQUE DE "LÍNEAS DE PRODUCCIÓN FRECUENTES" */}
        <section id="lineas-produccion" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-16 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
              Familias de Productos B2B
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
              Líneas de Producción Frecuentes
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Productos optimizados para reventa comercial, eventos masivos y regalos institucionales en Bariloche y la Patagonia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTION_LINES.map((line, idx) => (
              <div 
                key={idx}
                className="group bg-zinc-900/60 border border-zinc-800 hover:border-orange-500/40 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div 
                    onClick={() => setActiveImage({ src: line.image, title: line.title, desc: line.desc })}
                    className="relative aspect-video w-full bg-zinc-950 overflow-hidden cursor-zoom-in"
                  >
                    <img 
                      src={line.image} 
                      alt={line.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-orange-400 border border-zinc-700">
                      {line.badge}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-lg">
                        <i className={`fa-solid ${line.icon}`}></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                          {line.title}
                        </h3>
                        <span className="text-xs text-zinc-500 font-medium">{line.subtitle}</span>
                      </div>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {line.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-4 border-t border-zinc-800">
                      {line.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                          <i className="fa-solid fa-check text-orange-500 text-[10px]"></i>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleLineWhatsApp(line.title)}
                    className="flex-1 py-3 px-4 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-950/40"
                  >
                    <i className="fa-brands fa-whatsapp text-base"></i>
                    Cotizar {line.title}
                  </button>
                  <Link
                    to={line.link}
                    className="py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    Ver detalles
                    <i className="fa-solid fa-arrow-right text-[10px] text-orange-400"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. BLOQUE TALLER ALIADO (PROPUESTA COMERCIAL PARA COMERCIOS Y REVENDEDORES) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-16">
          <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 border border-orange-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
                Modelo de Tercerización
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
                ¿Cómo funciona el Taller Aliado para tu negocio?
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Vos recibís la consulta o el pedido de tu cliente en tu mostrador (un cotillón, una artística, una imprenta o una agencia de marketing). Nos enviás la idea, nosotros modelamos e imprimimos con filamentos calibrados y vos entregás con tu propio margen comercial sin costos fijos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {TALLER_BENEFITS.map((benefit, i) => (
                <div key={i} className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-500 text-xl mb-4">
                    <i className={`fa-solid ${benefit.icon}`}></i>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{benefit.title}</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={handlePriceListWhatsApp}
                className="inline-flex items-center gap-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-sm sm:text-base transition-all shadow-xl shadow-orange-950/60 hover:scale-105 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Solicitar Lista de Precios Mayorista
              </button>
            </div>
          </div>
        </section>
      </div>

      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default Mayorista;
