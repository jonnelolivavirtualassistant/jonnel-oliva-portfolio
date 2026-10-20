// Builds public/hero-portrait.webp: a round, soft-edged cut-out of the portrait.
// The transparent edges let the liquid hero sample only the portrait, not a box.
import sharp from 'sharp';

const SIZE = 1000;
const mask = Buffer.from(`
<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="m" cx="50%" cy="50%" r="50%">
      <stop offset="0.80" stop-color="#fff" stop-opacity="1"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="url(#m)"/>
</svg>`);

await sharp('src/assets/jonnel-oliva.jpg')
  .extract({ left: 0, top: 40, width: 896, height: 896 })
  .resize(SIZE, SIZE)
  .ensureAlpha()
  .composite([{ input: mask, blend: 'dest-in' }])
  .webp({ quality: 86, alphaQuality: 90 })
  .toFile('public/hero-portrait.webp');
console.log('hero-portrait.webp generated');
