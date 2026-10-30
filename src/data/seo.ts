import { site } from './site';

export const seo = {
  home: {
    title: 'BaseLogic | Sitios web, automatización y software empresarial en Chile',
    description:
      'Desarrollamos sitios web profesionales, automatizaciones y software empresarial para organizar procesos, controlar operaciones y acompañar el crecimiento de negocios en Chile.',
    path: '/',
  },
  services: {
    title: 'Servicios digitales y software para empresas | BaseLogic',
    description:
      'Páginas web, landing pages, WordPress, sistemas a medida, automatización y continuidad digital para pymes y empresas en Chile.',
    path: '/servicios',
  },
  webPages: {
    title: 'Páginas web profesionales para pymes y empresas en Chile | BaseLogic',
    description:
      'Creamos páginas web profesionales, claras, rápidas y adaptadas a celular para pymes y empresas en Chile.',
    path: '/servicios/paginas-web',
  },
  landingPages: {
    title: 'Landing pages para captar clientes | BaseLogic',
    description:
      'Diseñamos landing pages para campañas, promociones, servicios específicos, captación de leads y formularios de conversión.',
    path: '/servicios/landing-pages',
  },
  wordpress: {
    title: 'Sitios WordPress autogestionables para empresas | BaseLogic',
    description:
      'Sitios WordPress profesionales para empresas que necesitan editar textos, imágenes y contenidos desde un panel simple.',
    path: '/servicios/wordpress',
  },
  pymeSystems: {
    title: 'Sistemas a medida para pymes y empresas | BaseLogic',
    description:
      'Desarrollamos sistemas claros para pymes y empresas que necesitan ordenar clientes, reservas, pagos, inventario, solicitudes y reportes.',
    path: '/servicios/sistemas-para-pymes',
  },
  automation: {
    title: 'Automatización de procesos para pymes y empresas | BaseLogic',
    description:
      'Automatizamos tareas repetitivas para pymes y empresas: formularios, notificaciones, recordatorios, seguimiento y reportes.',
    path: '/servicios/automatizacion',
  },
  products: {
    title: 'Productos y plataformas BaseLogic | Booking, EduPay, EAM y POS',
    description:
      'Conoce las plataformas de BaseLogic para reservas online, gestión financiera escolar, control de activos y punto de venta e inventario en implementación piloto.',
    path: '/productos',
  },
  pos: {
    title: 'Punto de venta e inventario (Piloto) | BaseLogic POS',
    description:
      'BaseLogic POS es un sistema en desarrollo e implementación piloto para comercios que necesitan ordenar catálogo, presentaciones de precio, caja, ventas en efectivo y saldos de inventario.',
    path: '/productos/pos',
  },
  booking: {
    title: 'Sistema de reservas online para pymes | BaseLogic Booking',
    description:
      'Organiza servicios, profesionales, horarios y reservas en línea con BaseLogic Booking, una plataforma de agenda para pymes y profesionales en Chile.',
    path: '/productos/booking',
  },
  edupay: {
    title: 'Gestión financiera y cobranza escolar | BaseLogic EduPay',
    description:
      'BaseLogic EduPay ayuda a colegios, jardines e instituciones educativas a ordenar mensualidades, pagos, cobranza, conciliación y seguimiento administrativo.',
    path: '/productos/edupay',
  },
  eam: {
    title: 'Software de activos, abastecimiento y mantenimiento | BaseLogic EAM',
    description:
      'Gestiona activos, órdenes de trabajo, mantenimiento preventivo, abastecimiento, bodegas y trazabilidad operacional con BaseLogic EAM.',
    path: '/productos/eam',
  },
  caseStudies: {
    title: 'Soluciones y escenarios de aplicación por rubro | BaseLogic',
    description:
      'Escenarios de aplicación y soluciones digitales por rubro para empresas en Chile: reservas, presencia web, gestión financiera escolar, automatización y control de activos.',
    path: '/casos-de-exito',
  },
  plans: {
    title: 'Planes web y continuidad digital para empresas | BaseLogic',
    description:
      'Planes referenciales para presencia digital, sitios web, continuidad mensual, automatización y sistemas iniciales para pymes y empresas.',
    path: '/planes',
  },
  contact: {
    title: 'Cotiza tu proyecto o solicita una evaluación | BaseLogic',
    description:
      'Cuéntanos qué necesita tu negocio y definamos una solución clara en desarrollo web, sistemas a medida, automatización o plataformas BaseLogic.',
    path: '/contacto',
  },
  privacy: {
    title: 'Política de privacidad | BaseLogic',
    description: 'Política de privacidad de BaseLogic (SENAS TECNOLOGÍAS SpA) para usuarios, clientes y visitantes del sitio web.',
    path: '/legal/privacidad',
  },
  terms: {
    title: 'Términos de servicio | BaseLogic',
    description: 'Términos de servicio aplicables a propuestas, proyectos, soporte y soluciones digitales de BaseLogic (SENAS TECNOLOGÍAS SpA).',
    path: '/legal/terminos',
  },
};

export type SeoEntry = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export const buildCanonical = (path = '/') => new URL(path, site.url).toString();
