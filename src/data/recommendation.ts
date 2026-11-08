import type { L } from '../i18n/utils';

/**
 * ✏️ CARTA DE RECOMENDACIÓN.
 * El archivo original está en public/docs/. El texto es un fragmento literal
 * de la carta; si cambias la cita, cámbiala también en la imagen.
 */
export const recommendation = {
  /** Fragmento textual de la carta (párrafo sobre el sistema web). */
  quote: {
    es: 'Tener un sistema web seguro y confiable, que nos permitió mejorar nuestros ingresos por concepto del impuesto predial.',
    en: 'Having a secure, reliable web system that allowed us to improve our revenue from property tax.',
  } as L,
  author: 'C.P.C. Lyndon Miguel Hoces Calderón',
  role: {
    es: 'Sub Gerente de Administración Tributaria y Coactiva',
    en: 'Deputy Manager of Tax Administration and Coercive Collection',
  } as L,
  entity: {
    es: 'Municipalidad Distrital de Caleta de Carquín',
    en: 'District Municipality of Caleta de Carquín',
  } as L,
  date: { es: '11 de julio de 2025', en: 'July 11, 2025' } as L,
  /** Imagen de la carta (miniatura para la tarjeta y versión completa). */
  thumb: '/docs/carta-recomendacion-min.webp',
  full: '/docs/carta-recomendacion.webp',
};
