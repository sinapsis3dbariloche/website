import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import { trackWhatsAppClick } from '../utils/analytics';

interface TrofeoModel {
  title: string;
  badge: string;
  desc: string;
  features: string[];
  image: string;
  category: string;
}

const TROFEOS_DATA: TrofeoModel[] = [
  {
    title: 'Trofeos de Fútbol y Torneos Bariloche',
    badge: '1º, 2º y 3º Puesto',
    desc: 'Sets escalonados de copas y trofeos de fútbol con pelota esférica en altorrelieve, base pedestal pesada en negro texturizado y placa grabada con escudo del torneo o club.',
    features: ['Set escalonado de 3 alturas', 'Grabado de placa con fecha y categoría', 'Detalles en dorado, plata y bronce', 'Base maciza antivuelco'],
    image: '/images/trofeos-personalizados-futbol-impresion-3d.png',
    category: 'Fútbol'
  },
  {
    title: 'Trofeos y Medallas de Básquet',
    badge: 'Torneos & Ligas',
    desc: 'Diseño tridimensional con silueta de pelota de básquet en textura naranja vibrante sobre pedestal de doble tono. Combina con medallas colgantes personalizadas para todo el plantel.',
    features: ['Relieve y textura auténtica de pelota', 'Medallas con calado para cinta patriótica o del club', 'Personalización de nombres por jugador', 'Resistencia al traslado y festejos'],
    image: '/images/trofeos-y-medallas-de-basquet-personalizados-impresion-3d.jpeg',
    category: 'Básquet'
  },
  {
    title: 'Trofeos Corporativos y Premios Institucionales',
    badge: 'Empresas & Eventos',
    desc: 'Premios con diseño escultórico vanguardista para reconocimientos por trayectoria, metas comerciales, congresos o galardones de fin de año de empresas en Bariloche.',
    features: ['Isotipo o logo corporativo en 3D', 'Acabados metalizados satinados de lujo', 'Placa conmemorativa de alta resolución', 'Entrega en caja individual opcional'],
    image: '/images/trofeos-personalizados-premios-impresion-3d.png',
    category: 'Corporativo'
  },
  {
    title: 'Souvenirs y Medallas de Hockey y Deportes de Montaña',
    badge: 'Souvenirs Deportivos',
    desc: 'Piezas personalizadas con palos de hockey, esquíes, tablas de snowboard o siluetas de montaña para carreras de trail running y eventos deportivos de la Patagonia.',
    features: ['Diseño a medida según la disciplina', 'Textos y año de edición grabados', 'Opción llavero o medalla conmemorativa', 'Packs por equipo y delegación'],
    image: '/images/llaveros-hockey-personalizados-impresion-3d.png',
    category: 'Deportes Varios'
  }
];

const FAQS_TROFEOS = [
  {
    q: '¿Por qué elegir trofeos impresos en 3D en Bariloche en vez de copas de chapa o plástico genérico?',
    a: 'Los trofeos estándar de catálogo suelen ser figuras genéricas de plástico dorado hueco que todos los torneos repiten. Con la impresión 3D en Sinapsis creamos trofeos con el isotipo exacto de tu club, las medidas que vos definas, pedestales con peso y una presencia moderna y sólida que los campeones exhiben con orgullo.'
  },
  {
    q: '¿Pueden incluir el escudo de nuestro club y el nombre del torneo en la placa?',
    a: 'Sí, absolutamente. Podemos incluir el escudo en relieve multicolor en la parte superior y diseñar la placa frontal con tipografías vectoriales nítidas indicando: Nombre del Torneo, Año, Categoría y Puesto (Campeón, Subcampeón, Mejor Jugador, Goleador o Valla Menos Vencida).'
  },
  {
    q: '¿Cuál es el tiempo de producción para un torneo deportivo?',
    a: 'Para un set habitual de premiación (1º, 2º, 3º puesto más distinciones individuales y medallas), el plazo de producción estándar es de 3 a 7 días hábiles. Recomendamos contactarnos con 1 a 2 semanas de anticipación para coordinar los detalles con tranquilidad.'
  },
  {
    q: '¿Hacen medallas personalizadas para todos los participantes?',
    a: 'Sí. Fabricamos medallas 3D personalizadas de participación o premiación con orificio y cinta lista para colgar. Podés combinarlas con el mismo diseño del trofeo principal para lograr una identidad visual uniforme en tu entrega de premios.'
  },
  {
    q: '¿Tienen punto de retiro en Bariloche o hacen envíos?',
    a: 'Entregamos en nuestro taller en Altos del Cóndor o coordinamos puntos de encuentro en San Carlos de Bariloche y Dina Huapi. También despachamos por Vía Cargo u expresos a toda la región (Neuquén, Chubut, Santa Cruz y Tierra del Fuego).'
  }
];

const TrofeosPersonalizados: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('Torneo de Fútbol');

  const handleWhatsAppQuote = (subject: string) => {
    trackWhatsAppClick('Trofeos_Bariloche_Quote', subject);
    const text = `Hola Sinapsis 3D! Me comunico desde Bariloche para cotizar trofeos y medallas personalizadas para: ${subject}. ¿Podrían pasarme opciones, medidas y valores estimados?`;
    window.open(`https://wa.me/5492944914816?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEO 
        title="Trofeos Personalizados Bariloche | Medallas y Premiaciones Deportivas 3D"
        description="Diseño y fabricación de trofeos y medallas personalizadas con impresión 3D en Bariloche. Copas, placas y reconocimientos deportivos y corporativos a medida. Cotizá en el día."
        canonical="https://www.sinapsis3dbariloche.com.ar/trofeos-personalizados-bariloche"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Trofeos y Medallas Personalizadas en Bariloche - Sinapsis 3D",
            "image": "https://www.sinapsis3dbariloche.com.ar/images/trofeos-personalizados-futbol-impresion-3d.png",
            "description": "Trofeos deportivos y corporativos impresos en 3D a medida en Bariloche con pedestales pesados y grabado de placas conmemorativas.",
            "brand": {
              "@type": "Brand",
              "name": "Sinapsis 3D"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "ARS",
              "price": "8500",
              "lowPrice": "3500",
              "highPrice": "24000",
              "offerCount": "4"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS_TROFEOS.map(faq => ({
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
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-orange-600/15 blur-[140px] rounded-full pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
                <i className="fa-solid fa-trophy text-orange-500"></i>
                Premiaciones Deportivas & Distinciones en Bariloche
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase mb-6 leading-tight">
                Trofeos Personalizados en Bariloche <span className="block text-orange-500 text-2xl sm:text-4xl lg:text-5xl mt-2 font-bold normal-case tracking-normal">Medallas, Copas y Reconocimientos en 3D</span>
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                Transformá la entrega de premios de tu torneo, liga o empresa con trofeos únicos diseñados y fabricados en San Carlos de Bariloche. Modelado con el <strong>escudo de tu club o empresa, pedestales macizos texturizados, placas conmemorativas grabadas</strong> y medallas a juego.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <button
                  onClick={() => handleWhatsAppQuote('Presupuesto_Torneo')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-orange-950/60 hover:scale-105 cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                  Cotizar Trofeos y Medallas por WhatsApp
                </button>
                <Link
                  to="/portfolio?category=Trofeos+y+Medallas"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-semibold px-6 py-4 rounded-xl text-sm border border-zinc-800 transition-colors"
                >
                  <i className="fa-solid fa-medal text-orange-500"></i>
                  Ver Premios en Portfolio
                </Link>
              </div>

              {/* Highlights Pill Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-t border-zinc-900 text-left">
                <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-xl flex items-center gap-3">
                  <i className="fa-solid fa-shield text-orange-500 text-lg shrink-0"></i>
                  <span className="text-xs font-semibold text-zinc-300">Escudo y colores de tu club</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-xl flex items-center gap-3">
                  <i className="fa-solid fa-ranking-star text-orange-500 text-lg shrink-0"></i>
                  <span className="text-xs font-semibold text-zinc-300">Sets 1º, 2º y 3º puesto</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-xl flex items-center gap-3">
                  <i className="fa-solid fa-stamp text-orange-500 text-lg shrink-0"></i>
                  <span className="text-xs font-semibold text-zinc-300">Placas grabadas personalizadas</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-800/80 p-3.5 rounded-xl flex items-center gap-3">
                  <i className="fa-solid fa-weight-hanging text-orange-500 text-lg shrink-0"></i>
                  <span className="text-xs font-semibold text-zinc-300">Bases macizas antivuelco</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARATIVA 3D VS CATÁLOGO METÁLICO CLÁSICO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-12">
          <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
                  Diferenciación para tu Torneo
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
                  Premiaciones memorables: salí del trofeo estándar
                </h2>
                <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Cuando un atleta o equipo gana un campeonato, el trofeo representa meses de entrenamiento y esfuerzo. Entregar una copa genérica armada con piezas prefabricadas le quita emoción y valor al logro.
                  </p>
                  <p>
                    En Sinapsis 3D modelamos <strong>piezas originales que representan con exactitud la disciplina</strong>: texturas de gajos en pelotas de fútbol, agarres de básquetbol, siluetas de cerros de Bariloche para carreras o el imagotipo de tu empresa. Con pedestales estables, combinación de tonos metalizados y placa conmemorativa eterna.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                <div className="p-5 rounded-2xl bg-zinc-950 border border-orange-500/30 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-award text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">Orgullo de exhibición</h3>
                    <p className="text-zinc-400 text-xs">Un diseño personalizado luce espectacular en vitrinas, redes sociales y fotos grupales del podio.</p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-medal text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">Medallas coordinadas</h3>
                    <p className="text-zinc-400 text-xs">Fabricamos las medallas con el mismo lenguaje gráfico para que cada integrante se lleve una pieza única.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATÁLOGO DE TROFEOS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
              Líneas de Premiación
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
              Modelos de Trofeos Fabricados en Bariloche
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Hacé clic en cualquier imagen para ver los acabados de relieve y pedestales en detalle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TROFEOS_DATA.map((item, idx) => (
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

                  <div className="p-6 sm:p-8">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-zinc-800">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
                          <i className="fa-solid fa-check text-orange-500 text-xs"></i>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={() => handleWhatsAppQuote(item.title)}
                    className="w-full py-3 px-4 bg-zinc-800 hover:bg-orange-600 text-zinc-200 hover:text-white rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                    Cotizar Trofeos para {item.category}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SELECTOR DE DISCIPLINA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-16">
          <div className="bg-zinc-900 border border-orange-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
                Presupuesto a Medida
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                ¿Qué disciplina o evento vas a premiar?
              </h2>
              <p className="text-zinc-400 text-sm">
                Seleccioná tu rubro y te enviamos por WhatsApp opciones de diseño con los valores de 1º, 2º y 3º puesto.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {[
                'Torneo de Fútbol',
                'Torneo de Básquet',
                'Evento Corporativo',
                'Trail / Carrera Montaña',
                'Torneo de Pádel',
                'Torneo de Hockey',
                'E-Sports / Gaming',
                'Graduación / Colegio'
              ].map((discipline) => (
                <button
                  key={discipline}
                  onClick={() => setSelectedDiscipline(discipline)}
                  className={`py-3 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedDiscipline === discipline 
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-950/60 scale-102 border-orange-500' 
                      : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white'
                  }`}
                >
                  {discipline}
                </button>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => handleWhatsAppQuote(selectedDiscipline)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-sm sm:text-base transition-all shadow-xl shadow-orange-950/60 hover:scale-105 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Consultar Trofeos para {selectedDiscipline}
              </button>
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES (FAQ ACCORDION) */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
          <div className="text-center mb-10">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
              Respuestas rápidas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Preguntas Frecuentes sobre Trofeos en Bariloche
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS_TROFEOS.map((faq, idx) => (
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
              ¿Organizando una premiación en Bariloche?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mb-6">
              Contactanos con la fecha y disciplina de tu evento. Te enviamos propuestas visuales y cotización en el día.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleWhatsAppQuote('Premiacion_Proxima')}
                className="inline-flex items-center gap-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-orange-950/60 hover:scale-105 cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                Cotizar Premiación por WhatsApp
              </button>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold px-6 py-3.5 rounded-xl text-sm transition-colors"
              >
                Ver Contacto y Ubicación
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default TrofeosPersonalizados;
