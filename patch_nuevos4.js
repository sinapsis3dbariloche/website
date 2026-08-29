import fs from 'fs';

let content = fs.readFileSync('components/Portfolio.tsx', 'utf8');

const newItems = `    {
      id: 'topper-torta-hello-kitty',
      title: 'Topper y Letras 3D Hello Kitty',
      desc: 'Topper decorativo para torta de Hello Kitty con apliques frontales del nombre impresos en 3D.',
      category: 'Souvenirs y Cumpleaños',
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
      category: 'Hogar y Decoración',
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
      category: 'Souvenirs y Cumpleaños',
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
      category: 'Souvenirs y Cumpleaños',
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
`;

content = content.replace('  const realWorks = [', '  const realWorks = [\n' + newItems);

fs.writeFileSync('components/Portfolio.tsx', content);
