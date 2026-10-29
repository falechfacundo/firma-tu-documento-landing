# Sistema visual

Tailwind CSS **4** se configura desde `src/styles/global.css`. La landing usa un tema oscuro, azul tinta y azul firma; la demo del producto presenta documentos claros sobre superficies oscuras.

## Breakpoints

Se usan los breakpoints por defecto de Tailwind. El layout de home cambia en 640 px y 768 px; el nav pasa a menú móvil por debajo de 1024 px. Ver `Home.astro` y `Nav.astro`.

## Tokens principales

| Token | Valor | Uso |
|---|---|---|
| `--color-base` | `#0a1424` | Fondo de página |
| `--color-surface` | `#101d30` | Paneles y superficies |
| `--color-card` | `#142238` | Cards y módulos |
| `--color-raise` | `#1b2b43` | Estados elevados |
| `--color-fg` | `#f4f3f8` | Texto principal |
| `--color-fg-2` | `#a3a2b3` | Texto secundario |
| `--color-fg-3` | `#858496` | Texto terciario y metadatos |
| `--color-accent` | `#2563eb` | Azul firma para CTA y foco |
| `--color-accent-2` | `#60a5fa` | Acento claro para íconos y estados |
| `--color-accent-3` | `#bfdbfe` | Links y detalles sobre fondos oscuros |

Los estados de proceso usan verde, ámbar y celeste. El papel de la demo usa una superficie clara con texto azul tinta.

## Tipografía y espaciado

- Geist Variable (`--font-sans`) y Geist Mono Variable (`--font-mono`).
- H1 fluido con `clamp`, tracking negativo y ancho legible.
- `.wrap` limita el contenido a 1200 px; `.wrap-wide`, a 1360 px.
- `--gutter` y `--section-y` controlan gutters y separación vertical.
- Prosa editorial/legal con `.prose-firma` en `src/styles/prose.css`.

## Estructura de home

La home usa una composición editorial de dos columnas, una demo estática de documento y actividad, una franja de principios, un recorrido de cuatro pasos, tarjetas de capacidades, un ejemplo de obligaciones y una llamada final.

Las cards enlazan a las páginas de función registradas en `src/i18n/routes.ts`. Los datos visibles dentro de la demo se marcan como ilustrativos; no representan una cuenta real.

## Componentes y movimiento

- `Nav.astro`: navegación fija, menú de producto bilingüe y panel móvil.
- `InnerHero.astro`: cabeceras de páginas internas con breadcrumbs.
- `FeaturePage.astro`: capacidades, pasos y preguntas frecuentes por función.
- `Home.astro`: estructura y estilos propios de la página principal.
- `Icon.astro`: SVG de lucide sincronizados desde `lucide-static`.
- `CtaBand.astro` y `Faq.astro`: patrones de cierre y preguntas frecuentes en subpáginas.
- `motion.ts`: intro, reveals, scroll suave, barra de progreso y enlaces magnéticos.

Priorizar mobile-first, targets táctiles de 44×44 px, contraste AA y `prefers-reduced-motion`.
