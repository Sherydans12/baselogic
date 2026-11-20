export const products = [
  {
    id: 'booking',
    name: 'BaseLogic Booking',
    href: '/productos/booking',
    eyebrow: 'Sistema de reservas online para pymes',
    tagline: 'Organiza tu agenda y recibe reservas en línea sin depender de mensajes',
    summary:
      'Agenda y reservas online para negocios que trabajan con servicios, profesionales, sucursales y recursos.',
    audience: 'Kinesiólogos, barberías, peluquerías, estética, consultores y servicios con atención programada.',
    features: [
      'Agenda y disponibilidad',
      'Servicios y profesionales',
      'Sucursales y espacios',
      'Reservas sin superposición',
      'Información de clientes',
      'Reglas adaptables',
    ],
    ctaLabel: 'Cotizar Booking',
    demoUrl: undefined as string | undefined,
    status: 'active',
  },
  {
    id: 'edupay',
    name: 'BaseLogic EduPay',
    href: '/productos/edupay',
    eyebrow: 'Producto educativo',
    tagline: 'Gestión escolar, finanzas y comunidad en un mismo ecosistema.',
    summary:
      'Un ecosistema escolar para conectar gestión académica, finanzas, familias y comunidad educativa.',
    audience: 'Colegios, jardines infantiles, academias e instituciones educativas.',
    features: [
      'Gestión académica',
      'Finanzas escolares',
      'Portal para familias',
    ],
    benefits: [
      'Menos trabajo manual',
      'Mejor seguimiento financiero',
      'Información más ordenada',
      'Seguimiento para el equipo administrativo',
    ],
    useCases: [
      'Ordenar mensualidades y estados de pago',
      'Reducir consultas repetidas sobre compromisos pendientes',
      'Dar mejor visibilidad administrativa al equipo',
      'Presentar información financiera clara a los apoderados',
    ],
    faqs: [
      {
        question: '¿EduPay es solo un sistema para registrar pagos?',
        answer:
          'EduPay reúne la gestión académica, EduPay Finanzas y espacios para la comunidad en una propuesta integral para el colegio.',
      },
      {
        question: '¿Qué reúne el Portal EduPay para las familias?',
        answer:
          'El portal está pensado como un espacio para consultar mensualidades, movimientos, comprobantes e información escolar desde el celular o el computador.',
      },
      {
        question: '¿Cómo se organiza la información académica?',
        answer:
          'EduPay Académico organiza la estructura de años escolares, cursos, asignaturas y participantes, y propone reunir los procesos de seguimiento escolar en un mismo entorno.',
      },
      {
        question: '¿Quiénes participan en el ecosistema?',
        answer: 'La propuesta reúne a dirección, administración, docentes, estudiantes, apoderados y equipos de apoyo en espacios adecuados a sus responsabilidades.',
      },
      {
        question: '¿Cómo se aborda la información sensible de estudiantes?',
        answer: 'Los procesos de convivencia y apoyo requieren accesos diferenciados y medidas acordes con la sensibilidad de cada registro.',
      },
      {
        question: '¿Cómo se implementa y se acompaña al equipo?',
        answer: 'Conocemos los procesos y prioridades del establecimiento para preparar una propuesta de implementación, capacitación y acompañamiento.',
      },
    ],
    ctaLabel: 'Consultar EduPay',
    status: 'active',
  },
  {
    id: 'eam',
    name: 'BaseLogic EAM',
    href: '/productos/eam',
    eyebrow: 'Minería y contratistas',
    tagline: 'Activos, mantenimiento y abastecimiento para una operación conectada.',
    summary:
      'Gestión de activos, mantenimiento, compras y bodegas para operaciones que necesitan trazabilidad y control.',
    audience: 'Minería, mantenimiento, movimiento de tierra, perforación, izaje, flotas, talleres y bodegas.',
    features: ['Activos y órdenes de trabajo', 'Mantenimiento preventivo y correctivo', 'Compras y bodegas', 'Repuestos e inventario', 'Trazabilidad operacional'],
    ctaLabel: 'Cotizar EAM',
    status: 'active',
  },
  {
    id: 'pos',
    name: 'BaseLogic POS',
    href: '/productos/pos',
    eyebrow: 'Comercio y punto de venta',
    tagline: 'Ventas, caja e inventario para la gestión diaria del comercio.',
    summary:
      'Una plataforma comercial que conecta el mostrador, la caja y el inventario con la gestión del negocio.',
    audience: 'Comercios, distribuidoras locales, almacenes, tiendas especializadas y negocios con venta presencial.',
    features: [
      'Catálogo y presentaciones de precio',
      'Apertura y sesión de caja',
      'Registro de ventas en efectivo',
      'Movimientos de inventario',
      'Control de saldos de stock',
    ],
    ctaLabel: 'Consultar POS',
    status: 'pilot',
  },
];

export type Product = (typeof products)[number];
