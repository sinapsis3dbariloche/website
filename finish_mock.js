import fs from 'fs';
const results = JSON.parse(fs.readFileSync('analysis_results_batch2.json'));

results.push(
  {
    "filename": "trofeo-campeon-personalizado.png",
    "title": "Trofeo Campeón Personalizado",
    "description": "Un increíble trofeo hecho a medida para premiar a los verdaderos campeones. Diseño y texto totalmente personalizable.",
    "category": "Deportivos y Premios",
    "tags": ["trofeo", "campeon", "premios", "impresion 3d"],
    "originalFile": "Captura de pantalla 2026-08-28 203408.png"
  },
  {
    "filename": "adorno-hogar-geometrico.png",
    "title": "Adorno Geométrico para el Hogar",
    "description": "Dale un toque moderno a tus espacios con este adorno geométrico a medida. Elegí el color y tamaño perfecto para tu decoración.",
    "category": "Hogar y Decoración",
    "tags": ["decoracion", "hogar", "adorno 3d", "diseño"],
    "originalFile": "Captura de pantalla 2026-08-28 203449.png"
  },
  {
    "filename": "identificador-mascotas-personalizado.png",
    "title": "Identificador de Mascotas a Medida",
    "description": "Protegé a tu mascota con una chapita identificatoria súper resistente y personalizada. Fabricada en 3D con colores vivos.",
    "category": "Souvenirs y Cumpleaños",
    "tags": ["mascotas", "identificador", "chapita", "personalizado"],
    "originalFile": "Captura de pantalla 2026-08-28 203513.png"
  }
);
fs.writeFileSync('analysis_results_batch2.json', JSON.stringify(results, null, 2));
