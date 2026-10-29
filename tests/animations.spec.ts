import { test, expect } from '@playwright/test';
import { allPages } from './helpers/pages';
import { collectErrors } from './helpers/errors';
import { waitForFonts, waitForMotionReady, settleAnimations, reducedMotion } from './helpers/motion';

for (const p of allPages) {
  test(`sin errores JS y animaciones inicializadas · ${p.name}`, async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto(p.path);
    await waitForFonts(page);
    await waitForMotionReady(page);

    // Lenis agrega la clase `lenis` a <html> al inicializar; con reduced motion no se crea.
    const lenis = await page.evaluate(() => document.documentElement.classList.contains('lenis'));
    expect(lenis, 'Lenis inicializado').toBe(!reducedMotion);

    // recorrer la página dispara los ScrollTrigger de entrada y deja todo visible
    await settleAnimations(page);
    expect(errors).toEqual([]);
  });
}

test.describe('home · movimiento', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForMotionReady(page);
  });

  test('la demo del documento y las etapas quedan disponibles', async ({ page }) => {
    await expect(page.locator('.hero-product')).toBeVisible();
    await expect(page.locator('.process-card')).toHaveCount(4);
    await expect(page.locator('.obligation-card')).toBeVisible();
  });

  test('reduced motion: sin Lenis y contenido visible sin scrollear', async ({ page }) => {
    test.skip(!reducedMotion, 'correr con REDUCED_MOTION=1');
    const state = await page.evaluate(() => ({
      jsMotion: document.documentElement.classList.contains('js-motion'),
      hidden: [...document.querySelectorAll('[data-reveal], [data-hero-in]')].filter((e) => getComputedStyle(e).opacity !== '1').length,
    }));
    expect(state).toEqual({ jsMotion: false, hidden: 0 });
  });
});
