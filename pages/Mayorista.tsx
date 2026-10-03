import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import SEO from '../components/SEO';
import { trackWhatsAppB2BClick } from '../utils/analytics';

interface ProductItem {
  name: string;
  desc: string;
  image: string;
  badge?: string;
  detail: string;
}

interface SectorBlock {
  id: string;
  title: string;
  subtitle: string;
  target: string;
  icon: string;
  advantage: string;
  products: ProductItem[];
  whatsappText: string;
}

const SECTOR_BLOCKS: SectorBlock[] = [
  {
    id: 'cotillones',
    title: 'Cotillones y Casas de Fiestas',
    subtitle: 'Novedades 3D de alta rotación para cumpleaños y celebraciones',
    target: 'Cotillones, salones de eventos y organizadores en Bariloche y Patagonia',
    icon: 'fa-cake-candles',
    advantage: 'Diseños novedosos en 3D que reemplazan los productos genéricos importados, con posibilidad de personalización inmediata de nombres, números y colores para los clientes de tu cotillón.',
    products: [
      {
        name: 'Toppers y Cake Toppers 3D',
        desc: 'Nombres en altorrelieve, números volumétricos, birretes y siluetas temáticas personalizadas para tortas y candy bars.',
        image: '/images/toppers-torta-mayorista-cotillon-3d.png',
        badge: 'Top Ventas',
        detail: 'Fabricados con plásticos atóxicos lavables, livianos para no hundir la torta y en amplia gama cromática.'
      },
      {
        name: 'Centros de Mesa y Personajes',
        desc: 'Soportes de mesa estables con logos o personajes infantiles en relieve que los homenajeados se llevan de recuerdo.',
        image: '/images/centros-de-mesa-infantiles-personalizados-fiestas-eventos.jpeg',
        badge: 'Alta Demanda',
        detail: 'Bases circulares reforzadas de encastre firme, reutilizables para ambientación o habitación infantil.'
      },
      {
        name: 'Cajitas Milk Box con Broche 3D',
        desc: 'Cajitas golosineras rígidas con aplique tridimensional de cierre temático. Superan a las típicas bolsitas de nylon.',
        image: '/images/cajitas-milk-box-souvenirs-cumpleanos-3d.png',
        badge: 'Diseño Exclusivo',
        detail: 'Combinan papelería rígida mate con broches 3D exclusivos para golosinas y sorpresitas.'
      },
      {
        name: 'Souvenirs Temáticos Listos para Armar',
        desc: 'Llaveritos y figuras conmemorativas (Plim Plim, Brawl Stars, One Piece, mariposas, animales flexi) en lotes mayoristas.',
        image: '/images/topper-torta-personalizado-plim-plim.png',
        badge: 'Pack Mayorista',
        detail: 'Listos para exhibir en tu mostrador o armar en combos festivos con margen rentable.'
      }
    ],
    whatsappText: 'Hola Sinapsis 3D! Tengo un cotillón / casa de fiestas y quiero cotizar la línea mayorista de toppers, centros de mesa y souvenirs.'
  },
  {
    id: 'artisticas',
    title: 'Tiendas de Arte, Artísticas y Repostería',
    subtitle: 'Herramientas de precisión para artesanos, porcelana fría y gastronomía dulce',
    target: 'Artísticas, talleres de cerámica, profesoras de modelado y reposterías creativas',
    icon: 'fa-palette',
    advantage: 'Fabricación de modelos exclusivos a demanda de las profesoras de talleres, pasteleras y artesanos locales, con filos calibrados y relieves profundos que no se consiguen en catálogos masivos.',
    products: [
      {
        name: 'Rodillos y Rueditas Texturizadoras',
        desc: 'Herramientas ergonómicas de rodillo continuo para estampar patrones limpios en arcilla, cerámica, porcelana y fondant.',
        image: '/images/rueditas-texturizadoras-para-ceramica-porcelana-fria-y-pasteleria.jpeg',
        badge: 'Herramienta Clave',
        detail: 'Eje reforzado con textura de alta definición para transferencias nítidas sin deformar la masa.'
      },
      {
        name: 'Cortantes y Expulsores a Medida',
        desc: 'Cortantes de galletitas, cookies temáticas y piezas de modelado con bisel afilado de 0.4 mm para cortes perfectos.',
        image: '/images/cortantes-galletitas-tematicos-cumpleanos-3d.png',
        badge: 'Apto Alimentos',
        detail: 'Filamentos PLA biodegradables atóxicos, aptos para contacto gastronómico y fácil higienización.'
      },
      {
        name: 'Sellos y Marcadores de Relieve',
        desc: 'Estampas personalizadas con tipografías, guardas nórdicas, motivos patagónicos y texturas florales para piezas artesanales.',
        image: '/images/servicio-diseno-e-impresion-3d-bariloche-sinapsis.jpeg',
        badge: 'Personalizable',
        detail: 'Diseño vectorial a pedido: podemos reproducir el logo de tu taller o los diseños que tus alumnas necesitan.'
      }
    ],
    whatsappText: 'Hola Sinapsis 3D! Tengo una artística / taller de repostería y me interesa cotizar cortantes, rodillos texturadores y herramientas 3D.'
  },
  {
    id: 'comercios',
    title: 'Comercios Generales & Souvenirs Turísticos',
    subtitle: 'Identidad patagónica, recuerdos de Bariloche y accesorios de alta salida',
    target: 'Regalerías, tiendas de souvenirs, kioscos, chocolaterías y bazares patagónicos',
    icon: 'fa-mountain-sun',
    advantage: 'Productos con fuerte identidad visual de Bariloche y la Patagonia, gran margen comercial por unidad, exhibidores prácticos para mostrador y reposición ágil en la región.',
    products: [
      {
        name: 'Exhibidores de Mostrador con Llaveros',
        desc: 'Muebles exhibidores compactos en 3D cargados con llaveros de fútbol (Messi, Selección, clubes), anime y personajes virales.',
        image: '/images/exhibidor-llaveros-futbol-messi-mayorista-3d.png',
        badge: 'Listo para Vender',
        detail: 'Maximiza el ticket promedio en la línea de cajas. Ocupa mínimo espacio en mostrador con rotación inmediata.'
      },
      {
        name: 'Mates Deportivos y Patagónicos',
        desc: 'Mates térmicos con forma de pelota de fútbol, voley o relieves antivuelco con diseño contemporáneo y colores vivos.',
        image: '/images/mate-pelota-futbol-3d.png',
        badge: 'Regalo Estrella',
        detail: 'Diseñados con cámara interior aislante, polímeros térmicos resistentes y fácil limpieza.'
      },
      {
        name: 'Llaveros y Pins Regionales / Escolares',
        desc: 'Escarapelas patrias ultra resistentes, pines conmemorativos y llaveros turísticos con relieve de alta definición.',
        image: '/images/escarapelas-colegio-mayorista-3d.png',
        badge: 'Pack x Cantidad',
        detail: 'Excelente rigidez y microdetalle en colores contrastantes sin pintura que se desgaste.'
      },
      {
        name: 'Portallaves y Accesorios de Diseño',
        desc: 'Portallaves de pared de gatito, soportes de celular y organizadores utilitarios que atraen la mirada de compradores.',
        image: '/images/portallaves-de-pared-gatito-3d-organizador-de-llaves.jpeg',
        badge: 'Utilitario',
        detail: 'Piezas resistentes listas para colgar o regalar, muy valoradas en bazares y regalerías.'
      }
    ],
    whatsappText: 'Hola Sinapsis 3D! Tengo un comercio / regalería en Bariloche o Patagonia y quiero ver el catálogo mayorista y exhibidores.'
  }
];

const B2B_STEPS = [
  {
    step: '01',
    title: 'Tu cliente pide en tu mostrador',
    desc: 'Alguien se acerca a tu negocio buscando un topper con nombre, un souvenir de su temática preferida o un repuesto que no consigue.',
    icon: 'fa-store'
  },
  {
    step: '02',
    title: 'Nos enviás el pedido por WhatsApp',
    desc: 'Nos pasás la foto, medidas o idea con un mensaje rápido. Te cotizamos inmediatamente a valor preferencial de taller aliado.',
    icon: 'fa-comments'
  },
  {
    step: '03',
    title: 'Fabricamos con precisión en Bariloche',
    desc: 'Modelamos en 3D, imprimimos con filamentos premium calibrados y controlamos la calidad final en nuestro taller local.',
    icon: 'fa-cubes-stacked'
  },
  {
    step: '04',
    title: 'Entregás y cobrás tu margen',
    desc: 'Retirás en Bariloche o recibís el paquete listo para entrega a tu cliente, generando un nuevo ingreso recurrente sin costos fijos.',
    icon: 'fa-handshake'
  }
];

const FAQS_MAYORISTA = [
  {
    q: '¿Cuál es el mínimo de compra para acceder a precios mayoristas?',
    a: 'Manejamos mínimos muy accesibles pensados para comercios de barrio y emprendedores. En productos de reventa arrancamos desde 10 a 20 unidades combinadas según el rubro, y en taller aliado no hay mínimo por pieza única personalizada.'
  },
  {
    q: '¿Puedo ofrecer piezas con mi propia marca (marca blanca)?',
    a: 'Totalmente. Entregamos las piezas neutrales o con el packaging de tu local para que vos preserves la fidelidad de tu clientela.'
  },
  {
    q: '¿Hacen envíos fuera de Bariloche?',
    a: 'Sí. Además de entregas y retiros coordinados en Bariloche (zona Altos del Cóndor y puntos de encuentro), despachamos a toda la Patagonia y el país por Vía Cargo, Correo Argentino u expresos acordados.'
  },
  {
    q: '¿Qué pasa si mi cliente pide un diseño que no está en el catálogo?',
    a: 'Esa es justamente nuestra mayor fortaleza. Como taller aliado, modelamos archivos 3D a medida en cuestión de horas. Nos enviás la foto o boceto y nosotros lo digitalizamos e imprimimos.'
  }
];

const Mayorista: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const [selectedSector, setSelectedSector] = useState<string>('todos');
  const [simulatorRubro, setSimulatorRubro] = useState<string>('Cotillón');
  const [simulatorQty, setSimulatorQty] = useState<string>('20 a 50 unidades');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredBlocks = selectedSector === 'todos' 
    ? SECTOR_BLOCKS 
    : SECTOR_BLOCKS.filter(s => s.id === selectedSector);

  const handleB2BWhatsApp = (label: string, text: string) => {
    trackWhatsAppB2BClick(label, text);
    const url = `https://wa.me/5492944914816?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getSimulatorMessage = () => {
    return `Hola Sinapsis 3D! Tengo un comercio del rubro "${simulatorRubro}" y me gustaría consultar por un lote estimado de ${simulatorQty} y las condiciones de Taller Aliado.`;
  };

  return (
    <>
      <SEO 
        title="Venta Mayorista y Taller Aliado en Bariloche | Sinapsis 3D"
        description="Venta mayorista de productos 3D y gráfica para cotillones, artísticas y comercios en Bariloche y Patagonia. Ofrecé impresión 3D en tu local tercerizando con nosotros."
        canonical="https://www.sinapsis3dbariloche.com.ar/mayorista"
        schema={{
          "@context": "https://schema.org",
          "@type": "WholesaleStore",
          "name": "Sinapsis 3D Bariloche - Canal Mayorista y Taller Aliado B2B",
          "url": "https://www.sinapsis3dbariloche.com.ar/mayorista",
          "description": "Venta mayorista y servicio de tercerización en impresión 3D y gráfica para comercios en San Carlos de Bariloche y la Patagonia.",
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
      
      <div className="pt-8 pb-16">
        {/* HERO SECTION B2B */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
            <i className="fa-solid fa-handshake-angle text-orange-500"></i>
            Canal Mayorista & Taller Aliado B2B · Bariloche y Patagonia
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase max-w-4xl mx-auto mb-6 text-balance">
            Venta Mayorista y <span className="text-orange-500">Taller Aliado</span> de Impresión 3D
          </h1>

          <p className="text-zinc-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
            Impulsá las ventas de tu negocio con productos exclusivos de alta rotación para <strong className="text-white">cotillones, artísticas y comercios</strong>, o convertí tu mostrador en un punto de recepción de impresión 3D tercerizando la fabricación con nosotros.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={() => handleB2BWhatsApp(
                'Consulta_Comercios',
                'Hola! Tengo un comercio y me interesa la propuesta mayorista y de taller aliado de Sinapsis 3D'
              )}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-orange-950/50 hover:scale-105 cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              Contactar por WhatsApp B2B
            </button>
            <a
              href="#taller-aliado"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold px-6 py-4 rounded-xl text-sm border border-zinc-700 transition-colors"
            >
              <i className="fa-solid fa-arrow-down text-orange-500"></i>
              ¿Cómo funciona el Taller Aliado?
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4 border-t border-zinc-900">
            <div className="flex items-center justify-center gap-2 text-zinc-400 text-xs sm:text-sm font-medium">
              <i className="fa-solid fa-check text-orange-500"></i>
              <span>Fabricación local en Bariloche</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-zinc-400 text-xs sm:text-sm font-medium">
              <i className="fa-solid fa-check text-orange-500"></i>
              <span>Envíos a toda la Patagonia</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-zinc-400 text-xs sm:text-sm font-medium">
              <i className="fa-solid fa-check text-orange-500"></i>
              <span>Precios escalonados x volumen</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-zinc-400 text-xs sm:text-sm font-medium">
              <i className="fa-solid fa-check text-orange-500"></i>
              <span>Garantía de calidad y prueba</span>
            </div>
          </div>
        </section>

        {/* PILAR B: BANNER DESTACADO TALLER ALIADO (MARCA BLANCA) */}
        <section id="taller-aliado" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-24">
          <div className="relative rounded-3xl overflow-hidden border border-orange-500/40 bg-gradient-to-br from-zinc-900 via-zinc-950 to-orange-950/30 p-8 sm:p-12 shadow-2xl shadow-zinc-950">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[130px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10 pb-8 border-b border-zinc-800">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/30">
                    <i className="fa-solid fa-screwdriver-wrench"></i> Modelo de Tercerización / Taller Aliado
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase mb-4 text-balance">
                    Sumá el servicio de Impresión 3D y Gráfica a tu negocio, <span className="text-orange-500">sin invertir en maquinaria</span>
                  </h2>
                  <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                    Vos recibís el pedido o la idea de tu cliente en tu mostrador (una artística, un cotillón, una imprenta o un estudio de diseño), nos enviás el requerimiento, nosotros lo diseñamos e imprimimos con calidad profesional y vos entregás un producto exclusivo con tu propio margen comercial.
                  </p>
                </div>

                <div className="shrink-0 flex flex-col items-start lg:items-end justify-center">
                  <button
                    onClick={() => handleB2BWhatsApp(
                      'Consulta_Comercios',
                      'Hola! Tengo un comercio y me interesa la propuesta mayorista y de taller aliado de Sinapsis 3D'
                    )}
                    className="inline-flex items-center gap-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold px-7 py-4 rounded-xl text-sm transition-all shadow-lg shadow-orange-950/60 hover:scale-105 cursor-pointer whitespace-nowrap"
                  >
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                    Quiero ser Taller Aliado
                  </button>
                  <span className="text-zinc-500 text-xs mt-2 font-medium">Respuesta rápida por WhatsApp</span>
                </div>
              </div>

              {/* 4 Beneficios Directos B2B */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-500 text-xl mb-4">
                    <i className="fa-solid fa-coins"></i>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">Cero costo en máquinas</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    Olvidate de desembolsar miles de dólares en impresoras 3D, calibraciones complejas, repuestos o software de corte.
                  </p>
                </div>

                <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-500 text-xl mb-4">
                    <i className="fa-solid fa-recycle"></i>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">Cero desperdicio de filamento</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    Las impresiones fallidas, pruebas de boquilla y mermas corren por nuestra cuenta. Vos solo pagás piezas terminadas impecables.
                  </p>
                </div>

                <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-500 text-xl mb-4">
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">Soporte técnico y diseño</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    Te asesoramos para responderle al cliente en el acto. Si traen solo una foto o una idea, nosotros nos ocupamos de modelarla.
                  </p>
                </div>

                <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-500 text-xl mb-4">
                    <i className="fa-solid fa-stopwatch"></i>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">Entregas acordadas en Bariloche</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    Producción continua y plazos firmes para que cumplas con tus clientes sin sorpresas ni demoras innecesarias.
                  </p>
                </div>
              </div>

              {/* Paso a Paso */}
              <div>
                <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-6 flex items-center gap-2">
                  <i className="fa-solid fa-list-check text-orange-500"></i>
                  Flujo de trabajo para tu mostrador
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {B2B_STEPS.map((s, idx) => (
                    <div key={idx} className="relative bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-orange-500 font-black text-2xl tracking-tighter">{s.step}</span>
                        <i className={`fa-solid ${s.icon} text-zinc-500`}></i>
                      </div>
                      <h4 className="text-white font-bold text-sm mb-2">{s.title}</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILAR A: CATÁLOGO MAYORISTA PARA REVENTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
              Líneas de Fabricación y Reventa
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase mb-4">
              Catálogo Mayorista por Rubro
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Explorá nuestras familias de productos optimizados para reventa comercial. Fabricación propia sin intermediarios, packaging listo para exhibir y precios por volumen.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedSector('todos')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedSector === 'todos' 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-950/50' 
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Todos los Rubros
            </button>
            <button
              onClick={() => setSelectedSector('cotillones')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedSector === 'cotillones' 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-950/50' 
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              <i className="fa-solid fa-cake-candles mr-1.5 text-orange-500"></i>
              Cotillones & Fiestas
            </button>
            <button
              onClick={() => setSelectedSector('artisticas')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedSector === 'artisticas' 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-950/50' 
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              <i className="fa-solid fa-palette mr-1.5 text-orange-500"></i>
              Artísticas & Repostería
            </button>
            <button
              onClick={() => setSelectedSector('comercios')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedSector === 'comercios' 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-950/50' 
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              <i className="fa-solid fa-mountain-sun mr-1.5 text-orange-500"></i>
              Comercios & Souvenirs Turísticos
            </button>
          </div>

          {/* Sector Blocks */}
          <div className="space-y-16">
            {filteredBlocks.map((sector) => (
              <div 
                key={sector.id} 
                className="bg-zinc-950 border border-zinc-800/80 rounded-3xl p-6 sm:p-10 relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b border-zinc-800/80">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500">
                        <i className={`fa-solid ${sector.icon}`}></i>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-500">{sector.target}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                      {sector.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mt-1">{sector.subtitle}</p>
                  </div>

                  <button
                    onClick={() => handleB2BWhatsApp('Consulta_Comercios', sector.whatsappText)}
                    className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm border border-zinc-700 hover:border-orange-500 transition-all cursor-pointer whitespace-nowrap self-start lg:self-auto"
                  >
                    <i className="fa-brands fa-whatsapp text-base text-green-400 group-hover:text-white"></i>
                    Cotizar línea {sector.title.split(' ')[0]}
                  </button>
                </div>

                {/* Ventaja competitiva destacada */}
                <div className="bg-orange-950/20 border-l-4 border-orange-500 p-4 rounded-r-xl mb-8">
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block mb-1">
                    Ventaja para tu comercio:
                  </span>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {sector.advantage}
                  </p>
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {sector.products.map((prod, pIdx) => (
                    <div 
                      key={pIdx}
                      className="group bg-zinc-900/60 border border-zinc-800/90 hover:border-orange-500/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
                    >
                      <div 
                        className="relative aspect-square overflow-hidden bg-zinc-950 cursor-pointer"
                        onClick={() => setActiveImage({ src: prod.image, title: prod.name, desc: prod.desc })}
                      >
                        <img 
                          src={prod.image} 
                          alt={prod.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        {prod.badge && (
                          <span className="absolute top-3 left-3 bg-orange-600/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                            {prod.badge}
                          </span>
                        )}
                        <span className="absolute bottom-3 right-3 text-zinc-400 hover:text-white bg-black/60 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </span>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-white font-bold text-sm sm:text-base mb-2 group-hover:text-orange-400 transition-colors">
                            {prod.name}
                          </h4>
                          <p className="text-zinc-400 text-xs leading-relaxed mb-3">
                            {prod.desc}
                          </p>
                        </div>
                        <p className="text-[11px] text-zinc-500 pt-3 border-t border-zinc-800/60 leading-normal">
                          {prod.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SIMULADOR RÁPIDO B2B / COTIZADOR INTERACTIVO */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div className="max-w-2xl mb-8">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-1">
                Atención Directa y Personalizada
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-3">
                ¿Querés recibir la lista de precios mayorista?
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Seleccioná tu tipo de negocio y volumen aproximado. Te enviamos el catálogo digital en PDF y la lista de precios escalonada por WhatsApp sin compromiso.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-zinc-300 text-xs font-bold uppercase tracking-wider mb-2">
                  Tipo de Comercio / Actividad:
                </label>
                <select
                  value={simulatorRubro}
                  onChange={(e) => setSimulatorRubro(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="Cotillón o Casa de Fiestas">Cotillón o Casa de Fiestas</option>
                  <option value="Artística o Taller de Repostería">Artística o Taller de Repostería</option>
                  <option value="Regalería o Tienda de Souvenirs Turísticos">Regalería o Tienda de Souvenirs Turísticos</option>
                  <option value="Librería o Kiosco Escolar">Librería o Kiosco Escolar</option>
                  <option value="Imprenta o Estudio de Diseño (Taller Aliado)">Imprenta o Estudio de Diseño (Taller Aliado)</option>
                  <option value="Otro tipo de comercio">Otro tipo de comercio</option>
                </select>
              </div>

              <div>
                <label className="block text-zinc-300 text-xs font-bold uppercase tracking-wider mb-2">
                  Volumen o Tirada Estimada:
                </label>
                <select
                  value={simulatorQty}
                  onChange={(e) => setSimulatorQty(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="10 a 30 unidades (Pedido Inicial)">10 a 30 unidades (Pedido Inicial de Prueba)</option>
                  <option value="30 a 100 unidades (Lote Mayorista)">30 a 100 unidades (Lote Mayorista Estándar)</option>
                  <option value="Más de 100 unidades (Gran Volumen)">Más de 100 unidades (Gran Volumen / Temporada)</option>
                  <option value="Piezas a pedido continuas (Taller Aliado)">Piezas a pedido continuas (Taller Aliado)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-zinc-950 rounded-2xl border border-zinc-800/80">
              <div className="text-xs text-zinc-400">
                <span className="text-zinc-200 font-semibold block mb-0.5">Mensaje listo para enviar:</span>
                <span className="italic">"{getSimulatorMessage()}"</span>
              </div>
              <button
                onClick={() => handleB2BWhatsApp('Consulta_Comercios', getSimulatorMessage())}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-green-950/40 hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                Enviar Consulta por WhatsApp
              </button>
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES MAYORISTAS */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Preguntas Frecuentes de <span className="text-orange-500">Comercios</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              Todo lo que necesitás saber para empezar a trabajar juntos.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS_MAYORISTA.map((faq, fIdx) => (
              <div 
                key={fIdx}
                className="border border-zinc-800 bg-zinc-900/60 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between text-white font-bold text-sm sm:text-base focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <i className={`fa-solid fa-chevron-down text-xs text-orange-500 transition-transform duration-300 ${openFaq === fIdx ? 'rotate-180' : ''}`}></i>
                </button>
                {openFaq === fIdx && (
                  <div className="px-6 pb-5 text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-zinc-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* GALERÍA / TRABAJOS DESTACADOS DE PRODUCCIÓN */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
            Galería de Lotes y <span className="text-orange-500">Producciones</span>
          </h2>
          <p className="text-zinc-400 mt-2 max-w-2xl mx-auto text-sm md:text-base">
            Mirá algunos de los lotes y trabajos que entregamos a comercios, cotillones e instituciones.
          </p>
        </div>
        
        <Portfolio 
          allowedCategories={['Ventas Mayoristas y Comercios', 'Corporativo y Marcas', 'Pastelería y Repostería']}
          onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} 
        />
      </div>

      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default Mayorista;
