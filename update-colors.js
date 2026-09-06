const fs = require('fs');

const cssFiles = [
  'css/style.css',
  'css/style-rtl.css',
  'css/responsive.css',
  'css/responsive-rtl.css'
];

cssFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    content = content.replace(/#e73131/gi, 'var(--primary-color)');
    content = content.replace(/#222534/gi, 'var(--dark-color)');
    fs.writeFileSync(file, content, 'utf-8');
  }
});
console.log('Colors replaced successfully!');
