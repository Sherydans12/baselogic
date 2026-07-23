import { site } from './site';

export const seo = {
  home: {
    title: 'BaseLogic | Paginas web, sistemas y automatizacion para pymes en Chile',
    description:
      'Creamos paginas web, sistemas simples, automatizacion, soporte digital y productos propios para pymes y empresas en Chile.',
    path: '/',
  },
  services: {
    title: 'Servicios digitales para pymes | BaseLogic',
    description:
      'Paginas web, landing pages, WordPress, sistemas simples, automatizacion y soporte digital para pymes en Chile.',
    path: '/servicios',
  },
  webPages: {
    title: 'Paginas web profesionales para pymes en Chile | BaseLogic',
    description:
      'Creamos paginas web profesionales, claras, rapidas y adaptadas a celular para pymes y empresas en Chile.',
    path: '/servicios/paginas-web',
  },
  landingPages: {
    title: 'Landing pages para captar clientes | BaseLogic',
    description:
      'Disenamos landing pages para campanas, promociones, servicios especificos, captacion por correo y formularios.',
    path: '/servicios/landing-pages',
  },
  wordpress: {
    title: 'Sitios WordPress autogestionables para empresas | BaseLogic',
    description:
      'Sitios WordPress profesionales para empresas que necesitan editar textos, imagenes y contenidos desde un panel simple.',
    path: '/servicios/wordpress',
  },
  pymeSystems: {
    title: 'Sistemas simples para pymes | BaseLogic',
    description:
      'Creamos sistemas simples para pymes que necesitan ordenar clientes, reservas, pagos, inventario, solicitudes y reportes.',
    path: '/servicios/sistemas-para-pymes',
  },
  automation: {
    title: 'Automatizacion de procesos para pymes | BaseLogic',
    description:
      'Automatizamos tareas repetitivas para pymes y empresas: formularios, notificaciones, recordatorios, seguimiento y reportes.',
    path: '/servicios/automatizacion',
  },
  products: {
    title: 'Productos digitales BaseLogic | Booking, EduPay y EAM',
    description:
      'Conoce los productos BaseLogic para reservas, pagos educativos y gestion de activos, mantenimiento e inventario.',
    path: '/productos',
  },
  booking: {
    title: 'Sistema de reservas para negocios y pymes | BaseLogic Booking',
    description:
      'BaseLogic Booking ayuda a negocios y pymes a gestionar servicios, horarios, clientes y solicitudes de reserva.',
    path: '/productos/booking',
  },
  edupay: {
    title: 'Pagos y cobranza para colegios | BaseLogic EduPay',
    description:
      'BaseLogic EduPay ayuda a instituciones educativas a evaluar una solucion para pagos, cobranza, mensualidades, recordatorios y reportes.',
    path: '/productos/edupay',
  },
  eam: {
    title: 'Software de mantenimiento para minería | BaseLogic EAM',
    description:
      'Gestiona activos, órdenes de trabajo, mantenimiento preventivo, repuestos y trazabilidad de equipos pesados y flotas con BaseLogic EAM.',
    path: '/productos/eam',
  },
  caseStudies: {
    title: 'Casos de uso y soluciones digitales | BaseLogic',
    description:
      'Ejemplos de soluciones digitales por rubro para pymes: reservas, paginas web, pagos educativos, automatizacion e inventario.',
    path: '/casos-de-exito',
  },
  plans: {
    title: 'Planes web y soporte digital para pymes | BaseLogic',
    description:
      'Planes referenciales para presencia digital, sitios web, soporte mensual, automatizacion y sistemas simples para pymes.',
    path: '/planes',
  },
  contact: {
    title: 'Cotiza tu proyecto digital | BaseLogic',
    description:
      'Cuéntanos que necesita tu negocio y te orientamos con una solucion digital clara para web, sistemas, automatizacion o soporte.',
    path: '/contacto',
  },
  privacy: {
    title: 'Politica de privacidad | BaseLogic',
    description: 'Politica de privacidad de BaseLogic para usuarios, clientes y visitantes del sitio web.',
    path: '/legal/privacidad',
  },
  terms: {
    title: 'Terminos de servicio | BaseLogic',
    description: 'Terminos de servicio aplicables a proyectos, soporte y soluciones digitales de BaseLogic.',
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
