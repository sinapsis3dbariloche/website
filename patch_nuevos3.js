import fs from 'fs';

let content = fs.readFileSync('components/Portfolio.tsx', 'utf8');

const newItems = `    {
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
      category: 'Souvenirs y Cumpleaños',
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
      category: 'Deportivos y Premios',
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
      category: 'Souvenirs y Cumpleaños',
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
      category: 'Hogar y Decoración',
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
`;

content = content.replace('  const realWorks = [', '  const realWorks = [\n' + newItems);

fs.writeFileSync('components/Portfolio.tsx', content);
