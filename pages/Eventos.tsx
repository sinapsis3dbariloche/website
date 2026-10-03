import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';
import Lightbox, { LightboxImage } from '../components/Lightbox';
import SEO from '../components/SEO';
import { trackWhatsAppEventosClick } from '../utils/analytics';

interface EventCase {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  desc: string;
  elements: string[];
  image: string;
  whatsappMessage: string;
}

const EVENT_CASES: EventCase[] = [
  {
    id: 'cumpleanos',
    title: 'Cumpleaños y Fiestas Infantiles',
    badge: 'Kit Temático Integral',
    tagline: 'Mesa principal, sorpresitas y recuerdos unificados',
    desc: 'Unificamos la estética completa de la fiesta en la temática favorita del cumpleañero. En lugar de comprar elementos genéricos desparejos, diseñamos el conjunto armónico de souvenirs, adornos y papelería.',
    elements: [
      'Souvenirs 3D personalizados (figuras, animalitos flexi articulados, llaveros con nombre)',
      'Toppers de torta 3D con nombre en altorrelieve y número temático',
      'Cajitas golosineras personalizadas (milk box) con broche tridimensional',
      'Stickers troquelados y calcomanías impermeables para candy bar',
      'Centros de mesa temáticos estables'
    ],
    image: '/images/kit-cumpleanos-minecraft-personalizado-adornos-torta-3d.jpeg',
    whatsappMessage: 'Hola Sinapsis 3D! Estoy organizando un cumpleaños infantil y quiero cotizar el combo temático de 3D y gráfica.'
  },
  {
    id: 'egresados',
    title: 'Egresados, Colegios y Jardines',
    badge: 'Fin de Ciclo Inolvidable',
    tagline: 'Recuerdos emotivos y duraderos para promociones y actos',
    desc: 'Diseños que los chicos y familias guardan para siempre. Reemplazamos los diplomas o cintas tradicionales con medallas de altorrelieve, pines distintivos y recuerdos con la insignia del curso o colegio.',
    elements: [
      'Llaveros conmemorativos con el año, división y nombre grabado',
      'Medallas personalizadas de fin de ciclo con cinta y relieve 3D',
      'Pines, escarapelas patrias y distintivos para actos escolares',
      'Toppers de graduación con birrete 3D para la torta de egresados',
      'Etiquetas y papelería gráfica conmemorativa'
    ],
    image: '/images/toppers-de-graduacion-adornos-para-torta-egresados-3d.jpeg',
    whatsappMessage: 'Hola Sinapsis 3D! Estamos organizando el fin de curso / graduación de nuestro colegio y queremos cotizar medallas y souvenirs.'
  },
  {
    id: 'corporativos',
    title: 'Eventos Corporativos y Torneos Deportivos',
    badge: 'Imagen Institucional',
    tagline: 'Premios a medida, acreditaciones y presencia de marca',
    desc: 'Reconocimientos y trofeos que rompen con los modelos estandarizados de catálogo. Diseñamos con la silueta de tu disciplina, el isotipo de tu empresa y bases pesadas con placas de texto personalizadas.',
    elements: [
      'Trofeos a medida para 1º, 2º y 3º puesto con logos vectorizados',
      'Placas y estatuillas de reconocimiento institucional',
      'Merchandising funcional para acreditaciones (soportes móviles, llaveros)',
      'Identificadores de escritorio y señalética con identidad visual',
      'Premios deportivos (fútbol, básquet, vóley, trekking, carreras patagónicas)'
    ],
    image: '/images/trofeos-personalizados-futbol-impresion-3d.png',
    whatsappMessage: 'Hola Sinapsis 3D! Estamos organizando un torneo / evento corporativo y necesitamos cotizar trofeos a medida y regalos institucionales.'
  },
  {
    id: 'casamientos-15',
    title: 'Casamientos y Fiestas de 15 Años',
    badge: 'Ambientación Elegante',
    tagline: 'Detalles únicos para ambientar la noche más esperada',
    desc: 'Detalles visuales modernos que sorprenden a los invitados desde la recepción hasta la pista de baile. El equilibrio justo entre calidez gráfica y piezas tridimensionales delicadas.',
    elements: [
      'Identificadores y números de mesa 3D en tipografías elegantes',
      'Souvenirs calados multiuso (mariposas contenedoras perfumeras o golosineras)',
      'Agitadores de tragos luminosos y fluorescentes para barra de tragos',
      'Photobooth props y carteles fotográficos personalizados',
      'Cake toppers de boda o 15 años con iniciales entrelazadas'
    ],
    image: '/images/mariposas-contenedor-caladas-souvenirs-eventos-3d.png',
    whatsappMessage: 'Hola Sinapsis 3D! Estoy planificando una fiesta de 15 / boda y quiero cotizar identificadores de mesa, agitadores y souvenirs.'
  }
];

const Eventos: React.FC = () => {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const [selectedEventType, setSelectedEventType] = useState<string>('Cumpleaños Infantil');
  const [guestCount, setGuestCount] = useState<string>('30 personas');
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'Souvenirs 3D personalizados',
    'Topper de torta con relieve',
    'Cajitas personalizadas / packaging'
  ]);

  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleWhatsAppEventos = (customText?: string) => {
    const textToSend = customText || 'Hola! Estoy organizando un evento y quiero cotizar un combo de 3D y gráfica';
    trackWhatsAppEventosClick('Presupuesto_Evento', textToSend);
    const url = `https://wa.me/5492944914816?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleComboBuilderWhatsApp = () => {
    const itemsList = selectedItems.length > 0 ? selectedItems.join(', ') : 'Servicios combinados';
    const msg = `Hola! Estoy organizando un evento de tipo "${selectedEventType}" para aproximadamente ${guestCount}. Me gustaría cotizar un combo que incluya: ${itemsList}.`;
    trackWhatsAppEventosClick('Presupuesto_Evento', `Combo: ${selectedEventType} (${guestCount})`);
    const url = `https://wa.me/5492944914816?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEO 
        title="Productos para Eventos, Fiestas y Empresas en Bariloche | Sinapsis 3D"
        description="Soluciones integrales para eventos en Bariloche: souvenirs 3D, trofeos personalizados, toppers y gráfica para cumpleaños, egresados y empresas."
        canonical="https://www.sinapsis3dbariloche.com.ar/productos/eventos"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Soluciones Integrales para Eventos - Sinapsis 3D Bariloche",
          "serviceType": "Ambientación y souvenirs para eventos",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Sinapsis 3D Bariloche",
            "telephone": "+542944914816",
            "url": "https://www.sinapsis3dbariloche.com.ar/"
          },
          "areaServed": "San Carlos de Bariloche y Patagonia Argentina",
          "description": "Combos personalizados de impresión 3D y diseño gráfico para cumpleaños, colegios, bodas, 15 años y eventos corporativos."
        }}
      />
      
      <div className="pt-8 pb-16">
        {/* HERO SECTION EVENTOS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
            <i className="fa-solid fa-sparkles text-orange-500"></i>
            Solución Integral para Eventos en Bariloche
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase max-w-4xl mx-auto mb-6 text-balance">
            El combo perfecto: <span className="text-orange-500">Objetos 3D + Gráfica</span> en un solo lugar
          </h1>

          <p className="text-zinc-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
            Diseñamos y fabricamos recuerdos y ambientación completa para <strong className="text-white">cumpleaños, colegios, torneos y empresas</strong>. Combinamos la tridimensionalidad del 3D con papelería y packaging de alta calidad bajo la misma temática, sin intermediarios.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={() => handleWhatsAppEventos(
                'Hola! Estoy organizando un evento y quiero cotizar un combo de 3D y gráfica'
              )}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-orange-950/50 hover:scale-105 cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              Cotizá tu combo para eventos
            </button>
            <a
              href="#casos-uso"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold px-6 py-4 rounded-xl text-sm border border-zinc-700 transition-colors"
            >
              <i className="fa-solid fa-arrow-down text-orange-500"></i>
              Ver Casos de Uso y Ejemplos
            </a>
          </div>

          {/* Sinergia 3D + Gráfica Strip */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 text-xl shrink-0">
                  <i className="fa-solid fa-cube"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Volumen & Durabilidad 3D</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Souvenirs, llaveros, medallas y cake toppers táctiles con nombres en relieve que los invitados conservan durante años.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 text-xl shrink-0">
                  <i className="fa-solid fa-print"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Gráfica & Papelería Pro</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Stickers troquelados, tarjetas de agradecimiento, tags de mochila y packaging milk box impresos en alta definición.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 text-xl shrink-0">
                  <i className="fa-solid fa-palette"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Cero Desencuentro de Color</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Un único proveedor en Bariloche que alinea tipografías, colores y estilo. Ahorrás tiempo, fletes y desajustes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 CASOS DE USO PRINCIPALES */}
        <section id="casos-uso" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
              Propuestas Especializadas
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
              Soluciones según el Tipo de Celebración
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Descubrí cómo organizamos los combos según el público y la escala del evento.
            </p>
          </div>

          <div className="space-y-16">
            {EVENT_CASES.map((ev, index) => {
              const isEven = index % 2 === 1;
              return (
                <div 
                  key={ev.id}
                  className="bg-zinc-950 border border-zinc-800/80 rounded-3xl p-6 sm:p-10 relative overflow-hidden"
                >
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10`}>
                    {/* Media Preview */}
                    <div className="w-full lg:w-1/2">
                      <div 
                        className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-zinc-800 group cursor-pointer"
                        onClick={() => setActiveImage({ src: ev.image, title: ev.title, desc: ev.desc })}
                      >
                        <img 
                          src={ev.image} 
                          alt={ev.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute top-4 left-4 bg-orange-600/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow">
                          {ev.badge}
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-zinc-300 rounded-full w-9 h-9 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-between">
                      <div>
                        <span className="text-orange-500 font-bold text-xs uppercase tracking-wider block mb-2">
                          {ev.tagline}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                          {ev.title}
                        </h3>
                        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                          {ev.desc}
                        </p>

                        <div className="space-y-2.5 mb-8">
                          <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
                            Elementos incluidos en la propuesta:
                          </span>
                          {ev.elements.map((el, elIdx) => (
                            <div key={elIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                              <i className="fa-solid fa-circle-check text-orange-500 text-sm mt-0.5 shrink-0"></i>
                              <span>{el}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-zinc-900 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <button
                          onClick={() => handleWhatsAppEventos(ev.whatsappMessage)}
                          className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-orange-950/50 hover:scale-105 cursor-pointer"
                        >
                          <i className="fa-brands fa-whatsapp text-lg"></i>
                          Cotizar {ev.title.split(' ')[0]}
                        </button>
                        <span className="text-zinc-500 text-xs text-center sm:text-left">
                          Coordinamos temática y cantidad en Bariloche
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONSTRUCTOR INTERACTIVO DE COMBO PARA EVENTOS */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="relative rounded-3xl overflow-hidden border border-orange-500/30 bg-gradient-to-br from-zinc-900 via-zinc-950 to-orange-950/30 p-8 sm:p-12 shadow-2xl">
            <div className="max-w-2xl mb-8">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
                Cotizador Rápido y Flexible
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">
                Armá el combo a medida para tu fiesta
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Seleccioná qué elementos te interesan y cuántos invitados o destinatarios tenés en mente. Te enviamos la propuesta y el boceto sin costo.
              </p>
            </div>

            {/* Selector de Evento y Personas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-zinc-300 text-xs font-bold uppercase tracking-wider mb-2">
                  Tipo de Evento:
                </label>
                <select
                  value={selectedEventType}
                  onChange={(e) => setSelectedEventType(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
                >
                  <option value="Cumpleaños Infantil">Cumpleaños Infantil</option>
                  <option value="Egresados / Acto Escolar">Egresados / Acto Escolar</option>
                  <option value="Torneo Deportivo o Club">Torneo Deportivo o Club</option>
                  <option value="Evento Corporativo / Empresa">Evento Corporativo / Empresa</option>
                  <option value="Fiesta de 15 Años">Fiesta de 15 Años</option>
                  <option value="Casamiento / Boda">Casamiento / Boda</option>
                  <option value="Bautismo o Primer Añito">Bautismo o Primer Añito</option>
                </select>
              </div>

              <div>
                <label className="block text-zinc-300 text-xs font-bold uppercase tracking-wider mb-2">
                  Cantidad Estimada de Personas / Souvenirs:
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
                >
                  <option value="15 a 20 personas">15 a 20 personas (Reunión íntima)</option>
                  <option value="30 personas">30 personas (Estándar cumpleaños/aula)</option>
                  <option value="50 personas">50 personas (Salón / división doble)</option>
                  <option value="100 o más personas">100 o más personas (Gran evento / torneo)</option>
                </select>
              </div>
            </div>

            {/* Checklist de Elementos */}
            <div className="mb-8">
              <label className="block text-zinc-300 text-xs font-bold uppercase tracking-wider mb-3">
                Seleccioná los componentes que querés sumar a tu presupuesto:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Souvenirs 3D personalizados',
                  'Topper de torta con relieve',
                  'Cajitas personalizadas / packaging',
                  'Stickers troquelados y etiquetas',
                  'Centros de mesa temáticos',
                  'Trofeos y medallas deportivas',
                  'Agitadores luminosos de tragos',
                  'Pines y escarapelas escolares',
                  'Identificadores de mesa / nombres'
                ].map((item) => {
                  const isChecked = selectedItems.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleItem(item)}
                      className={`text-left p-3.5 rounded-xl border transition-all text-xs font-medium flex items-center justify-between cursor-pointer ${
                        isChecked 
                          ? 'bg-orange-600/20 border-orange-500 text-white' 
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                      }`}
                    >
                      <span>{item}</span>
                      <i className={`fa-solid ${isChecked ? 'fa-square-check text-orange-500' : 'fa-square text-zinc-700'} text-base ml-2`}></i>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Bar */}
            <div className="bg-zinc-950/80 rounded-2xl p-5 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-400 text-center sm:text-left">
                <span className="text-zinc-200 font-bold block mb-1">
                  Tu selección: {selectedEventType} ({guestCount})
                </span>
                <span>{selectedItems.length} componentes elegidos</span>
              </div>
              <button
                onClick={handleComboBuilderWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-xl shadow-green-950/50 hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                Cotizá tu combo para eventos
              </button>
            </div>
          </div>
        </section>

        {/* GALERÍA / TRABAJOS DE EVENTOS Y SOUVENIRS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
            Galería de <span className="text-orange-500">Eventos Realizados</span>
          </h2>
          <p className="text-zinc-400 mt-2 max-w-2xl mx-auto text-sm md:text-base">
            Inspirate con algunos de los trabajos terminados para fiestas, cumpleaños y torneos en Bariloche.
          </p>
        </div>

        <Portfolio 
          allowedCategories={['Souvenirs y Eventos', 'Trofeos y Medallas', 'Pastelería y Repostería']}
          onImageClick={(src, title, desc) => setActiveImage({ src, title, desc })} 
        />
      </div>

      <Lightbox activeImage={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
};

export default Eventos;
