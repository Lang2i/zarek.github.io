const fs = require('fs');

const theme = process.argv[2];
const file = process.argv[3] || '_config.yml';

if (!theme) {
  console.error('usage: node set-theme.js <theme> [config]');
  process.exit(1);
}

const content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');
let found = false;

for (let i = 0; i < lines.length; i++) {
  if (/^theme:\s*\S*/.test(lines[i])) {
    lines[i] = 'theme: ' + theme;
    found = true;
    break;
  }
}

if (!found) {
  lines.push('theme: ' + theme);
}

fs.writeFileSync(file, lines.join('\n'), 'utf8');
console.log('theme -> ' + theme);
