# Movimiento

GSAP 3.15 (ScrollTrigger) y Lenis 1.3 viven en el único script global `src/scripts/motion.ts`, importado por `Layout.astro`.

## Inicialización

1. `Layout.astro` agrega `js-motion` si el sistema no solicita movimiento reducido. Si el script no inicia en cuatro segundos, muestra el contenido.
2. `motion.ts` marca `data-motion="ready"`, inicia Lenis para la rueda y actualiza `ScrollTrigger`.
3. La intro del nav y el contenido con `data-hero-in` entran una vez al cargar.
4. `ScrollTrigger.batch` muestra los elementos con `data-reveal` al acercarse al viewport.
5. El mismo script actualiza el indicador de scroll y el desplazamiento de enlaces internos.

## Accesibilidad y comportamiento

- Con `prefers-reduced-motion: reduce` no se inicia Lenis ni se oculta contenido.
- El scroll táctil sigue siendo nativo.
- El menú móvil detiene y reanuda Lenis con el evento `menu:toggle`.
- Efectos magnéticos solo se agregan con `(hover: hover) and (pointer: fine)`.
- Mantener las animaciones de scroll en `transform` y `opacity`.
- La demo del documento es estática y no se enmascara en capturas.

## Al agregar movimiento

Usar atributos `data-*` en vez de clases visuales, declarar un estado legible sin JavaScript y considerar el modo de movimiento reducido. Si se agrega un comportamiento distinto por breakpoint, usar `gsap.matchMedia()` y devolver la limpieza.
