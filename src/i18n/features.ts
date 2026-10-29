import type { FeatureKey, Lang } from './routes';

export interface FeatureCopy {
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  h1: string;
  lead: string;
  caps: [icon: string, title: string, text: string][];
  steps: [string, string][];
  faq: [q: string, a: string][];
}

const es: Record<FeatureKey, FeatureCopy> = {
  'feat-signing': {
    metaTitle: 'Firma electrónica de documentos',
    metaDesc: 'Enviá documentos a una o varias personas, reuní firmas electrónicas y descargá el archivo final con su certificado y evidencias del proceso.',
    eyebrow: 'Firma electrónica', h1: 'De la solicitud de firma al documento final, en un solo flujo.',
    lead: 'Prepará un documento, definí quién firma y seguí el proceso hasta completarlo. Cada participante recibe una experiencia web clara, también desde el celular.',
    caps: [
      ['file-signature', 'Firmantes y campos', 'Agregá participantes y ubicá en el PDF los campos de firma y datos que necesita completar cada persona.'],
      ['mail', 'Invitaciones por email', 'Enviá la solicitud a cada firmante y consultá el estado del sobre desde tu espacio de trabajo.'],
      ['lock-keyhole', 'Verificación configurable', 'Según las políticas del proceso, podés pedir un código de acceso u OTP por email.'],
      ['check-check', 'Cierre documentado', 'Al terminar, descargá el documento junto con el certificado de finalización y sus datos de verificación.'],
      ['users', 'Firma de varias partes', 'Reuní firmas de distintas personas dentro del mismo sobre y consultá quién tiene una acción pendiente.'],
    ],
    steps: [['Prepará el sobre', 'Elegí el documento, agregá firmantes y definí los campos que debe completar cada uno.'], ['Enviá la solicitud', 'Las personas invitadas acceden a una página de firma desde el enlace recibido por email.'], ['Descargá el resultado', 'Cuando finaliza el proceso, recuperá el documento y el certificado asociado.']],
    faq: [
      ['¿Cómo firma una persona invitada?', 'Abre el enlace recibido, revisa el documento, completa los campos asignados y confirma su firma según las instrucciones del proceso.'],
      ['¿Puedo pedir una verificación adicional?', 'Sí. El producto permite configurar passcode y código OTP por email, de acuerdo con la política de la organización.'],
      ['¿Una firma electrónica tiene el mismo efecto en todos los países?', 'No necesariamente. Los requisitos y efectos dependen del documento y de la jurisdicción aplicable. La plataforma registra el proceso, pero no ofrece asesoramiento legal.'],
    ],
  },
  'feat-documents': {
    metaTitle: 'Gestión de documentos y versiones',
    metaDesc: 'Centralizá documentos PDF, organizalos con carpetas y etiquetas, y consultá el historial de versiones con su huella de integridad.',
    eyebrow: 'Documentos', h1: 'Tus documentos, con contexto y versiones a mano.',
    lead: 'Guardá los archivos que participan en tus procesos, encontralos por carpeta o etiqueta y mantené un historial claro de sus versiones.',
    caps: [
      ['upload', 'Carga de PDF', 'Incorporá documentos al espacio de la organización y relacioná archivos con sus procesos de firma.'],
      ['folder', 'Carpetas y etiquetas', 'Agrupá archivos por área, tipo de documento o la forma de trabajo de tu equipo.'],
      ['history', 'Historial de versiones', 'Agregá versiones nuevas y conservá la relación entre el documento y sus cambios.'],
      ['hash', 'Huella del archivo', 'Cada versión guarda un hash SHA-256 para ayudar a identificar si el archivo cambió.'],
      ['search', 'Búsqueda y filtros', 'Encontrá documentos por nombre, carpeta y etiquetas sin recorrer toda la biblioteca.'],
    ],
    steps: [['Cargá el documento', 'Subí el PDF y completá su información básica.'], ['Ordenalo', 'Usá carpetas y etiquetas para que el equipo lo encuentre.'], ['Mantené las versiones', 'Sumá una nueva versión cuando cambie el archivo y consultá el historial.']],
    faq: [
      ['¿Qué archivos puedo gestionar?', 'El flujo documentado está centrado en documentos PDF.'],
      ['¿Qué representa el hash SHA-256?', 'Es una huella calculada a partir del archivo. Sirve para comparar versiones y detectar si el contenido binario cambió; por sí sola no demuestra autoría ni validez legal.'],
      ['¿Puedo usar un documento en una solicitud de firma?', 'Sí. Los documentos de la biblioteca se pueden asociar a un sobre de firma.'],
    ],
  },
  'feat-approvals': {
    metaTitle: 'Flujos de aprobación y aprobaciones internas',
    metaDesc: 'Diseñá aprobaciones secuenciales o paralelas, asigná responsables y acompañá cada sobre hasta que pueda pasar a la etapa de firma.',
    eyebrow: 'Aprobaciones y workflows', h1: 'Sumá las revisiones que tu proceso necesita antes de firmar.',
    lead: 'Definí quién revisa cada documento, en qué orden y qué regla permite avanzar. El equipo sigue las tareas desde una bandeja central.',
    caps: [
      ['workflow', 'Pasos secuenciales o paralelos', 'Configurá revisiones una detrás de otra o asigná una etapa a varias personas al mismo tiempo.'],
      ['git-branch', 'Reglas para avanzar', 'Elegí si una etapa requiere la aprobación de cualquiera, de la mayoría o de todas las personas asignadas.'],
      ['user-round-check', 'Responsables claros', 'Asigná tareas por rol y delegá o reasigná cuando cambie quién debe resolverlas.'],
      ['clock-3', 'Fechas y escalamiento', 'Definí vencimientos y niveles de escalamiento para dar seguimiento a las tareas demoradas.'],
      ['history', 'Versiones publicadas', 'Las ejecuciones conservan una copia del flujo con el que empezaron, aunque luego edites su definición.'],
    ],
    steps: [['Armá el flujo', 'Agregá etapas de aprobación, firma y cierre.'], ['Publicá sus reglas', 'Configurá responsables, secuencia y condiciones de cada paso.'], ['Seguí las tareas', 'Revisá pendientes, vencimientos y actividad desde la bandeja de aprobaciones.']],
    faq: [
      ['¿Puedo pedir aprobaciones en paralelo?', 'Sí. Una etapa puede asignar tareas en paralelo y avanzar según una regla de cualquiera, mayoría o todas.'],
      ['¿Qué pasa al aprobar todas las etapas?', 'Si el flujo incluye una etapa de firma, el producto crea las sesiones para los destinatarios y envía sus invitaciones.'],
      ['¿Se puede cambiar un flujo publicado?', 'Sí. Las nuevas ejecuciones usan la nueva versión; las que ya empezaron conservan la definición con la que fueron creadas.'],
    ],
  },
  'feat-templates': {
    metaTitle: 'Plantillas para generar documentos',
    metaDesc: 'Creá plantillas con variables, generá documentos PDF y publicá versiones para reutilizarlas en nuevos procesos de firma.',
    eyebrow: 'Plantillas', h1: 'Convertí documentos repetidos en un proceso reutilizable.',
    lead: 'Prepará una base con campos variables, completá los datos de cada caso y generá un documento listo para iniciar un sobre.',
    caps: [
      ['library', 'Biblioteca compartida', 'Reuní plantillas por nombre, categoría, etiquetas y estado.'],
      ['braces', 'Variables dinámicas', 'Definí campos de texto, números, fechas, importes y otros tipos, con reglas de validación.'],
      ['file-plus-2', 'Generación de PDF', 'Completá las variables para crear un documento PDF y guardarlo en la biblioteca.'],
      ['layers-2', 'Publicación versionada', 'Publicá una versión inmutable de la plantilla y consultá quién la publicó y cuándo.'],
      ['key-round', 'Acceso controlado', 'Restringí una plantilla a personas o roles autorizados de la organización.'],
    ],
    steps: [['Creá la plantilla', 'Definí el contenido y agregá variables como nombres, fechas o importes.'], ['Publicá una versión', 'Dejá una edición aprobada disponible para el equipo.'], ['Generá el documento', 'Completá sus datos y elegí si querés abrir un sobre de firma con el PDF generado.']],
    faq: [
      ['¿Qué tipos de variable admite una plantilla?', 'Texto corto o largo, número, fecha, moneda y booleano, además de valores requeridos, predeterminados y reglas de validación.'],
      ['¿Puedo modificar una plantilla ya publicada?', 'Sí. Los cambios se publican como una versión nueva; las versiones anteriores conservan su contenido.'],
      ['¿Una plantilla puede ser privada para un equipo?', 'Sí. Podés asignar permisos por persona o rol, además de los permisos administrativos de la organización.'],
    ],
  },
  'feat-evidence': {
    metaTitle: 'Trazabilidad, evidencias y cumplimiento',
    metaDesc: 'Consultá los eventos de firma, certificados y códigos de verificación. Configurá controles de identidad, consentimiento y retención según cada organización.',
    eyebrow: 'Trazabilidad y cumplimiento', h1: 'Cada paso deja un registro que podés consultar.',
    lead: 'Revisá qué ocurrió durante el proceso de firma y recuperá el certificado con sus datos de verificación. Las políticas disponibles se configuran por organización.',
    caps: [
      ['list-checks', 'Eventos encadenados', 'Las acciones del proceso se registran en una cadena de evidencias donde una alteración resulta detectable.'],
      ['file-check-2', 'Certificado de finalización', 'Descargá un PDF o JSON con hashes, método de verificación, consentimiento y datos de finalización disponibles.'],
      ['scan-search', 'Portal de verificación', 'Usá el código del certificado para consultar hashes y metadatos de verificación sin exponer el documento.'],
      ['shield-check', 'Controles configurables', 'Activá consentimiento, OTP, requisitos de identidad, exportación y retención de acuerdo con la política de la organización.'],
      ['stamp', 'Sellado y firma digital', 'Cuando se configuran, el producto puede incluir marcas de tiempo RFC 3161 y firmas digitales del manifiesto.'],
    ],
    steps: [['Configurá la política', 'Elegí los controles y requisitos aplicables al espacio de trabajo.'], ['Registrá el proceso', 'Las acciones de cada participante se incorporan a las evidencias del sobre.'], ['Verificá el resultado', 'Revisá el certificado y consultá los datos disponibles con su código de verificación.']],
    faq: [
      ['¿El registro garantiza validez legal?', 'No. La plataforma conserva evidencias técnicas; el efecto jurídico depende del tipo de documento, de las partes y de la legislación aplicable.'],
      ['¿El portal de verificación muestra el documento?', 'No. El portal expone hashes y metadatos de verificación, no el contenido del archivo.'],
      ['¿La firma digital basada en certificados está siempre activa?', 'No. Es una capacidad opcional que requiere configuración de claves por organización y revisión de los requisitos que correspondan.'],
    ],
  },
  'feat-agreements': {
    metaTitle: 'Gestión del ciclo de vida de acuerdos',
    metaDesc: 'Centralizá acuerdos, contrapartes, vigencias, obligaciones, renovaciones y adendas con una línea de tiempo por contrato.',
    eyebrow: 'Gestión de acuerdos', h1: 'El seguimiento continúa después de la firma.',
    lead: 'Relacioná cada acuerdo con sus documentos y participantes, registrá obligaciones y fechas clave, y consultá los eventos de su ciclo de vida.',
    caps: [
      ['briefcase-business', 'Repositorio de acuerdos', 'Buscá por contraparte, expediente, descripción, estado, tipo, etiquetas y fechas.'],
      ['calendar-clock', 'Vencimientos y renovaciones', 'Configurá avisos previos, renovación automática o fecha de expiración según cada acuerdo.'],
      ['list-todo', 'Obligaciones con responsable', 'Asigná responsables, vencimientos y evidencia para dar seguimiento a cada obligación.'],
      ['file-pen-line', 'Adendas relacionadas', 'Generá adendas asociadas al acuerdo original y conservá su propio documento y estado.'],
      ['activity', 'Línea de tiempo', 'Consultá en orden los eventos del acuerdo y las evidencias de firma relacionadas.'],
    ],
    steps: [['Registrá el acuerdo', 'Vinculá el documento, las partes y los datos que ayudan a identificarlo.'], ['Organizá el seguimiento', 'Agregá vigencias, obligaciones, hitos y responsables.'], ['Respondé a tiempo', 'Consultá avisos, renovaciones y eventos desde la cartera de acuerdos.']],
    faq: [
      ['¿La gestión de acuerdos reemplaza la firma?', 'No. Complementa el flujo de firma con seguimiento de vigencias, obligaciones, renovaciones y cambios posteriores.'],
      ['¿Puedo vincular el acuerdo con un sobre firmado?', 'Sí. Un acuerdo puede relacionar el documento final y el sobre de firma correspondiente.'],
      ['¿Cómo se avisa un vencimiento?', 'La organización puede configurar días de aviso y opciones de renovación por acuerdo; el sistema genera notificaciones según esa configuración.'],
    ],
  },
  'feat-api': {
    metaTitle: 'API REST y webhooks para firmas',
    metaDesc: 'Integrá sobres y plantillas con la API REST v1, claves con permisos por alcance y webhooks firmados con reintentos.',
    eyebrow: 'API e integraciones', h1: 'Conectá los procesos de firma con tus sistemas.',
    lead: 'Creá y consultá sobres, generá documentos desde plantillas y recibí eventos de entrega desde interfaces pensadas para integrarse.',
    caps: [
      ['braces', 'API REST v1', 'Gestioná sobres, enviá solicitudes y consultá plantillas desde endpoints JSON.'],
      ['key-round', 'Claves con alcances', 'Creá API keys con permisos limitados por recurso y acción.'],
      ['webhook', 'Webhooks firmados', 'Verificá cada entrega mediante una firma HMAC y consultá su identificador de evento.'],
      ['refresh-cw', 'Reintentos con backoff', 'Las entregas fallidas se reintentan con espera incremental y quedan registradas en su historial.'],
      ['file-code-2', 'Documentación útil para integrar', 'Usá los endpoints de sobres y plantillas para llevar el flujo a las herramientas de tu organización.'],
    ],
    steps: [['Creá una clave', 'Generá una API key y otorgale solo los alcances que necesita la integración.'], ['Enviá una solicitud', 'Creá el sobre o generá el documento desde la API.'], ['Recibí el evento', 'Configurá el webhook, validá su firma y atendé las notificaciones.']],
    faq: [
      ['¿Cómo se autentica la API?', 'Con una sesión de usuario o una API key enviada como Bearer token. Las claves se guardan hasheadas y tienen scopes.'],
      ['¿Cómo verifico un webhook?', 'La entrega incluye una firma HMAC-SHA256 calculada sobre la marca de tiempo y el cuerpo del mensaje.'],
      ['¿Qué recursos cubre la API disponible?', 'La versión documentada incluye operaciones de sobres, plantillas, generación de documentos y consulta de entregas de webhooks.'],
    ],
  },
};

const en: Record<FeatureKey, FeatureCopy> = {
  'feat-signing': {
    metaTitle: 'Electronic document signing',
    metaDesc: 'Send a document to one or more people, collect electronic signatures and download the final file with its certificate and process evidence.',
    eyebrow: 'Electronic signature', h1: 'From signature request to final document, in one flow.',
    lead: 'Prepare a document, choose who signs and follow the process through completion. Each participant gets a clear web experience that also works on mobile.',
    caps: [
      ['file-signature', 'Signers and fields', 'Add participants and place signature and data fields on the PDF for each person to complete.'],
      ['mail', 'Email invitations', 'Send each signer a request and check envelope status from your workspace.'],
      ['lock-keyhole', 'Configurable verification', 'Depending on the process policy, you can require a passcode or an email OTP.'],
      ['check-check', 'Documented completion', 'When the process finishes, download the document and its completion certificate with verification data.'],
      ['users', 'Multiple parties', 'Collect signatures from several people in the same envelope and see who still has an action pending.'],
    ],
    steps: [['Prepare the envelope', 'Choose a document, add signers and set the fields each person must complete.'], ['Send the request', 'Invited people open a signing page from the link they receive by email.'], ['Download the result', 'When the process is complete, retrieve the document and its certificate.']],
    faq: [
      ['How does an invited signer sign?', 'They open the link, review the document, complete their assigned fields and confirm their signature following the process instructions.'],
      ['Can I ask for additional verification?', 'Yes. The product supports passcodes and email OTP, based on the organization policy.'],
      ['Does an electronic signature have the same effect in every country?', 'Not necessarily. Requirements and effects depend on the document and applicable jurisdiction. The platform records the process but does not provide legal advice.'],
    ],
  },
  'feat-documents': {
    metaTitle: 'Document and version management',
    metaDesc: 'Centralize PDF documents, organize them with folders and tags, and review version history with file integrity hashes.',
    eyebrow: 'Documents', h1: 'Your documents, with their context and versions close at hand.',
    lead: 'Store files used in your processes, find them by folder or tag and keep a clear history of their versions.',
    caps: [
      ['upload', 'PDF uploads', 'Add documents to your organization workspace and relate files to signing processes.'],
      ['folder', 'Folders and tags', 'Group files by team, document type or the way your organization works.'],
      ['history', 'Version history', 'Add new versions and keep the relationship between a document and its changes.'],
      ['hash', 'File fingerprint', 'Each version stores a SHA-256 hash to help identify whether the file changed.'],
      ['search', 'Search and filters', 'Find documents by name, folder and tag without browsing the entire library.'],
    ],
    steps: [['Upload the document', 'Add the PDF and fill in its basic information.'], ['Organize it', 'Use folders and tags so your team can find it.'], ['Keep its versions', 'Add a new version when the file changes and review its history.']],
    faq: [
      ['What files can I manage?', 'The documented workflow is centered on PDF documents.'],
      ['What does the SHA-256 hash represent?', 'It is a fingerprint calculated from the file. It helps compare versions and detect binary changes; by itself, it does not prove authorship or legal validity.'],
      ['Can I use a document in a signing request?', 'Yes. Documents in the library can be attached to a signing envelope.'],
    ],
  },
  'feat-approvals': {
    metaTitle: 'Approval workflows',
    metaDesc: 'Design sequential or parallel approval steps, assign owners and follow each envelope until it can move to signing.',
    eyebrow: 'Approvals and workflows', h1: 'Add the reviews your process needs before signing.',
    lead: 'Define who reviews each document, in what order and which rule allows it to move forward. Your team tracks tasks from one inbox.',
    caps: [
      ['workflow', 'Sequential or parallel steps', 'Set reviews one after another or assign a stage to several people at once.'],
      ['git-branch', 'Rules for moving forward', 'Choose whether a step needs approval from anyone, a majority or everyone assigned.'],
      ['user-round-check', 'Clear ownership', 'Assign tasks by role and delegate or reassign them when responsibility changes.'],
      ['clock-3', 'Due dates and escalation', 'Set due dates and escalation levels to follow up on overdue tasks.'],
      ['history', 'Published versions', 'Executions keep a copy of the workflow they started with, even if you later edit its definition.'],
    ],
    steps: [['Build the workflow', 'Add approval, signing and completion stages.'], ['Publish its rules', 'Set owners, sequence and conditions for each step.'], ['Follow the tasks', 'Review pending work, due dates and activity from the approvals inbox.']],
    faq: [
      ['Can I request approvals in parallel?', 'Yes. A stage can assign tasks in parallel and move forward when anyone, a majority or everyone approves.'],
      ['What happens when all stages are approved?', 'If the workflow includes signing, the product creates signing sessions for the recipients and sends their invitations.'],
      ['Can I change a published workflow?', 'Yes. New executions use the new version; executions already in progress keep the definition they started with.'],
    ],
  },
  'feat-templates': {
    metaTitle: 'Document generation templates',
    metaDesc: 'Build templates with variables, generate PDF documents and publish versions for reuse in new signing processes.',
    eyebrow: 'Templates', h1: 'Turn repeated documents into a reusable process.',
    lead: 'Prepare a base document with variable fields, fill in each case and generate a document ready to start an envelope.',
    caps: [
      ['library', 'Shared library', 'Group templates by name, category, tags and status.'],
      ['braces', 'Dynamic variables', 'Define text, number, date, currency and other fields with validation rules.'],
      ['file-plus-2', 'PDF generation', 'Fill in the variables to create a PDF and save it to the document library.'],
      ['layers-2', 'Versioned publishing', 'Publish an immutable template version and see who published it and when.'],
      ['key-round', 'Controlled access', 'Restrict a template to authorized people or roles in the organization.'],
    ],
    steps: [['Create the template', 'Add content and variables such as names, dates or amounts.'], ['Publish a version', 'Make an approved edition available to your team.'], ['Generate the document', 'Fill in its data and choose whether to open a signing envelope with the PDF.']],
    faq: [
      ['Which variable types are supported?', 'Short or long text, number, date, currency and boolean, along with required, default and validation rules.'],
      ['Can I edit a published template?', 'Yes. Changes are published as a new version; older versions keep their content.'],
      ['Can a template be private to a team?', 'Yes. You can assign access by person or role, in addition to organization administrator permissions.'],
    ],
  },
  'feat-evidence': {
    metaTitle: 'Traceability, evidence and compliance',
    metaDesc: 'Review signing events, certificates and verification codes. Configure identity, consent and retention controls for each organization.',
    eyebrow: 'Traceability and compliance', h1: 'Every step leaves a record you can review.',
    lead: 'Review what happened during a signing process and retrieve its certificate and verification data. Available policies are configured by organization.',
    caps: [
      ['list-checks', 'Chained events', 'Process actions are recorded in an evidence chain where alterations can be detected.'],
      ['file-check-2', 'Completion certificate', 'Download a PDF or JSON with available hashes, verification method, consent and completion data.'],
      ['scan-search', 'Verification portal', 'Use the certificate code to review hashes and verification metadata without exposing the document.'],
      ['shield-check', 'Configurable controls', 'Set consent, OTP, identity requirements, export and retention according to organization policy.'],
      ['stamp', 'Timestamping and digital signatures', 'When configured, the product can include RFC 3161 timestamps and digital signatures for the manifest.'],
    ],
    steps: [['Set a policy', 'Choose the controls and requirements for your workspace.'], ['Record the process', 'Each participant action is added to the envelope evidence.'], ['Verify the result', 'Review the certificate and available data using its verification code.']],
    faq: [
      ['Does the record guarantee legal validity?', 'No. The platform keeps technical evidence; legal effect depends on the document, the parties and applicable law.'],
      ['Does the verification portal show the document?', 'No. The portal exposes hashes and verification metadata, not the file contents.'],
      ['Is certificate-based digital signing always active?', 'No. It is an optional capability that requires organization key setup and a review of applicable requirements.'],
    ],
  },
  'feat-agreements': {
    metaTitle: 'Agreement lifecycle management',
    metaDesc: 'Centralize agreements, counterparties, terms, obligations, renewals and amendments with an event timeline for each contract.',
    eyebrow: 'Agreement management', h1: 'Follow the agreement after it is signed.',
    lead: 'Relate each agreement to its documents and parties, record obligations and key dates, and review events across its lifecycle.',
    caps: [
      ['briefcase-business', 'Agreement repository', 'Search by counterparty, case file, description, status, type, tags and dates.'],
      ['calendar-clock', 'Expirations and renewals', 'Set advance notices, automatic renewal or an expiration date for each agreement.'],
      ['list-todo', 'Owned obligations', 'Assign owners, due dates and evidence to follow up on each obligation.'],
      ['file-pen-line', 'Related amendments', 'Create amendments linked to the original agreement and keep their own document and status.'],
      ['activity', 'Event timeline', 'Review agreement events in order alongside related signing evidence.'],
    ],
    steps: [['Record the agreement', 'Link its document, parties and information that helps identify it.'], ['Organize follow-up', 'Add terms, obligations, milestones and owners.'], ['Act on time', 'Review notices, renewals and events from the agreement portfolio.']],
    faq: [
      ['Does agreement management replace signing?', 'No. It complements signing with follow-up for terms, obligations, renewals and later changes.'],
      ['Can I link an agreement to a signed envelope?', 'Yes. An agreement can reference its final document and corresponding signing envelope.'],
      ['How are expirations handled?', 'The organization can configure advance notice and renewal options for each agreement; the system generates notifications according to those settings.'],
    ],
  },
  'feat-api': {
    metaTitle: 'REST API and signing webhooks',
    metaDesc: 'Integrate envelopes and templates with the REST API v1, scoped keys and signed webhooks with retries.',
    eyebrow: 'API and integrations', h1: 'Connect signing processes to your systems.',
    lead: 'Create and check envelopes, generate documents from templates and receive delivery events through integration-friendly interfaces.',
    caps: [
      ['braces', 'REST API v1', 'Manage envelopes, send signing requests and retrieve templates through JSON endpoints.'],
      ['key-round', 'Scoped keys', 'Create API keys with permissions limited by resource and action.'],
      ['webhook', 'Signed webhooks', 'Verify each delivery with an HMAC signature and inspect its event identifier.'],
      ['refresh-cw', 'Backoff retries', 'Failed deliveries are retried with increasing delays and recorded in their history.'],
      ['file-code-2', 'Integration-ready endpoints', 'Use envelope and template endpoints to bring the flow into your organization tools.'],
    ],
    steps: [['Create a key', 'Generate an API key and grant only the scopes your integration needs.'], ['Send a request', 'Create an envelope or generate a document through the API.'], ['Receive the event', 'Configure a webhook, verify its signature and handle notifications.']],
    faq: [
      ['How does the API authenticate?', 'With a user session or an API key sent as a Bearer token. Keys are stored hashed and have scopes.'],
      ['How do I verify a webhook?', 'Each delivery includes an HMAC-SHA256 signature calculated over the timestamp and message body.'],
      ['Which resources does the available API cover?', 'The documented version includes envelopes, templates, document generation and webhook delivery lookup.'],
    ],
  },
};

export const features: Record<Lang, Record<FeatureKey, FeatureCopy>> = { es, en };
