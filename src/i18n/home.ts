import type { Lang, FeatureKey } from './routes';

interface HomeCopy {
  hero: { eyebrow: string; title: string; lead: string; primary: string; secondary: string; demoLabel: string };
  demo: {
    workspace: string; document: string; status: string; type: string; code: string;
    signersLabel: string; activityTitle: string; events: [string, string, string][];
    documentTitle: string; paragraph: string; signature: string;
  };
  promise: { items: [string, string][] };
  process: { eyebrow: string; title: string; lead: string; steps: [string, string, string][] };
  capabilities: { eyebrow: string; title: string; lead: string; items: [FeatureKey, string, string][] };
  lifecycle: { eyebrow: string; title: string; lead: string; obligations: [string, string, string][]; note: string };
  cta: { title: string; lead: string; primary: string; secondary: string };
}

const es: HomeCopy = {
  hero: {
    eyebrow: 'Firma electrónica y gestión de acuerdos',
    title: 'Del documento a la firma, sin perder el hilo.',
    lead: 'Prepará documentos, coordiná aprobaciones y reuní firmas en un mismo proceso. Después, seguí obligaciones, fechas y renovaciones del acuerdo.',
    primary: 'Crear una cuenta', secondary: 'Explorar la plataforma', demoLabel: 'Vista ilustrativa del producto',
  },
  demo: {
    workspace: 'Espacio de trabajo · Operaciones', document: 'Acuerdo de servicios', status: 'Completado', type: 'PDF · 8 páginas', code: 'SO-104',
    signersLabel: 'Firmantes', activityTitle: 'Actividad del proceso',
    events: [['09:42', 'Documento enviado', 'Lucía Méndez'], ['10:16', 'Aprobación registrada', 'Equipo legal'], ['11:03', 'Firma completada', 'Diego Acosta']],
    documentTitle: 'Acuerdo de prestación de servicios',
    paragraph: 'Entre las partes que se identifican a continuación se acuerdan los servicios y condiciones detallados en este documento.',
    signature: 'Firma electrónica registrada',
  },
  promise: { items: [
    ['Un espacio por organización', 'Documentos, personas y procesos agrupados en el mismo workspace.'],
    ['Revisiones con responsables', 'Cada aprobación muestra quién debe actuar y qué falta.'],
    ['Registros consultables', 'Certificados, evidencias y eventos relacionados con cada proceso.'],
  ] },
  process: {
    eyebrow: 'El proceso completo', title: 'Un recorrido claro para cada documento.',
    lead: 'Cada etapa se conecta con la siguiente: de la preparación inicial al seguimiento después de firmar.',
    steps: [
      ['file-text', 'Prepará', 'Cargá un PDF o generá un documento desde una plantilla con variables.'],
      ['workflow', 'Revisá', 'Asigná aprobaciones, responsables, orden de revisión y fechas límite.'],
      ['file-signature', 'Firmá', 'Invitá a las partes y seguí sus acciones desde el estado del sobre.'],
      ['briefcase-business', 'Administrá', 'Relacioná el acuerdo con sus obligaciones, vigencias y renovaciones.'],
    ],
  },
  capabilities: {
    eyebrow: 'Funciones de la plataforma', title: 'Herramientas conectadas al trabajo documental.',
    lead: 'Empezá por el flujo que necesitás y sumá contexto cuando el proceso lo requiere.',
    items: [
      ['feat-signing', 'Prepará y enviá documentos', 'Gestioná archivos, plantillas, participantes y solicitudes de firma.'],
      ['feat-approvals', 'Coordiná las revisiones', 'Diseñá flujos secuenciales o paralelos con reglas y responsables definidos.'],
      ['feat-evidence', 'Consultá evidencias y certificados', 'Revisá eventos, hashes y datos disponibles para verificar un proceso.'],
      ['feat-agreements', 'Dale seguimiento al acuerdo', 'Organizá obligaciones, vencimientos, renovaciones y adendas.'],
    ],
  },
  lifecycle: {
    eyebrow: 'Después de firmar', title: 'El acuerdo sigue teniendo fechas y responsables.',
    lead: 'Relacioná el documento firmado con las obligaciones que genera. Definí quién debe dar seguimiento y cuándo revisar cada compromiso.',
    obligations: [
      ['01', 'Entregar informe mensual', 'Responsable · Operaciones'],
      ['02', 'Revisar fecha de renovación', 'Aviso previo · 30 días'],
      ['03', 'Registrar adenda aprobada', 'Documento · v2'],
    ],
    note: 'Ejemplo ilustrativo de seguimiento de obligaciones.',
  },
  cta: { title: 'Mantené visible cada próximo paso.', lead: 'Reuní documentos, personas, aprobaciones y acuerdos en un espacio de trabajo.', primary: 'Crear una cuenta', secondary: 'Ya tengo cuenta' },
};

const en: HomeCopy = {
  hero: {
    eyebrow: 'Electronic signatures and agreement management',
    title: 'From document to signature, without losing the thread.',
    lead: 'Prepare documents, coordinate approvals and collect signatures in one process. Then follow the agreement’s obligations, dates and renewals.',
    primary: 'Create an account', secondary: 'Explore the platform', demoLabel: 'Illustrative product view',
  },
  demo: {
    workspace: 'Workspace · Operations', document: 'Services agreement', status: 'Completed', type: 'PDF · 8 pages', code: 'SO-104',
    signersLabel: 'Signers', activityTitle: 'Process activity',
    events: [['09:42', 'Document sent', 'Lucy Mendez'], ['10:16', 'Approval recorded', 'Legal team'], ['11:03', 'Signature completed', 'Diego Acosta']],
    documentTitle: 'Professional services agreement',
    paragraph: 'The parties identified below agree to the services and terms described in this document.',
    signature: 'Electronic signature recorded',
  },
  promise: { items: [
    ['A workspace for each organization', 'Documents, people and processes grouped in one workspace.'],
    ['Reviews with clear owners', 'Each approval shows who needs to act and what is pending.'],
    ['Records you can review', 'Certificates, evidence and events related to each process.'],
  ] },
  process: {
    eyebrow: 'The full process', title: 'A clear path for every document.',
    lead: 'Each stage connects to the next, from initial preparation to follow-up after signing.',
    steps: [
      ['file-text', 'Prepare', 'Upload a PDF or generate a document from a template with variables.'],
      ['workflow', 'Review', 'Assign approvers, owners, review order and due dates.'],
      ['file-signature', 'Sign', 'Invite the parties and follow their actions through envelope status.'],
      ['briefcase-business', 'Manage', 'Relate the agreement to its obligations, terms and renewals.'],
    ],
  },
  capabilities: {
    eyebrow: 'Platform capabilities', title: 'Tools connected to document workflows.',
    lead: 'Start with the flow you need and add context when the process calls for it.',
    items: [
      ['feat-signing', 'Prepare and send documents', 'Manage files, templates, participants and signing requests.'],
      ['feat-approvals', 'Coordinate reviews', 'Design sequential or parallel workflows with clear rules and owners.'],
      ['feat-evidence', 'Review evidence and certificates', 'Check events, hashes and available process verification data.'],
      ['feat-agreements', 'Follow the agreement', 'Organize obligations, due dates, renewals and amendments.'],
    ],
  },
  lifecycle: {
    eyebrow: 'After signing', title: 'Agreements still have dates and owners.',
    lead: 'Relate a signed document to the obligations it creates. Decide who follows each commitment and when it needs review.',
    obligations: [
      ['01', 'Deliver monthly report', 'Owner · Operations'],
      ['02', 'Review renewal date', 'Advance notice · 30 days'],
      ['03', 'Record approved amendment', 'Document · v2'],
    ],
    note: 'Illustrative example of obligation tracking.',
  },
  cta: { title: 'Keep every next step in view.', lead: 'Bring documents, people, approvals and agreements into one workspace.', primary: 'Create an account', secondary: 'I already have an account' },
};

export const home: Record<Lang, HomeCopy> = { es, en };
