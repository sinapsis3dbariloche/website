import fs from 'fs';

let content = fs.readFileSync('components/Portfolio.tsx', 'utf8');

const newItems = `    {
      id: 'figuras-brain-rot',
      title: 'Figuras Brain Rot 3D',
      desc: 'Figuras impresas en 3D de personajes "Brain Rot". Diseño divertido y actual, ideal para decorar o regalar.',
      category: 'Souvenirs y Cumpleaños',
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
      category: 'Hogar y Decoración',
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
      category: 'Hogar y Decoración',
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
      category: 'Souvenirs y Cumpleaños',
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
      category: 'Corporativo y Marcas',
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
      category: 'Escolar y Didáctico',
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
`;

content = content.replace('  const realWorks = [', '  const realWorks = [\n' + newItems);

fs.writeFileSync('components/Portfolio.tsx', content);
