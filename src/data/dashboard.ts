import type { L } from '../i18n/utils';

/**
 * ✏️ DATOS FICTICIOS del dashboard de demostración.
 * No uses datos reales de ninguna municipalidad (confidencialidad del TDR).
 * `collected: null` = mes que aún no tiene datos (solo se dibuja la meta).
 * Valores en miles de S/.
 */
export const monthly: { label: L; collected: number | null; goal: number }[] = [
  { label: { es: 'Ene', en: 'Jan' }, collected: 182, goal: 170 },
  { label: { es: 'Feb', en: 'Feb' }, collected: 164, goal: 150 },
  { label: { es: 'Mar', en: 'Mar' }, collected: 128, goal: 130 },
  { label: { es: 'Abr', en: 'Apr' }, collected: 96, goal: 110 },
  { label: { es: 'May', en: 'May' }, collected: 88, goal: 100 },
  { label: { es: 'Jun', en: 'Jun' }, collected: 84, goal: 95 },
  { label: { es: 'Jul', en: 'Jul' }, collected: 92, goal: 95 },
  { label: { es: 'Ago', en: 'Aug' }, collected: 86, goal: 95 },
  { label: { es: 'Set', en: 'Sep' }, collected: 90, goal: 100 },
  { label: { es: 'Oct', en: 'Oct' }, collected: null, goal: 120 },
  { label: { es: 'Nov', en: 'Nov' }, collected: null, goal: 140 },
  { label: { es: 'Dic', en: 'Dec' }, collected: null, goal: 195 },
];

export const zones: { name: L; arrears: number }[] = [
  { name: { es: 'Zona Centro', en: 'Downtown' }, arrears: 18 },
  { name: { es: 'Zona Playa', en: 'Beach area' }, arrears: 22 },
  { name: { es: 'Zona Norte', en: 'North' }, arrears: 27 },
  { name: { es: 'Zona Sur', en: 'South' }, arrears: 34 },
  { name: { es: 'Zona Rural', en: 'Rural' }, arrears: 41 },
];
