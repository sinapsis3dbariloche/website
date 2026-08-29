import fs from 'fs';

let content = fs.readFileSync('components/Portfolio.tsx', 'utf8');

content = content.replace(
  "['Todos', 'Souvenirs y Cumpleaños', 'Corporativo y Marcas', 'Deportivos y Premios', 'Hogar y Decoración']",
  "['Todos', 'Souvenirs y Cumpleaños', 'Corporativo y Marcas', 'Deportivos y Premios', 'Hogar y Decoración', 'Escolar y Didáctico']"
);

content = content.replace(
  "['Souvenirs y Cumpleaños', 'Corporativo y Marcas', 'Deportivos y Premios', 'Hogar y Decoración']",
  "['Souvenirs y Cumpleaños', 'Corporativo y Marcas', 'Deportivos y Premios', 'Hogar y Decoración', 'Escolar y Didáctico']"
);

// Update set-didactico-cabildo category
content = content.replace(
  /(id:\s*'set-didactico-cabildo'[\s\S]*?category:\s*)'[^']+'/,
  "$1'Escolar y Didáctico'"
);

// Update kit-escolar-mochilas category
content = content.replace(
  /(id:\s*'kit-escolar-mochilas'[\s\S]*?category:\s*)'[^']+'/,
  "$1'Escolar y Didáctico'"
);

fs.writeFileSync('components/Portfolio.tsx', content);
