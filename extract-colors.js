const fs = require('fs');

const style = fs.readFileSync('css/style.css', 'utf-8');
const hexColors = style.match(/#[0-9a-fA-F]{3,6}\b/g) || [];
const uniqueColors = [...new Set(hexColors.map(c => c.toLowerCase()))];

console.log("Colors in style.css:");
uniqueColors.forEach(c => console.log(c));
