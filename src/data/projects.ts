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
  demo2?: string;
  repo?: string;
  /** Imagen en public/images/projects/ (ej. '/images/projects/mi-app.png', 1200×675). */
  cover?: string;
  /** Si no hay `cover`, se dibuja este diagrama de flujo. */
  flow: { label: string; badge?: string; steps: string[] };
  /** Campos opcionales para tarjetas enriquecidas */
  problema?: L;
  queHice?: L;
  decisiones?: string[];
  resultado?: L;
  notaDemo?: L;
}

/**
 * ✏️ PROYECTOS.
 * Todos tienen demo pública en mickenvr.freedev.app y usan datos ficticios.
 * No se incluye información real de contribuyentes ni del área de rentas.
 */
export const projects: Project[] = [
  {
    id: 'tributario-2026',
    category: { es: 'Trabajo real · Sector público', en: 'Real work · Public sector' },
    title: { es: 'Sistema Tributario 2026 · Carquín', en: 'Tax System 2026 · Carquín' },
    description: {
      es: 'Migración y modernización del sistema de gestión tributaria municipal para el ejercicio fiscal 2026: padrón de contribuyentes y predios (urbanos y rústicos), cálculo de autovalúo y predial por tramos, caja y recaudación con recibos anulables, dashboard de recaudación, auditoría de operaciones y emisión de hojas resumen (PU/PR/HR).',
      en: 'Migration and modernization of the municipal tax management system for fiscal year 2026: taxpayer and property registry (urban and rural), assessed value and property tax calculation by brackets, cashier and collection with voidable receipts, collection dashboard, operation auditing and summary sheet printing (PU/PR/HR).',
    },
    tags: ['React', 'PHP', 'MySQL'],
    demo: 'https://mickenvr.freedev.app/Sistema_Tributario_2026/',
    cover: '/images/projects/sistema-tributario-2026.jpg',
    notaDemo: { es: 'Datos ficticios · acceso precargado', en: 'Fictional data · preloaded access' },
    flow: { label: 'tributario.v2026', badge: 'Demo', steps: ['Padrón', 'Autovalúo', 'Deudas y pagos', 'Reportes'] },
  },
  {
    id: 'listener',
    category: { es: 'Prototipo · Automatización con IA', en: 'Prototype · AI automation' },
    title: { es: 'Listener · Bot de WhatsApp con IA', en: 'Listener · WhatsApp bot with AI' },
    description: {
      es: 'App Android propia que lee las notificaciones de WhatsApp y WhatsApp Business y responde automáticamente consultando a un puente serverless en Google Apps Script, que arma el contexto y llama a un modelo en Groq.',
      en: 'Own Android app that reads WhatsApp and WhatsApp Business notifications and replies automatically by querying a serverless bridge in Google Apps Script, which builds the context and calls a model on Groq.',
    },
    problema: {
      es: 'Atender WhatsApp a mano consume tiempo, y las apps de auto-respuesta bloquean funciones clave tras planes de pago.',
      en: 'Answering WhatsApp by hand eats up time, and existing auto-reply apps lock key features behind paid plans.',
    },
    queHice: {
      es: 'App Android propia en Kotlin que lee las notificaciones de WhatsApp, consulta un puente en Apps Script con un modelo en Groq y responde desde la notificación.',
      en: 'Own Android app in Kotlin that reads WhatsApp notifications, queries a bridge in Apps Script with a Groq model and replies from the notification.',
    },
    decisiones: [
      'Prompt, modelo y memoria se editan desde Google Sheets, sin recompilar.',
      'Si el servidor falla, no se envía nada al cliente.',
      'Registro de eventos en pantalla para depurar.',
    ],
    tags: ['Kotlin', 'Android', 'Apps Script', 'Groq'],
    repo: 'https://github.com/Micke-NVR/Listener',
    flow: { label: 'listener.bot', badge: 'Prototipo', steps: ['Notificación', 'Filtro', 'Puente', 'Respuesta'] },
  },
  {
    id: 'horizonte',
    category: { es: 'Trabajo real · Sector inmobiliario', en: 'Real work · Real estate' },
    title: { es: 'Horizonte Inmobiliaria · Web + CRM', en: 'Horizonte Real Estate · Website + CRM' },
    description: {
      es: 'Web pública para una inmobiliaria del Norte Chico (Huacho, Huaral, Barranca, Chancay y Lima) con inmuebles, filtros, favoritos y fichas de detalle, más un CRM con pipeline, agenda y reportes. La demo funciona en el navegador.',
      en: 'Public website for a real estate company in the Norte Chico area (Huacho, Huaral, Barranca, Chancay and Lima) with properties, filters, favorites and detail pages, plus a CRM with pipeline, agenda and reports. The demo runs in the browser.',
    },
    tags: ['PHP', 'MySQL', 'JavaScript', 'GSAP'],
    demo: 'https://mickenvr.freedev.app/Norte-Chico/app/',
    cover: '/images/projects/inmobiliaria.webp',
    flow: { label: 'horizonte.crm', badge: 'Demo', steps: ['Web pública', 'Filtros', 'Asistente', 'CRM'] },
  },
  {
    id: 'vidamas',
    category: { es: 'Trabajo real · Sector inmobiliario', en: 'Real work · Real estate' },
    title: { es: 'Vidamas Inmobiliaria · Web + CRM', en: 'Vidamas Real Estate · Website + CRM' },
    description: {
      es: 'Landing pública y CRM para una inmobiliaria del Norte Chico: catálogo de proyectos, captación de consultas y panel de asesores con leads por etapas, cotizaciones, comisiones y planos. Datos ficticios.',
      en: 'Public landing page and CRM for a real estate company in the Norte Chico area: project catalog, lead capture and an advisor panel with stage-based leads, quotes, commissions and floor plans. Fictional data.',
    },
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    demo: 'https://mickenvr.freedev.app/crm/',
    cover: '/images/projects/vidamas.webp',
    flow: { label: 'vidamas.crm', badge: 'Demo', steps: ['Landing', 'Consulta', 'Lead', 'Panel'] },
  },
  {
    id: 'predial',
    category: { es: 'Trabajo real · Sector público', en: 'Real work · Public sector' },
    title: { es: 'Sistema Predial · Carquín (2024 → 2025)', en: 'Property Tax System · Carquín (2024 → 2025)' },
    description: {
      es: 'Sistema de administración predial de la Municipalidad Distrital de Caleta de Carquín. Primera versión (2024): registro de predios, cartillas de urbano y rústico, recaudación y reportes, reemplazando las hojas de cálculo. Reescritura (2025): PHP nativo con arquitectura MVC ligera, PDO, padrón urbano y rústico, autoavalúo, deudas, pagos, declaraciones imprimibles y auditoría de operaciones.',
      en: 'Property tax system for the District Municipality of Caleta de Carquín. First version (2024): property registry, urban and rural tax notices, collection and reports, replacing spreadsheets. Rewrite (2025): native PHP with a lightweight MVC architecture, PDO, urban and rural registry, assessed value, debts, payments, printable declarations and operation auditing.',
    },
    tags: ['PHP', 'MySQL', 'PDO', 'MVC'],
    demo: 'https://mickenvr.freedev.app/Sistema_Predial_2025/',
    demo2: 'https://mickenvr.freedev.app/Sistema_Predial_2024/',
    cover: '/images/projects/predial-2025.webp',
    flow: { label: 'predial.v2025', badge: 'Demo', steps: ['Padrón', 'Autovalúo', 'Deudas y pagos', 'Reportes'] },
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
];
