const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Read data and template
const dataPath = path.join(__dirname, 'data.json');
const templatePath = path.join(__dirname, 'index.ejs');
const outputDir = path.join(__dirname, 'dist');
const outputPath = path.join(outputDir, 'index.html');

try {
  // Create dist directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  const template = fs.readFileSync(templatePath, 'utf-8');

  // Render the HTML using EJS
  const html = ejs.render(template, data);

  // Write output
  fs.writeFileSync(outputPath, html);
  console.log('Successfully generated index.html in dist/');

  // Copy assets
  const assets = ['css', 'js', 'images', 'fonts'];
  for (const asset of assets) {
    const src = path.join(__dirname, asset);
    const dest = path.join(outputDir, asset);
    if (fs.existsSync(src)) {
      fs.cpSync(src, dest, { recursive: true });
    }
  }

  // Copy root SEO files
  const rootFiles = ['robots.txt', 'sitemap.xml'];
  for (const file of rootFiles) {
    const src = path.join(__dirname, file);
    const dest = path.join(outputDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  }
  console.log('Successfully copied assets and SEO files to dist/');
} catch (err) {
  console.error('Error generating HTML:', err);
}
