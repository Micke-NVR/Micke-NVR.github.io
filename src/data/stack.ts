import type { L } from '../i18n/utils';

/**
 * ✏️ STACK. `icon` = "simple-icons:nombre" (logos de marcas, ver https://icones.js.org/collection/simple-icons)
 * o "lucide:nombre" para íconos genéricos. Solo tecnologías que ya has usado.
 */
export const stack: { title: L; items: { name: string; icon: string }[] }[] = [
  {
    title: { es: 'Desarrollo web', en: 'Web development' },
    items: [
      { name: 'PHP', icon: 'simple-icons:php' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: 'Astro', icon: 'simple-icons:astro' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
      { name: 'React', icon: 'simple-icons:react' },
      { name: 'Laravel', icon: 'simple-icons:laravel' },
      { name: 'Docker', icon: 'simple-icons:docker' },
    ],
  },
  {
    title: { es: 'Datos y visualización', en: 'Data and visualization' },
    items: [
      { name: 'MySQL', icon: 'simple-icons:mysql' },
      { name: 'SQL', icon: 'lucide:database' },
      { name: 'Power BI', icon: 'simple-icons:powerbi' },
      { name: 'Chart.js', icon: 'simple-icons:chartdotjs' },
    ],
  },
  {
    title: { es: 'Automatización', en: 'Automation' },
    items: [
      { name: 'n8n', icon: 'simple-icons:n8n' },
      { name: 'APIs', icon: 'lucide:plug' },
      { name: 'Kotlin', icon: 'simple-icons:kotlin' },
      { name: 'Android', icon: 'simple-icons:android' },
      { name: 'Google Apps Script', icon: 'simple-icons:google' },
      { name: 'LLMs (Groq)', icon: 'lucide:sparkles' },
    ],
  },
  {
    title: { es: 'Formación estadística', en: 'Statistical background' },
    items: [
      { name: 'Python', icon: 'simple-icons:python' },
      { name: 'R', icon: 'simple-icons:r' },
      { name: 'SPSS', icon: 'lucide:sigma' },
    ],
  },
];
