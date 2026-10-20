// Generates public/og-image.png (1200x630) used for social sharing previews.
import sharp from 'sharp';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#557326"/><stop offset="1" stop-color="#0b4f5c"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="1080" cy="80" r="260" fill="#ffffff" opacity=".06"/>
  <circle cx="120" cy="620" r="200" fill="#ffffff" opacity=".05"/>
  <text x="90" y="250" font-family="Poppins, Arial, sans-serif" font-size="34" font-weight="600" fill="#e6eed4" letter-spacing="4">VIRTUAL ASSISTANT</text>
  <text x="90" y="350" font-family="Poppins, Arial, sans-serif" font-size="84" font-weight="700" fill="#ffffff">Jonnel Oliva</text>
  <text x="90" y="425" font-family="Poppins, Arial, sans-serif" font-size="30" fill="#e6eed4">Data Entry · Web Research</text>
  <text x="90" y="468" font-family="Poppins, Arial, sans-serif" font-size="30" fill="#e6eed4">Admin Support · Customer Service</text>
  <text x="90" y="530" font-family="Poppins, Arial, sans-serif" font-size="26" fill="#cfe293">Claude · ChatGPT · Gemini · GoHighLevel</text>
</svg>`;

// Circular portrait on the right
const size = 380;
const mask = Buffer.from(`<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}"/></svg>`);
const portrait = await sharp('src/assets/jonnel-oliva.jpg')
  .resize(size, size, { fit: 'cover', position: 'top' })
  .composite([{ input: mask, blend: 'dest-in' }])
  .png()
  .toBuffer();
const ring = Buffer.from(`<svg width="${size + 24}" height="${size + 24}"><circle cx="${(size + 24) / 2}" cy="${(size + 24) / 2}" r="${(size + 24) / 2}" fill="#e6eed4"/></svg>`);

await sharp(Buffer.from(svg))
  .composite([
    { input: ring, left: 1200 - size - 92, top: (630 - size - 24) / 2 },
    { input: portrait, left: 1200 - size - 80, top: (630 - size) / 2 },
  ])
  .png()
  .toFile('public/og-image.png');
console.log('og-image.png generated');
