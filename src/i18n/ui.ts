import type { Lang, FeatureKey } from './routes';

export const featureNav: Record<FeatureKey, { icon: string; es: [string, string]; en: [string, string] }> = {
  'feat-signing': { icon: 'file-signature', es: ['Firma electrónica', 'Solicitudes y certificados'], en: ['Electronic signature', 'Requests and certificates'] },
  'feat-documents': { icon: 'folder-open', es: ['Documentos', 'Archivos y versiones'], en: ['Documents', 'Files and versions'] },
  'feat-approvals': { icon: 'workflow', es: ['Aprobaciones', 'Revisiones y responsables'], en: ['Approvals', 'Reviews and owners'] },
  'feat-templates': { icon: 'files', es: ['Plantillas', 'Generación de documentos'], en: ['Templates', 'Document generation'] },
  'feat-evidence': { icon: 'shield-check', es: ['Trazabilidad', 'Evidencias y verificación'], en: ['Traceability', 'Evidence and verification'] },
  'feat-agreements': { icon: 'briefcase-business', es: ['Acuerdos', 'Vigencias y obligaciones'], en: ['Agreements', 'Terms and obligations'] },
  'feat-api': { icon: 'webhook', es: ['API e integraciones', 'Conectá tus sistemas'], en: ['API and integrations', 'Connect your systems'] },
};

export const ui = {
  es: {
    nav: { product: 'Producto', blog: 'Blog', login: 'Ingresar', cta: 'Crear cuenta', menu: 'Menú', close: 'Cerrar', home: 'Firma tu Documento — inicio' },
    footer: {
      tagline: 'Documentos, firmas y acuerdos con trazabilidad.',
      cols: { product: 'Producto', company: 'Recursos', legal: 'Legal' },
      contact: 'Contacto', terms: 'Términos', privacy: 'Privacidad', signup: 'Crear cuenta', login: 'Ingresar',
      rights: 'Todos los derechos reservados.', lang: 'English',
    },
    common: { learnMore: 'Conocer más', startFree: 'Crear cuenta', createAccount: 'Crear cuenta', haveAccount: 'Ya tengo cuenta', faq: 'Preguntas frecuentes', related: 'Seguí explorando', readMore: 'Leer artículo', minutes: 'min de lectura', back: 'Volver', breadcrumbHome: 'Inicio', notFoundTitle: 'Esta página no existe', notFoundText: 'El enlace que seguiste no lleva a ningún lado.', goHome: 'Ir al inicio', updated: 'Actualizado', published: 'Publicado' },
  },
  en: {
    nav: { product: 'Product', blog: 'Blog', login: 'Log in', cta: 'Create account', menu: 'Menu', close: 'Close', home: 'Firma tu Documento — home' },
    footer: {
      tagline: 'Documents, signatures and agreements with traceability.',
      cols: { product: 'Product', company: 'Resources', legal: 'Legal' },
      contact: 'Contact', terms: 'Terms', privacy: 'Privacy', signup: 'Create account', login: 'Log in',
      rights: 'All rights reserved.', lang: 'Español',
    },
    common: { learnMore: 'Learn more', startFree: 'Create account', createAccount: 'Create account', haveAccount: 'I already have an account', faq: 'Frequently asked questions', related: 'Explore more', readMore: 'Read article', minutes: 'min read', back: 'Back', breadcrumbHome: 'Home', notFoundTitle: "This page doesn't exist", notFoundText: "The link you followed doesn't lead anywhere.", goHome: 'Go home', updated: 'Updated', published: 'Published' },
  },
} satisfies Record<Lang, unknown>;
