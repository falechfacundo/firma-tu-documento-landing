# Contexto del proyecto

## Producto

**Firma tu Documento** es el nombre provisional usado por esta landing. La webapp hermana implementa una plataforma multi-tenant de firma electrónica, gestión documental, aprobaciones, plantillas, trazabilidad y gestión del ciclo de vida de acuerdos. La app usa Next.js 15, TypeScript, Prisma/PostgreSQL, BetterAuth, Supabase Storage y control de acceso RBAC.

La landing no debe presentar como disponibles funciones que solo aparecen en la estrategia o en el roadmap. Tomar las descripciones de producto del README de `firma-tu-documento-webapp` y de las pantallas/código actuales.

## Capacidades confirmadas en la webapp

- Sobres, destinatarios, campos de firma, flujo público de firma y descarga del documento final.
- Documentos PDF con carpetas, etiquetas, versiones y hashes SHA-256.
- Workflows secuenciales o paralelos con reglas `ANY`, `MAJORITY` y `ALL`, aprobaciones y escalamiento.
- Plantillas con variables validadas, generación de PDF, publicación versionada y permisos.
- Evidencias de firma encadenadas, certificado PDF/JSON y portal de verificación que expone hashes y metadatos.
- OTP por email, políticas configurables, sellado temporal RFC 3161 y firma PKI opcionales.
- Acuerdos con partes, obligaciones, vencimientos, renovaciones, adendas y línea de tiempo.
- API REST v1 para sobres y plantillas; claves con scopes y webhooks firmados con reintentos.

No hay billing ni planes comerciales implementados. La eficacia legal varía por documento y jurisdicción; no prometer validez legal universal ni asesoramiento jurídico.

## Páginas de la landing

Registro en `src/i18n/routes.ts` (idioma predeterminado ES, EN bajo `/en/`):

| Página | ES | EN | Vista |
|---|---|---|---|
| Inicio | `/` | `/en/` | `Home.astro` |
| Firma electrónica | `/funciones/firma-electronica/` | `/en/features/electronic-signature/` | `FeaturePage.astro` |
| Documentos | `/funciones/gestion-documental/` | `/en/features/document-management/` | `FeaturePage.astro` |
| Aprobaciones y workflows | `/funciones/aprobaciones-y-flujos/` | `/en/features/approvals-and-workflows/` | `FeaturePage.astro` |
| Plantillas | `/funciones/plantillas-documentales/` | `/en/features/document-templates/` | `FeaturePage.astro` |
| Trazabilidad y cumplimiento | `/funciones/trazabilidad-y-cumplimiento/` | `/en/features/traceability-and-compliance/` | `FeaturePage.astro` |
| Gestión de acuerdos | `/funciones/gestion-de-acuerdos/` | `/en/features/agreement-management/` | `FeaturePage.astro` |
| API e integraciones | `/funciones/api-e-integraciones/` | `/en/features/api-and-integrations/` | `FeaturePage.astro` |
| Contacto | `/contacto/` | `/en/contact/` | `ContactPage.astro` |
| Términos y privacidad | `/legal/*/` | `/en/legal/*/` | `LegalPage.astro` |
| Blog | `/blog/` | `/en/blog/` | `BlogIndex.astro`, `BlogPost.astro` |

Precios, comparativas de competidores y changelog se retiraron porque no corresponden al producto disponible.

## Configuración y publicación

| Variable | Uso |
|---|---|
| `PUBLIC_SITE_URL` | Dominio de la landing para canonical, sitemap, robots y Open Graph |
| `PUBLIC_APP_URL` | Dominio de la webapp; CTA enlazan a `/sign-up` y `/sign-in` |
| `PUBLIC_CONTACT_EMAIL` | Email mostrado en Contacto; opcional |

La URL final de la landing y de la aplicación todavía requieren confirmación. El default de Astro apunta al alias provisional `firma-tu-documento-landing.vercel.app`; configurar `PUBLIC_SITE_URL` antes de publicar. El default de la app está pendiente de verificar.

Los textos legales son borradores informativos. Completar entidad responsable, contacto, tratamiento, plazos, proveedores y revisión jurídica antes de presentarlos como definitivos.

## Decisiones técnicas

| Decisión | Motivo |
|---|---|
| Astro estático, formato directory y trailing slash | Marketing estático con URLs canónicas consistentes |
| Registro i18n propio | Slugs y copy distintos por idioma con `hreflang` |
| Tailwind 4 configurado desde CSS | Tokens visuales junto al sistema de estilos |
| Un único `motion.ts` | Inicialización compartida de GSAP y Lenis |
| Lenis solo para rueda | Mantiene scroll táctil nativo |
| Sin precios en metadatos | El producto aún no implementa billing |

## Pendientes confirmados

- Confirmar el nombre comercial definitivo y los dominios públicos de landing y aplicación.
- Configurar canal comercial si se desea publicar un email de contacto.
- Revisar los textos legales con la entidad responsable y asesoría jurídica.
- En una etapa posterior, adaptar la estructura visual para que deje de parecerse a la landing de origen.
