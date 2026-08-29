const fs = require('fs');
let content = fs.readFileSync('components/Portfolio.tsx', 'utf8');

const regex = /(title:\s*'Fabricación e Impresión Profesional 3D'[\s\S]*?category:\s*)'[^']+'/g;
if (regex.test(content)) {
  content = content.replace(regex, `$1'Ventas Mayoristas y Comercios'`);
  fs.writeFileSync('components/Portfolio.tsx', content, 'utf8');
  console.log("Updated successfully.");
} else {
  console.log("Product not found.");
}
