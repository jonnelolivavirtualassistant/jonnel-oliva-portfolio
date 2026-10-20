// Generates the home-screen / app icons from the favicon design.
import sharp from 'sharp';

const svg = (size, radius) => Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#557326"/><stop offset="1" stop-color="#0b4f5c"/></linearGradient></defs>
  <rect width="64" height="64" rx="${radius}" fill="url(#g)"/>
  <text x="32" y="41" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-size="24" font-weight="700" fill="#fff">JO</text>
</svg>`);

// iOS rounds corners itself, so the apple icon is a full square
await sharp(svg(180, 0)).png().toFile('public/apple-touch-icon.png');
await sharp(svg(192, 0)).png().toFile('public/icon-192.png');
await sharp(svg(512, 0)).png().toFile('public/icon-512.png');
// browsers request /favicon.ico on their own; a PNG inside .ico is accepted by all current browsers
await sharp(svg(48, 12)).png().toFile('public/favicon.ico');
console.log('icons generated');
