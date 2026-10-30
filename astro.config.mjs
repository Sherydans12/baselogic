// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { handleContactRequest } from './src/lib/contactHandler.ts';

/**
 * Integración local de desarrollo para montar el Worker desacoplado en POST /api/contact
 * durante `astro dev` / `astro preview`, manteniendo la compilación (`astro build`) 100 % estática.
 */
function localContactWorkerDevIntegration() {
  return {
    name: 'baselogic-local-contact-worker',
    hooks: {
      'astro:server:setup': ({ server }) => {
        server.middlewares.use(async (req, res, next) => {
          if (!req.url || (!req.url.startsWith('/api/contact') && !req.url.startsWith('/api/contact/'))) {
            return next();
          }

          try {
            const chunks = [];
            for await (const chunk of req) {
              chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
            }
            const rawBody = Buffer.concat(chunks);

            const protocol = 'http';
            const host = req.headers.host || 'localhost:4321';
            const fullUrl = `${protocol}://${host}${req.url}`;

            const headers = new Headers();
            for (const [key, value] of Object.entries(req.headers)) {
              if (Array.isArray(value)) {
                headers.set(key, value.join(', '));
              } else if (typeof value === 'string') {
                headers.set(key, value);
              }
            }

            const webRequest = new Request(fullUrl, {
              method: req.method || 'GET',
              headers,
              body: req.method === 'GET' || req.method === 'HEAD' || req.method === 'OPTIONS' ? undefined : rawBody,
            });

            const env = {
              RESEND_API_KEY: process.env.RESEND_API_KEY,
              CONTACT_FROM_EMAIL:
                process.env.CONTACT_FROM_EMAIL ||
                'BaseLogic · Notificaciones Web <notificaciones@baselogic.cl>',
              CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL || 'contacto@baselogic.cl',
              ALLOWED_ORIGINS: 'https://baselogic.cl,https://www.baselogic.cl',
              ALLOW_LOCALHOST: 'true',
              CONTACT_DEV_MOCK: process.env.RESEND_API_KEY ? 'false' : 'true',
              TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
            };

            const webResponse = await handleContactRequest(webRequest, env);
            res.statusCode = webResponse.status;
            webResponse.headers.forEach((val, key) => {
              res.setHeader(key, val);
            });
            const responseText = await webResponse.text();
            res.end(responseText);
          } catch (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.end(JSON.stringify({ ok: false, code: 'INTERNAL_ERROR', message: 'Error interno en dev worker.' }));
          }
        });
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://baselogic.cl',
  integrations: [react(), localContactWorkerDevIntegration()],

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
