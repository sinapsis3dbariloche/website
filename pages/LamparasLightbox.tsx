import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import { trackWhatsAppClick } from '../utils/analytics';

interface LightboxItem {
  title: string;
  badge: string;
  desc: string;
  features: string[];
  image: string;
  category: string;
}

const LIGHTBOX_DATA: LightboxItem[] = [
  {
    title: 'Carteles Lightbox con Logo para Negocios',
    badge: 'Comercial & B2B',
    desc: 'Carteles retroiluminados LED con el logo o nombre de tu comercio en Bariloche. Ideales para mostrador, recepción de hotel, cafetería o cervecería artesanal.',
    features: ['Iluminación LED homogénea', 'Alimentación USB 5V de bajo consumo', 'Diseño autoportante o para colgar', 'Estructura rígida 3D de alta definición'],
    image: '/images/lightbox_capibara.png',
    category: 'Comercial'
  },
  {
    title: 'Lámpara Luna 3D Velador LED Regulable',
    badge: 'Top Ventas Hogar',
    desc: 'Velador de luz de noche con relieve topográfico lunar preciso, fabricado mediante litofanía e impresión 3D esférica. Crea una atmósfera cálida y relajante.',
    features: ['Relieve de cráteres lunares reales', 'Luz LED cálida/neutra regulable', 'Base de apoyo estética en madera o 3D', 'Conexión USB directa'],
    image: '/images/lampara-luna-3d-velador-led-regulable-usb.jpeg',
    category: 'Veladores'
  },
  {
    title: 'Lightbox One Piece - Anime & Manga',
    badge: 'Coleccionistas',
    desc: 'Caja de luz multicapa con silueta emblemática de One Piece y efecto visual de profundidad. La pieza definitiva para dormitorios, estanterías o setup gamer.',
    features: ['Efecto de capas de sombra 3D', 'Colores vivos y contraste nocturno', 'Bajo consumo, cero calentamiento', 'Interruptor On/Off incorporado'],
    image: '/images/lightbox_onepice.png',
    category: 'Anime & Gaming'
  },
  {
    title: 'Lightbox Stitch Personalizado',
    badge: 'Favorito Infantil & Regalo',
    desc: 'Lámpara velador con la figura entrañable de Stitch. Difusor opalino suave que funciona como luz quitamiedos o de ambiente para habitaciones infantiles.',
    features: ['Luz suave difusa antirreflejo', 'Plástico atóxico seguro para niños', 'Medidas compactas para mesa de luz', 'Conexión USB estándar'],
    image: '/images/lightbox_stich.png',
    category: 'Infantil'
  },
  {
    title: 'Lightbox Capibara Bariloche',
    badge: 'Tendencia & Deco',
    desc: 'Diseño exclusivo del roedor más querido, con relieve y detalles iluminados. Aporta calidez y simpatía a cualquier rincón de la casa o la oficina.',
    features: ['Diseño original Sinapsis 3D', 'Luz LED cálida de ambiente', 'Acabado satinado moderno', 'Regalo original garantizado'],
    image: '/images/lightbox_capibara.png',
    category: 'Diseño & Tendencia'
  },
  {
    title: 'Lightbox Jurassic World & Películas',
    badge: 'Cine & Aventuras',
    desc: 'Cartel temático con el icónico logo del T-Rex de Jurassic Park en silueta retroiluminada. Un impacto visual garantizado tanto de día como de noche.',
    features: ['Silueta nítida de alto contraste', 'Ideal para fans del cine y dinosaurios', 'Carcasa negra mate antirreflejos', 'Soporte trasero integrado'],
    image: '/images/lightbox-jurassic-world-dinosaurios-mordelones-3d.png',
    category: 'Cine & Series'
  }
];

const FAQS_LIGHTBOX = [
  {
    q: '¿Cómo se alimentan y conectan las lámparas y lightboxes?',
    a: 'Nuestros lightboxes y lámparas se alimentan mediante cable USB estándar de 5V. Podés conectarlos a cualquier cargador de celular, a un puerto USB de computadora, televisor o a una batería externa (power bank), lo que los hace extremadamente prácticos y seguros ya que no calientan.'
  },
  {
    q: '¿Puedo encargar un cartel Lightbox con el logo de mi negocio en Bariloche?',
    a: 'Sí, es uno de nuestros productos estrella para locales comerciales. Nos enviás el logo de tu marca o empresa, te armamos el modelo digital 3D y fabricamos la caja de luz con los colores correspondientes y frente difusor para tu mostrador o vidriera.'
  },
  {
    q: '¿Qué medidas tienen los carteles y lámparas?',
    a: 'El formato estándar suele rondar entre 15 y 22 cm de ancho/alto y 4 a 6 cm de profundidad, ideal para escritorios, repisas y mostradores. También fabricamos medidas especiales a pedido según la necesidad de tu espacio.'
  },
  {
    q: '¿Cuánto demora la fabricación de una lámpara lightbox personalizada?',
    a: 'Los modelos en catálogo suelen estar listos en 24 a 48 hs. Para diseños comerciales personalizados con tu logo o personajes específicos, el plazo habitual de modelado, impresión y ensamble LED es de 3 a 5 días hábiles en nuestro taller de Bariloche.'
  },
  {
    q: '¿Hacen envíos de productos frágiles dentro de Bariloche y al país?',
    a: 'Sí. A diferencia del vidrio o neón tradicional que es muy frágil y costoso de trasladar, las cajas de luz 3D están fabricadas en polímeros resistentes que no se quiebran ante caídas leves. Embalamos cada pieza con protección especial para entregas locales y envíos a toda la Patagonia.'
  }
];

const LamparasLightbox: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string>('Logo Comercial para Mostrador');

  const handleWhatsAppQuote = (subject: string) => {
    trackWhatsAppClick('Lightbox_Bariloche_Quote', subject);
    const text = `Hola Sinapsis 3D! Me comunico desde Bariloche. Me interesa cotizar una lámpara o cartel Lightbox 3D (${subject}). ¿Podrían pasarme opciones y detalles de fabricación?`;
    window.open(`https://wa.me/5492944914816?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEO 
        title="Lámparas y Carteles Lightbox Bariloche | Cajas de Luz LED 3D Personalizadas"
        description="Lámparas y carteles lightbox LED 3D en Bariloche. Cajas de luz para mostradores comerciales, anime, películas y veladores personalizados. Fabricación local y envíos."
        canonical="https://www.sinapsis3dbariloche.com.ar/lamparas-lightbox-bariloche"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Lámparas y Carteles Lightbox 3D Bariloche - Sinapsis 3D",
            "image": "https://www.sinapsis3dbariloche.com.ar/images/lightbox_capibara.png",
            "description": "Cajas de luz LED personalizadas con relieve 3D y lámparas velador para comercios, habitaciones y decoración en San Carlos de Bariloche.",
            "brand": {
              "@type": "Brand",
              "name": "Sinapsis 3D"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "ARS",
              "price": "14500",
              "lowPrice": "9500",
              "highPrice": "28000",
              "offerCount": "6"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS_LIGHTBOX.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          }
        ]}
      />

      <div className="pt-6 pb-20 bg-zinc-950">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-16">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/15 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
                <i className="fa-solid fa-lightbulb text-orange-500"></i>
                Iluminación LED & Cajas de Luz 3D en Bariloche
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase mb-6 leading-tight">
                Lámparas y Carteles Lightbox en Bariloche <span className="block text-orange-500 text-2xl sm:text-4xl lg:text-5xl mt-2 font-bold normal-case tracking-normal">Cajas de Luz LED 3D y Veladores a Medida</span>
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                Iluminá tus espacios con carteles y veladores únicos de diseño tridimensional. Cajas de luz con el <strong>logotipo de tu marca o local comercial</strong>, lámparas de tus series y películas favoritas, y veladores lunares impresos en 3D en San Carlos de Bariloche con tecnología LED de bajo consumo.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <button
                  onClick={() => handleWhatsAppQuote('Consulta_General_Lightbox')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-orange-950/60 hover:scale-105 cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                  Pedir Presupuesto de Lightbox por WhatsApp
                </button>
                <Link
                  to="/portfolio?category=Lámparas+y+Lightboxes"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-semibold px-6 py-4 rounded-xl text-sm border border-zinc-800 transition-colors"
                >
                  <i className="fa-solid fa-images text-orange-500"></i>
                  Ver en Galería
                </Link>
              </div>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-t border-zinc-900 text-left">
                <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-xl flex items-center gap-3">
                  <i className="fa-solid fa-bolt text-orange-500 text-lg shrink-0"></i>
                  <span className="text-xs font-semibold text-zinc-300">LED 5V USB bajo consumo</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-xl flex items-center gap-3">
                  <i className="fa-solid fa-layer-group text-orange-500 text-lg shrink-0"></i>
                  <span className="text-xs font-semibold text-zinc-300">Difusor multicapa homogéneo</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-xl flex items-center gap-3">
                  <i className="fa-solid fa-shield-halved text-orange-500 text-lg shrink-0"></i>
                  <span className="text-xs font-semibold text-zinc-300">Estructura sólida antichoque</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-xl flex items-center gap-3">
                  <i className="fa-solid fa-store text-orange-500 text-lg shrink-0"></i>
                  <span className="text-xs font-semibold text-zinc-300">Logos comerciales a medida</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ UN LIGHTBOX 3D VS NEÓN TRADICIONAL */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-12">
          <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
                  Tecnología y Ventajas
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
                  Carteles de luz 3D: elegancia moderna para tu local u hogar
                </h2>
                <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    A diferencia del neón de vidrio clásico que requiere transformadores de alta tensión, es altamente frágil y genera zumbidos molestos, nuestras <strong>cajas de luz 3D (Lightbox)</strong> funcionan con tiras LED seguras de 5V integradas en una estructura rígida fabricada en Bariloche.
                  </p>
                  <p>
                    El frente se compone de un <strong>difusor óptico multicapa</strong> que tamiza los puntos LED individuales creando una iluminación continua, suave y elegante sin deslumbrar a la vista. Es la opción preferida por comercios en Bariloche para colocar sobre el mostrador de cobro, barras de tragos o recepciones.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                <div className="p-5 rounded-2xl bg-zinc-950 border border-orange-500/30 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-plug text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">Cero mantenimiento y calor</h3>
                    <p className="text-zinc-400 text-xs">Podés dejarlo encendido todo el día sin riesgo de sobrecalentamiento ni consumo excesivo de electricidad.</p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-wand-magic-sparkles text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">Cualquier diseño o marca</h3>
                    <p className="text-zinc-400 text-xs">Transformamos logos vectoriales, personajes de anime, bandas musicales o leyendas personalizadas en cajas iluminadas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATÁLOGO DE MODELOS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
              Modelos Destacados
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
              Lámparas y Cajas de Luz Fabricadas en Bariloche
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Hacé clic en cualquier imagen para verla en tamaño completo y apreciar la nitidez del corte 3D y la iluminación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LIGHTBOX_DATA.map((item, idx) => (
              <div 
                key={idx}
                className="group bg-zinc-900/60 border border-zinc-800 hover:border-orange-500/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div 
                    onClick={() => setActiveImage({ src: item.image, title: item.title, desc: item.desc })}
                    className="relative aspect-video w-full bg-zinc-950 overflow-hidden cursor-zoom-in"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-orange-400 border border-zinc-700">
                      {item.badge}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-zinc-800">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                          <i className="fa-solid fa-check text-orange-500 text-[10px]"></i>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleWhatsAppQuote(item.title)}
                    className="w-full py-2.5 px-4 bg-zinc-800 hover:bg-orange-600 text-zinc-200 hover:text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                    Consultar por este modelo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SELECTOR PERSONALIZADO */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-16">
          <div className="bg-zinc-900 border border-orange-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
                Personalizá tu Lightbox
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                ¿Qué tipo de Lightbox te gustaría encargar?
              </h2>
              <p className="text-zinc-400 text-sm">
                Elegí la temática y consultanos directo por WhatsApp para enviarte bocetos y cotización.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                'Logo Comercial para Mostrador',
                'Anime / Película / Serie',
                'Lámpara Velador para Regalo'
              ].map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`py-3.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedStyle === style 
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-950/60 scale-102 border-orange-500' 
                      : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => handleWhatsAppQuote(selectedStyle)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-sm sm:text-base transition-all shadow-xl shadow-orange-950/60 hover:scale-105 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Cotizar "{selectedStyle}" por WhatsApp
              </button>
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES (FAQ ACCORDION) */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
          <div className="text-center mb-10">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
              Dudas frecuentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Preguntas Frecuentes sobre Carteles y Lámparas Lightbox
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS_LIGHTBOX.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between text-white font-bold text-sm sm:text-base hover:text-orange-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <i className={`fa-solid fa-chevron-down text-xs text-orange-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}></i>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
              ¿Tenés un diseño en mente o querés iluminar tu marca?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mb-6">
              Envianos la imagen o logo por WhatsApp y te mostramos cómo quedaría adaptado a una caja de luz 3D en Bariloche.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleWhatsAppQuote('Diseño_Especial_Mostrador')}
                className="inline-flex items-center gap-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-orange-950/60 hover:scale-105 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                Consultar por Diseño a Medida
              </button>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors"
              >
                Ver Taller y Ubicación en Bariloche
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default LamparasLightbox;
