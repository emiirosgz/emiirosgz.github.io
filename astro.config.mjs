// @ts-check
import { defineConfig, fontProviders  } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://emiirosgz.github.io',
  base: '/',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--sans",
      options: {
        variants: [{
          src: ['./src/assets/fonts/inter/InterVariable.woff2'],
          weight: '100 900',
          style: 'normal'
        }]
      }
    },
    {
      provider: fontProviders.local(),
      name: "Space Grotesk",
      cssVariable: "--display",
      options: {
        variants: [{
          src: ['./src/assets/fonts/space-grotesk/SpaceGrotesk-VariableFont_wght.woff2'],
          weight: '300 700',
          style: 'normal'
        }]
      }
    }
  ]
});