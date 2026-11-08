import type { L } from '../i18n/utils';

/** ✏️ ACREDITACIONES. `url` = enlace de verificación (opcional). `verified: true` solo si puede comprobarse públicamente. */
export const credentials = [
  {
    badge: 'UNJFSC',
    title: { es: 'Bachiller en Estadística e Informática', en: "Bachelor's in Statistics and Computer Science" } as L,
    issuer: 'UNJFSC · Facultad de Ciencias · 2019–2024',
    verified: false,
    url: '/docs/bachiller.pdf',
  },
  {
    badge: 'CEGI',
    title: { es: 'Marco Normativo y Sistema de Contrataciones del Estado', en: 'Regulatory Framework and Public Procurement System' } as L,
    issuer: 'CEGICAP · 180 h lectivas · 2026',
    verified: false,
    url: '/docs/certificado-contrataciones.pdf',
  },
  {
    badge: 'PMI',
    title: { es: 'Gestión de Proyectos · Conoce a Junior', en: 'Project Management · Conoce a Junior' } as L,
    issuer: 'Junior Achievement Perú y PMI · 2025',
    verified: false,
    url: '/docs/conoce-a-junior.pdf',
  },
  {
    badge: 'BECA',
    title: { es: 'Beca de Permanencia de Estudios Nacional', en: 'National Study Continuity Scholarship' } as L,
    issuer: 'PRONABEC · Convocatoria 2021',
    verified: false,
    url: '/docs/constancia-pronabec.pdf',
  },
];
