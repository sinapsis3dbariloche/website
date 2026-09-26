import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import CategorySlider from '../components/CategorySlider';
import SEO from '../components/SEO';
import { trackWhatsAppClick } from '../utils/analytics';

const SOUVENIR_SUBSECTIONS = [
  {
    title: 'Adornos para Tortas (Cake Toppers)',
    image: '/images/topper-torta-personalizado-plim-plim.png',
    link: '/productos/pasteleria'
  },
  {
    title: 'Centros de Mesa y Ambientación',
    image: '/images/centros-de-mesa-infantiles-personalizados-fiestas-eventos.jpeg',
    link: '/productos/eventos'
  },
  {
    title: 'Llaveros y Recuerdos 3D',
    image: '/images/llaveros-plim-plim-impresion-3d-souvenirs-primer-anito.jpeg',
    link: '/productos/eventos'
  },
  {
    title: 'Artículos Escolares y Egresados',
    image: '/images/kit-etiquetas-y-llaveros-personalizados-para-mochilas-y-utiles.jpeg',
    link: '/productos/escolar'
  }
];

const FAQS = [
  {
    q: '¿Con cuánta anticipación debo hacer el pedido en Bariloche?',
    a: 'Recomendamos encargar con 7 a 15 días de anticipación como mínimo. Cada pieza se modela, se imprime en 3D en alta resolución y se personaliza artesanalmente para tu evento.'
  },
  {
    q: '¿Puedo elegir cualquier temática o personaje infantil?',
    a: '¡Sí! Diseñamos con la temática que más te guste: series, videojuegos, animé, películas, deportes, personajes infantiles o temáticas exclusivas. Todo se personaliza con el nombre y la edad del homenajeado.'
  },
  {
    q: '¿Puedo sumar invitados o unidades extras a los combos?',
    a: 'Absolutamente. Todos nuestros combos tienen base para 10 invitados y podés agregar la cantidad exacta de bolsitas, souvenirs, llaveros o toppers adicionales que necesites.'
  },
  {
    q: '¿Cómo es la entrega o retiro en San Carlos de Bariloche?',
    a: 'Podés retirar tu pedido coordinando en Bariloche (zona Altos del Cóndor / Centro) o consultar por entregas y envíos a toda la Patagonia y el país.'
  },
  {
    q: '¿Cómo pido mi cotización?',
    a: 'Tocá el botón de WhatsApp en el combo u opción que prefieras, o envianos un mensaje indicando tu fecha y temática. ¡Te respondemos en el día con el presupuesto personalizado!'
  }
];

const Souvenirs: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Schema.org FAQPage y Product data para Google
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        'name': 'Combos de Cumpleaños y Souvenirs 3D Personalizados',
        'image': 'https://www.sinapsis3dbariloche.com.ar/images/centros-de-mesa-infantiles-personalizados-fiestas-eventos.jpeg',
        'description': 'Combos para cumpleaños infantiles y souvenirs en 3D personalizados en San Carlos de Bariloche. Bolsitas golosineras, cake toppers multicapa, llaveros y sorpresas temáticas.',
        'brand': {
          '@type': 'Brand',
          'name': 'Sinapsis 3D'
        },
        'offers': {
          '@type': 'AggregateOffer',
          'priceCurrency': 'ARS',
          'availability': 'https://schema.org/InStock',
          'areaServed': 'Bariloche, Río Negro, Argentina'
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': FAQS.map((faq) => ({
          '@type': 'Question',
          'name': faq.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Souvenirs 3D en Bariloche | Combos Cumpleaños y Fiestas | Sinapsis"
        description="Combos de cumpleaños y souvenirs personalizados en 3D en Bariloche: bolsitas, cake toppers multicapa, llaveros, animalitos flexi y lápices 3D. ¡Pedí tu presupuesto hoy!"
        canonical="https://www.sinapsis3dbariloche.com.ar/souvenirs"
        schema={structuredData}
      />
      
      <div className="pt-8 sm:pt-12">
        {/* Hero Header */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            Edición Fiestas & Cumpleaños en Bariloche
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
            Souvenirs y Combos para <span className="text-orange-500">Eventos & Cumpleaños</span>
          </h1>

          <p className="text-zinc-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-6 font-medium">
            ¡Todo listo para que el próximo cumple sea inolvidable y sin estrés! 🎉✨ Diseñamos opciones 100% personalizadas para que resuelvas la mesa principal, las sorpresitas y los recuerdos en un solo lugar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-400 font-semibold mb-8">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full">
              <i className="fa-solid fa-check text-orange-500"></i> Vos elegís la temática
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full">
              <i className="fa-solid fa-location-dot text-orange-500"></i> Retiro en Bariloche
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full">
              <i className="fa-solid fa-hourglass-half text-orange-500"></i> Pedidos con anticipación
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full">
              <i className="fa-solid fa-users text-orange-500"></i> Sumá invitados extras
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Quisiera consultar presupuesto para souvenirs y combos de cumpleaños. Mi fecha estimada es: _____ y la temática: _____')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('souvenirs_hero_cta', 'Pedir Presupuesto WhatsApp Souvenirs')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all shadow-xl shadow-orange-950/50 hover:scale-105"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              Pedir Presupuesto por WhatsApp
            </a>
            <a
              href="#combos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-semibold px-6 py-4 rounded-2xl text-sm border border-zinc-800 transition-colors"
            >
              <i className="fa-solid fa-gift text-orange-500"></i>
              Ver Opciones de Combos
            </a>
          </div>
        </section>

        {/* SECTION 1: COMBOS DE CUMPLEAÑOS (PUNTO 2) */}
        <section id="combos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-orange-500 font-extrabold text-xs uppercase tracking-widest block mb-2">
              Solución Integral para tu Fiesta
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
              Combos de Cumpleaños 100% Personalizados
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Diseñamos 3 alternativas pensadas para cada tipo de festejo. Vos elegís el personaje o temática, nosotros nos encargamos de los detalles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Combo 1: CUMPLE CLÁSICO */}
            <div className="relative rounded-3xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-950/50">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-xl font-black mb-5">
                  🎈
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Combo 1</span>
                <h3 className="text-2xl font-black text-white mt-1 mb-3">CUMPLE CLÁSICO</h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Ideal para resolver la mesa dulce y las sorpresitas esenciales de los chicos.
                </p>

                <div className="space-y-3.5 mb-8">
                  <div className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-orange-500 text-base mt-0.5 shrink-0"></i>
                    <span className="text-sm text-zinc-200 font-medium"><strong>10 Bolsitas golosineras</strong> personalizadas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-orange-500 text-base mt-0.5 shrink-0"></i>
                    <span className="text-sm text-zinc-200 font-medium"><strong>Set de 4 toppers</strong> para torta multicapa</span>
                  </div>
                  <div className="flex items-start gap-3 text-zinc-400 text-xs pt-2 border-t border-zinc-800/80">
                    <i className="fa-solid fa-circle-plus text-zinc-500 mt-0.5 shrink-0"></i>
                    <span>Podés sumar más bolsitas o toppers extras según la cantidad de invitados.</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4 text-center">
                  <span className="inline-block text-xs font-semibold px-3 py-1 bg-zinc-800 text-zinc-300 rounded-lg">
                    Cotización a medida por WhatsApp
                  </span>
                </div>
                <a
                  href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Quisiera consultar presupuesto y disponibilidad para el Combo 1: CUMPLE CLÁSICO. Mi temática es: [____], Fecha estimada: [____], Cantidad de chicos: [____]')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('combo_1_clasico', 'Combo 1 Cumple Clásico')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all duration-200"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  Pedir Presupuesto Combo 1
                </a>
              </div>
            </div>

            {/* Combo 2: CUMPLE FIESTA (Destacado) */}
            <div className="relative rounded-3xl bg-gradient-to-b from-orange-950/30 via-zinc-900 to-zinc-900 border-2 border-orange-500/80 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-orange-950/40 relative scale-100 md:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                El Más Elegido ⭐
              </div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 text-xl font-black mb-5">
                  🌟
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Combo 2</span>
                <h3 className="text-2xl font-black text-white mt-1 mb-3">CUMPLE FIESTA</h3>
                <p className="text-xs text-zinc-300 mb-6">
                  El pack completo con el souvenir estrella en 3D que los invitados se llevan puesto.
                </p>

                <div className="space-y-3.5 mb-8">
                  <div className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-orange-400 text-base mt-0.5 shrink-0"></i>
                    <span className="text-sm text-zinc-100 font-medium"><strong>10 Bolsitas golosineras</strong> personalizadas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-orange-400 text-base mt-0.5 shrink-0"></i>
                    <span className="text-sm text-zinc-100 font-medium"><strong>Set de 4 toppers</strong> para torta multicapa</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-orange-400 text-base mt-0.5 shrink-0"></i>
                    <span className="text-sm text-zinc-100 font-medium"><strong>10 Llaveros temáticos</strong> impresos en 3D</span>
                  </div>
                  <div className="flex items-start gap-3 text-zinc-400 text-xs pt-2 border-t border-zinc-800/80">
                    <i className="fa-solid fa-circle-plus text-orange-400 mt-0.5 shrink-0"></i>
                    <span>Vos elegís el personaje, color y nombres personalizados.</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4 text-center">
                  <span className="inline-block text-xs font-bold px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg border border-orange-500/30">
                    Presupuesto rápido e inmediato
                  </span>
                </div>
                <a
                  href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Quisiera consultar presupuesto y disponibilidad para el Combo 2: CUMPLE FIESTA. Mi temática es: [____], Fecha estimada: [____], Cantidad de chicos: [____]')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('combo_2_fiesta', 'Combo 2 Cumple Fiesta')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-orange-950/60 hover:scale-[1.02]"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  Pedir Presupuesto Combo 2
                </a>
              </div>
            </div>

            {/* Combo 3: CUMPLE TOTAL */}
            <div className="relative rounded-3xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-950/50">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-xl font-black mb-5">
                  🚀
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Combo 3</span>
                <h3 className="text-2xl font-black text-white mt-1 mb-3">CUMPLE TOTAL</h3>
                <p className="text-xs text-zinc-400 mb-6">
                  La experiencia definitiva para la fiesta: mesa decorada, souvenirs 3D y diversión con tatuajes.
                </p>

                <div className="space-y-3.5 mb-8">
                  <div className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-orange-500 text-base mt-0.5 shrink-0"></i>
                    <span className="text-sm text-zinc-200 font-medium"><strong>10 Bolsitas golosineras</strong> personalizadas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-orange-500 text-base mt-0.5 shrink-0"></i>
                    <span className="text-sm text-zinc-200 font-medium"><strong>Set de 4 toppers</strong> para torta multicapa</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-orange-500 text-base mt-0.5 shrink-0"></i>
                    <span className="text-sm text-zinc-200 font-medium"><strong>10 Llaveros temáticos</strong> impresos en 3D</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-orange-500 text-base mt-0.5 shrink-0"></i>
                    <span className="text-sm text-zinc-200 font-medium"><strong>20 Tatuajes temporales</strong> al agua a tono</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4 text-center">
                  <span className="inline-block text-xs font-semibold px-3 py-1 bg-zinc-800 text-zinc-300 rounded-lg">
                    Cotización a medida por WhatsApp
                  </span>
                </div>
                <a
                  href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Quisiera consultar presupuesto y disponibilidad para el Combo 3: CUMPLE TOTAL. Mi temática es: [____], Fecha estimada: [____], Cantidad de chicos: [____]')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('combo_3_total', 'Combo 3 Cumple Total')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all duration-200"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  Pedir Presupuesto Combo 3
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-circle-info text-orange-500 text-lg"></i>
              <span>¿Tenés una cantidad diferente de invitados o querés sumar centros de mesa? Te armamos un combo personalizado en minutos.</span>
            </div>
            <a
              href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Quiero armar un combo personalizado a medida para mi evento.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 font-bold hover:underline shrink-0"
            >
              Consultar combo a medida →
            </a>
          </div>
        </section>

        {/* SECTION 2: SOUVENIRS ORIGINALES Y ÚTILES (PUNTO 2) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-orange-500 font-extrabold text-xs uppercase tracking-widest block mb-2">
              Recuerdos que Perdurar
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
              ¿Buscás souvenirs originales, útiles y que los chicos no tiren al día siguiente?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Conocé nuestras opciones temáticas en 3D pensadas para que cada invitado se lleve un recuerdo único a casa. Podés pedirlos por pack cerrado de 10 unidades o combinarlos con tus combos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Opción 1: Llaveros 3D */}
            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col group hover:border-orange-500/50 transition-all duration-300">
              <div className="relative h-48 bg-zinc-950 overflow-hidden">
                <img 
                  src="/images/llaveros-plim-plim-impresion-3d-souvenirs-primer-anito.jpeg" 
                  alt="Llaveros 3D personalizados souvenirs Bariloche" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-zinc-900/90 text-orange-400 text-xs font-black px-3 py-1 rounded-full border border-zinc-700">
                  🔑 Llaveros 3D
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Llaveros 3D Temáticos</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    Ideales para colgar en mochilas, cartucheras y llaves. Fabricados en material resistente con argolla metálica sin filo.
                  </p>
                  <ul className="text-xs text-zinc-300 space-y-1.5 mb-6">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-orange-500"></i> Pack x10 unidades</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-orange-500"></i> Posibilidad de agregar adicionales</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-orange-500"></i> Nombre grabado opcional</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Quisiera consultar presupuesto para pack de Llaveros 3D para souvenirs. Mi temática es: [____]')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('souvenir_llaveros_3d', 'Consultar Llaveros 3D')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-orange-600 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-colors"
                >
                  <i className="fa-brands fa-whatsapp text-base"></i>
                  Pedir Presupuesto Llaveros
                </a>
              </div>
            </div>

            {/* Opción 2: Animalitos Flexi */}
            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col group hover:border-orange-500/50 transition-all duration-300">
              <div className="relative h-48 bg-zinc-950 overflow-hidden">
                <img 
                  src="/images/animalitos-flexi-jardin-didactico-impresion-3d.png" 
                  alt="Animalitos Flexi articulados antiestrés 3D" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-zinc-900/90 text-orange-400 text-xs font-black px-3 py-1 rounded-full border border-zinc-700">
                  🦎 Animalitos Flexi (4 cm)
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Animalitos Articulados</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    Articulados, divertidos y antiestrés. ¡El favorito indiscutido de los chicos por su movimiento continuo en una sola pieza!
                  </p>
                  <ul className="text-xs text-zinc-300 space-y-1.5 mb-6">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-orange-500"></i> Pack x10 unidades</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-orange-500"></i> Dinosaurios, dragones, mascotas</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-orange-500"></i> Colores llamativos a elección</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Quisiera consultar presupuesto para pack de Animalitos Flexi 3D para souvenirs. Fecha de cumple: [____]')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('souvenir_animalitos_flexi', 'Consultar Animalitos Flexi')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-orange-600 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-colors"
                >
                  <i className="fa-brands fa-whatsapp text-base"></i>
                  Pedir Presupuesto Flexis
                </a>
              </div>
            </div>

            {/* Opción 3: Lápices con topper 3D */}
            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col group hover:border-orange-500/50 transition-all duration-300">
              <div className="relative h-48 bg-zinc-950 overflow-hidden">
                <img 
                  src="/images/lapiz-topper-3d-stitch.png" 
                  alt="Lápices con topper 3D temáticos souvenirs" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-zinc-900/90 text-orange-400 text-xs font-black px-3 py-1 rounded-full border border-zinc-700">
                  ✏️ Lápices con Topper 3D
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Lápices Temáticos 3D</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    Forrados con gráfica a juego y topper desmontable impreso en 3D. Un recuerdo 100% útil que usan en el cole y la cartuchera.
                  </p>
                  <ul className="text-xs text-zinc-300 space-y-1.5 mb-6">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-orange-500"></i> Pack x10 unidades</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-orange-500"></i> Gráfica full color en el lápiz</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-orange-500"></i> Topper reutilizable en otros lápices</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Quisiera consultar presupuesto para pack de Lápices con Topper 3D. Temática: [____]')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('souvenir_lapices_topper', 'Consultar Lápices Topper 3D')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-orange-600 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-colors"
                >
                  <i className="fa-brands fa-whatsapp text-base"></i>
                  Pedir Presupuesto Lápices
                </a>
              </div>
            </div>

            {/* Opción 4: Señaladores 3D */}
            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col group hover:border-orange-500/50 transition-all duration-300">
              <div className="relative h-48 bg-zinc-950 overflow-hidden">
                <img 
                  src="/images/marcapaginas-harry-potter-impresion-3d-clip.jpeg" 
                  alt="Señaladores marcapáginas 3D para regalar" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-zinc-900/90 text-orange-400 text-xs font-black px-3 py-1 rounded-full border border-zinc-700">
                  📖 Señaladores 3D
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Señaladores & Clips 3D</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    Presentados en tarjetón base calado listo para regalar. Ideales para libros, cuadernos escolares y fanáticos de la lectura.
                  </p>
                  <ul className="text-xs text-zinc-300 space-y-1.5 mb-6">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-orange-500"></i> Pack x10 unidades</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-orange-500"></i> Presentación lista para entregar</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-check text-orange-500"></i> Diseños de películas, series y logos</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Quisiera consultar presupuesto para pack de Señaladores 3D en tarjetón. Temática: [____]')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('souvenir_senaladores_3d', 'Consultar Señaladores 3D')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-orange-600 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-colors"
                >
                  <i className="fa-brands fa-whatsapp text-base"></i>
                  Pedir Presupuesto Señaladores
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-orange-950/20 via-zinc-900 to-zinc-900 p-6 rounded-3xl border border-zinc-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-white font-bold text-sm sm:text-base">💡 Detalles importantes para tu pedido:</h4>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Vos elegís la temática o personaje • Consultá por personalización con nombre en tus opciones favoritas • Podés pedirlos por pack cerrado o combinarlos con nuestros combos de cumpleaños.
              </p>
            </div>
            <a
              href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Tengo un cumple cerca y me gustaría reservar mi fecha con anticipación. Temática: [____], Fecha: [____]')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm transition-all shrink-0 hover:scale-105"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              Reservar Fecha por WhatsApp
            </a>
          </div>
        </section>

        {/* SECTION 3: EXPLORAR SUBCATEGORÍAS TEMÁTICAS (PUNTO 1) */}
        <section className="mb-16">
          <CategorySlider 
            title="Opciones por Tipo de Producto" 
            subtitle="Adornos para tortas, centros de mesa, recuerdos escolares y más"
            categories={SOUVENIR_SUBSECTIONS} 
          />
        </section>

        {/* SECTION 4: GALERÍA DE TRABAJOS DE SOUVENIRS Y EVENTOS */}
        <section className="mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
            <span className="text-orange-500 font-extrabold text-xs uppercase tracking-widest block mb-2">
              Fotos Reales de Nuestros Clientes
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Galería de Souvenirs & Eventos
            </h2>
            <p className="text-zinc-400 text-sm max-w-2xl mx-auto mt-2">
              Trabajos entregados en San Carlos de Bariloche. Hacé clic en cualquier foto para verla en detalle.
            </p>
          </div>
          <Portfolio 
            forceCategory="Souvenirs y Eventos" 
            onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} 
          />
        </section>

        {/* SECTION 5: PREGUNTAS FRECUENTES (FAQ INTERACTIVO + SEO) */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-10">
            <span className="text-orange-500 font-extrabold text-xs uppercase tracking-widest block mb-2">
              Respondemos tus Dudas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Preguntas Frecuentes sobre Souvenirs y Fiestas
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base hover:text-orange-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <i className={`fa-solid fa-chevron-down text-xs text-orange-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-800/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-zinc-400 text-xs sm:text-sm mb-4">¿Tenés otra consulta o una idea especial en mente?</p>
            <a
              href={`https://wa.me/5492944914816?text=${encodeURIComponent('Hola Sinapsis 3D! Tengo una consulta sobre los souvenirs.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('faq_whatsapp_help', 'Consulta FAQ Souvenirs')}
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold text-sm"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              Hablar directamente con nosotros por WhatsApp →
            </a>
          </div>
        </section>
      </div>

      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default Souvenirs;
