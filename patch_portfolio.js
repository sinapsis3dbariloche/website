import fs from 'fs';

let content = fs.readFileSync('components/Portfolio.tsx', 'utf8');

// Find all entries of cajitas brawl stars
const brawl1 = `    {
      id: 'cajitas-souvenir-brawl-stars-personalizadas',
      title: 'Cajitas Souvenir Personalizadas Brawl Stars',
      desc: 'Cajitas sorpresas personalizadas con temática de Brawl Stars para celebrar un cumpleaños especial. Incluyen el nombre del festejado y son perfectas para entregar recuerdos a los invitados.',
      category: 'Souvenirs y Cumpleaños',
      tags: ["brawl stars","cajitas souvenir","cumpleaños infantil"],
      imagePath: '/images/cajitas-souvenir-brawl-stars-personalizadas.png',
      seoFilename: 'cajitas-souvenir-brawl-stars-personalizadas.png',
      detail: 'Cajitas sorpresas personalizadas con temática de Brawl Stars para celebrar un cumpleaños especial. Incluyen el nombre del festejado y son perfectas para entregar recuerdos a los invitados.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-star text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Cajitas Souvenir Personalizadas Brawl Stars</span>
        </div>
      )
    },`;

content = content.replace(brawl1 + '\n', '');
// If it fails because of slight differences, let's just do a regex replace for the whole duplicate block.
// To be safe, I'll do string replacements for both.

const targetMascotas = `    {
      id: 'identificador-mascotas-personalizado',
      title: 'Identificador de Mascotas a Medida',
      desc: 'Protegé a tu mascota con una chapita identificatoria súper resistente y personalizada. Fabricada en 3D con colores vivos.',
      category: 'Souvenirs y Cumpleaños',
      tags: ["mascotas","identificador","chapita","personalizado"],
      imagePath: '/images/identificador-mascotas-personalizado.png',
      seoFilename: 'identificador-mascotas-personalizado.png',
      detail: 'Protegé a tu mascota con una chapita identificatoria súper resistente y personalizada. Fabricada en 3D con colores vivos.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-star text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Identificador de Mascotas a Medida</span>
        </div>
      )
    }`;

const newToppers = `    {
      id: 'toppers-torta-brawl-stars',
      title: 'Toppers de Torta de Brawl Stars',
      desc: 'Toppers decorativos para torta de cumpleaños con personajes y logo de Brawl Stars en impresión 3D.',
      category: 'Souvenirs y Cumpleaños',
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
    }`;

content = content.replace(targetMascotas, newToppers);
fs.writeFileSync('components/Portfolio.tsx', content);

