export const locales = ['es', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'es';
export const ogLocale: Record<Lang, string> = { es: 'es_AR', en: 'en_US' };

// Cada clave tiene su ruta por idioma (sin barras inicial/final).
export const routes = {
  home: { es: '', en: '' },
  'feat-signing': { es: 'funciones/firma-electronica', en: 'features/electronic-signature' },
  'feat-documents': { es: 'funciones/gestion-documental', en: 'features/document-management' },
  'feat-approvals': { es: 'funciones/aprobaciones-y-flujos', en: 'features/approvals-and-workflows' },
  'feat-templates': { es: 'funciones/plantillas-documentales', en: 'features/document-templates' },
  'feat-evidence': { es: 'funciones/trazabilidad-y-cumplimiento', en: 'features/traceability-and-compliance' },
  'feat-agreements': { es: 'funciones/gestion-de-acuerdos', en: 'features/agreement-management' },
  'feat-api': { es: 'funciones/api-e-integraciones', en: 'features/api-and-integrations' },
  terms: { es: 'legal/terminos', en: 'legal/terms' },
  privacy: { es: 'legal/privacidad', en: 'legal/privacy' },
  contact: { es: 'contacto', en: 'contact' },
  blog: { es: 'blog', en: 'blog' },
} as const;

export type RouteKey = keyof typeof routes;

export function url(key: RouteKey, lang: Lang): string {
  const p = routes[key][lang];
  const base = lang === defaultLang ? '/' : `/${lang}/`;
  return p ? `${base}${p}/` : base;
}
export const blogUrl = (slug: string, lang: Lang) => `${url('blog', lang)}${slug}/`;

export const featureKeys = ['feat-signing', 'feat-documents', 'feat-approvals', 'feat-templates', 'feat-evidence', 'feat-agreements', 'feat-api'] as const;
export type FeatureKey = (typeof featureKeys)[number];

export function otherLang(lang: Lang): Lang { return lang === 'es' ? 'en' : 'es'; }
