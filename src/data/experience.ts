import type { L } from '../i18n/utils';

/**
 * ✏️ EXPERIENCIA. `to: null` = trabajo actual ("Actual" / "Present").
 * Ordenada de más reciente a más antigua. Basada en tu CV.
 */
export const experience = [
  {
    role: { es: 'Consultor informático', en: 'IT consultant' } as L,
    company: 'Municipalidad Distrital de Caleta de Carquín',
    from: '10/2026',
    to: null as string | null,
    description: {
      es: 'Servicio en ejecución: migración de la base de datos MySQL, actualización de la lógica de cálculo y emisión mecanizada del sistema de gestión predial, ejercicio fiscal 2027.',
      en: 'Ongoing service: MySQL database migration, calculation logic update and mass billing for the property tax system, fiscal year 2027.',
    } as L,
    tags: ['MySQL', 'PHP', 'JavaScript', 'Node.js'],
  },
  {
    role: { es: 'Digitalizador de proyectos', en: 'Project digitization technician' } as L,
    company: 'AMPER Sistemas · Proyecto DIREFOR (Gobierno Regional de Lima)',
    from: '03/2026',
    to: '09/2026' as string | null,
    description: {
      es: 'Configuración de hardware especializado y saneamiento de documentos históricos (desde 1970) para su ingreso y estructuración de datos, cuidando la integridad de la base de datos y reportando métricas de carga de trabajo.',
      en: 'Set up specialized hardware and cleaned historical documents (from 1970) for data entry and structuring, maintaining database integrity and reporting workload metrics.',
    } as L,
    tags: ['Digitalización', 'Bases de datos', 'Reportes'],
  },
  {
    role: { es: 'Desarrollador freelance', en: 'Freelance developer' } as L,
    company: 'Independiente',
    from: '2025',
    to: null as string | null,
    description: {
      es: 'Desarrollo de chatbots, CRM, páginas web y tiendas virtuales a medida para clientes.',
      en: 'Custom chatbots, CRMs, websites and online stores for clients.',
    } as L,
    tags: ['Chatbots', 'CRM', 'Web', 'E-commerce'],
  },
  {
    role: { es: 'Apoyo administrativo y técnico · Predios', en: 'Administrative and technical support · Property tax' } as L,
    company: 'Municipalidad Distrital de Caleta de Carquín · Sub Gerencia de Administración Tributaria y Coactiva',
    from: '2024',
    to: '2026' as string | null,
    description: {
      es: 'Manejo del sistema de predios, trabajo de campo, fiscalización y digitación de declaraciones juradas del impuesto predial. En abril de 2026, migración de la plataforma web de gestión predial y emisión mecanizada para el ejercicio fiscal 2026.',
      en: 'Operated the property system, fieldwork, inspections and data entry of property tax returns. In April 2026, migrated the property management web platform and ran the mass billing for fiscal year 2026.',
    } as L,
    tags: ['Sistema de predios', 'Fiscalización', 'Declaraciones juradas'],
  },
  {
    role: { es: 'Practicante pre-profesional', en: 'Pre-professional intern' } as L,
    company: 'Municipalidad Distrital de Caleta de Carquín · Subgerencia de Administración Tributaria, Coactiva e Informática',
    from: '09/2023',
    to: '12/2023' as string | null,
    description: {
      es: 'Aplicaciones web (PHP, JavaScript) para automatizar tareas y mejorar procesos manuales del área, y dashboards dinámicos en Power BI para apoyar la gestión.',
      en: 'Web applications (PHP, JavaScript) to automate tasks and improve manual processes, plus dynamic Power BI dashboards to support management.',
    } as L,
    tags: ['PHP', 'JavaScript', 'Power BI'],
  },
];
