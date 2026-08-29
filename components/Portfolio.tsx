import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PORTFOLIOS } from '../constants';

interface PortfolioProps {
  onImageClick?: (src: string, title: string, desc?: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onImageClick }) => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'Todos';

  // Helper hook array state to track image errors and filters
  const [failedImages, setFailedImages] = React.useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = React.useState<string>(initialCategory);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveTab(cat);
      // Auto-scroll to the portfolio section if needed
      const el = document.getElementById('galeria');
      if (el) {
        // Small delay to ensure render
        setTimeout(() => {
          window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [searchParams]);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  // Galería completa de 18 trabajos reales con detalles técnicos personalizados (Caption / Pie de página)
  const realWorks = [
    {
      id: 'figuras-brain-rot',
      title: 'Figuras Brain Rot 3D',
      desc: 'Figuras impresas en 3D de personajes "Brain Rot". Diseño divertido y actual, ideal para decorar o regalar.',
      category: 'Figuras y Coleccionables',
      tags: ["brain rot", "figuras", "personajes", "tendencia", "impresion 3d"],
      imagePath: '/images/figuras-brain-rot-3d.png',
      seoFilename: 'figuras-brain-rot-3d.png',
      detail: 'Figuras impresas en 3D de personajes virales "Brain Rot". Diseño divertido y actual, ideal para coleccionar, decorar escritorios o para un regalo original.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-face-laugh-squint text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Figuras Brain Rot</span>
        </div>
      )
    },
    {
      id: 'mate-pelota-futbol',
      title: 'Mate Pelota de Fútbol',
      desc: 'Mate personalizado con forma de pelota de fútbol impreso en 3D. Práctico y súper original para fanáticos.',
      category: 'Mates y Accesorios',
      tags: ["mate", "futbol", "pelota", "deportes", "impresion 3d"],
      imagePath: '/images/mate-pelota-futbol-3d.png',
      seoFilename: 'mate-pelota-futbol-3d.png',
      detail: 'Mate personalizado con forma de pelota de fútbol impreso en 3D. Práctico, original y perfecto para regalar a cualquier apasionado por este deporte.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-futbol text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Mate Fútbol</span>
        </div>
      )
    },
    {
      id: 'mate-pelota-voley',
      title: 'Mate Pelota de Vóley',
      desc: 'Mate personalizado con forma de pelota de vóley. Ideal para amantes del deporte que disfrutan de un buen mate.',
      category: 'Mates y Accesorios',
      tags: ["mate", "voley", "pelota", "deportes", "impresion 3d"],
      imagePath: '/images/mate-pelota-voley-3d.png',
      seoFilename: 'mate-pelota-voley-3d.png',
      detail: 'Mate personalizado con forma de pelota de vóley. Ideal para jugadores y amantes del deporte que disfrutan de un buen mate en su día a día.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-volleyball text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Mate Vóley</span>
        </div>
      )
    },
    {
      id: 'llaveros-souvenir-snoopy',
      title: 'Llaveros Souvenir Snoopy',
      desc: 'Tiernos llaveros de Snoopy impresos en 3D. Excelentes como souvenirs temáticos para cumpleaños y eventos.',
      category: 'Souvenirs y Eventos',
      tags: ["snoopy", "llaveros", "souvenirs", "cumpleaños", "impresion 3d"],
      imagePath: '/images/llaveros-souvenir-snoopy-3d.png',
      seoFilename: 'llaveros-souvenir-snoopy-3d.png',
      detail: 'Tiernos llaveros de Snoopy impresos en 3D. Excelentes como souvenirs temáticos para cumpleaños infantiles o reuniones. Detalle súper original y duradero.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-dog text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Llaveros Snoopy</span>
        </div>
      )
    },
    {
      id: 'exhibidor-llaveros-messi',
      title: 'Exhibidor de Llaveros Fútbol & Messi',
      desc: 'Soporte exhibidor diseñado para llaveros de fútbol y Funko de Messi. Perfecto para venta mayorista o locales.',
      category: 'Ventas Mayoristas y Comercios',
      tags: ["exhibidor", "llaveros", "futbol", "messi", "mayorista"],
      imagePath: '/images/exhibidor-llaveros-futbol-messi-mayorista-3d.png',
      seoFilename: 'exhibidor-llaveros-futbol-messi-mayorista-3d.png',
      detail: 'Soporte exhibidor fabricado en 3D diseñado para lucir llaveros de fútbol y piezas Funko de Messi. Herramienta perfecta para venta mayorista, comercios y puestos.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-shop text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Exhibidor Llaveros</span>
        </div>
      )
    },
    {
      id: 'formas-geometricas-colegio',
      title: 'Set de Formas Geométricas Escolares',
      desc: 'Piezas didácticas con distintas formas geométricas. Ideal para el aprendizaje en colegios e instituciones.',
      category: 'Escolar y Didáctico',
      tags: ["geometria", "escolar", "didactico", "formas", "impresion 3d"],
      imagePath: '/images/formas-geometricas-colegio-3d.png',
      seoFilename: 'formas-geometricas-colegio-3d.png',
      detail: 'Set de piezas con distintas formas y figuras geométricas. Solución didáctica, táctil y visual excelente para apoyar el aprendizaje de matemáticas en colegios.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-shapes text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Formas Geométricas</span>
        </div>
      )
    },
    {
      id: 'escarapelas-colegio-mayorista',
      title: 'Escarapelas Patrias 3D',
      desc: 'Escarapelas argentinas impresas en 3D, ultra resistentes. Disponibles para colegios y para venta mayorista.',
      category: 'Ventas Mayoristas y Comercios',
      tags: ["escarapelas", "patria", "escolar", "mayorista", "impresion 3d"],
      imagePath: '/images/escarapelas-colegio-mayorista-3d.png',
      seoFilename: 'escarapelas-colegio-mayorista-3d.png',
      detail: 'Escarapelas argentinas impresas en 3D, innovadoras y duraderas. Producidas en cantidad, son ideales para actos en colegios, eventos patrios y venta mayorista.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-ribbon text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Escarapelas 3D</span>
        </div>
      )
    },

    {
      id: 'topper-torta-hello-kitty',
      title: 'Topper y Letras 3D Hello Kitty',
      desc: 'Topper decorativo para torta de Hello Kitty con apliques frontales del nombre impresos en 3D.',
      category: 'Pastelería y Repostería',
      tags: ["hello kitty", "topper", "torta", "cumpleaños", "impresion 3d"],
      imagePath: '/images/topper-torta-hello-kitty-letras-3d.png',
      seoFilename: 'topper-torta-hello-kitty-letras-3d.png',
      detail: 'Topper decorativo para torta de Hello Kitty con apliques frontales del nombre impresos en 3D. Personalización total para decorar mesas dulces.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-cake-candles text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Topper Hello Kitty</span>
        </div>
      )
    },
    {
      id: 'lightbox-jurassic-world',
      title: 'Lightbox Jurassic World & Dinosaurios',
      desc: 'Lámpara Lightbox de Jurassic World acompañada de divertidos dinosaurios mordelones impresos en 3D.',
      category: 'Lámparas y Lightboxes',
      tags: ["jurassic world", "lightbox", "dinosaurios", "lampara", "impresion 3d"],
      imagePath: '/images/lightbox-jurassic-world-dinosaurios-mordelones-3d.png',
      seoFilename: 'lightbox-jurassic-world-dinosaurios-mordelones-3d.png',
      detail: 'Lámpara Lightbox de Jurassic World acompañada de divertidos dinosaurios mordelones impresos en 3D. Excelente detalle para iluminar habitaciones infantiles.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-lightbulb text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Lightbox Jurassic World</span>
        </div>
      )
    },
    {
      id: 'souvenir-plim-plim',
      title: 'Souvenirs Payaso Plim Plim',
      desc: 'Coloridos souvenirs del Payaso Plim Plim diseñados especialmente para el primer añito.',
      category: 'Souvenirs y Eventos',
      tags: ["plim plim", "souvenirs", "cumpleaños", "1 año", "impresion 3d"],
      imagePath: '/images/souvenir-cumpleanos-plim-plim-3d.png',
      seoFilename: 'souvenir-cumpleanos-plim-plim-3d.png',
      detail: 'Coloridos souvenirs del Payaso Plim Plim diseñados especialmente para festejar un cumpleaños de 1 año. Detalle inolvidable para los invitados.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-gift text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Souvenir Plim Plim</span>
        </div>
      )
    },
    {
      id: 'llaveros-souvenir-abejita',
      title: 'Llaveros Souvenir de Abejita',
      desc: 'Tiernos llaveros con forma de abejita, perfectos como souvenirs originales para eventos y cumpleaños.',
      category: 'Souvenirs y Eventos',
      tags: ["abejitas", "llaveros", "souvenirs", "cumpleaños", "impresion 3d"],
      imagePath: '/images/llaveros-souvenir-abejita-impresion-3d.png',
      seoFilename: 'llaveros-souvenir-abejita-impresion-3d.png',
      detail: 'Tiernos llaveros con forma de abejita, perfectos como souvenirs originales para eventos infantiles, cumpleaños o baby showers.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-key text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Llaveros Abejita</span>
        </div>
      )
    },
    {
      id: 'gatos-decorativos-reciclado',
      title: 'Gatos Decorativos Reciclados',
      desc: 'Gatos decorativos impresos en 3D, rellenos con material de filamento reciclado (caquitas) aportando un diseño ecológico y original.',
      category: 'Hogar y Decoración',
      tags: ["gatos", "decoracion", "reciclado", "ecologico", "impresion 3d"],
      imagePath: '/images/gatos-decorativos-reciclado-filamento-3d.png',
      seoFilename: 'gatos-decorativos-reciclado-filamento-3d.png',
      detail: 'Gatos decorativos impresos en 3D, rellenos con material de descarte de filamento (caquitas) aportando peso y un diseño ecológico consciente para tu hogar.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-cat text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Gatos Decorativos</span>
        </div>
      )
    },

    {
      id: 'animalitos-flexi-jardin',
      title: 'Animalitos Flexi Articulados',
      desc: 'Divertidos animalitos articulados (selva, mar, insectos). Muy solicitados por maestras jardineras como material lúdico y didáctico.',
      category: 'Escolar y Didáctico',
      tags: ["animalitos", "flexi", "articulados", "jardin", "didactico"],
      imagePath: '/images/animalitos-flexi-jardin-didactico-impresion-3d.png',
      seoFilename: 'animalitos-flexi-jardin-didactico-impresion-3d.png',
      detail: 'Divertidos animalitos articulados (selva, mar, insectos). Muy solicitados por maestras jardineras como material lúdico y didáctico para jugar con los chicos.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-hippo text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Animalitos Flexi</span>
        </div>
      )
    },
    {
      id: 'cortantes-galletitas-tematicos',
      title: 'Cortantes de Galletitas Temáticos',
      desc: 'Cortantes para masa de galletitas personalizados por temática. Ideales para pastelería creativa o para cumples infantiles.',
      category: 'Pastelería y Repostería',
      tags: ["cortantes", "galletitas", "pasteleria", "cumpleaños", "impresion 3d"],
      imagePath: '/images/cortantes-galletitas-tematicos-cumpleanos-3d.png',
      seoFilename: 'cortantes-galletitas-tematicos-cumpleanos-3d.png',
      detail: 'Cortantes para masa de galletitas personalizados por temática. Ideales para pastelería creativa, emprendimientos, o para preparar un cumpleaños temático en casa.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-cookie-bite text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Cortantes Galletitas</span>
        </div>
      )
    },
    {
      id: 'trofeos-personalizados-premios',
      title: 'Trofeos Personalizados 3D',
      desc: 'Trofeos diseñados a medida para torneos, competencias deportivas y eventos especiales. Totalmente personalizados.',
      category: 'Trofeos y Medallas',
      tags: ["trofeos", "premios", "deportes", "torneo", "impresion 3d"],
      imagePath: '/images/trofeos-personalizados-premios-impresion-3d.png',
      seoFilename: 'trofeos-personalizados-premios-impresion-3d.png',
      detail: 'Trofeos diseñados a medida para torneos, competencias deportivas y reconocimientos en eventos especiales. Personalizados con el logo y colores correspondientes.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-trophy text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Trofeos Personalizados</span>
        </div>
      )
    },
    {
      id: 'juguete-casita-hamster',
      title: 'Casita de Hámster de Juguete',
      desc: 'Colorida casita de hámster en miniatura que incluye su comidita. Un juguete hermoso y súper original.',
      category: 'Figuras y Coleccionables',
      tags: ["juguete", "dia del niño", "hamster", "infantil", "impresion 3d"],
      imagePath: '/images/juguete-casita-hamster-dia-del-nino-3d.png',
      seoFilename: 'juguete-casita-hamster-dia-del-nino-3d.png',
      detail: 'Colorida casita de hámster en miniatura que incluye su comidita y accesorios. Fue uno de los juguetes más pedidos para el Día del Niño.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-house-chimney text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Casita de Hámster</span>
        </div>
      )
    },
    {
      id: 'mate-antivuelco-personalizado',
      title: 'Mate Antivuelco Personalizado',
      desc: 'Mate con sistema de diseño antivuelco impreso en 3D. Práctico y seguro, personalizable en la combinación de colores que elijas.',
      category: 'Mates y Accesorios',
      tags: ["mate", "antivuelco", "hogar", "personalizado", "impresion 3d"],
      imagePath: '/images/mate-antivuelco-personalizado-impresion-3d.png',
      seoFilename: 'mate-antivuelco-personalizado-impresion-3d.png',
      detail: 'Mate con innovador sistema antivuelco para evitar accidentes. Totalmente personalizable en colores, combinando estética moderna con funcionalidad.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-mug-hot text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Mate Antivuelco</span>
        </div>
      )
    },

    {
      id: 'cucharitas-princesas-frozen',
      title: 'Cucharitas Personalizadas Princesas',
      desc: 'Cucharitas de diseño exclusivo con temática de Olaf y princesas, ideales como souvenirs originales para cumpleaños y eventos infantiles.',
      category: 'Souvenirs y Eventos',
      tags: ["cucharitas", "souvenirs", "princesas", "olaf", "cumpleaños"],
      imagePath: '/images/cucharitas-personalizadas-princesas-frozen-3d.png',
      seoFilename: 'cucharitas-personalizadas-princesas-frozen-3d.png',
      detail: 'Cucharitas de diseño exclusivo con temática de Olaf y princesas (Frozen/Elena), ideales como souvenirs originales para cumpleaños y eventos infantiles.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-spoon text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Cucharitas Princesas</span>
        </div>
      )
    },
    {
      id: 'soporte-nintendo-switch',
      title: 'Soporte de Pared Nintendo Switch',
      desc: 'Práctico soporte de pared diseñado a medida para consola Nintendo Switch y sus joysticks, manteniendo el espacio de juego ordenado.',
      category: 'Hogar y Decoración',
      tags: ["nintendo switch", "soporte", "gaming", "organizacion", "impresion 3d"],
      imagePath: '/images/soporte-pared-nintendo-switch-3d.png',
      seoFilename: 'soporte-pared-nintendo-switch-3d.png',
      detail: 'Práctico soporte de pared diseñado a medida para consola Nintendo Switch y sus joysticks, manteniendo el espacio de juego ordenado.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-gamepad text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Soporte Switch</span>
        </div>
      )
    },
    {
      id: 'bolitas-sensoriales-escolar',
      title: 'Bolitas Sensoriales Escolares',
      desc: 'Bolitas texturizadas y coloridas diseñadas especialmente a pedido de docentes como material didáctico y sensorial para niños.',
      category: 'Escolar y Didáctico',
      tags: ["didactico", "sensorial", "escolar", "juguetes", "impresion 3d"],
      imagePath: '/images/bolitas-sensoriales-didactico-escolar-3d.png',
      seoFilename: 'bolitas-sensoriales-didactico-escolar-3d.png',
      detail: 'Bolitas texturizadas y coloridas diseñadas especialmente a pedido de docentes como material didáctico y sensorial para niños.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-shapes text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Bolitas Sensoriales</span>
        </div>
      )
    },
    {
      id: 'toppers-torta-mayorista',
      title: 'Toppers de Torta Venta Mayorista',
      desc: 'Variedad de toppers de torta con diferentes temáticas fabricados en cantidad. Pedido mayorista ideal para cotillones.',
      category: 'Ventas Mayoristas y Comercios',
      tags: ["toppers", "mayorista", "cotillon", "torta", "impresion 3d"],
      imagePath: '/images/toppers-torta-mayorista-cotillon-3d.png',
      seoFilename: 'toppers-torta-mayorista-cotillon-3d.png',
      detail: 'Variedad de toppers de torta con diferentes temáticas fabricados en cantidad. Pedido mayorista ideal para cotillones.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-cake-candles text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Toppers Mayorista</span>
        </div>
      )
    },
    {
      id: 'fracciones-matematicas-didactico',
      title: 'Juego de Fracciones Matemáticas',
      desc: 'Set de piezas geométricas diseñadas para enseñar y aprender fracciones de manera visual y táctil en el aula.',
      category: 'Escolar y Didáctico',
      tags: ["matematicas", "fracciones", "escolar", "didactico", "impresion 3d"],
      imagePath: '/images/fracciones-matematicas-didactico-escolar-3d.png',
      seoFilename: 'fracciones-matematicas-didactico-escolar-3d.png',
      detail: 'Set de piezas geométricas diseñadas para enseñar y aprender fracciones de manera visual y táctil en el aula.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-chart-pie text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Fracciones Matemáticas</span>
        </div>
      )
    },

    {
      id: 'funkos-stranger-things',
      title: 'Funkos Personajes de Stranger Things',
      desc: 'Figuras impresas en 3D de los personajes de Stranger Things, pintadas a mano con gran detalle.',
      category: 'Figuras y Coleccionables',
      tags: ["stranger things", "funkos", "figuras 3d", "pintado a mano"],
      imagePath: '/images/funkos-stranger-things-impresion-3d-pintado-mano.png',
      seoFilename: 'funkos-stranger-things-impresion-3d-pintado-mano.png',
      detail: 'Figuras impresas en 3D de los personajes de Stranger Things, pintadas a mano con gran detalle.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-user-astronaut text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Funkos Stranger Things</span>
        </div>
      )
    },
    {
      id: 'soporte-exhibidor-labiales',
      title: 'Soporte Exhibidor de Labiales',
      desc: 'Soporte con forma de labio diseñado exclusivamente para exhibir labiales y maquillaje. Ideal para marcas y comercios.',
      category: 'Corporativo y Marcas',
      tags: ["maquillaje", "soporte", "labiales", "exhibidor", "diseño 3d"],
      imagePath: '/images/soporte-exhibidor-labiales-impresion-3d.png',
      seoFilename: 'soporte-exhibidor-labiales-impresion-3d.png',
      detail: 'Soporte con forma de labio diseñado exclusivamente para exhibir labiales y maquillaje. Ideal para marcas y comercios.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-lips text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Soporte Labiales</span>
        </div>
      )
    },
    {
      id: 'papa-noel-gimnasio-navidad',
      title: 'Papá Noel con Pesas para Gimnasio',
      desc: 'Figura personalizada de Papá Noel sosteniendo una barra de pesas. Diseño exclusivo para la decoración navideña de un gimnasio.',
      category: 'Figuras y Coleccionables',
      tags: ["navidad", "gimnasio", "papa noel", "figuras 3d", "decoracion"],
      imagePath: '/images/papa-noel-pesas-gimnasio-decoracion-navidad-3d.png',
      seoFilename: 'papa-noel-pesas-gimnasio-decoracion-navidad-3d.png',
      detail: 'Figura personalizada de Papá Noel sosteniendo una barra de pesas. Diseño exclusivo para la decoración navideña de un gimnasio.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-dumbbell text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Papá Noel Gimnasio</span>
        </div>
      )
    },
    {
      id: 'mascara-fnaf-foxy-real',
      title: 'Máscara de Foxy (FNAF) Tamaño Real',
      desc: 'Impresionante máscara en tamaño real de Foxy, el personaje de Five Nights at Freddy\'s (FNAF), fabricada mediante impresión 3D.',
      category: 'Figuras y Coleccionables',
      tags: ["fnaf", "foxy", "mascara", "cosplay", "impresion 3d"],
      imagePath: '/images/mascara-fnaf-foxy-tamano-real-impresion-3d.png',
      seoFilename: 'mascara-fnaf-foxy-tamano-real-impresion-3d.png',
      detail: 'Impresionante máscara en tamaño real de Foxy, el personaje de Five Nights at Freddy\'s (FNAF), fabricada mediante impresión 3D.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-masks-theater text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Máscara Foxy</span>
        </div>
      )
    },
    {
      id: 'souvenirs-loro-cumpleanos',
      title: 'Souvenirs de Loro para Cumpleaños',
      desc: 'Divertidos souvenirs en forma de loro impresos en 3D, perfectos para cumpleaños y eventos infantiles.',
      category: 'Souvenirs y Eventos',
      tags: ["loro", "souvenirs", "cumpleaños infantil", "impresion 3d"],
      imagePath: '/images/souvenirs-cumpleanos-loro-impresion-3d.png',
      seoFilename: 'souvenirs-cumpleanos-loro-impresion-3d.png',
      detail: 'Divertidos souvenirs en forma de loro impresos en 3D, perfectos para cumpleaños y eventos infantiles.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-crow text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Souvenirs Loro</span>
        </div>
      )
    },

    {
      id: 'trofeos-futbol',
      title: 'Colección de Trofeos de Fútbol 3D',
      desc: 'Trofeos de 1º, 2º y 3º puesto personalizados impresos en 3D en Bariloche, con diseño de pelota esférica de fútbol, sobre pedestales negros con placas texturizadas hechas a medida.',
      category: 'Trofeos y Medallas',
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
      category: 'Trofeos y Medallas',
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
      category: 'Escolar y Didáctico',
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
      category: 'Souvenirs y Eventos',
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
      category: 'Pastelería y Repostería',
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
      category: 'Escolar y Didáctico',
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
      category: 'Souvenirs y Eventos',
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
      category: 'Souvenirs y Eventos',
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
      category: 'Souvenirs y Eventos',
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
      category: 'Souvenirs y Eventos',
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
      category: 'Escolar y Didáctico',
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
      category: 'Lámparas y Lightboxes',
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
      category: 'Ventas Mayoristas y Comercios',
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
      category: 'Escolar y Didáctico',
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
      category: 'Pastelería y Repostería',
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
    },
    {
      id: 'lightbox-capibara',
      title: 'Lightbox Personalizada Capibara',
      desc: 'Caja de luz (lightbox) personalizada con diseño exclusivo de Capibara (Carpincho), iluminada desde su interior para dar un toque único y divertido a tus espacios.',
      category: 'Lámparas y Lightboxes',
      tags: ['Lightbox', 'Capibara', 'Diseño 3D', 'Decoración'],
      imagePath: '/images/lightbox_capibara.png',
      seoFilename: 'lightbox_capibara.png',
      detail: 'Impresión de capas translúcidas de múltiples colores que cobran vida y profundidad al encender la luz trasera.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-lightbulb text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Lightbox Capibara</span>
        </div>
      )
    },
    {
      id: 'lightbox-one-piece',
      title: 'Lightbox One Piece - Anime a Medida',
      desc: 'Caja de luz temática personalizada de One Piece, fabricada a pedido para fanáticos y coleccionistas. Un detalle 100% original con iluminación de alta intensidad.',
      category: 'Lámparas y Lightboxes',
      tags: ['Lightbox', 'One Piece', 'Anime', 'Colección'],
      imagePath: '/images/lightbox_onepice.png',
      seoFilename: 'lightbox_onepice.png',
      detail: 'Diseño vectorizado meticulosamente de One Piece, impreso en capas delgadas de color, creando un cuadro iluminado sorprendente.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-lightbulb text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Lightbox One Piece</span>
        </div>
      )
    },
    {
      id: 'lightbox-stitch',
      title: 'Lightbox Stitch Personalizado',
      desc: 'Lámpara caja de luz con diseño de Stitch, elaborada a medida y retroiluminada. Un regalo personalizado perfecto y llamativo para grandes y chicos.',
      category: 'Lámparas y Lightboxes',
      tags: ['Lightbox', 'Stitch', 'Lámpara 3D', 'Regalo'],
      imagePath: '/images/lightbox_stich.png',
      seoFilename: 'lightbox_stich.png',
      detail: 'Efecto de luz con capas de profundidad creadas mediante litofanía plana multitonos en 3D.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-lightbulb text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Lightbox Stitch</span>
        </div>
      )
    }
,
    {
      id: 'cajitas-souvenir-personalizadas-one-piece',
      title: 'Cajitas Souvenir Personalizadas One Piece',
      desc: 'Hermosas cajitas para golosinas totalmente personalizadas a medida con la temática de One Piece para tu fiesta. Diseñamos cada detalle con el nombre del agasajado y frases de agradecimiento únicas.',
      category: 'Souvenirs y Eventos',
      tags: ["souvenirs","one piece","cajitas personalizadas","cumpleaños"],
      imagePath: '/images/cajitas-souvenir-personalizadas-one-piece.png',
      seoFilename: 'cajitas-souvenir-personalizadas-one-piece.png',
      detail: 'Hermosas cajitas para golosinas totalmente personalizadas a medida con la temática de One Piece para tu fiesta. Diseñamos cada detalle con el nombre del agasajado y frases de agradecimiento únicas.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-star text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Cajitas Souvenir Personalizadas One Piece</span>
        </div>
      )
    },
    {
      id: 'boligrafos-ecologicos-personalizados',
      title: 'Bolígrafos Ecológicos Personalizados',
      desc: 'Bolígrafos de cartón kraft personalizados a medida con el logotipo de tu marca o empresa. Una opción de merchandising sostenible ideal para eventos corporativos y regalía publicitaria.',
      category: 'Corporativo y Marcas',
      tags: ["boligrafos personalizados","merchandising","grafica corporativa","ecologico"],
      imagePath: '/images/boligrafos-ecologicos-personalizados.png',
      seoFilename: 'boligrafos-ecologicos-personalizados.png',
      detail: 'Bolígrafos de cartón kraft personalizados a medida con el logotipo de tu marca o empresa. Una opción de merchandising sostenible ideal para eventos corporativos y regalía publicitaria.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-star text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Bolígrafos Ecológicos Personalizados</span>
        </div>
      )
    },
    {
      id: 'topper-torta-personalizado-plim-plim',
      title: 'Cake Topper Personalizado Plim Plim',
      desc: 'Hermoso set de toppers para torta totalmente personalizado a medida con el nombre y la edad para tu evento. Diseñado e impreso en alta definición para darle un toque mágico y único a la mesa dulce.',
      category: 'Pastelería y Repostería',
      tags: ["cake topper","plim plim","cumpleaños infantil","papeleria personalizada"],
      imagePath: '/images/topper-torta-personalizado-plim-plim.png',
      seoFilename: 'topper-torta-personalizado-plim-plim.png',
      detail: 'Hermoso set de toppers para torta totalmente personalizado a medida con el nombre y la edad para tu evento. Diseñado e impreso en alta definición para darle un toque mágico y único a la mesa dulce.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-star text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Cake Topper Personalizado Plim Plim</span>
        </div>
      )
    },
    {
      id: 'cake-topper-hulk-personalizado',
      title: 'Topper de Torta Personalizado Hulk',
      desc: 'Transforma tu fiesta de cumpleaños con este increíble set de topper de torta hecho a medida con temática de Hulk. Diseñado de forma totalmente personalizada con el nombre del cumpleañero y detalles únicos.',
      category: 'Pastelería y Repostería',
      tags: ["cake topper","hulk","cumpleaños","personalizado"],
      imagePath: '/images/cake-topper-hulk-personalizado.png',
      seoFilename: 'cake-topper-hulk-personalizado.png',
      detail: 'Transforma tu fiesta de cumpleaños con este increíble set de topper de torta hecho a medida con temática de Hulk. Diseñado de forma totalmente personalizada con el nombre del cumpleañero y detalles únicos.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-star text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">Topper de Torta Personalizado Hulk</span>
        </div>
      )
    }
,
    {
      id: 'lapiz-topper-3d-stitch',
      title: 'Lápiz Personalizado con Topper 3D de Stitch',
      desc: 'Personaliza tus eventos o útiles escolares con este exclusivo lápiz temático de Stitch. Incluye topper impreso en 3D y envoltorio a juego totalmente personalizable.',
      category: 'Escolar y Didáctico',
      tags: ["stitch","topper 3d","lapiz personalizado","souvenirs","impresion 3d"],
      imagePath: '/images/lapiz-topper-3d-stitch.png',
      seoFilename: 'lapiz-topper-3d-stitch.png',
      detail: 'Personaliza tus eventos o útiles escolares con este exclusivo lápiz temático de Stitch. Incluye topper impreso en 3D y envoltorio a juego totalmente personalizable.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-star text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Lápiz Personalizado con Topper 3D de Stitch</span>
        </div>
      )
    },
    {
      id: 'llaveros-hockey-personalizados-impresion-3d',
      title: 'Llaveros Personalizados de Hockey',
      desc: 'Llaveros 3D personalizados en forma de palo de hockey ideales para torneos y clubes. Personaliza texto y colores a medida para tu evento deportivo.',
      category: 'Trofeos y Medallas',
      tags: ["hockey","llaveros personalizados","impresion 3d","souvenirs deportivos","eventos"],
      imagePath: '/images/llaveros-hockey-personalizados-impresion-3d.png',
      seoFilename: 'llaveros-hockey-personalizados-impresion-3d.png',
      detail: 'Llaveros 3D personalizados en forma de palo de hockey ideales para torneos y clubes. Personaliza texto y colores a medida para tu evento deportivo.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-star text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Llaveros Personalizados de Hockey</span>
        </div>
      )
    },
    {
      id: 'souvenirs-mariposas-personalizadas',
      title: 'Souvenirs de Mariposas Personalizados',
      desc: 'Hermosos souvenirs en forma de mariposas hechos a medida, ideales para cumpleaños, eventos y celebraciones especiales.',
      category: 'Souvenirs y Eventos',
      tags: ["mariposas","souvenirs","cumpleaños","impresion 3d","personalizado"],
      imagePath: '/images/souvenirs-mariposas-personalizadas.png',
      seoFilename: 'souvenirs-mariposas-personalizadas.png',
      detail: 'Hermosos souvenirs en forma de mariposas hechos a medida, ideales para cumpleaños, eventos y celebraciones especiales.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-star text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Souvenirs de Mariposas Personalizados</span>
        </div>
      )
    },
    {
      id: 'cajitas-souvenir-brawl-stars-personalizadas',
      title: 'Cajitas Souvenir Personalizadas Brawl Stars',
      desc: 'Increíbles cajitas para souvenirs con la temática de Brawl Stars. Totalmente personalizables con el nombre y diseño a medida para un cumpleaños inolvidable.',
      category: 'Souvenirs y Eventos',
      tags: ["brawl stars", "cajitas", "souvenirs", "cumpleaños", "impresion 3d"],
      imagePath: '/images/cajitas-souvenir-brawl-stars-personalizadas.png',
      seoFilename: 'cajitas-souvenir-brawl-stars-personalizadas.png',
      detail: 'Increíbles cajitas para souvenirs con la temática de Brawl Stars. Totalmente personalizables con el nombre y diseño a medida para un cumpleaños inolvidable.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-star text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Cajitas Souvenir Personalizadas Brawl Stars</span>
        </div>
      )
    },
    {
      id: 'toppers-torta-brawl-stars',
      title: 'Toppers de Torta de Brawl Stars',
      desc: 'Toppers decorativos para torta de cumpleaños con personajes y logo de Brawl Stars en impresión 3D.',
      category: 'Pastelería y Repostería',
      tags: ["brawl stars", "topper", "torta", "cumpleaños", "impresion 3d"],
      imagePath: '/images/toppers-torta-brawl-stars.png',
      seoFilename: 'toppers-torta-brawl-stars.png',
      detail: 'Toppers decorativos para torta de cumpleaños con personajes y logo de Brawl Stars en impresión 3D, ideal para resaltar la temática de la fiesta.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-cake-candles text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Toppers de Torta Brawl Stars</span>
        </div>
      )
    },
    {
      id: 'tatuajes-temporales',
      title: 'Tatuajes Temporales',
      desc: '¡Un cumpleaños de Campeones! Tatuajes personalizados súper fáciles de usar.',
      category: 'Tatuajes Temporales',
      tags: ["tatuajes", "temporales", "grafica", "campeones"],
      imagePath: '/images/tatuajes-temporales-argentina-campeones-del-mundo-souvenirs.jpeg',
      seoFilename: 'tatuajes-temporales-argentina-campeones-del-mundo-souvenirs.jpeg',
      detail: 'Tatuajes personalizados súper fáciles de usar. Solo agua, presionás y listo.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-bolt text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Tatuajes Temporales</span>
        </div>
      )
    },
    {
      id: 'etiquetas-escolares',
      title: 'Etiquetas Escolares',
      desc: 'Etiquetas textiles y stickers premium laminados para útiles. Hacen el match perfecto con nuestros identificadores 3D para mochilas.',
      category: 'Etiquetas Escolares',
      tags: ["etiquetas", "escolar", "stickers", "grafica"],
      imagePath: '/images/kit-etiquetas-y-llaveros-personalizados-para-mochilas-y-utiles.jpeg',
      seoFilename: 'kit-etiquetas-y-llaveros-personalizados-para-mochilas-y-utiles.jpeg',
      detail: 'Etiquetas textiles y stickers premium laminados para útiles.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-tags text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Etiquetas Escolares</span>
        </div>
      )
    },
    {
      id: 'identidad-comercial',
      title: 'Identidad y Prensa',
      desc: 'Tarjetas de presentación y gráfica comercial que destaca. El complemento ideal para exhibidores y merchandising institucional.',
      category: 'Identidad Comercial',
      tags: ["tarjetas", "identidad", "comercial", "grafica"],
      imagePath: '/images/tarjetas-de-presentacion-personalizadas-para-clubes-y-negocios.jpeg',
      seoFilename: 'tarjetas-de-presentacion-personalizadas-para-clubes-y-negocios.jpeg',
      detail: 'Tarjetas de presentación y gráfica comercial que destaca.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-address-card text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Identidad Comercial</span>
        </div>
      )
    },
    {
      id: 'papeleria-regalos',
      title: 'Papelería y Regalos',
      desc: 'Detalles que hacen tu evento único. Libritos de pintar y juegos que complementan a la perfección nuestros souvenirs impresos en 3D.',
      category: 'Papelería y Regalos',
      tags: ["papeleria", "regalos", "eventos", "grafica"],
      imagePath: '/images/marcapaginas-harry-potter-impresion-3d-clip.jpeg',
      seoFilename: 'marcapaginas-harry-potter-impresion-3d-clip.jpeg',
      detail: 'Detalles que hacen tu evento único. Libritos de pintar y juegos.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-gift text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Papelería y Regalos</span>
        </div>
      )
    }
  ];

  const PORTFOLIO_CATEGORIES = [
    'Figuras y Coleccionables', 
    'Ventas Mayoristas y Comercios', 
    'Corporativo y Marcas', 
    'Lámparas y Lightboxes', 
    'Pastelería y Repostería', 
    'Mates y Accesorios', 
    'Escolar y Didáctico', 
    'Souvenirs y Eventos', 
    'Trofeos y Medallas', 
    'Hogar y Decoración',
    'Tatuajes Temporales',
    'Etiquetas Escolares',
    'Identidad Comercial',
    'Papelería y Regalos'
  ];

  const filteredWorks = activeTab === 'Todos'
    ? realWorks
    : realWorks.filter(work => work.category === activeTab);

  return (
    <section id="servicios" className="pt-24 pb-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NUEVA SECCIÓN: Galería de Trabajos Reales */}
        <div id="galeria" className="mb-24 relative">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold tracking-widest uppercase mb-4">
              A Tu Medida
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Portfolio de <span className="text-orange-500">Trabajos Personalizados</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
              Descubrí cómo materializamos las ideas. Todos estos trabajos fueron diseñados a medida, adaptando nombres, colores y temáticas exclusivas para cada cliente en Bariloche y todo el País.
            </p>
          </div>

          {/* Categorías de Filtro */}
          <div className="flex flex-wrap items-center gap-2 mb-12 bg-zinc-900/30 p-2 rounded-2xl border border-zinc-900 max-w-fit">
            {['Todos', ...PORTFOLIO_CATEGORIES].map((tab) => (
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

          {activeTab === 'Todos' ? (
            <div className="flex flex-col gap-16">
              {PORTFOLIO_CATEGORIES.map(category => (
                <div key={category} className="scroll-mt-24">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 border-l-4 border-orange-500 pl-4">
                    {category}
                  </h3>
                  <p className="text-zinc-400 mb-8 pl-4 max-w-3xl leading-relaxed">
                    Catálogo de productos para {category.toLowerCase()}, fabricados a medida y con terminaciones premium en San Carlos de Bariloche.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {realWorks.filter(w => w.category === category).map((work) => {
                      const isFailed = failedImages[work.id] ?? false;
                      return (
                        <article 
                          key={work.id} 
                          className="group glass rounded-3xl border-zinc-800 hover:border-orange-500/30 transition-all duration-300 overflow-hidden flex flex-col"
                          itemScope itemType="http://schema.org/Product"
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
                                  itemProp="image"
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

                              <h4 itemProp="name" className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                                {work.title}
                              </h4>
                              
                              <p itemProp="description" className="text-zinc-400 text-sm leading-relaxed">
                                {work.desc}
                              </p>

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
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWorks.map((work) => {
                const isFailed = failedImages[work.id] ?? false;
                return (
                  <article 
                    key={work.id} 
                    className="group glass rounded-3xl border-zinc-800 hover:border-orange-500/30 transition-all duration-300 overflow-hidden flex flex-col"
                    itemScope itemType="http://schema.org/Product"
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
                            itemProp="image"
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

                        <h4 itemProp="name" className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                          {work.title}
                        </h4>
                        
                        <p itemProp="description" className="text-zinc-400 text-sm leading-relaxed">
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
                  </article>
                );
              })}
            </div>
          )}
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