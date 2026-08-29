const fs = require('fs');
let content = fs.readFileSync('components/Portfolio.tsx', 'utf8');

const regex = /(title:\s*'Figuras Brain Rot 3D'[\s\S]*?category:\s*')[^']+'/g;
if (regex.test(content)) {
  content = content.replace(regex, `$1'Figuras y Coleccionables'`);
  fs.writeFileSync('components/Portfolio.tsx', content, 'utf8');
  console.log("Updated successfully.");
} else {
  console.log("Product not found or regex mismatch.");
}
