const fs = require('fs');

// Copy constants.js to src/utils/
fs.copyFileSync('constants.js', 'src/utils/constants.js');
console.log('Copied constants.js -> src/utils/constants.js');

// Copy helpers.js to src/utils/
fs.copyFileSync('helpers.js', 'src/utils/helpers.js');
console.log('Copied helpers.js -> src/utils/helpers.js');

// Copy Navbar.jsx to src/components/Layout/
fs.copyFileSync('Navbar.jsx', 'src/components/Layout/Navbar.jsx');
console.log('Copied Navbar.jsx -> src/components/Layout/Navbar.jsx');

// Copy Footer.jsx to src/components/Layout/
fs.copyFileSync('Footer.jsx', 'src/components/Layout/Footer.jsx');
console.log('Copied Footer.jsx -> src/components/Layout/Footer.jsx');

// Copy ScrollProgress.jsx to src/components/Layout/
fs.copyFileSync('ScrollProgress.jsx', 'src/components/Layout/ScrollProgress.jsx');
console.log('Copied ScrollProgress.jsx -> src/components/Layout/ScrollProgress.jsx');

// Copy WhatsAppButton.jsx to src/components/Common/
fs.copyFileSync('WhatsAppButton.jsx', 'src/components/Common/WhatsAppButton.jsx');
console.log('Copied WhatsAppButton.jsx -> src/components/Common/WhatsAppButton.jsx');

console.log('All files copied successfully!');
