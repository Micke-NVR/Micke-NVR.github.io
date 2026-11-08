export type Lang = 'es' | 'en';
export type L = { es: string; en: string };

export const langs: Lang[] = ['es', 'en'];

/** Devuelve el texto en el idioma activo. */
export const t = (l: L, lang: Lang) => l[lang];

/** Convierte **negrita** en <strong>. Usar con set:html (solo con TU contenido). */
export const rich = (s: string) =>
  s.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-ink">$1</strong>');

/** Respeta el "base" de astro.config (útil en GitHub Pages con subcarpeta). */
export const withBase = (path: string) => {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : '/' + path}`;
};

export const homePath = (lang: Lang) => withBase(lang === 'es' ? '/' : '/en/');
