const path = require('path');

const fs = require('fs-extra');

const destDir = path.join(__dirname, 'dist/fonts');
const targetDir = path.join(__dirname, 'src/modules/core/fonts/plex');

if (!fs.existsSync(destDir)) {
  fs.mkdirpSync(destDir);
}

fs.copy(targetDir, destDir);
