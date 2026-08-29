import fs from 'fs';
import path from 'path';

const results = JSON.parse(fs.readFileSync('analysis_results.json', 'utf8'));

// 1. Move and rename images
results.forEach(item => {
    const oldPath = path.join('/app/applet', item.originalFile);
    const newPath = path.join('/app/applet/public/images', item.filename);
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
    }
});

// 2. Update Portfolio.tsx
let portfolioContent = fs.readFileSync('/app/applet/components/Portfolio.tsx', 'utf8');

const newItemsString = results.map((item, i) => {
    return `    {
      id: '${item.filename.replace('.png', '')}',
      title: '${item.title}',
      desc: '${item.description}',
      category: '${item.category}',
      tags: ${JSON.stringify(item.tags)},
      imagePath: '/images/${item.filename}',
      seoFilename: '${item.filename}',
      detail: '${item.description}',
      fallback: (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col justify-center items-center p-6 relative">
          <i className="fa-solid fa-star text-4xl text-orange-500/50 mb-3 animate-pulse"></i>
          <span className="text-zinc-400 text-xs font-bold">${item.title}</span>
        </div>
      )
    }`;
}).join(',\n');

// Insert before the last ];
const insertIndex = portfolioContent.lastIndexOf('  ];');
if (insertIndex !== -1) {
    portfolioContent = portfolioContent.slice(0, insertIndex) + ',\n' + newItemsString + '\n' + portfolioContent.slice(insertIndex);
    fs.writeFileSync('/app/applet/components/Portfolio.tsx', portfolioContent);
}

