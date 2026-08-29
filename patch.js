import fs from 'fs';

let content = fs.readFileSync('components/Portfolio.tsx', 'utf8');

const target = `    {
      id: 'adorno-hogar-geometrico',
      title: 'Adorno Geométrico para el Hogar',
      desc: 'Dale un toque moderno a tus espacios con este adorno geométrico a medida. Elegí el color y tamaño perfecto para tu decoración.',
      category: 'Hogar y Decoración',
      tags: ["decoracion","hogar","adorno 3d","diseño"],
      imagePath: '/images/adorno-hogar-geometrico.png',
      seoFilename: 'adorno-hogar-geometrico.png',
      detail: 'Dale un toque moderno a tus espacios con este adorno geométrico a medida. Elegí el color y tamaño perfecto para tu decoración.',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-star text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold text-center">Adorno Geométrico para el Hogar</span>
        </div>
      )
    }`;

const replacement = `    {
      id: 'cajitas-souvenir-brawl-stars-personalizadas',
      title: 'Cajitas Souvenir Personalizadas Brawl Stars',
      desc: 'Increíbles cajitas para souvenirs con la temática de Brawl Stars. Totalmente personalizables con el nombre y diseño a medida para un cumpleaños inolvidable.',
      category: 'Souvenirs y Cumpleaños',
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
    }`;

content = content.replace(target, replacement);
fs.writeFileSync('components/Portfolio.tsx', content);
