import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Default to ThanhDora.github.io; update to https://profile.thanhdora.site or https://thanhdora.site when custom domain is ready
  site: 'https://ThanhDora.github.io',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
  },
});
