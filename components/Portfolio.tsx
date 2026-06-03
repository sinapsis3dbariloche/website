import React from 'react';
import { PORTFOLIOS } from '../constants';

interface PortfolioProps {
  onImageClick?: (src: string, title: string, desc?: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onImageClick }) => {
  const specialties = [
    { title: 'Souvenirs Híbridos', desc: 'Toppers de torta y souvenirs que combinan impresión 3D con gráfica de alta definición para un acabado premium.', icon: 'fa-cake-candles' },
    { title: 'Trofeos e Identidad', desc: 'Medallas, trofeos y llaveros institucionales personalizados para clubes, empresas y eventos deportivos.', icon: 'fa-trophy' },
    { title: 'Kits Escolares 3D', desc: 'Tags para mochilas y cartucheras con nombre en relieve, ultra resistentes y 100% personalizados.', icon: 'fa-graduation-cap' },
    { title: 'Diseño Técnico', desc: 'Soportes, repuestos y prototipos funcionales desarrollados con precisión para necesidades específicas.', icon: 'fa-gears' },
  ];

  // Helper hook array state to track image errors and filters
  const [failedImages, setFailedImages] = React.useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = React.useState<string>('Todos');

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Galería completa de 18 trabajos reales con detalles técnicos personalizados (Caption / Pie de página)
  const realWorks = [
    {
      id: 'trofeos-futbol',
      title: 'Colección de Trofeos de Fútbol 3D',
      desc: 'Trofeos de 1º, 2º y 3º puesto personalizados impresos en 3D en Bariloche, con diseño de pelota esférica de fútbol, sobre pedestales negros con placas texturizadas hechas a medida.',
      category: 'Deportivos y Premios',
      tags: ['Pelota 3D', 'Alta Densidad', 'Pintado a mano', 'Deportivos'],
      imagePath: '/images/trofeos-personalizados-futbol-impresion-3d.png',
      seoFilename: 'trofeos-personalizados-futbol-impresion-3d.png',
      detail: 'Modelado 3D de esferas y bases modulares. Fabricado con ensamble encastrado por color y plaques de relieve hechas a mano.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 select-none">
          <i className="fa-solid fa-trophy text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Trofeos de Fútbol</span>
        </div>
      )
    },
    {
      id: 'trofeos-basquet',
      title: 'Trofeos y Medallas de Básquet',
      desc: 'Diseño y fabricación íntegra de trofeos para torneos de Básquetbol con silueta y relieve de pelota en color naranja vibrante sobre pedestales negros texturizados de doble tono.',
      category: 'Deportivos y Premios',
      tags: ['Básquet 3D', 'Torneos', 'Medallas', 'Relieve'],
      imagePath: '/images/trofeos-y-medallas-de-basquet-personalizados-impresion-3d.jpeg',
      seoFilename: 'trofeos-y-medallas-de-basquet-personalizados-impresion-3d.jpeg',
      detail: 'Impresión en capas de alta resolución con filamentos PLA premium combinados para un acabado deportivo impecable sin imperfecciones.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 select-none">
          <i className="fa-solid fa-trophy text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Trofeo Básquet</span>
        </div>
      )
    },
    {
      id: 'llaveros-empresas',
      title: 'Llaveros Personalizados Corporativos',
      desc: 'Llaveros promocionales con relieve de marca, excelente rigidez y doble color para marcas, alojamientos turísticos, clubes o empresas en San Carlos de Bariloche.',
      category: 'Corporativo y Marcas',
      tags: ['Llaveros 3D', 'Alta Definición', 'Doble Color', 'Eventos'],
      imagePath: '/images/llaveros-personalizados-para-empresas-instituciones-impresion-3d.jpeg',
      seoFilename: 'llaveros-personalizados-para-empresas-instituciones-impresion-3d.jpeg',
      detail: 'Llaveros de doble extrusión directa. Logotipo comercial con relieve nítido sobre cuerpo rígido de alta fusión térmica.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-key text-4xl text-orange-500/50 mb-3 animate-bounce"></i>
          <span className="text-zinc-400 text-xs font-bold">Llaveros de Marca</span>
        </div>
      )
    },
    {
      id: 'llaveros-corporativos-logo',
      title: 'Llaveros Corporativos con Logo',
      desc: 'Regalos empresariales únicos de excelente visibilidad para marcas y municipios. Llaveros impresos con relieve y precisión para identidad corporativa e institucional.',
      category: 'Corporativo y Marcas',
      tags: ['Logo Grabado', 'Institucional', 'Merchandising'],
      imagePath: '/images/llaveros-corporativos-con-logo-regalos-empresariales-3d.jpeg',
      seoFilename: 'llaveros-corporativos-con-logo-regalos-empresariales-3d.jpeg',
      detail: 'Tratamiento vectorial de logotipos comerciales y micro-impresión 3D a doble cara. Letras perfectamente legibles sin rebabas.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-key text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Llaveros Corporativos</span>
        </div>
      )
    },
    {
      id: 'soportes-celular',
      title: 'Soportes de Celular Institucionales',
      desc: 'Soportes móviles personalizados con grabado o logo en relieve. Un regalo institucional único, funcional y de excelente visibilidad para oficinas y marcas regionales.',
      category: 'Corporativo y Marcas',
      tags: ['Soportes Móviles', 'Regalos', 'Utilitarios', 'Oficina'],
      imagePath: '/images/soportes-celular-personalizados-municipales-regalos-institucionales.jpeg',
      seoFilename: 'soportes-celular-personalizados-municipales-regalos-institucionales.jpeg',
      detail: 'Modelado ergonómico optimizado para smartphones con ranura de carga. Impreso en material de bajo peso y alta resistencia al impacto.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-mobile-screen-button text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Soporte de Celular</span>
        </div>
      )
    },
    {
      id: 'marcapaginas-harry-potter',
      title: 'Marcapáginas Harry Potter con Clip',
      desc: 'Señaladores y clips de lectura coleccionables con logos temáticos impresos en 3D de alta definición, el souvenir perfecto para fanáticos de la saga.',
      category: 'Souvenirs y Cumpleaños',
      tags: ['Harry Potter', 'Sagas', 'Clips de Lectura', 'Coleccionables'],
      imagePath: '/images/marcapaginas-harry-potter-impresion-3d-clip.jpeg',
      seoFilename: 'marcapaginas-harry-potter-impresion-3d-clip.jpeg',
      objectClass: 'object-cover object-top',
      detail: 'Clips ultra delgados optimizados térmicamente para una flexibilidad y durabilidad extraordinarias en las hojas de los libros.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-book-bookmark text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Clip de Lectura Saga</span>
        </div>
      )
    },
    {
      id: 'kit-minecraft',
      title: 'Kit Cumpleaños Minecraft Personalizado',
      desc: 'Ambientación y toppers temáticos de Minecraft impresos en 3D: espadas, herramientas y bloques geométricos ideales como recuerdo y adorno de torta de cumpleaños.',
      category: 'Souvenirs y Cumpleaños',
      tags: ['Minecraft', 'Topper Torta', 'Personalizado', 'Infantil'],
      imagePath: '/images/kit-cumpleanos-minecraft-personalizado-adornos-torta-3d.jpeg',
      seoFilename: 'kit-cumpleanos-minecraft-personalizado-adornos-torta-3d.jpeg',
      detail: 'Fabricación por bloques de colores separados y ensamblaje posterior a presión. Excelente relieve para recrear el entorno pixelado original.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-cube text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Decoración Minecraft</span>
        </div>
      )
    },
    {
      id: 'toppers-graduacion',
      title: 'Toppers de Graduación para Torta',
      desc: 'Centro de torta festivo para egresados con nombre personalizado en altorrelieve, birrete 3D y base brillante, conmemorando el cierre de una hermosa etapa escolar.',
      category: 'Souvenirs y Cumpleaños',
      tags: ['Egresados', 'Topper Torta', 'Graduación', 'Brillante'],
      imagePath: '/images/toppers-de-graduacion-adornos-para-torta-egresados-3d.jpeg',
      seoFilename: 'toppers-de-graduacion-adornos-para-torta-egresados-3d.jpeg',
      detail: 'Combinación híbrida de acrílico/gráfica e impresión 3D liviana para sostenerse perfectamente sobre cremas de torta sin hundirse.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-graduation-cap text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Topper Graduación</span>
        </div>
      )
    },
    {
      id: 'toppers-lapices-capibara',
      title: 'Toppers para Lápices Capibara',
      desc: 'Tapas decorativas e interactivas coleccionables con diseño ultra tierno de carpincho (Capibara) impresos en 3D de alta definición, ideales para souvenir escolar escolar.',
      category: 'Souvenirs y Cumpleaños',
      tags: ['Capibara', 'Para Lápiz', 'Coleccionables', 'Escritorio'],
      imagePath: '/images/toppers-para-lapices-capibara-impresion-3d.jpeg',
      seoFilename: 'toppers-para-lapices-capibara-impresion-3d.jpeg',
      detail: 'Modelado orgánico de alta definición superficial con base de encastre tubular calibrada para lápices estándar de cualquier marca.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-pencil text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Topper Capibara</span>
        </div>
      )
    },
    {
      id: 'centros-mesa-infantiles',
      title: 'Centros de Mesa Infantiles Temáticos',
      desc: 'Soportes de mesa estables y coloridos con logos o siluetas de personajes infantiles en relieve, diseñados de acuerdo a la temática especial de tu fiesta.',
      category: 'Souvenirs y Cumpleaños',
      tags: ['Fiestas', 'Centros de Mesa', 'Decoración', 'Cumples'],
      imagePath: '/images/centros-de-mesa-infantiles-personalizados-fiestas-eventos.jpeg',
      seoFilename: 'centros-de-mesa-infantiles-personalizados-fiestas-eventos.jpeg',
      detail: 'Modelado y ensamble de piezas coloridas sobre bases circulares reforzadas. El recuerdo utilitario y decorativo perfecto para el cuarto de los invitados.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-palette text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Centros de Mesa 3D</span>
        </div>
      )
    },
    {
      id: 'llaveros-snoopy',
      title: 'Llaveros Snoopy Coleccionables 3D',
      desc: 'Llaveros silueteados de Snoopy hechos en dos colores con un acabado plano perfecto, ideales para merchandising coleccionable, clubes o fanáticos de Peanuts.',
      category: 'Souvenirs y Cumpleaños',
      tags: ['Snoopy', 'Doble Color', 'Souvenirs', 'Peanuts'],
      imagePath: '/images/llaveros-de-snoopy-impresion-3d-merchandising-peanuts.jpeg',
      seoFilename: 'llaveros-de-snoopy-impresion-3d-merchandising-peanuts.jpeg',
      detail: 'Impresión plana de dos capas con boquilla optimizada a nivel de micrones para trazar las finas líneas del contorno de Snoopy de manera nítida.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-dog text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Llavero Snoopy</span>
        </div>
      )
    },
    {
      id: 'llaveros-plim-plim',
      title: 'Llaveros Plim Plim para Primer Añito',
      desc: 'El souvenir más alegre para el primer cumpleaños. Llaveros a todo color de Plim Plim impresos con plásticos premium atóxicos biodegradables para la mayor seguridad.',
      category: 'Souvenirs y Cumpleaños',
      tags: ['Plim Plim', 'Primer Año', 'Eco-Plástico', 'Souvenirs'],
      imagePath: '/images/llaveros-plim-plim-impresion-3d-souvenirs-primer-anito.jpeg',
      seoFilename: 'llaveros-plim-plim-impresion-3d-souvenirs-primer-anito.jpeg',
      detail: 'Fabricado íntegramente con PLA de maíz biodegradable de colores complementarios vibrantes, con bordes redondeados y anilla reforzada.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-child text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Llaveros Plim Plim</span>
        </div>
      )
    },
    {
      id: 'agitadores-tragos',
      title: 'Agitadores de Tragos Neon Personalizados',
      desc: 'Agitadores reutilizables con nombres, marcas o frases personalizadas que brillan bajo luz negra, ideales para barras móviles, bodas o fiestas electrónicas.',
      category: 'Souvenirs y Cumpleaños',
      tags: ['Cotillón', 'Neon', 'Barras', 'Agitadores'],
      imagePath: '/images/agitadores-de-tragos-personalizados-luminosos-cotillon-neon.jpeg',
      seoFilename: 'agitadores-de-tragos-personalizados-luminosos-cotillon-neon.jpeg',
      detail: 'Material polimérico fluorescente apto para alimentos. Impreso en una sola pieza hermética para máxima higiene y fácil lavado posterior.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-glass-water text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Agitador Neón</span>
        </div>
      )
    },
    {
      id: 'set-didactico-cabildo',
      title: 'Set Didáctico Cabildo 3D',
      desc: 'Maqueta interactiva articulada del histórico Cabildo de Buenos Aires, separada por módulos encastrables ideal para colegios e instituciones en Bariloche.',
      category: 'Hogar y Decoración',
      tags: ['Educativo', 'Cabildo 3D', 'Maqueta', 'Didáctico'],
      imagePath: '/images/set-patrio-didactico-cabildo-3d-escuelas-jardines.jpeg',
      seoFilename: 'set-patrio-didactico-cabildo-3d-escuelas-jardines.jpeg',
      detail: 'Despiece modular de ajuste milimétrico para armado interactivo estudiantil. Diseño arquitectónico esquematizado con fines didácticos.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-landmark text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Cabildo Didáctico</span>
        </div>
      )
    },
    {
      id: 'lampara-luna',
      title: 'Lámpara Luna 3D Velador LED',
      desc: 'Luz de noche velador Inteligente con relieve geográfico lunar real. Funciona con conexión USB de bajo consumo, aportando una calidez mágica a cualquier habitación.',
      category: 'Hogar y Decoración',
      tags: ['Relieve Lunar', 'Luz LED', 'Velador', 'Sorprendente'],
      imagePath: '/images/lampara-luna-3d-velador-led-regulable-usb.jpeg',
      seoFilename: 'lampara-luna-3d-velador-led-regulable-usb.jpeg',
      detail: 'Impresión en espiral continuo translúcido con variación de espesores para lograr de forma dinámica los efectos de sombra y luz de los cráteres.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-moon text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Lámpara Luna</span>
        </div>
      )
    },
    {
      id: 'portallaves-gatito',
      title: 'Portallaves de Pared Gatito 3D',
      desc: 'Hermoso y funcional portallaves organizador para pared con diseño de gatito en altorrelieve. Una pieza decorativa y sumamente resistente para mantener el orden.',
      category: 'Hogar y Decoración',
      tags: ['Organizador', 'Gatito 3D', 'Decorativo', 'Hogar'],
      imagePath: '/images/portallaves-de-pared-gatito-3d-organizador-de-llaves.jpeg',
      seoFilename: 'portallaves-de-pared-gatito-3d-organizador-de-llaves.jpeg',
      detail: 'Puntos de anclaje de inserción posterior para montaje invisible. Gancho integrado arqueado diseñado para colgar llaveros dobles o billeteras de colgar.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-cat text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Portallaves Gatito</span>
        </div>
      )
    },
    {
      id: 'servicio-diseno-tecnico',
      title: 'Fabricación e Impresión Profesional 3D',
      desc: 'Servicio técnico especializado en la reproducción y calibrado serial de repuestos mecánicos o prototipos volumétricos con la mayor fidelidad de la Patagonia.',
      category: 'Hogar y Decoración',
      tags: ['Ingeniería', 'Prototipos', 'Precisión', 'Sinapsis 3D'],
      imagePath: '/images/servicio-diseno-e-impresion-3d-bariloche-sinapsis.jpeg',
      seoFilename: 'servicio-diseno-e-impresion-3d-bariloche-sinapsis.jpeg',
      detail: 'Parámetros optimizados por material (PLA, ABS, PETG, TPU) y control dimensional estricto para encastres estructurales que resistan el esfuerzo físico.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-gears text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Servicio 3D Sinapsis</span>
        </div>
      )
    },
    {
      id: 'kit-escolar-mochilas',
      title: 'Kit de Etiquetas y Llaveros Escolares',
      desc: 'Etiquetas personalizadas ultra resistentes para mochilas junto con tags 3D grabados con nombre, la solución definitiva para personalizar útiles estudiantiles.',
      category: 'Corporativo y Marcas',
      tags: ['Escolar', 'Personalizado', 'Resistente', 'Llavero Nombre'],
      imagePath: '/images/kit-etiquetas-y-llaveros-personalizados-para-mochilas-y-utiles.jpeg',
      seoFilename: 'kit-etiquetas-y-llaveros-personalizados-para-mochilas-y-utiles.jpeg',
      detail: 'Kit que asocia llavero esculpido en relieve con tags impermeables laminados. Sobrelleva el maltrato escolar y lavados de botellas de agua.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-graduation-cap text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Kit Escolar 3D</span>
        </div>
      )
    },
    {
      id: 'rueditas-texturizadoras',
      title: 'Rueditas Texturizadoras para Cerámica y Pastelería',
      desc: 'Herramientas de rodillo texturizado impresas en 3D de alta definición para marcar hermosos patrones repetitivos en arcilla, cerámica, porcelana fría, fondant o repostería artesanal.',
      category: 'Hogar y Decoración',
      tags: ['Pastelería', 'Cerámica', 'Decoración', 'Herramientas'],
      imagePath: '/images/rueditas-texturizadoras-para-ceramica-porcelana-fria-y-pasteleria.jpeg',
      seoFilename: 'rueditas-texturizadoras-para-ceramica-porcelana-fria-y-pasteleria.jpeg',
      detail: 'Rodillos texturizados con relieves limpios y profundos acoplados a mangos de alta resistencia mecánica. Fabricados con plástico biodegradable libre de tóxicos.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-cookie text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Rueditas Texturizadoras</span>
        </div>
      )
    }
  ];


  const filteredWorks = activeTab === 'Todos'
    ? realWorks
    : realWorks.filter(work => work.category === activeTab);

  return (
    <section id="servicios" className="pt-24 pb-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="especialidades" className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
            Expertos en <span className="text-orange-500 text-orange-glow">Impresión 3D Bariloche</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((spec, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border-zinc-800 hover:border-orange-500/30 transition-all group">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <i className={`fa-solid ${spec.icon} text-xl`}></i>
                </div>
                <h3 className="text-white font-bold mb-2">{spec.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* NUEVA SECCIÓN: Galería de Trabajos Reales */}
        <div id="galeria" className="mb-24 relative">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">
              Calidad y Detalle Real
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Galería de <span className="text-orange-500">Trabajos Reales</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
              Descubrí cómo materializamos las ideas. Así es como lucen nuestros productos terminados, listos para entregar en San Carlos de Bariloche.
            </p>
          </div>

          {/* Categorías de Filtro */}
          <div className="flex flex-wrap items-center gap-2 mb-12 bg-zinc-900/30 p-2 rounded-2xl border border-zinc-900 max-w-fit">
            {['Todos', 'Souvenirs y Cumpleaños', 'Corporativo y Marcas', 'Deportivos y Premios', 'Hogar y Decoración'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2.5 px-4.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === tab 
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/10' 
                    : 'bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/40 border border-transparent hover:border-zinc-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => {
              const isFailed = failedImages[work.id] ?? false;
              return (
                <div 
                  key={work.id} 
                  className="group glass rounded-3xl border-zinc-800 hover:border-orange-500/30 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Image Container with Fallback */}
                  <div 
                    onClick={() => {
                      if (!isFailed && onImageClick) {
                        onImageClick(work.imagePath, work.title, work.desc);
                      }
                    }}
                    className={`relative aspect-video bg-zinc-900 border-b border-zinc-900 overflow-hidden ${!isFailed ? 'cursor-zoom-in' : ''}`}
                  >
                    {!isFailed ? (
                      <>
                        <img 
                          src={work.imagePath} 
                          alt={work.title} 
                          referrerPolicy="no-referrer"
                          onError={() => handleImageError(work.id)}
                          className={`w-full h-full ${(work as any).objectClass || 'object-cover object-center'} group-hover:scale-105 transition-all duration-700`}
                        />
                        {/* Hover Overlay & Zoom Indicator */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40">
                          <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <i className="fa-solid fa-magnifying-glass-plus text-sm"></i>
                          </div>
                        </div>
                      </>
                    ) : (
                      work.fallback
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category and Badges */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="text-orange-500 font-bold text-xs uppercase tracking-wider">
                          {work.category}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {work.tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="text-[9px] font-semibold text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-full uppercase">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                        {work.title}
                      </h3>
                      
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {work.desc}
                      </p>

                      {/* Pie de página explicativo del trabajo hecho, según la solicitud del usuario */}
                      <div className="mt-5 pt-4 border-t border-zinc-900/60 flex items-start gap-3 bg-zinc-950/40 p-3 rounded-2xl border border-zinc-900/20">
                        <i className="fa-solid fa-square-check text-orange-500 text-sm mt-0.5 shrink-0"></i>
                        <div className="text-[11px] leading-relaxed text-zinc-500">
                          <strong className="text-zinc-400 block mb-0.5 uppercase tracking-wide text-[10px]">Trabajo realizado y acabado:</strong>
                          {work.detail}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-end border-t border-zinc-800/60 pt-6 mt-6">
                      <a 
                        href={`https://wa.me/5492944914816?text=${encodeURIComponent(`Hola! Vi la Colección de "${work.title}" en la web de Sinapsis 3D y me gustaría cotizar un trabajo personalizado similar.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-orange-500/10 text-orange-500 text-xs font-bold hover:bg-orange-500 hover:text-white transition-all flex items-center gap-2"
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                        Cotizar Similar
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Diseños <span className="text-orange-500">3D Propios</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl">
            Explorá nuestras colecciones digitales exclusivas. Podés descargar los modelos 3D o encargarnos la impresión terminada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIOS.map((item) => (
            <a 
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass p-8 rounded-3xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] border-zinc-800 hover:border-orange-500/50"
              title={`Ver catálogo de diseños en ${item.name}`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <i className="fa-solid fa-arrow-up-right-from-square text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                {item.name}
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex items-center text-orange-500 font-bold">
                Explorar modelos 3D <i className="fa-solid fa-chevron-right ml-2 text-xs"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;