import fs from 'fs';

let content = fs.readFileSync('components/Portfolio.tsx', 'utf8');

const newItems = `    {
      id: 'funkos-stranger-things',
      title: 'Funkos Personajes de Stranger Things',
      desc: 'Figuras impresas en 3D de los personajes de Stranger Things, pintadas a mano con gran detalle.',
      category: 'Hogar y Decoración',
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
      category: 'Hogar y Decoración',
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
      desc: 'Impresionante máscara en tamaño real de Foxy, el personaje de Five Nights at Freddy\\'s (FNAF), fabricada mediante impresión 3D.',
      category: 'Souvenirs y Cumpleaños',
      tags: ["fnaf", "foxy", "mascara", "cosplay", "impresion 3d"],
      imagePath: '/images/mascara-fnaf-foxy-tamano-real-impresion-3d.png',
      seoFilename: 'mascara-fnaf-foxy-tamano-real-impresion-3d.png',
      detail: 'Impresionante máscara en tamaño real de Foxy, el personaje de Five Nights at Freddy\\'s (FNAF), fabricada mediante impresión 3D.',
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
      category: 'Souvenirs y Cumpleaños',
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
`;

content = content.replace('  const realWorks = [', '  const realWorks = [\n' + newItems);

fs.writeFileSync('components/Portfolio.tsx', content);
