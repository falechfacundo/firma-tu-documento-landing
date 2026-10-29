import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const $ = <T extends HTMLElement = HTMLElement>(selector: string) => document.querySelector<T>(selector);
const $$ = <T extends HTMLElement = HTMLElement>(selector: string) => Array.from(document.querySelectorAll<T>(selector));
const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches || !root.classList.contains('js-motion');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
root.dataset.motion = 'ready';

let lenis: Lenis | null = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  document.addEventListener('menu:toggle', (event) => {
    if ((event as CustomEvent<boolean>).detail) lenis?.stop();
    else lenis?.start();
  });
}

const scrollTo = (y: number) => {
  if (lenis) lenis.scrollTo(y, { duration: 1.15 });
  else window.scrollTo({ top: y, behavior: 'smooth' });
};
$$<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const id = anchor.getAttribute('href')!;
    const target = id === '#top' ? null : $(id);
    if (id !== '#top' && !target) return;
    event.preventDefault();
    scrollTo(target ? target.getBoundingClientRect().top + scrollY - 20 : 0);
  });
});

const nav = $('#nav');
const progress = $('#progress');
const updateScrollState = () => {
  nav?.classList.toggle('is-stuck', scrollY > 24);
  if (!progress) return;
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
};
updateScrollState();
addEventListener('scroll', updateScrollState, { passive: true });

if (!reduced) {
  gsap.set('[data-hero-in]', { opacity: 0, y: 18 });
  gsap.set(nav, { opacity: 0, y: -18 });
  gsap.timeline({ defaults: { ease: 'expo.out' } })
    .to(nav, { opacity: 1, y: 0, duration: 0.85 }, 0)
    .to('[data-hero-in]', { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, 0.12);

  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 90%',
    once: true,
    onEnter: (elements) => gsap.to(elements, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', stagger: 0.07, overwrite: true }),
  });
}

if (finePointer && !reduced) {
  $$<HTMLElement>('[data-magnetic]').forEach((element) => {
    const x = gsap.quickTo(element, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.6)' });
    const y = gsap.quickTo(element, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.6)' });
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();
      x((event.clientX - (rect.left + rect.width / 2)) * 0.16);
      y((event.clientY - (rect.top + rect.height / 2)) * 0.2);
    });
    element.addEventListener('pointerleave', () => { x(0); y(0); });
  });
}

addEventListener('load', () => ScrollTrigger.refresh());
