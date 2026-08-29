const fs = require('fs');
let content = fs.readFileSync('components/Portfolio.tsx', 'utf8');
content = content.replace(/category:\s*''Figuras y Coleccionables'/g, "category: 'Figuras y Coleccionables'");
fs.writeFileSync('components/Portfolio.tsx', content, 'utf8');
console.log("Fixed syntax error.");
