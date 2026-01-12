const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

fs.writeFileSync(
    path.join(distDir, 'result.txt'),
    'Build successful! Jenkins pipeline works 🚀\n',
    'utf8'
);

console.log('Build completed. dist/result.txt created.');
