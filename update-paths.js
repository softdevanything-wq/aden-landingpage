const fs = require('fs');
const path = require('path');

const BASE_PATH = '/aden-landingpage';

// Files to update
const files = [
  'src/pages/index.astro',
  'src/components/ExchangeSelectModal.astro'
];

// Pattern to match src="/..." paths (excluding external URLs)
const srcPattern = /src="\/([^"]+)"/g;

files.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace all src="/..." with src="/aden-landingpage/..."
    content = content.replace(srcPattern, (match, path) => {
      // Skip if already has base path or is external URL
      if (path.startsWith('aden-landingpage/') || path.startsWith('http')) {
        return match;
      }
      return `src="${BASE_PATH}/${path}"`;
    });
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All paths updated successfully!');