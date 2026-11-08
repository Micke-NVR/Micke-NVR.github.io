/**
 * ✏️ DATOS BÁSICOS DEL SITIO
 * Cambia aquí tu nombre, contactos y enlaces. El resto del contenido
 * (experiencia, proyectos, stack…) está en la carpeta src/data/.
 */
export const site = {
  name: 'Micke Navarro',
  email: 'mike.nvr826@gmail.com',
  whatsapp: '51980006981', // código de país + número, sin + ni espacios
  github: 'Micke-NVR', // tu usuario de GitHub
  linkedin: 'https://www.linkedin.com/in/micke-nvr/',

  /** Pon tus PDF en public/cv/ y ajusta el nombre del archivo. */
  cv: {
    es: '/cv/CV_Micke_Navarro.pdf',
    en: '/cv/CV_Micke_Navarro.pdf',
  },

  /** Foto opcional (ej. '/images/avatar.jpg'). Vacío = monograma "MN". */
  avatar: '',

  /** Calendario real de contribuciones de GitHub (se descarga al compilar). */
  showGithubActivity: false,

  /**
   * Formulario de contacto. Pega aquí el endpoint de Formspree, Web3Forms
   * o un webhook de n8n. Si lo dejas vacío, el botón abre tu app de correo.
   */
  formEndpoint: '',
};
