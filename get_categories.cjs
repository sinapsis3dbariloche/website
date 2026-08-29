const fs = require('fs');
const content = fs.readFileSync('components/Portfolio.tsx', 'utf8');

const regex = /category:\s*'([^']+)'/g;
let match;
const categories = new Set();
while ((match = regex.exec(content)) !== null) {
  categories.add(match[1]);
}

const titles = [];
const titleRegex = /title:\s*'([^']+)'/g;
while ((match = titleRegex.exec(content)) !== null) {
  titles.push(match[1]);
}

console.log("Categorias encontradas:", Array.from(categories));
console.log("Titulos encontrados:");
titles.forEach(t => console.log(t));

