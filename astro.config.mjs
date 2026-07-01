// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://baselogic.cl',
  integrations: [react()],

  redirects: {
    '/en': '/',
    '/en/contact': '/contacto',
    '/en/services/saas': '/servicios',
    '/en/services/api': '/servicios',
    '/en/services/audit': '/servicios',
    '/en/services/eam': '/productos/eam',
    '/en/legal/privacy': '/legal/privacidad',
    '/en/legal/terms': '/legal/terminos',
    '/servicios/saas': '/servicios',
    '/servicios/api': '/servicios',
    '/servicios/auditoria': '/servicios',
    '/servicios/eam': '/productos/eam'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
