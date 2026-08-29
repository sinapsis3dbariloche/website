import fs from 'fs';

let content = fs.readFileSync('components/Portfolio.tsx', 'utf8');

const newItems = `    {
      id: 'cucharitas-princesas-frozen',
      title: 'Cucharitas Personalizadas Princesas',
      desc: 'Cucharitas de diseño exclusivo con temática de Olaf y princesas, ideales como souvenirs originales para cumpleaños y eventos infantiles.',
      category: 'Souvenirs y Cumpleaños',
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
      category: 'Corporativo y Marcas',
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
`;

content = content.replace('  const realWorks = [', '  const realWorks = [\n' + newItems);

fs.writeFileSync('components/Portfolio.tsx', content);
