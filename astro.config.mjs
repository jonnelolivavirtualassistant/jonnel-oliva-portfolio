import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// GitHub Pages is detected automatically when the site is built by GitHub Actions:
//   repo "jonnel-portfolio" under user "jdoe"  →  https://jdoe.github.io/jonnel-portfolio/
//   repo "jdoe.github.io"                      →  https://jdoe.github.io/
// Locally (npm run dev / build) the site runs at the root: http://localhost:4321/
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner.toLowerCase()}.github.io` : 'http://localhost:4321',
  base: repo && !isUserSite ? `/${repo}` : '/',
  integrations: [react(), sitemap()],
  build: { inlineStylesheets: 'auto' },
});
