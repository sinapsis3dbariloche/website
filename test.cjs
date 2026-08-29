const fs = require('fs');
const code = fs.readFileSync('components/Portfolio.tsx', 'utf8');
const index = code.indexOf('const categories =');
if (index === -1) {
  console.log("No categories array found. Finding activeFilter...");
  const idx2 = code.indexOf('useState');
  console.log(code.substring(idx2 - 100, idx2 + 500));
} else {
  console.log(code.substring(index, index + 500));
}
