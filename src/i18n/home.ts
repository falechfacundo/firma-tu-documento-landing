import type { Lang } from './routes';

type Tag = 'legal' | 'commercial' | 'people' | 'finance' | 'internal';
type MockCard = { key: string; title: string; tag: Tag; who: string; p: number; col: number };

export interface HomeCopy {
  hero: { badge: string; badgeText: string; l1: string; l2: string; l3: string; lead: string; cta1: string; cta2: string; note: string; aria: string };
  board: {
    nav: string[]; ws: string; project: string; sprintSub: string; tabs: string[]; progress: string; url: string; preview: string; cursor1: string; cursor2: string;
    cols: string[]; tags: Record<Tag, string>; cards: Record<string, MockCard>;
  };
  marquee: [string, string][];
  showcase: {
    eyebrow: string; h2a: string; h2b: string; label: string;
    steps: { icon: string; title: string; text: string }[];
    boardCols: [string, string, [string, Tag][]][];
    listHead: string; listCount: string; rows: [string, Tag, string, string, string, string][];
    weeks: string[]; today: string; bars: [string, number, number, string][];
    sprint: { name: string; goal: string; badge: string; done: string; progress: string; days: string; real: string; ideal: string };
    status: Record<string, string>;
  };
  bento: {
    eyebrow: string; h2: string; lead: string;
    ai: { tag: string; h: string; p: string; prompt: string; n: number; tickets: [string, string, string][] };
    okr: { tag: string; h: string; p: string; krs: [string, number, string][] };
    git: { tag: string; h: string; p: string; commit: string; task: string };
    time: { tag: string; h: string; p: string; days: string };
    pf: { tag: string; h: string; p: string; items: [string, number, string][] };
  };
  flow: { eyebrow: string; h2: string; steps: [string, string, string][] };
  details: { eyebrow: string; h2: string; lead: string; items: [string, string, string][] };
  cta: { h2: string; lead: string; primary: string; secondary: string };
}

const tagColors: Record<Tag, string> = { legal: '#60a5fa', commercial: '#34d399', people: '#f472b6', finance: '#fbbf24', internal: '#bfdbfe' };
export const tagColor = (tag: Tag) => tagColors[tag];

const es: HomeCopy = {
  hero: {
    badge: 'Firma electrónica', badgeText: 'Documentos, aprobaciones y acuerdos en un mismo flujo',
    l1: 'Prepará el documento.', l2: 'Coordiná las firmas.', l3: 'Seguí cada paso.',
    lead: 'Reuní documentos, aprobaciones y firmas electrónicas en un solo espacio. Después de firmar, seguí vigencias, obligaciones y renovaciones.',
    cta1: 'Crear una cuenta', cta2: 'Ver cómo funciona', note: 'Documentos · aprobaciones · firmas · acuerdos',
    aria: 'Prepará el documento. Coordiná las firmas. Seguí cada paso.',
  },
  board: {
    nav: ['Inicio', 'Documentos', 'Sobres', 'Plantillas', 'Acuerdos', 'Configuración'], ws: 'Organización · Estudio Norte',
    project: 'Acuerdo de servicios', sprintSub: 'Sobre SO-104 · 3 firmantes', tabs: ['Resumen', 'Firmantes', 'Actividad', 'Archivos'], progress: 'Proceso',
    url: 'espacio / sobres / SO-104', preview: 'Vista ilustrativa de un proceso de firma y aprobación', cursor1: 'Lucía', cursor2: 'Diego',
    cols: ['En preparación', 'Aprobación', 'Esperando firmas', 'Completado'],
    tags: { legal: 'Legal', commercial: 'Comercial', people: 'Personas', finance: 'Finanzas', internal: 'Interno' },
    cards: {
      service: { key: 'SO-104', title: 'Acuerdo de servicios profesionales', tag: 'commercial', who: 'LV', p: 3, col: 0 },
      nda: { key: 'SO-103', title: 'Acuerdo de confidencialidad', tag: 'legal', who: 'DP', p: 2, col: 1 },
      policy: { key: 'SO-102', title: 'Actualización de política interna', tag: 'internal', who: 'SM', p: 4, col: 1 },
      supplier: { key: 'SO-101', title: 'Anexo de proveedor', tag: 'finance', who: 'MR', p: 2, col: 2 },
      offer: { key: 'SO-099', title: 'Propuesta comercial', tag: 'commercial', who: 'LV', p: 2, col: 2 },
      onboarding: { key: 'SO-097', title: 'Convenio de incorporación', tag: 'people', who: 'DP', p: 2, col: 3 },
      amendment: { key: 'SO-096', title: 'Adenda de mantenimiento', tag: 'legal', who: 'SM', p: 3, col: 3 },
    },
  },
  marquee: [
    ['file-signature', 'Firma electrónica'], ['file-text', 'Gestión documental'], ['workflow', 'Aprobaciones'], ['files', 'Plantillas'], ['shield-check', 'Trazabilidad'], ['briefcase-business', 'Acuerdos'],
    ['calendar-clock', 'Renovaciones'], ['list-todo', 'Obligaciones'], ['file-check-2', 'Certificados'], ['scan-search', 'Verificación'], ['webhook', 'Webhooks'], ['braces', 'API REST'],
  ],
  showcase: {
    eyebrow: 'Del documento al acuerdo', h2a: 'Cada parte del proceso,', h2b: 'conectada y visible.', label: 'Sobre SO-104',
    steps: [
      { icon: 'file-text', title: 'Prepará', text: 'Cargá un PDF o generá el documento desde una plantilla versionada.' },
      { icon: 'workflow', title: 'Revisá', text: 'Sumá aprobaciones en secuencia o en paralelo y asigná responsables.' },
      { icon: 'file-signature', title: 'Firmá', text: 'Invitá a las partes y seguí las acciones pendientes del sobre.' },
      { icon: 'briefcase-business', title: 'Administrá', text: 'Relacioná el documento con su acuerdo y registrá obligaciones y vencimientos.' },
    ],
    boardCols: [
      ['Preparación', '#60a5fa', [['Acuerdo de servicios', 'commercial'], ['Anexo de proveedor', 'finance']]],
      ['Revisión interna', '#fbbf24', [['Acuerdo de confidencialidad', 'legal'], ['Política de viáticos', 'internal']]],
      ['Firma', '#38bdf8', [['Propuesta comercial', 'commercial'], ['Convenio de incorporación', 'people']]],
    ],
    listHead: 'Actividad reciente', listCount: '· 6 sobres',
    rows: [
      ['Acuerdo de servicios profesionales', 'commercial', 'LV', 'prog', '28 oct', ''], ['Acuerdo de confidencialidad', 'legal', 'DP', 'rev', '29 oct', ''],
      ['Anexo de proveedor', 'finance', 'MR', 'prog', '30 oct', ''], ['Política de viáticos', 'internal', 'SM', 'todo', '31 oct', ''],
      ['Convenio de incorporación', 'people', 'DP', 'done', '24 oct', ''], ['Adenda de mantenimiento', 'legal', 'SM', 'done', '22 oct', ''],
    ],
    weeks: ['Sem 43', 'Sem 44', 'Sem 45', 'Sem 46'], today: 'Hoy',
    bars: [['Revisión legal', 0, 22, '#60a5fa'], ['Aprobación de área', 12, 25, '#fbbf24'], ['Firma de contraparte', 27, 28, '#38bdf8'], ['Firma interna', 43, 22, '#34d399'], ['Alta del acuerdo', 53, 25, '#bfdbfe'], ['Aviso de renovación', 69, 24, '#f472b6']],
    sprint: { name: 'Acuerdos activos', goal: 'Seguimiento de tareas de aprobación y firma', badge: 'En curso', done: 'Pasos completados', progress: 'Progreso del proceso', days: 'Firmas pendientes', real: 'Completado', ideal: 'Pendiente' },
    status: { todo: 'Preparación', prog: 'En proceso', rev: 'En revisión', done: 'Completado' },
  },
  bento: {
    eyebrow: 'Una plataforma conectada', h2: 'Del primer borrador al seguimiento posterior.', lead: 'Prepará documentos, organizá revisiones, registrá firmas y seguí acuerdos desde el mismo espacio de trabajo.',
    ai: { tag: 'Plantillas', h: 'Generá documentos con variables reutilizables.', p: 'Completá los datos de cada caso sobre una plantilla publicada y conservá sus versiones.', prompt: 'Completar Acuerdo de servicios', n: 38,
      tickets: [['Empresa', '#60a5fa', 'Servicios Delta S.R.L.'], ['Representante', '#38bdf8', 'Marina López'], ['Vigencia', '#34d399', '1 nov 2026 — 31 oct 2027'], ['Importe', '#fbbf24', '$ 1.250.000']] },
    okr: { tag: 'Seguimiento', h: 'Consultá el estado de tus obligaciones.', p: 'Revisá responsables, fechas de vencimiento y evidencia de cumplimiento por acuerdo.',
      krs: [['Informe mensual', 72, '#60a5fa'], ['Revisión de seguridad', 48, '#38bdf8'], ['Renovación anual', 91, '#34d399']] },
    git: { tag: 'Evidencias', h: 'Cada evento queda asociado al proceso.', p: 'Consultá la secuencia de acciones y el identificador de verificación del certificado.', commit: 'Firmante confirmó el documento', task: 'Evento evt_08f2 · Certificado emitido' },
    time: { tag: 'Fechas', h: 'Tené a la vista los próximos vencimientos.', p: 'Revisá fechas importantes de cada acuerdo desde la cartera de contratos.', days: 'L M M J V S D' },
    pf: { tag: 'Cartera', h: 'Todos tus acuerdos, con contexto.', p: 'Agrupá contratos por contraparte, área, estado o fecha de renovación.', items: [['Servicios Delta', 68, '#2563eb'], ['Distribuidora Sur', 34, '#38bdf8'], ['Norte Logística', 87, '#34d399']] },
  },
  flow: {
    eyebrow: 'Un recorrido conectado', h2: 'Desde la preparación hasta la gestión del acuerdo.',
    steps: [
      ['file-text', 'Prepará', 'Cargá un PDF o generá un documento desde una plantilla con variables.'],
      ['workflow', 'Revisá', 'Definí etapas internas, responsables y reglas para avanzar.'],
      ['file-signature', 'Firmá', 'Enviá solicitudes a los participantes y seguí el estado del sobre.'],
      ['briefcase-business', 'Administrá', 'Consultá vigencias, obligaciones, renovaciones y eventos del acuerdo.'],
    ],
  },
  details: {
    eyebrow: 'Control en cada etapa', h2: 'Lo que necesitás para seguir el proceso.', lead: 'Documentos y acciones relacionados para que el equipo entienda qué falta y qué pasó.',
    items: [
      ['list-checks', 'Bandeja de aprobaciones', 'Priorizá pendientes, fechas límite, delegaciones y tareas asignadas.'],
      ['history', 'Versiones publicadas', 'Consultá el historial inmutable de plantillas y workflows publicados.'],
      ['file-check-2', 'Certificado de finalización', 'Descargá el PDF o JSON asociado a un proceso completado.'],
      ['scan-search', 'Código de verificación', 'Consultá hashes y metadatos del certificado sin exponer el documento.'],
      ['calendar-clock', 'Avisos de renovación', 'Configurá avisos previos para acuerdos con vencimiento o renovación.'],
      ['braces', 'API y webhooks', 'Conectá la gestión de sobres y plantillas con otros sistemas.'],
    ],
  },
  cta: { h2: 'Dale seguimiento a cada firma y acuerdo.', lead: 'Reuní los documentos, las personas y los próximos pasos en un solo espacio.', primary: 'Crear cuenta', secondary: 'Ya tengo cuenta' },
};

const en: HomeCopy = {
  hero: {
    badge: 'Electronic signatures', badgeText: 'Documents, approvals and agreements in one flow',
    l1: 'Prepare the document.', l2: 'Coordinate signatures.', l3: 'Follow every step.',
    lead: 'Bring documents, approvals and electronic signatures together in one workspace. After signing, track terms, obligations and renewals.',
    cta1: 'Create an account', cta2: 'See how it works', note: 'Documents · approvals · signatures · agreements',
    aria: 'Prepare the document. Coordinate signatures. Follow every step.',
  },
  board: {
    nav: ['Home', 'Documents', 'Envelopes', 'Templates', 'Agreements', 'Settings'], ws: 'Organization · Northwind Studio',
    project: 'Services agreement', sprintSub: 'Envelope SO-104 · 3 signers', tabs: ['Overview', 'Signers', 'Activity', 'Files'], progress: 'Process',
    url: 'workspace / envelopes / SO-104', preview: 'Illustrative view of a signing and approval process', cursor1: 'Lucy', cursor2: 'Diego',
    cols: ['Preparing', 'Approval', 'Awaiting signatures', 'Completed'],
    tags: { legal: 'Legal', commercial: 'Commercial', people: 'People', finance: 'Finance', internal: 'Internal' },
    cards: {
      service: { key: 'SO-104', title: 'Professional services agreement', tag: 'commercial', who: 'LV', p: 3, col: 0 },
      nda: { key: 'SO-103', title: 'Non-disclosure agreement', tag: 'legal', who: 'DP', p: 2, col: 1 },
      policy: { key: 'SO-102', title: 'Internal policy update', tag: 'internal', who: 'SM', p: 4, col: 1 },
      supplier: { key: 'SO-101', title: 'Supplier addendum', tag: 'finance', who: 'MR', p: 2, col: 2 },
      offer: { key: 'SO-099', title: 'Commercial proposal', tag: 'commercial', who: 'LV', p: 2, col: 2 },
      onboarding: { key: 'SO-097', title: 'Onboarding agreement', tag: 'people', who: 'DP', p: 2, col: 3 },
      amendment: { key: 'SO-096', title: 'Maintenance amendment', tag: 'legal', who: 'SM', p: 3, col: 3 },
    },
  },
  marquee: [
    ['file-signature', 'Electronic signatures'], ['file-text', 'Document management'], ['workflow', 'Approvals'], ['files', 'Templates'], ['shield-check', 'Traceability'], ['briefcase-business', 'Agreements'],
    ['calendar-clock', 'Renewals'], ['list-todo', 'Obligations'], ['file-check-2', 'Certificates'], ['scan-search', 'Verification'], ['webhook', 'Webhooks'], ['braces', 'REST API'],
  ],
  showcase: {
    eyebrow: 'From document to agreement', h2a: 'Every part of the process,', h2b: 'connected and visible.', label: 'Envelope SO-104',
    steps: [
      { icon: 'file-text', title: 'Prepare', text: 'Upload a PDF or generate the document from a versioned template.' },
      { icon: 'workflow', title: 'Review', text: 'Add sequential or parallel approvals and assign owners.' },
      { icon: 'file-signature', title: 'Sign', text: 'Invite the parties and follow outstanding envelope actions.' },
      { icon: 'briefcase-business', title: 'Manage', text: 'Relate the document to its agreement and track obligations and due dates.' },
    ],
    boardCols: [
      ['Preparing', '#60a5fa', [['Services agreement', 'commercial'], ['Supplier addendum', 'finance']]],
      ['Internal review', '#fbbf24', [['Non-disclosure agreement', 'legal'], ['Travel policy', 'internal']]],
      ['Signing', '#38bdf8', [['Commercial proposal', 'commercial'], ['Onboarding agreement', 'people']]],
    ],
    listHead: 'Recent activity', listCount: '· 6 envelopes',
    rows: [
      ['Professional services agreement', 'commercial', 'LV', 'prog', 'Oct 28', ''], ['Non-disclosure agreement', 'legal', 'DP', 'rev', 'Oct 29', ''],
      ['Supplier addendum', 'finance', 'MR', 'prog', 'Oct 30', ''], ['Travel policy', 'internal', 'SM', 'todo', 'Oct 31', ''],
      ['Onboarding agreement', 'people', 'DP', 'done', 'Oct 24', ''], ['Maintenance amendment', 'legal', 'SM', 'done', 'Oct 22', ''],
    ],
    weeks: ['Wk 43', 'Wk 44', 'Wk 45', 'Wk 46'], today: 'Today',
    bars: [['Legal review', 0, 22, '#60a5fa'], ['Department approval', 12, 25, '#fbbf24'], ['Counterparty signing', 27, 28, '#38bdf8'], ['Internal signature', 43, 22, '#34d399'], ['Agreement filed', 53, 25, '#bfdbfe'], ['Renewal notice', 69, 24, '#f472b6']],
    sprint: { name: 'Active agreements', goal: 'Follow approval and signing tasks', badge: 'In progress', done: 'Steps completed', progress: 'Process progress', days: 'Pending signatures', real: 'Completed', ideal: 'Pending' },
    status: { todo: 'Preparing', prog: 'In progress', rev: 'In review', done: 'Completed' },
  },
  bento: {
    eyebrow: 'A connected platform', h2: 'From the first draft to follow-up.', lead: 'Prepare documents, organize reviews, record signatures and follow agreements in one workspace.',
    ai: { tag: 'Templates', h: 'Generate documents with reusable variables.', p: 'Fill each case from a published template and preserve its versions.', prompt: 'Complete Services Agreement', n: 35,
      tickets: [['Company', '#60a5fa', 'Delta Services LLC'], ['Representative', '#38bdf8', 'Marina Lopez'], ['Term', '#34d399', 'Nov 1, 2026 — Oct 31, 2027'], ['Amount', '#fbbf24', '$1,250,000']] },
    okr: { tag: 'Follow-up', h: 'Check the status of your obligations.', p: 'Review owners, due dates and completion evidence for each agreement.',
      krs: [['Monthly report', 72, '#60a5fa'], ['Security review', 48, '#38bdf8'], ['Annual renewal', 91, '#34d399']] },
    git: { tag: 'Evidence', h: 'Each event is linked to its process.', p: 'Review the action sequence and the certificate verification identifier.', commit: 'Signer confirmed the document', task: 'Event evt_08f2 · Certificate issued' },
    time: { tag: 'Dates', h: 'Keep upcoming due dates in view.', p: 'Review important agreement dates from the contract portfolio.', days: 'M T W T F S S' },
    pf: { tag: 'Portfolio', h: 'Your agreements, with their context.', p: 'Group contracts by counterparty, team, status or renewal date.', items: [['Delta Services', 68, '#2563eb'], ['South Distribution', 34, '#38bdf8'], ['North Logistics', 87, '#34d399']] },
  },
  flow: {
    eyebrow: 'A connected journey', h2: 'From preparation to agreement follow-up.',
    steps: [
      ['file-text', 'Prepare', 'Upload a PDF or generate a document from a variable template.'],
      ['workflow', 'Review', 'Set internal stages, owners and rules for moving forward.'],
      ['file-signature', 'Sign', 'Send requests to participants and follow envelope status.'],
      ['briefcase-business', 'Manage', 'Review terms, obligations, renewals and agreement events.'],
    ],
  },
  details: {
    eyebrow: 'Control at every stage', h2: 'What you need to follow the process.', lead: 'Related documents and actions help the team understand what is pending and what happened.',
    items: [
      ['list-checks', 'Approvals inbox', 'Prioritize pending work, due dates, delegations and assigned tasks.'],
      ['history', 'Published versions', 'Review the immutable history of published templates and workflows.'],
      ['file-check-2', 'Completion certificate', 'Download the PDF or JSON linked to a completed process.'],
      ['scan-search', 'Verification code', 'Check certificate hashes and metadata without exposing the document.'],
      ['calendar-clock', 'Renewal notices', 'Set advance notices for agreements with a due date or renewal.'],
      ['braces', 'API and webhooks', 'Connect envelope and template management to other systems.'],
    ],
  },
  cta: { h2: 'Follow every signature and agreement.', lead: 'Bring documents, people and next steps together in one workspace.', primary: 'Create an account', secondary: 'I already have an account' },
};

export const home: Record<Lang, HomeCopy> = { es, en };
