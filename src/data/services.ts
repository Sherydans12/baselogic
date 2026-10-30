export const serviceProcess = [
  {
    title: 'Entendemos el objetivo',
    text: 'Revisamos qué necesita tu negocio, qué problema operacional quieres resolver y qué información ya existe.',
  },
  {
    title: 'Proponemos una ruta clara',
    text: 'Definimos alcance, prioridades, contenidos y una primera etapa funcional con sentido comercial.',
  },
  {
    title: 'Construimos y validamos',
    text: 'Desarrollamos la solución, revisamos contigo los avances y ajustamos lo necesario antes de publicar o activar.',
  },
  {
    title: 'Acompañamos por etapas',
    text: 'Apoyamos con soporte, mantención, mejoras continuas, automatizaciones o nuevos módulos según tu operación.',
  },
];

export const services = [
  {
    id: 'paginas-web',
    tag: 'Presencia y conversión',
    title: 'Páginas web profesionales',
    shortTitle: 'Páginas web',
    href: '/servicios/paginas-web',
    summary:
      'Sitios claros, modernos y preparados para que tu negocio se vea profesional y reciba consultas.',
    detailTitle: 'Páginas web profesionales para pymes y empresas en Chile',
    detailSubtitle:
      'Creamos sitios web claros, modernos, rápidos y adaptados a celular para que tu empresa genere confianza y reciba más consultas.',
    benefits: ['Presencia profesional', 'Contenido claro', 'Contacto fácil', 'SEO base'],
    includes: [
      'Diseño responsive para celular, tablet y computador',
      'Estructura comercial con secciones claras',
      'Formulario de contacto y correo comercial',
      'SEO básico y metadata preparada',
      'Orientación para Google Business Profile cuando aplique',
      'Soporte posterior y posibilidad de crecer por etapas',
    ],
    idealFor: [
      'Pymes y negocios locales',
      'Profesionales independientes',
      'Empresas de servicios',
      'Restaurantes, consultas, colegios, gimnasios y comercios',
    ],
    useCases: [
      'Presentar servicios y recibir cotizaciones',
      'Mostrar información de contacto, horarios y ubicación',
      'Construir una presencia confiable fuera de redes sociales',
      'Partir con una web clara y sumar nuevas secciones después',
    ],
    faqs: [
      {
        question: '¿Puedo partir con una página simple?',
        answer:
          'Sí. Podemos partir con una estructura clara y crecer después con nuevas secciones, formularios, catálogos, reservas o soporte mensual.',
      },
      {
        question: '¿La página queda adaptada a celular?',
        answer:
          'Sí. El sitio se construye pensando en usuarios que llegan desde celular, redes sociales, búsqueda en Google o enlaces compartidos.',
      },
      {
        question: '¿Incluye SEO?',
        answer:
          'Incluye una base SEO: títulos, descripciones, estructura clara, velocidad y contenido ordenado. Una estrategia SEO continua puede trabajarse por etapas.',
      },
    ],
    related: ['landing-pages', 'wordpress', 'soporte-digital'],
    primaryCta: 'Cotizar página web',
    secondaryCta: 'Enviar correo',
    whatsappMessage: 'Hola BaseLogic, quiero cotizar una página web para mi negocio.',
    status: 'active',
  },
  {
    id: 'landing-pages',
    tag: 'Captación comercial',
    title: 'Landing pages',
    shortTitle: 'Landing pages',
    href: '/servicios/landing-pages',
    summary:
      'Páginas enfocadas en campañas, servicios puntuales, lanzamientos o captación de clientes.',
    detailTitle: 'Landing pages para captar clientes y validar ofertas',
    detailSubtitle:
      'Creamos páginas de una sola oferta, pensadas para campañas, promociones, productos nuevos, formularios o contacto directo.',
    benefits: ['Mensaje directo', 'CTA visible', 'Carga rápida', 'Medición preparada'],
    includes: [
      'Estructura enfocada en una oferta principal',
      'Textos y secciones orientadas a conversión',
      'Formulario o CTA directo de contacto',
      'Carga rápida y experiencia fluida en celular',
      'Base para conectar campañas de Meta Ads o Google Ads más adelante',
      'Preparación para medición de conversiones y parámetros UTM',
    ],
    idealFor: [
      'Negocios que quieren promocionar un servicio específico',
      'Pymes que necesitan captar leads calificados',
      'Campañas puntuales y lanzamientos',
      'Productos nuevos y servicios profesionales',
    ],
    useCases: [
      'Lanzar una promoción con foco en consultas',
      'Validar interés antes de construir un sitio más amplio',
      'Captar prospectos desde anuncios o redes sociales',
      'Explicar un servicio específico sin distraer al usuario',
    ],
    faqs: [
      {
        question: '¿En qué se diferencia de una página web completa?',
        answer:
          'Una landing page se enfoca en una oferta y una acción principal. Una web completa cubre varias secciones, servicios e información institucional.',
      },
      {
        question: '¿Sirve para anuncios?',
        answer:
          'Sí. Es una base sólida para campañas porque mantiene el mensaje ordenado, el llamado a la acción visible y el formulario a la mano.',
      },
      {
        question: '¿Puede convertirse después en una web completa?',
        answer:
          'Sí. Podemos partir con una landing y luego ampliar la estructura cuando la oferta esté validada.',
      },
    ],
    related: ['paginas-web', 'automatizacion', 'soporte-digital'],
    primaryCta: 'Cotizar landing page',
    secondaryCta: 'Quiero una landing para mi campaña',
    whatsappMessage: 'Hola BaseLogic, quiero una landing page para una campaña o servicio.',
    status: 'active',
  },
  {
    id: 'wordpress',
    tag: 'Autogestión de contenidos',
    title: 'WordPress autogestionable',
    shortTitle: 'WordPress',
    href: '/servicios/wordpress',
    summary:
      'Sitios administrables para negocios que necesitan editar contenido sin depender siempre de soporte.',
    detailTitle: 'Sitios WordPress autogestionables para empresas',
    detailSubtitle:
      'Implementamos sitios WordPress profesionales para empresas que necesitan actualizar textos, imágenes, entradas o contenidos desde un panel simple.',
    benefits: ['Autogestionable', 'Panel administrativo', 'Capacitación simple', 'Mantenimiento disponible'],
    includes: [
      'Diseño profesional adaptado a la marca',
      'Panel administrativo para editar contenidos',
      'Plugins controlados y configuración ordenada',
      'Medidas básicas de seguridad, backups y mantenimiento',
      'Capacitación inicial para editar lo esencial',
      'Orientación sobre cuándo conviene WordPress y cuándo una web estática',
    ],
    idealFor: [
      'Empresas que actualizan contenidos con frecuencia',
      'Negocios que publican noticias, entradas o novedades',
      'Equipos que quieren editar textos e imágenes internamente',
      'Organizaciones que necesitan una base administrable',
    ],
    useCases: [
      'Actualizar servicios, galerías o páginas internas',
      'Publicar novedades sin pedir cada cambio menor',
      'Gestionar contenidos institucionales desde un panel',
      'Mantener una web activa con soporte y respaldos',
    ],
    faqs: [
      {
        question: '¿WordPress siempre es la mejor opción?',
        answer:
          'No necesariamente. Conviene cuando necesitas editar contenido con frecuencia. Si la web cambia poco, una arquitectura estática puede ser más rápida y simple de mantener.',
      },
      {
        question: '¿Me enseñan a usar el panel?',
        answer:
          'Sí. Incluimos una capacitación inicial para que puedas editar textos, imágenes y contenidos esenciales con seguridad.',
      },
      {
        question: '¿Pueden ayudar con mantenimiento?',
        answer:
          'Sí. Podemos apoyar con actualizaciones, backups, seguridad, cambios menores y mejoras mensuales.',
      },
    ],
    related: ['paginas-web', 'landing-pages', 'soporte-digital'],
    primaryCta: 'Cotizar sitio WordPress',
    secondaryCta: 'Quiero un sitio autogestionable',
    whatsappMessage: 'Hola BaseLogic, quiero cotizar un sitio WordPress autogestionable.',
    status: 'active',
  },
  {
    id: 'webs-estaticas',
    tag: 'Alto rendimiento',
    title: 'Webs estáticas rápidas',
    shortTitle: 'Webs rápidas',
    href: '/servicios',
    summary:
      'Sitios livianos, veloces y seguros para empresas que necesitan información clara y alto rendimiento técnico.',
    benefits: ['Rapidez', 'Seguridad', 'Bajo mantenimiento', 'Buena base SEO'],
    status: 'active',
  },
  {
    id: 'sistemas-para-pymes',
    tag: 'Software y operaciones',
    title: 'Sistemas para pymes',
    shortTitle: 'Sistemas',
    href: '/servicios/sistemas-para-pymes',
    summary:
      'Paneles y sistemas a medida para ordenar clientes, reservas, pagos, inventario, reportes y tareas internas.',
    detailTitle: 'Sistemas a medida para pymes que quieren ordenar su operación',
    detailSubtitle:
      'Cuando los mensajes sueltos, Excel y planillas ya no alcanzan, desarrollamos sistemas claros para ordenar clientes, reservas, pagos, inventario, solicitudes, reportes o flujos internos.',
    benefits: ['Orden operacional', 'Menos planillas', 'Reportes claros', 'Procesos trazables'],
    includes: [
      'Paneles administrativos para gestionar información',
      'Módulos de clientes, reservas, pagos o inventario',
      'Formularios internos y seguimiento de solicitudes',
      'Roles y permisos para usuarios del negocio',
      'Reportes claros para tomar mejores decisiones',
      'Evolución por etapas, partiendo por un problema puntual',
    ],
    idealFor: [
      'Pymes que dependen de planillas y mensajes sueltos',
      'Empresas de servicios con procesos repetitivos',
      'Negocios con reservas, pagos, inventario o solicitudes',
      'Equipos que necesitan trazabilidad y orden operacional',
    ],
    useCases: [
      'Ordenar una agenda interna o solicitudes de clientes',
      'Centralizar información que hoy vive en varias planillas',
      'Controlar pagos, estados y seguimientos',
      'Construir módulos graduales sin partir con un sistema sobredimensionado',
    ],
    faqs: [
      {
        question: '¿Tengo que construir un sistema grande desde el inicio?',
        answer:
          'No. Lo recomendable es partir por un problema puntual, implementar una primera versión útil y evolucionar por módulos según prioridad.',
      },
      {
        question: '¿Puede reemplazar mis planillas?',
        answer:
          'En muchos casos sí, o puede convivir con ellas al principio. Primero revisamos qué información es crítica y qué flujo debe quedar estructurado.',
      },
      {
        question: '¿Necesito conocimientos técnicos para usarlo?',
        answer:
          'No. Diseñamos herramientas claras para la operación real del equipo, con lenguaje comprensible y acompañamiento durante la puesta en marcha.',
      },
    ],
    related: ['automatizacion', 'paginas-web', 'soporte-digital'],
    primaryCta: 'Cotizar sistema para mi empresa',
    secondaryCta: 'Quiero ordenar un proceso',
    whatsappMessage: 'Hola BaseLogic, quiero ordenar un proceso de mi empresa con un sistema a medida.',
    status: 'active',
  },
  {
    id: 'automatizacion',
    tag: 'Flujos e integración',
    title: 'Automatización',
    shortTitle: 'Automatización',
    href: '/servicios/automatizacion',
    summary:
      'Flujos automatizados que reducen tareas manuales, conectan herramientas y ordenan el seguimiento operativo.',
    detailTitle: 'Automatización de procesos para pymes y empresas',
    detailSubtitle:
      'Automatizamos tareas repetitivas para ahorrar tiempo, reducir errores de transcripción y ordenar mejor la operación diaria.',
    benefits: ['Menos trabajo repetitivo', 'Mejor seguimiento', 'Alertas útiles', 'Integraciones claras'],
    includes: [
      'Respuestas automáticas y mensajes de seguimiento',
      'Formularios conectados con notificaciones',
      'Recordatorios para clientes o equipo interno',
      'Reportes automáticos y resúmenes periódicos',
      'Derivación de solicitudes según tipo de consulta',
      'Conexión entre las herramientas que ya utiliza tu negocio',
    ],
    idealFor: [
      'Empresas con tareas manuales repetitivas',
      'Equipos que pierden información entre formularios y mensajes',
      'Negocios con reservas, consultas o seguimiento comercial',
      'Organizaciones que quieren optimizar flujos sin cambiar toda su infraestructura',
    ],
    useCases: [
      'Notificar automáticamente cuando ingresa una solicitud calificada',
      'Enviar recordatorios programados de compromisos o estados',
      'Generar reportes periódicos sin consolidar datos a mano',
      'Derivar consultas al área o responsable correspondiente',
    ],
    faqs: [
      {
        question: '¿Necesito cambiar todas mis herramientas actuales?',
        answer:
          'No siempre. Muchas automatizaciones comienzan conectando formularios, correos, planillas o sistemas que tu negocio ya utiliza.',
      },
      {
        question: '¿Qué proceso conviene automatizar primero?',
        answer:
          'Conviene partir por una tarea repetitiva, frecuente y fácil de verificar: avisos, recordatorios, seguimiento de consultas, carga de datos o reportes.',
      },
      {
        question: '¿Pueden automatizar la recepción de consultas o reservas?',
        answer:
          'Sí. Podemos estructurar formularios, notificaciones, estados y seguimiento para que tu equipo trabaje con menor fricción.',
      },
    ],
    related: ['sistemas-para-pymes', 'landing-pages', 'soporte-digital'],
    primaryCta: 'Automatizar un proceso',
    secondaryCta: 'Hablar sobre mi flujo de trabajo',
    whatsappMessage: 'Hola BaseLogic, quiero automatizar un proceso repetitivo de mi negocio.',
    status: 'active',
  },
  {
    id: 'soporte-digital',
    tag: 'Continuidad digital',
    title: 'Soporte y continuidad digital',
    shortTitle: 'Soporte',
    href: '/planes',
    summary:
      'Mantención, hosting, respaldos, cambios menores y mejoras continuas para asegurar la continuidad de tu plataforma.',
    benefits: ['Acompañamiento mensual', 'Respaldos', 'Cambios menores', 'Mejoras continuas'],
    status: 'active',
  },
];

export type Service = (typeof services)[number];
export type ServiceDetail = Extract<Service, { detailTitle: string }>;
