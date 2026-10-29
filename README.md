# Firma tu Documento · Landing

Sitio de marketing estático en español e inglés para la plataforma de firma electrónica, gestión documental, aprobaciones y acuerdos.

## Stack

- Astro 7 con generación estática
- Tailwind CSS 4
- GSAP 3 (ScrollTrigger y Flip) + Lenis
- pnpm 12 · Node 22 · TypeScript strict
- Playwright y Lighthouse CI configurados en el proyecto

## Desarrollo

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
pnpm check
```

La landing corre localmente en `http://localhost:4321`. `pnpm build` genera `dist/` y sincroniza los íconos usados.

## Configuración

Variables opcionales, también configurables en el entorno de despliegue:

| Variable | Uso | Valor por defecto |
|---|---|---|
| `PUBLIC_SITE_URL` | URL pública usada para canonical, sitemap y Open Graph | `https://firma-tu-documento-landing.vercel.app` (provisional) |
| `PUBLIC_APP_URL` | URL de la webapp para registro e ingreso | `https://app.firmatu.com` (pendiente de confirmar) |
| `PUBLIC_CONTACT_EMAIL` | Email comercial mostrado en Contacto | Sin valor; se muestra un enlace para crear cuenta |

Los formularios de soporte no están configurados. No se muestran precios porque el producto no incluye billing.

## Páginas

- Inicio en español (`/`) e inglés (`/en/`)
- Funciones en ES/EN: firma electrónica, documentos, aprobaciones, plantillas, trazabilidad, acuerdos y API
- Contacto, términos y privacidad
- Blog bilingüe con guías sobre firma electrónica y seguimiento de acuerdos

Las rutas y traducciones se mantienen en `src/i18n/routes.ts`; los textos en `src/i18n/`. El blog usa Markdown en `src/content/blog/{es,en}`.

## Estructura

```text
src/
  pages/       páginas estáticas, blog, 404 y robots.txt
  views/       Home, FeaturePage, LegalPage, ContactPage, BlogIndex y BlogPost
  components/  navegación, secciones, vistas ilustrativas e íconos
  i18n/        rutas, textos por página y metadatos
  content/blog artículos Markdown en ES y EN
  scripts/     GSAP y Lenis
  styles/      tokens globales y estilos de prosa
docs/          contexto del producto, sistema visual, animaciones y QA
```

## SEO e idioma

Español en `/` e inglés bajo `/en/`, con canonical, `hreflang`, sitemap, `robots.txt`, Open Graph y JSON-LD. Configurá `PUBLIC_SITE_URL` con el dominio definitivo antes de publicar para evitar canonical provisionales.

## Contenido legal

Los textos de términos y privacidad son borradores informativos y requieren datos del responsable y revisión legal antes de presentarse como documentos definitivos.
