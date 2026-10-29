# Firma tu Documento · Landing

Landing estática bilingüe (ES/EN) para firma electrónica y gestión documental. La aplicación web está en el repositorio hermano `firma-tu-documento-webapp`.

## Stack

- Astro 7.3 · build estático, `build.format: 'directory'`, `trailingSlash: 'always'`
- Tailwind CSS 4.3 en `src/styles/global.css`
- GSAP 3.15 (ScrollTrigger, Flip) + Lenis 1.3 en `src/scripts/motion.ts`
- pnpm 12 · Node 22 · TypeScript strict
- Playwright 1.64 y Lighthouse CI

## Comandos

```bash
pnpm dev
pnpm build
pnpm preview
pnpm check
pnpm test:e2e
pnpm test:mobile
```

## Estructura

```text
src/pages/       home, rutas estáticas, blog, 404 y robots.txt
src/views/       Home, FeaturePage, LegalPage, ContactPage, BlogIndex, BlogPost
src/components/  navegación, secciones de producto, íconos y footer
src/i18n/        rutas, copy ES/EN
src/content/blog artículos Markdown en español e inglés
src/scripts/     GSAP y Lenis
src/styles/      tokens y estilos de prosa
docs/            contexto, diseño, animaciones y verificación
```

## Convenciones

- El copy va en `src/i18n/`, siempre con versiones ES y EN; artículos en Markdown con `translationKey` compartida.
- Una página nueva se registra en `src/i18n/routes.ts`; las rutas estáticas se generan desde ese registro.
- Íconos mediante `<Icon name="..." />`; `scripts/sync-icons.mjs` mantiene solo los SVG usados.
- Preferir Tailwind para layout; CSS propio en `<style is:global>` con tokens de `global.css`.
- Animaciones por atributos `data-*`; limpiar listeners y contextos GSAP.
- Commits convencionales y atómicos, con asunto en español.

## Reglas de interfaz

1. Mobile-first y sin desbordes a 320 px. El body usa `overflow-x: clip`.
2. Usar `svh`/`dvh`, no `100vh`.
3. Diferencias responsive de animación con `gsap.matchMedia()` y limpieza.
4. Respetar `prefers-reduced-motion` con una vista estática legible.
5. Animar solo `transform` y `opacity` en transiciones atadas al scroll.
6. Limitar `:hover` a `@media (hover: hover)`.
7. Scroll interno con `data-lenis-prevent` y `overscroll-behavior: contain`.
8. Targets táctiles de al menos 44×44 px.
9. Mantener contraste AA en el texto.
10. No agregar planes, precios ni promesas legales que no estén respaldados por la webapp y sus documentos.

## Configuración

`PUBLIC_SITE_URL` define canonical, sitemap y Open Graph. `PUBLIC_APP_URL` define los enlaces a `/sign-up` y `/sign-in`. `PUBLIC_CONTACT_EMAIL` es opcional; si no está definido, Contacto enlaza al registro.
