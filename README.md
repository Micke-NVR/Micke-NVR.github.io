# Portafolio · Micke Navarro

Portafolio personal en **Astro 7 + Tailwind 4**, en español y sin backend. Todo el contenido
vive en archivos de datos: no hace falta tocar los componentes para cambiar textos, proyectos o enlaces.

- Sitio: https://mickenvr.freedev.app
- Hosting: InfinityFree (FTP a `ftpupload.net`, carpeta `htdocs`)

## 1. Arrancar en local

Requiere **Node ≥ 22.23.4** (probado con 26.13.0; el archivo `.nvmrc` lo indica).

```bash
nvm use
npm install
npm run dev      # http://localhost:4321
```

## 2. Dónde editar cada cosa

| Quiero cambiar…                                   | Archivo                    |
| ------------------------------------------------- | -------------------------- |
| Correo, WhatsApp, GitHub, LinkedIn, CV, endpoint del formulario | `src/config.ts` |
| Título, resumen, ubicación, SEO                    | `src/data/profile.ts`      |
| Servicios                                          | `src/data/services.ts`     |
| Experiencia laboral                                | `src/data/experience.ts`   |
| Proyectos (textos, demo, captura)                  | `src/data/projects.ts`     |
| Stack tecnológico                                  | `src/data/stack.ts`        |
| Certificados                                       | `src/data/credentials.ts`  |
| Testimonio (apagado por defecto)                   | `src/data/testimonials.ts` |
| Textos de interfaz                                 | `src/i18n/ui.ts`           |
| Colores, tipografía y modo oscuro                  | `src/styles/global.css`    |

Los datos de contacto están en `src/config.ts`. El número de WhatsApp va con código de país y
sin símbolos: `51980006981`.

## 3. Proyectos con demo

Las cuatro tarjetas enlazan a demos funcionales alojadas en el mismo hosting:

| Proyecto | URL |
| --- | --- |
| Sistema Predial 2025 · Carquín | https://mickenvr.freedev.app/Sistema_Predial_2025/ |
| Sistema Predial 2024 · Carquín | https://mickenvr.freedev.app/Sistema_Predial_2024/ |
| Academia El Olympo | https://mickenvr.freedev.app/Academia/app/ |
| Horizonte Inmobiliaria · CRM | https://mickenvr.freedev.app/Norte-Chico/app/ |

Todas usan datos ficticios. Las capturas de las tarjetas están en
`public/images/projects/` (WebP, 1280×720).

Credenciales de demostración:

- Predial 2025: `demo` / `Demo2025!`
- Predial 2024: `JuanC` / `Demo2024*`
- Academia: estudiante `alumno@elolympo.demo` / `Alumno2026!`, admin `admin` / `Admin2026!`
- Inmobiliaria: `gerencia` / `demo1234`

## 4. Publicar en InfinityFree

El hosting sirve archivos estáticos: **se sube el resultado del build, no el proyecto**.

```bash
npm run build                    # genera dist/
```

Luego sube **el contenido** de `dist/` a `htdocs` (File Manager o FTP). No subas la carpeta
`dist` completa: entra en ella y sube sus archivos y carpetas.

El dominio está fijado en `astro.config.mjs` (`SITE_URL`). Si cambia, edítalo ahí o compila con:

```bash
SITE_URL=https://nuevo-dominio.com npm run build
```

Ese valor alimenta el `canonical`, el sitemap y la vista previa del enlace en WhatsApp.

## 5. Formulario de contacto

Sin backend configurado, el formulario abre **WhatsApp** con el mensaje ya escrito. Es la vía
más directa para quien llega desde TikTok o estados de WhatsApp.

Si prefieres recibirlo por correo, crea una cuenta gratis en Web3Forms o Formspree y pega el
endpoint en `formEndpoint` dentro de `src/config.ts`. No hay que tocar nada más.

## 6. Antes de dar por cerrado un cambio

```bash
npm run build
npm run preview
```

- [ ] El sitio abre en móvil y escritorio, en tema claro y oscuro.
- [ ] Los cuatro botones "Ver demo" abren su proyecto.
- [ ] El botón de WhatsApp abre un chat con el número correcto.
- [ ] El CV descarga el PDF vigente.
- [ ] `public/og.png` sigue representando el sitio (es la vista previa en WhatsApp).

## 7. Seguridad del hosting

- Las credenciales de MySQL están en `conexion.php` de cada proyecto. **No uses la misma
  contraseña para la base de datos y para el FTP/panel.**
- Las demos permiten escribir (pagos, deudas, matrículas). Si se llenan de basura, vuelve a
  importar el SQL de cada proyecto desde phpMyAdmin.
- Al terminar cualquier trabajo, rota las contraseñas y elimina las cuentas FTP temporales.
