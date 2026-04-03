const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\win 10\\.gemini\\antigravity\\brain\\b5319869-5637-4159-857a-1fbdf5d93811';
const destDir = 'c:\\Users\\win 10\\Desktop\\campus managment\\mobile-app\\assets\\images';

const files = fs.readdirSync(srcDir);
files.forEach(file => {
    if (file.endsWith('.png') && (file.startsWith('media__') || file.startsWith('uet_'))) {
        fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
        console.log('Copied:', file);
    }
});
