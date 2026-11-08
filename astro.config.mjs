import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────────────────────
// ✏️ DESPLIEGUE
// El dominio real del sitio. Se usa para el canonical, el sitemap y las
// etiquetas Open Graph (la vista previa cuando pegas el link en WhatsApp).
// También puedes sobrescribirlo: SITE_URL=https://... npm run build
// ─────────────────────────────────────────────────────────────
const SITE_URL = process.env.SITE_URL ?? 'https://micke-nvr.github.io';

export default defineConfig({
  site: SITE_URL,
  base: '/',
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // Evita el error EBUSY de Windows con archivos .zip bloqueados en la carpeta
    server: { watch: { ignored: ['**/*.zip', '**/node_modules/**', '**/.git/**'] } },
  },
});
