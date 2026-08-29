const fs = require('fs');
let content = fs.readFileSync('components/Portfolio.tsx', 'utf8');

const mapping = {
  "Figuras Brain Rot 3D": "Figuras y Coleccionables",
  "Funkos Personajes de Stranger Things": "Figuras y Coleccionables",
  "Máscara de Foxy (FNAF) Tamaño Real": "Figuras y Coleccionables",
  "Casita de Hámster de Juguete": "Figuras y Coleccionables",
  "Papá Noel con Pesas para Gimnasio": "Figuras y Coleccionables",

  "Exhibidor de Llaveros Fútbol & Messi": "Ventas Mayoristas y Comercios",
  "Toppers de Torta Venta Mayorista": "Ventas Mayoristas y Comercios",
  "Escarapelas Patrias 3D": "Ventas Mayoristas y Comercios",

  "Soportes de Celular Institucionales": "Corporativo y Marcas",
  "Bolígrafos Ecológicos Personalizados": "Corporativo y Marcas",
  "Llaveros Corporativos con Logo": "Corporativo y Marcas",
  "Llaveros Personalizados Corporativos": "Corporativo y Marcas",
  "Soporte Exhibidor de Labiales": "Corporativo y Marcas",
  "Trofeos e Identidad": "Corporativo y Marcas",
  "Fabricación e Impresión Profesional 3D": "Corporativo y Marcas",
  "Diseño Técnico": "Corporativo y Marcas",

  "Lightbox Jurassic World & Dinosaurios": "Lámparas y Lightboxes",
  "Lightbox Personalizada Capibara": "Lámparas y Lightboxes",
  "Lightbox One Piece - Anime a Medida": "Lámparas y Lightboxes",
  "Lightbox Stitch Personalizado": "Lámparas y Lightboxes",
  "Lámpara Luna 3D Velador LED": "Lámparas y Lightboxes",

  "Cortantes de Galletitas Temáticos": "Pastelería y Repostería 3D",
  "Rueditas Texturizadoras para Cerámica y Pastelería": "Pastelería y Repostería 3D",
  "Topper y Letras 3D Hello Kitty": "Pastelería y Repostería 3D",
  "Cake Topper Personalizado Plim Plim": "Pastelería y Repostería 3D",
  "Topper de Torta Personalizado Hulk": "Pastelería y Repostería 3D",
  "Toppers de Torta de Brawl Stars": "Pastelería y Repostería 3D",
  "Toppers de Graduación para Torta": "Pastelería y Repostería 3D",

  "Mate Pelota de Fútbol": "Mates y Accesorios",
  "Mate Pelota de Vóley": "Mates y Accesorios",
  "Mate Antivuelco Personalizado": "Mates y Accesorios",

  "Set de Formas Geométricas Escolares": "Escolar y Didáctico",
  "Juego de Fracciones Matemáticas": "Escolar y Didáctico",
  "Bolitas Sensoriales Escolares": "Escolar y Didáctico",
  "Animalitos Flexi Articulados": "Escolar y Didáctico",
  "Set Didáctico Cabildo 3D": "Escolar y Didáctico",
  "Kit de Etiquetas y Llaveros Escolares": "Escolar y Didáctico",
  "Kits Escolares 3D": "Escolar y Didáctico",
  "Marcapáginas Harry Potter con Clip": "Escolar y Didáctico",
  "Toppers para Lápices Capibara": "Escolar y Didáctico",
  "Lápiz Personalizado con Topper 3D de Stitch": "Escolar y Didáctico",

  "Cucharitas Personalizadas Princesas": "Souvenirs y Eventos",
  "Agitadores de Tragos Neon Personalizados": "Souvenirs y Eventos",
  "Cajitas Souvenir Personalizadas One Piece": "Souvenirs y Eventos",
  "Cajitas Souvenir Personalizadas Brawl Stars": "Souvenirs y Eventos",
  "Llaveros Souvenir de Abejita": "Souvenirs y Eventos",
  "Llaveros Souvenir Snoopy": "Souvenirs y Eventos",
  "Llaveros Snoopy Coleccionables 3D": "Souvenirs y Eventos",
  "Souvenirs Payaso Plim Plim": "Souvenirs y Eventos",
  "Llaveros Plim Plim para Primer Añito": "Souvenirs y Eventos",
  "Souvenirs Híbridos": "Souvenirs y Eventos",
  "Kit Cumpleaños Minecraft Personalizado": "Souvenirs y Eventos",
  "Centros de Mesa Infantiles Temáticos": "Souvenirs y Eventos",
  "Souvenirs de Loro para Cumpleaños": "Souvenirs y Eventos",
  "Souvenirs de Mariposas Personalizados": "Souvenirs y Eventos",

  "Trofeos Personalizados 3D": "Trofeos y Medallas",
  "Colección de Trofeos de Fútbol 3D": "Trofeos y Medallas",
  "Trofeos y Medallas de Básquet": "Trofeos y Medallas",
  "Llaveros Personalizados de Hockey": "Trofeos y Medallas",

  "Soporte de Pared Nintendo Switch": "Hogar y Decoración",
  "Portallaves de Pared Gatito 3D": "Hogar y Decoración",
  "Gatos Decorativos Reciclados": "Hogar y Decoración"
};

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

let modifiedTitles = 0;
for (const [title, category] of Object.entries(mapping)) {
  const regex = new RegExp(`(title:\\s*'${escapeRegExp(title)}'[\\s\\S]*?category:\\s*')[^']+(')`);
  if (regex.test(content)) {
    content = content.replace(regex, `$1${category}$2`);
    modifiedTitles++;
  } else {
    console.log("Could not find title:", title);
  }
}
console.log(`Modified ${modifiedTitles} titles out of ${Object.keys(mapping).length}`);

const CATEGORIES_ARRAY = [
  'Figuras y Coleccionables',
  'Ventas Mayoristas y Comercios',
  'Corporativo y Marcas',
  'Lámparas y Lightboxes',
  'Pastelería y Repostería 3D',
  'Mates y Accesorios',
  'Escolar y Didáctico',
  'Souvenirs y Eventos',
  'Trofeos y Medallas',
  'Hogar y Decoración'
];

const catStr = `['${CATEGORIES_ARRAY.join("', '")}']`;
const catStrTodos = `['Todos', '${CATEGORIES_ARRAY.join("', '")}']`;

const regexFilter = /\{\['Todos',\s*'[^\]]+'\]\.map\(\(tab\)/;
content = content.replace(regexFilter, `{${catStrTodos}.map((tab)`);

const regexGroup = /\{\['Souvenirs y Cumpleaños',\s*'[^\]]+'\]\.map\(category/;
content = content.replace(regexGroup, `{${catStr}.map(category`);

fs.writeFileSync('components/Portfolio.tsx', content, 'utf8');
