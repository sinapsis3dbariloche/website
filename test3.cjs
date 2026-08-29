const fs = require('fs');
const code = fs.readFileSync('components/Portfolio.tsx', 'utf8');
const index = code.indexOf('Portfolio de <span');
console.log(code.substring(index, index + 2000));
