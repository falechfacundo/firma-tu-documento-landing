import type { Lang } from './routes';

type Section = [heading: string, paragraphs: string[]];
export interface LegalDoc {
  metaTitle: string;
  metaDesc: string;
  h1: string;
  updated: string;
  sections: Section[];
}

export const legal: Record<'terms' | 'privacy', Record<Lang, LegalDoc>> = {
  terms: {
    es: {
      metaTitle: 'Términos del servicio',
      metaDesc: 'Condiciones generales para usar Firma tu Documento.',
      h1: 'Términos del servicio',
      updated: 'Borrador: requiere revisión legal',
      sections: [
        ['Alcance del servicio', [
          'Firma tu Documento brinda herramientas web para gestionar documentos, solicitar firmas electrónicas, configurar aprobaciones y administrar acuerdos. Las funciones disponibles pueden variar según la configuración de cada organización.',
          'La cuenta de una organización es administrada por las personas que esta autoriza. Cada usuario debe proteger sus credenciales y usar el servicio según los permisos que le fueron asignados.',
        ]],
        ['Documentos y participantes', [
          'Quien carga o envía un documento es responsable de contar con autorización para hacerlo, de revisar sus destinatarios y de conservar una copia apropiada para sus necesidades.',
          'Las personas que envían solicitudes deben verificar destinatarios, contenido, vencimientos y controles de identidad antes de iniciar un proceso.',
        ]],
        ['Firmas electrónicas y registros', [
          'La plataforma puede guardar documentos, eventos, consentimientos y datos técnicos asociados a un proceso de firma. La existencia de esos registros no determina por sí sola la validez, fuerza probatoria o efecto jurídico de una firma.',
          'Los requisitos y efectos de una firma dependen del tipo de documento, de las partes y de la jurisdicción aplicable. Cada organización debe verificar esos requisitos con asesoramiento profesional cuando corresponda.',
        ]],
        ['Uso aceptable y disponibilidad', [
          'No se debe usar el servicio para vulnerar derechos, distribuir contenido ilícito, suplantar personas ni interferir con la seguridad o funcionamiento de la plataforma.',
          'El servicio puede modificarse, interrumpirse o dejar de estar disponible. La información sobre soporte, niveles de servicio, facturación, responsables y condiciones comerciales deberá completarse en una versión revisada de estos términos.',
        ]],
      ],
    },
    en: {
      metaTitle: 'Terms of service',
      metaDesc: 'General terms for using Firma tu Documento.',
      h1: 'Terms of service',
      updated: 'Draft: legal review required',
      sections: [
        ['Service scope', [
          'Firma tu Documento provides web tools to manage documents, request electronic signatures, configure approvals and manage agreements. Available features may vary by organization settings.',
          'An organization account is administered by the people it authorizes. Each user must protect their credentials and use the service according to their assigned permissions.',
        ]],
        ['Documents and participants', [
          'Anyone who uploads or sends a document is responsible for having the right to do so, checking its recipients and keeping a suitable copy for their needs.',
          'People sending requests should verify recipients, content, due dates and identity controls before starting a process.',
        ]],
        ['Electronic signatures and records', [
          'The platform may store documents, events, consent and technical data related to a signing process. Those records alone do not determine a signature’s validity, evidentiary weight or legal effect.',
          'Signature requirements and effects depend on the document, the parties and applicable jurisdiction. Each organization should verify those requirements with professional advice where appropriate.',
        ]],
        ['Acceptable use and availability', [
          'The service must not be used to violate rights, distribute unlawful content, impersonate people, or interfere with platform security or operation.',
          'The service may change, be interrupted or become unavailable. Information about support, service levels, billing, responsible entities and commercial terms must be completed in a reviewed version of these terms.',
        ]],
      ],
    },
  },
  privacy: {
    es: {
      metaTitle: 'Privacidad',
      metaDesc: 'Información general sobre los datos que se procesan al gestionar documentos y procesos de firma.',
      h1: 'Privacidad',
      updated: 'Borrador: requiere revisión legal',
      sections: [
        ['Datos que puede procesar el servicio', [
          'El servicio puede procesar datos de cuenta y autenticación, información de organizaciones y sus miembros, documentos cargados, datos de destinatarios, respuestas de formularios, firmas y eventos de auditoría.',
          'Las integraciones pueden procesar claves de API, configuración de webhooks y metadatos de entregas. Las claves se guardan en forma hasheada; no se deben incluir secretos en campos de texto o documentos.',
        ]],
        ['Para qué se usan', [
          'Estos datos se usan para operar el espacio de trabajo, preparar y enviar documentos, coordinar aprobaciones, registrar acciones, emitir certificados, mostrar resultados de verificación y proteger el servicio.',
          'Las notificaciones pueden enviarse por email para invitar participantes, solicitar acciones, avisar vencimientos o comunicar cambios del proceso.',
        ]],
        ['Acceso, retención y seguridad', [
          'El acceso a la información de una organización se controla mediante membresías y permisos. La organización puede configurar políticas de cumplimiento y retención disponibles en el producto.',
          'Los documentos y eventos pueden incluir hashes y registros encadenados para ayudar a detectar cambios. Estas medidas no eliminan todos los riesgos ni sustituyen una evaluación independiente de seguridad.',
        ]],
        ['Información que falta definir', [
          'Antes de publicar una política definitiva, el responsable del servicio debe completar la entidad legal, los canales de contacto, las bases y plazos de tratamiento, las ubicaciones de almacenamiento, los proveedores que intervienen y el procedimiento para ejercer derechos.',
          'Las organizaciones que cargan documentos deben informar a sus integrantes y destinatarios sobre el tratamiento que corresponda a sus procesos.',
        ]],
      ],
    },
    en: {
      metaTitle: 'Privacy',
      metaDesc: 'General information about data processed when managing documents and signing workflows.',
      h1: 'Privacy',
      updated: 'Draft: legal review required',
      sections: [
        ['Data the service may process', [
          'The service may process account and authentication data, organization and membership information, uploaded documents, recipient details, form responses, signatures and audit events.',
          'Integrations may process API keys, webhook configuration and delivery metadata. Keys are stored hashed; secrets should not be placed in text fields or documents.',
        ]],
        ['How data is used', [
          'This data is used to operate workspaces, prepare and send documents, coordinate approvals, record actions, issue certificates, show verification results and protect the service.',
          'Email notifications may be sent to invite participants, request actions, notify about due dates or communicate process changes.',
        ]],
        ['Access, retention and security', [
          'Access to organization information is controlled through memberships and permissions. Organizations can configure compliance and retention policies available in the product.',
          'Documents and events may include hashes and chained records to help detect changes. These measures do not remove every risk or replace an independent security assessment.',
        ]],
        ['Information still to be defined', [
          'Before publishing a final policy, the service operator must provide its legal entity, contact channels, processing purposes and periods, storage locations, participating providers and the procedure for exercising data rights.',
          'Organizations uploading documents should inform their members and recipients about the processing relevant to their workflows.',
        ]],
      ],
    },
  },
};

export const contact = {
  es: {
    metaTitle: 'Contacto', metaDesc: 'Conocé cómo empezar a usar Firma tu Documento.',
    h1: 'Un proceso de firma más claro empieza por tus documentos.',
    lead: 'Prepará un documento, invitá a sus participantes y seguí las aprobaciones y firmas desde un solo espacio.',
    topics: [
      ['file-signature', 'Firmas', 'Envío de solicitudes, participantes y documentos completados.'],
      ['workflow', 'Aprobaciones', 'Revisiones internas y responsables antes de enviar a firma.'],
      ['briefcase-business', 'Acuerdos', 'Vigencias, obligaciones y eventos después de firmar.'],
    ],
    email: 'Escribinos a', hint: 'Para probar la plataforma, podés crear una cuenta.',
  },
  en: {
    metaTitle: 'Contact', metaDesc: 'Learn how to get started with Firma tu Documento.',
    h1: 'A clearer signing process starts with your documents.',
    lead: 'Prepare a document, invite its participants and follow approvals and signatures from one workspace.',
    topics: [
      ['file-signature', 'Signatures', 'Requests, participants and completed documents.'],
      ['workflow', 'Approvals', 'Internal reviews and owners before sending documents for signature.'],
      ['briefcase-business', 'Agreements', 'Terms, obligations and events after signing.'],
    ],
    email: 'Write to us at', hint: 'To try the platform, you can create an account.',
  },
} as const satisfies Record<Lang, unknown>;
