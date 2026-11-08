import type { L } from '../i18n/utils';

/**
 * ✏️ TU PERFIL
 * Cada texto tiene { es, en }. Usa **negrita** para resaltar palabras.
 */
export const profile = {
  initials: 'MN',

  role: {
    es: 'Desarrollador web, automatización e IA',
    en: 'Web developer, automation & AI',
  } as L,

  location: { es: 'Huacho, Lima', en: 'Huacho, Lima' } as L,
  mode: { es: 'Remoto / Híbrido', en: 'Remote / Hybrid' } as L,
  education: {
    es: 'Bachiller en Estadística e Informática (UNJFSC)',
    en: "Bachelor's in Statistics and Computer Science (UNJFSC)",
  } as L,
  experience: {
    es: 'Desde 2023 en sistemas de datos del sector público',
    en: 'Since 2023 building public-sector data systems',
  } as L,

  /** Etiqueta pequeña junto al título del resumen. */
  focus: { es: 'Datos · Software · Automatización', en: 'Data · Software · Automation' } as L,

  headline: {
    es: 'Desarrollo plataformas web, automatizaciones con IA y sistemas de datos a medida.',
    en: 'I build web platforms, AI automations and custom data systems.',
  } as L,

  summary: {
    es: 'Bachiller en Estadística e Informática. Desarrollo **plataformas web, CRMs, chatbots e integraciones con IA y APIs**, y visualizaciones de datos con **Power BI**. Desde 2023 trabajo con sistemas de datos reales en la **Municipalidad Distrital de Caleta de Carquín**: implementé el **Sistema Web del Impuesto Predial** y actualmente presto el servicio de **consultoría informática para la migración de datos y emisión mecanizada del ejercicio fiscal 2027**.',
    en: "Bachelor's in Statistics and Computer Science. I build **web platforms, CRMs, chatbots and AI/API integrations**, plus data visualizations with **Power BI**. Since 2023 I have worked on real data systems at the **District Municipality of Caleta de Carquín**: I implemented the **Property Tax Web System** and am currently providing **IT consulting for data migration and mass billing for fiscal year 2027**.",
  } as L,

  responseTime: {
    es: 'Respuesta en menos de 24 h hábiles (GMT-5, Perú).',
    en: 'Reply within 24 business hours (GMT-5, Peru).',
  } as L,

  languages: [
    { name: { es: 'Español', en: 'Spanish' } as L, level: { es: 'Nativo', en: 'Native' } as L },
    { name: { es: 'Inglés', en: 'English' } as L, level: { es: 'Básico', en: 'Basic' } as L },
  ],

  seo: {
    title: {
      es: 'Micke Navarro | Plataformas web, automatización con IA y datos',
      en: 'Micke Navarro | Web platforms, AI automation and data',
    } as L,
    description: {
      es: 'Portafolio de Micke Navarro, bachiller en Estadística e Informática: plataformas web, CRMs, chatbots con IA, dashboards y sistemas de datos para el sector público y empresas. Huacho, Lima.',
      en: "Portfolio of Micke Navarro, Statistics and Computer Science graduate: web platforms, CRMs, AI chatbots, dashboards and data systems for the public sector and companies. Huacho, Lima.",
    } as L,
  },
};
