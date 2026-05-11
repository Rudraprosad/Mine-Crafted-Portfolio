const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/About/AudioToggleButton/AudioToggleButton.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Find the first SVG
const svg1Start = content.indexOf('<svg');
const svg1End = content.indexOf('</svg>', svg1Start) + 6;
const svg1 = content.slice(svg1Start, svg1End);

// Find the second SVG
const svg2Start = content.indexOf('<svg', svg1End);
const svg2End = content.indexOf('</svg>', svg2Start) + 6;
const svg2 = content.slice(svg2Start, svg2End);

fs.writeFileSync(path.join(__dirname, 'public/audio-on.svg'), svg1);
fs.writeFileSync(path.join(__dirname, 'public/audio-off.svg'), svg2);

const newContent = content.substring(0, svg1Start) + 
  '<img src="/audio-on.svg" alt="Audio On" width="16" height="19" />' + 
  content.substring(svg1End, svg2Start) + 
  '<img src="/audio-off.svg" alt="Audio Off" width="18" height="19" />' + 
  content.substring(svg2End);

fs.writeFileSync(filePath, newContent);
console.log('Successfully extracted SVGs and updated AudioToggleButton.jsx');
