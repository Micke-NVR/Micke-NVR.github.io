import type { L } from '../i18n/utils';

/** ✏️ SERVICIOS. Íconos: https://icones.js.org/collection/lucide (usa "lucide:nombre"). */
export const services = [
  {
    icon: 'lucide:landmark',
    title: { es: 'Sistemas de gestión predial y tributaria', en: 'Property tax and revenue systems' } as L,
    description: {
      es: 'Migración de datos, actualización de la lógica de cálculo y emisión mecanizada para municipalidades.',
      en: 'Data migration, calculation logic updates and mass billing for municipalities.',
    } as L,
    tags: ['PHP', 'JavaScript', 'MySQL'],
  },
  {
    icon: 'lucide:chart-column',
    title: { es: 'Dashboards y análisis de datos', en: 'Dashboards and data analysis' } as L,
    description: {
      es: 'Reportes en Power BI y paneles web a medida para seguir recaudación, ventas o indicadores.',
      en: 'Power BI reports and custom web panels to track revenue, sales or KPIs.',
    } as L,
    tags: ['Power BI', 'SQL', 'JavaScript'],
  },
  {
    icon: 'lucide:workflow',
    title: { es: 'Chatbots y automatización', en: 'Chatbots and automation' } as L,
    description: {
      es: 'Flujos con n8n y WhatsApp para atender consultas y automatizar tareas repetitivas.',
      en: 'n8n and WhatsApp workflows that answer inquiries and automate repetitive tasks.',
    } as L,
    tags: ['n8n', 'WhatsApp', 'Chatbots'],
  },
  {
    icon: 'lucide:globe',
    title: { es: 'Webs, CRM y tiendas virtuales', en: 'Websites, CRMs and online stores' } as L,
    description: {
      es: 'Desarrollo a medida de páginas web, CRM y tiendas en línea.',
      en: 'Custom websites, CRMs and online stores.',
    } as L,
    tags: ['Webs', 'CRM', 'E-commerce'],
  },
];
