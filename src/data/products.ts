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
    tagline: 'Pagos y cobranza para colegios, jardines e instituciones educativas.',
    summary:
      'Solución vertical para ordenar pagos, mensualidades, cobranza, comunicación financiera y seguimiento administrativo en instituciones educativas.',
    audience: 'Colegios, jardines infantiles, academias e instituciones educativas.',
    features: [
      'Pagos y mensualidades',
      'Seguimiento de cobranza',
      'Panel administrativo',
      'Recordatorios y reportes',
      'Mejor experiencia para apoderados',
    ],
    benefits: [
      'Menos trabajo manual',
      'Mejor seguimiento financiero',
      'Información más ordenada',
      'Evaluación según requerimiento',
    ],
    useCases: [
      'Ordenar mensualidades y estados de pago',
      'Reducir consultas repetidas sobre compromisos pendientes',
      'Dar mejor visibilidad administrativa al equipo',
      'Evaluar un portal de pagos adaptado a la institución',
    ],
    faqs: [
      {
        question: '¿EduPay es un producto cerrado?',
        answer:
          'Se presenta como solución vertical disponible para evaluación comercial o implementación según requerimiento. Revisamos el caso antes de prometer un alcance cerrado.',
      },
      {
        question: '¿Sirve para colegios y jardines?',
        answer:
          'Sí. El foco está en instituciones educativas que necesitan ordenar pagos, mensualidades, cobranza, recordatorios y seguimiento.',
      },
      {
        question: '¿Puede mejorar la experiencia de apoderados?',
        answer:
          'Ese es uno de los objetivos: entregar información más clara y reducir conversaciones manuales sobre pagos y estados pendientes.',
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
    tagline: 'Control de activos, mantenimiento, órdenes de trabajo y repuestos.',
    summary:
      'Plataforma para minería, contratistas y otras operaciones intensivas en activos que necesitan centralizar mantenimiento, inventario y trazabilidad.',
    audience: 'Minería, mantenimiento, movimiento de tierra, perforación, izaje, flotas, talleres y bodegas.',
    features: ['Activos', 'Órdenes de trabajo', 'Mantenimiento preventivo', 'Repuestos e inventario', 'Trazabilidad operacional'],
    ctaLabel: 'Cotizar EAM',
    status: 'active',
  },
];

export type Product = (typeof products)[number];
