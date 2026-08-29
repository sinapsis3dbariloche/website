const fs = require('fs');
let content = fs.readFileSync('components/Portfolio.tsx', 'utf8');

content = content.replace(/Pastelería y Repostería 3D/g, 'Pastelería y Repostería');

fs.writeFileSync('components/Portfolio.tsx', content, 'utf8');
console.log("Renamed category successfully.");
