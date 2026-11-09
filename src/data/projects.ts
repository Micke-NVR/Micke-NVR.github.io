import type { L } from '../i18n/utils';

export interface Project {
  id: string;
  category: L;
  title: L;
  description: L;
  /** Opcional: dato destacado (solo pon cifras que puedas respaldar). */
  metric?: L;
  tags: string[];
  /** 'wip' = en desarrollo. Por defecto: terminado. */
  status?: 'done' | 'wip';
  /** Enlaces. Si están vacíos, el botón no se muestra. */
  demo?: string;
  repo?: string;
  /** Imagen en public/images/projects/ (ej. '/images/projects/mi-app.png', 1200×675). */
  cover?: string;
  /** Si no hay `cover`, se dibuja este diagrama de flujo. */
  flow: { label: string; badge?: string; steps: string[] };
}

/**
 * ✏️ PROYECTOS.
 * Todos tienen demo pública en mickenvr.freedev.app y usan datos ficticios.
 * No se incluye información real de contribuyentes ni del área de rentas.
 */
export const projects: Project[] = [
  {
    id: 'predial-2025',
    category: { es: 'Trabajo real · Sector público', en: 'Real work · Public sector' },
    title: { es: 'Sistema Predial 2025 · Carquín', en: 'Property Tax System 2025 · Carquín' },
    description: {
      es: 'Reescritura del sistema de administración predial de la Municipalidad Distrital de Caleta de Carquín sobre PHP nativo con arquitectura MVC ligera: padrón urbano y rústico, autoavalúo, deudas, pagos, declaraciones imprimibles y auditoría de operaciones.',
      en: 'Rewrite of the property tax system for the District Municipality of Caleta de Carquín on native PHP with a lightweight MVC architecture: urban and rural registry, assessed value, debts, payments, printable declarations and operation auditing.',
    },
    tags: ['PHP', 'MySQL', 'PDO', 'MVC'],
    demo: 'https://mickenvr.freedev.app/Sistema_Predial_2025/',
    cover: '/images/projects/predial-2025.webp',
    flow: { label: 'predial.v2025', badge: 'Demo', steps: ['Padrón', 'Autoavalúo', 'Deudas y pagos', 'Reportes'] },
  },
  {
    id: 'predial-2024',
    category: { es: 'Trabajo real · Primera versión', en: 'Real work · First version' },
    title: { es: 'Sistema Predial 2024 · Carquín', en: 'Property Tax System 2024 · Carquín' },
    description: {
      es: 'Versión inicial del sistema, con la que se dejó de trabajar en hojas de cálculo: registro de predios, cartillas de urbano y rústico, recaudación y reportes. Es la base que luego se reescribió en 2025.',
      en: 'First version of the system, the point where spreadsheets were left behind: property registry, urban and rural tax notices, collection and reports. It became the base for the 2025 rewrite.',
    },
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    demo: 'https://mickenvr.freedev.app/Sistema_Predial_2024/',
    cover: '/images/projects/predial-2024.webp',
    flow: { label: 'predial.v2024', badge: 'Demo', steps: ['Registro', 'Cartillas PU / PR', 'Recaudación', 'Reportes'] },
  },
  {
    id: 'academia',
    category: { es: 'Proyecto · Plataforma educativa', en: 'Project · Education platform' },
    title: { es: 'Academia El Olympo', en: 'El Olympo Academy' },
    description: {
      es: 'Plataforma para una academia preuniversitaria: portada pública, programas y lecciones, aula del estudiante, revisión de matrículas y panel administrativo. Incluye entorno Docker para levantarla completa en local.',
      en: 'Platform for a pre-university academy: public site, programs and lessons, student classroom, enrollment review and admin panel. Includes a Docker environment to run it locally.',
    },
    tags: ['PHP', 'MySQL', 'JavaScript', 'Docker'],
    demo: 'https://mickenvr.freedev.app/Academia/app/',
    cover: '/images/projects/academia.webp',
    flow: { label: 'academia.olympo', badge: 'Demo', steps: ['Portada', 'Matrícula', 'Aula', 'Administración'] },
  },
  {
    id: 'vidamas',
    category: { es: 'Trabajo real · Sector inmobiliario', en: 'Real work · Real estate' },
    title: { es: 'Vidamas Inmobiliaria · Web + CRM', en: 'Vidamas Real Estate · Website + CRM' },
    description: {
      es: 'Landing pública y CRM para una inmobiliaria del Norte Chico: catálogo de proyectos, captación de consultas y un panel para asesores con seguimiento de leads por etapas, red de referidos, cotizaciones, comisiones, tickets de soporte y planos. La demo usa datos ficticios y conserva los flujos reales del sistema.',
      en: 'Public landing page and CRM for a real estate company in the Norte Chico area: project catalog, lead capture and an advisor panel with stage-based lead tracking, referral network, quotes, commissions, support tickets and floor plans. The demo uses fictional data and keeps the real system flows.',
    },
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    demo: 'https://mickenvr.freedev.app/crm/',
    cover: '/images/projects/vidamas.webp',
    flow: { label: 'vidamas.crm', badge: 'Demo', steps: ['Landing', 'Consulta', 'Lead', 'Panel'] },
  },
  {
    id: 'tributario-2026',
    category: { es: 'Trabajo real · Sector público', en: 'Real work · Public sector' },
    title: { es: 'Sistema Tributario 2026 · Carquín', en: 'Tax System 2026 · Carquín' },
    description: {
      es: 'Migración y modernización del sistema de gestión tributaria municipal para el ejercicio fiscal 2026: padrón de contribuyentes y predios (urbanos y rústicos), cálculo de autovalúo y predial por tramos, caja y recaudación con recibos anulables, dashboard de recaudación, auditoría de operaciones y emisión de hojas resumen (PU/PR/HR).',
      en: 'Migration and modernization of the municipal tax management system for fiscal year 2026: taxpayer and property registry (urban and rural), assessed value and property tax calculation by brackets, cashier and collection with voidable receipts, collection dashboard, operation auditing and summary sheet printing (PU/PR/HR).',
    },
    tags: ['React', 'Node.js', 'MySQL', 'Express'],
    demo: 'https://mickenvr.freedev.app/Sistema_Tributario_2026/',
    cover: '/images/projects/sistema-tributario-2026.webp',
    flow: { label: 'tributario.v2026', badge: 'Demo', steps: ['Padrón', 'Autovalúo', 'Deudas y pagos', 'Reportes'] },
  },
];
