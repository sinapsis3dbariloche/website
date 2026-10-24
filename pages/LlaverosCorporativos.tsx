import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import { trackWhatsAppClick, trackWhatsAppB2BClick } from '../utils/analytics';

interface LlaveroModel {
  title: string;
  badge: string;
  desc: string;
  features: string[];
  image: string;
  tag: string;
}

const LLAVEROS_DATA: LlaveroModel[] = [
  {
    title: 'Llaveros Corporativos con Logo en Relieve',
    badge: 'Más Elegido B2B',
    desc: 'Llaveros institucionales fabricados con doble extrusión directa. Tu logotipo en altorrelieve de máxima definición sin tintas superficiales que se desgasten con el roce.',
    features: ['Logo en relieve 3D indeleble', 'Doble o triple combinación de colores', 'Anilla de acero sinfín reforzada', 'Ideal merchandising y empresas'],
    image: '/images/llaveros-corporativos-con-logo-regalos-empresariales-3d.jpeg',
    tag: 'Corporativo'
  },
  {
    title: 'Llaveros para Cabañas, Hoteles y Alojamientos',
    badge: 'Especial Turismo Bariloche',
    desc: 'Llaveros macizos con el nombre de tu complejo o cabaña, numeración de habitación clara y silueta patagónica (montañas, pinos o lago). Resistentes al uso diario.',
    features: ['Numeración clara y legible', 'Mayor cuerpo para no perder la llave', 'Diseño resistente y liviano', 'Grabado dorsal opcional'],
    image: '/images/llaveros-personalizados-para-empresas-instituciones-impresion-3d.jpeg',
    tag: 'Hotelería'
  },
  {
    title: 'Exhibidor y Llaveros Mayoristas para Comercios',
    badge: 'Alta Rotación',
    desc: 'Exhibidores de mostrador personalizados con lotes de llaveros temáticos (fútbol, campeones del mundo, personajes, Bariloche). Listo para colocar en mostrador y generar ventas.',
    features: ['Exhibidor vertical incluido', 'Lotes surtidos de 24 a 100+ unidades', 'Margen comercial rentable para reventa', 'Reposición rápida en Bariloche'],
    image: '/images/exhibidor-llaveros-futbol-messi-mayorista-3d.png',
    tag: 'Reventa'
  },
  {
    title: 'Llaveros con Código QR y Funcionales',
    badge: 'Innovación 3D',
    desc: 'Llaveros interactivos que integran relieve y código QR escaneable que redirige directo al menú de tu restaurante, Instagram, Wi-Fi o tarjeta digital de contacto.',
    features: ['Código QR de alto contraste legible', 'Ideal bares, cervecerías y eventos', 'Acabado satinado antirreflejo', 'Forma redonda, rectangular o especial'],
    image: '/images/tarjetas-de-presentacion-personalizadas-para-clubes-y-negocios.jpeg',
    tag: 'QR Interactivo'
  },
  {
    title: 'Llaveros Deportivos y Clubes de Bariloche',
    badge: 'Clubes & Torneos',
    desc: 'Modelados a escala con siluetas de palos de hockey, pelotas de fútbol, básquet o escudo de tu club. El souvenir ideal para premiaciones y cierres de temporada.',
    features: ['Silueta personalizada a medida', 'Colores y escudo de tu club', 'Texturas deportivas realistas', 'Pack para equipos y delegaciones'],
    image: '/images/llaveros-hockey-personalizados-impresion-3d.png',
    tag: 'Deportivo'
  },
  {
    title: 'Llaveros Souvenirs y Temáticos para Eventos',
    badge: 'Eventos & Cumples',
    desc: 'Llaveritos coloridos con personajes, animalitos o temática de fiestas infantiles, egresados y celebraciones. Fabricados con materiales seguros y biodegradables.',
    features: ['Ligeros y suaves al tacto', 'Pack souvenir con tarjetita opcional', 'Temáticas infantiles y juveniles', 'Precios por cantidad'],
    image: '/images/llaveros-de-snoopy-impresion-3d-merchandising-peanuts.jpeg',
    tag: 'Souvenir'
  }
];

const FAQS_LLAVEROS = [
  {
    q: '¿Cuál es la cantidad mínima para encargar llaveros corporativos en Bariloche?',
    a: 'En Sinapsis 3D trabajamos con mínimos súper accesibles: podés iniciar tu lote institucional desde 20 unidades con logotipo personalizado. Para producciones de 50, 100, 250 o más unidades aplicamos escalas de precios mayoristas con descuentos significativos.'
  },
  {
    q: '¿Qué formato de archivo necesitan para el logo de mi empresa?',
    a: 'Preferentemente archivos vectoriales (.SVG, .AI, .EPS o .PDF vectorial). Si solo contás con una imagen en alta definición (.PNG o .JPG), nuestro equipo de diseño 3D en Bariloche digitaliza y adapta tu logo para la extrusión sin costo adicional.'
  },
  {
    q: '¿Se borra el logo con el roce de las llaves?',
    a: 'No. A diferencia de la serigrafía o tampografía económica donde la tinta se raspa, en Sinapsis 3D imprimimos el relieve del logo fundido directamente en el cuerpo de la pieza mediante fusión térmica multicapa (filamento PLA premium). Es indeleble y permanente.'
  },
  {
    q: '¿Hacen entregas en San Carlos de Bariloche y envíos a la región?',
    a: 'Sí. Realizamos entregas coordinadas en Bariloche (zona Altos del Cóndor y puntos céntricos), entregas a Dina Huapi y despachos rápidos a Villa La Angostura, San Martín de los Andes, El Bolsón y toda la Patagonia por Vía Cargo o Correo Argentino.'
  },
  {
    q: '¿Hacen muestras previas antes de fabricar todo el lote?',
    a: 'Totalmente. Siempre te enviamos un render 3D digital con los colores exactos y proporciones antes de comenzar la producción. En lotes grandes, podemos generar una muestra física para validación final.'
  }
];

const LlaverosCorporativos: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedQty, setSelectedQty] = useState<string>('50 unidades');

  const handleWhatsAppQuote = (type: string) => {
    trackWhatsAppB2BClick('Llaveros_Corporativos_Quote', type);
    const text = `Hola Sinapsis 3D! Me interesa cotizar llaveros corporativos personalizados en Bariloche. Mi idea es un lote de aproximadamente ${selectedQty} (${type}). ¿Podrían pasarme presupuesto y opciones de diseño?`;
    window.open(`https://wa.me/5492944914816?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEO 
        title="Llaveros Corporativos Bariloche | Merchandising y Regalos Empresariales 3D"
        description="Fabricación de llaveros corporativos con logo en relieve en Bariloche. Regalos empresariales, hotelería, eventos y merchandising 3D con descuentos por volumen. Cotizá en el día."
        canonical="https://www.sinapsis3dbariloche.com.ar/llaveros-corporativos-bariloche"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Llaveros Corporativos Personalizados en Bariloche - Sinapsis 3D",
            "image": "https://www.sinapsis3dbariloche.com.ar/images/llaveros-corporativos-con-logo-regalos-empresariales-3d.jpeg",
            "description": "Llaveros corporativos con logotipo en relieve 3D, indelebles y resistentes para empresas, cabañas y eventos en Bariloche.",
            "brand": {
              "@type": "Brand",
              "name": "Sinapsis 3D"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "ARS",
              "price": "1800",
              "lowPrice": "1200",
              "highPrice": "3500",
              "offerCount": "6"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS_LLAVEROS.map(faq => ({
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
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/15 blur-[140px] rounded-full pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
                <i className="fa-solid fa-key text-orange-500"></i>
                Merchandising B2B & Regalos Empresariales en Bariloche
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase mb-6 leading-tight">
                Llaveros Corporativos en Bariloche <span className="block text-orange-500 text-2xl sm:text-4xl lg:text-5xl mt-2">Relieve 3D con Tu Logo y Marca</span>
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                Destacá la presencia de tu marca con llaveros publicitarios de alta definición fabricados en San Carlos de Bariloche. Fusión de doble color indeleble, anilla sinfín niquelada reforzada y terminaciones impecables para <strong>empresas, hoteles, cabañas, comercios y eventos</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <button
                  onClick={() => handleWhatsAppQuote('Presupuesto_Rapido')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-orange-950/60 hover:scale-105 cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                  Cotizar Llaveros Corporativos por WhatsApp
                </button>
                <Link
                  to="/mayorista"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-semibold px-6 py-4 rounded-xl text-sm border border-zinc-800 transition-colors"
                >
                  <i className="fa-solid fa-boxes-packing text-orange-500"></i>
                  Ver Catálogo Mayorista B2B
                </Link>
              </div>

              {/* Highlights Pill Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-t border-zinc-900 text-left">
                <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-xl flex items-center gap-3">
                  <i className="fa-solid fa-palette text-orange-500 text-lg shrink-0"></i>
                  <span className="text-xs font-semibold text-zinc-300">Logo en 3D indeleble (sin tintas)</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-xl flex items-center gap-3">
                  <i className="fa-solid fa-cubes text-orange-500 text-lg shrink-0"></i>
                  <span className="text-xs font-semibold text-zinc-300">Lotes desde 20 unidades</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-xl flex items-center gap-3">
                  <i className="fa-solid fa-truck-fast text-orange-500 text-lg shrink-0"></i>
                  <span className="text-xs font-semibold text-zinc-300">Entregas en Bariloche y envíos</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-xl flex items-center gap-3">
                  <i className="fa-solid fa-leaf text-orange-500 text-lg shrink-0"></i>
                  <span className="text-xs font-semibold text-zinc-300">Plásticos PLA biodegradables</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARATIVA / POR QUÉ 3D VS GENÉRICO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
          <div className="bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
                  Diferenciación Real para tu Marca
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
                  ¿Por qué los llaveros 3D de Sinapsis superan a los genéricos?
                </h2>
                <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    La mayoría de los llaveros promocionales económicos utilizan serigrafía plana sobre plástico o aluminio importado. Tras un par de semanas en el bolsillo junto a las llaves, <strong>la pintura se raya y tu marca desaparece</strong>.
                  </p>
                  <p>
                    En Sinapsis 3D Bariloche producimos con <strong>fusión molecular directa multicapa</strong>: el color de fondo y el relieve del logotipo son partes estructurales de la misma pieza sólida. Podés lavarlos, usarlos en la intemperie o llevarlos en manojos pesados de llaves y el logo permanecerá impecable por años.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                <div className="p-5 rounded-2xl bg-zinc-950 border border-orange-500/30 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-fingerprint text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">Textura táctil prémium</h3>
                    <p className="text-zinc-400 text-xs">El cliente percibe el relieve con la yema de los dedos, generando una memoria de marca muy superior al papel o grabado láser.</p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-shapes text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">Formas libres a medida</h3>
                    <p className="text-zinc-400 text-xs">No estamos limitados a círculos o rectángulos estándar: cortamos la silueta exacta del isotipo de tu negocio.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MODELOS Y CATÁLOGO DE LLAVEROS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
              Modelos y Aplicaciones
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
              Tipos de Llaveros Fabricados en Bariloche
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Hacé clic en cualquier modelo para ampliar y ver los detalles de acabado y relieve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LLAVEROS_DATA.map((item, idx) => (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">
                      {item.tag}
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
                    Cotizar este modelo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COTIZADOR RÁPIDO / VOLÚMENES */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-16">
          <div className="bg-zinc-900 border border-orange-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
                Presupuesto Inmediato
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                ¿Cuántos llaveros necesitás para tu empresa?
              </h2>
              <p className="text-zinc-400 text-sm">
                Seleccioná la escala estimada y te responderemos por WhatsApp con la cotización exacta en minutos.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {['20 a 50 unidades', '50 a 100 unidades', '100 a 250 unidades', '250 a 500+ unidades'].map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedQty(tier)}
                  className={`py-3 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedQty === tier 
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-950/60 scale-102 border-orange-500' 
                      : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => handleWhatsAppQuote(`Lote de ${selectedQty}`)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-sm sm:text-base transition-all shadow-xl shadow-orange-950/60 hover:scale-105 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Consultar Costo por {selectedQty}
              </button>
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES (SEO ACCORDION) */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
          <div className="text-center mb-10">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
              Resolvemos tus dudas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Preguntas Frecuentes sobre Llaveros en Bariloche
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS_LLAVEROS.map((faq, idx) => (
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

        {/* CTA FINAL B2B */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
              ¿Tenés un evento o empresa en Bariloche?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mb-6">
              Envianos el logo o la idea por WhatsApp y te preparamos el boceto digital 3D y presupuesto sin compromiso.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleWhatsAppQuote('Final_CTA')}
                className="inline-flex items-center gap-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-orange-950/60 hover:scale-105 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                Enviar Mi Logo por WhatsApp
              </button>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors"
              >
                Ver Datos de Contacto y Taller
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default LlaverosCorporativos;
