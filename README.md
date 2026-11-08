# Portafolio · Micke Navarro

Portafolio personal en **Astro 7 + Tailwind 4**, en español y sin backend. Todo el contenido
vive en archivos de datos: no hace falta tocar los componentes para cambiar textos, proyectos o enlaces.

- Sitio: https://micke-nvr.github.io
- Hosting del portafolio: GitHub Pages (repositorio `Micke-NVR.github.io`, despliegue automático)
- Demos: InfinityFree (FTP a `ftpupload.net`, carpeta `htdocs`)

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
| Certificados y enlaces a documentos               | `src/data/credentials.ts`  |
| Carta de recomendación (cita y rutas)              | `src/data/recommendation.ts` |
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

## 4. Publicar en GitHub Pages

El despliegue es automático: **cada push a `main`** compila y publica el sitio con
`.github/workflows/deploy.yml` (GitHub Actions).

```bash
git add -A
git commit -m "describe el cambio"
git push
```

En GitHub, el repositorio debe tener **Settings → Pages → Source: GitHub Actions**. Si cambias
de dominio, edita `SITE_URL` en `astro.config.mjs` y el `Sitemap` de `public/robots.txt`.

Ese valor alimenta el `canonical`, el sitemap y la vista previa del enlace en WhatsApp. GitHub
Pages sirve el HTML directo, sin el desafío JavaScript de InfinityFree, así que WhatsApp,
Telegram y Facebook ya muestran `og.png`.

### Documentos

Los documentos personales se publican sin datos sensibles: del diploma solo va el anverso y
la constancia de PRONABEC tiene el DNI tapado.

- `public/docs/carta-recomendacion.webp` — carta escaneada (versión completa).
- `public/docs/carta-recomendacion-min.webp` — miniatura de la tarjeta.
- `public/docs/certificado-contrataciones.pdf` — certificado de CEGICAP.
- `public/docs/bachiller.pdf` — diploma de bachiller (solo el anverso).
- `public/docs/conoce-a-junior.pdf` — constancia de Junior Achievement / PMI.
- `public/docs/constancia-pronabec.pdf` — constancia de beca, con el DNI tapado.

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

- [ ] El sitio abre en móvil y escritorio, en tema claro y oscuro (abre en claro por defecto).
- [ ] Los cuatro botones "Ver demo" abren su proyecto.
- [ ] El botón de WhatsApp abre un chat con el número correcto.
- [ ] El CV descarga el PDF vigente.
- [ ] La carta abre su vista ampliada y el certificado descarga el PDF.
- [ ] `public/og.png` sigue representando el sitio (es la vista previa en WhatsApp).

## 7. Seguridad del hosting de las demos

- Las credenciales de MySQL están en `conexion.php` de cada proyecto. **No uses la misma
  contraseña para la base de datos y para el FTP/panel.**
- Las demos permiten escribir (pagos, deudas, matrículas). Si se llenan de basura, vuelve a
  importar el SQL de cada proyecto desde phpMyAdmin.
- Al terminar cualquier trabajo, rota las contraseñas y elimina las cuentas FTP temporales.
