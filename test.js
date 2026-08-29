const fs = require('fs');
const code = fs.readFileSync('components/Portfolio.tsx', 'utf8');
const index = code.lastIndexOf('];');
console.log(code.substring(index, index + 1000));
