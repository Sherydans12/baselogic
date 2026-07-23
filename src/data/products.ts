export const products = [
  {
    id: 'booking',
    name: 'BaseLogic Booking',
    href: '/productos/booking',
    eyebrow: 'Producto principal',
    tagline: 'Reservas simples para negocios que atienden por hora.',
    summary:
      'Sistema para gestionar horarios, servicios, clientes y solicitudes de reserva desde una experiencia clara para el negocio y sus clientes.',
    audience: 'Barberias, centros esteticos, consultas, canchas, gimnasios y servicios con agenda.',
    features: ['Agenda de servicios', 'Gestion de clientes', 'Solicitudes de reserva', 'Recordatorios y seguimiento'],
    ctaLabel: 'Cotizar Booking',
    status: 'active',
  },
  {
    id: 'edupay',
    name: 'BaseLogic EduPay',
    href: '/productos/edupay',
    eyebrow: 'Producto educativo',
    tagline: 'Pagos y cobranza para colegios, jardines e instituciones educativas.',
    summary:
      'Solucion vertical para ordenar pagos, mensualidades, cobranza, comunicacion financiera y seguimiento administrativo en instituciones educativas.',
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
      'Informacion mas ordenada',
      'Evaluacion segun requerimiento',
    ],
    useCases: [
      'Ordenar mensualidades y estados de pago',
      'Reducir consultas repetidas sobre compromisos pendientes',
      'Dar mejor visibilidad administrativa al equipo',
      'Evaluar un portal de pagos adaptado a la institucion',
    ],
    faqs: [
      {
        question: '¿EduPay es un producto cerrado?',
        answer:
          'Se presenta como solucion vertical disponible para evaluacion comercial o implementacion segun requerimiento. Revisamos el caso antes de prometer un alcance cerrado.',
      },
      {
        question: '¿Sirve para colegios y jardines?',
        answer:
          'Si. El foco esta en instituciones educativas que necesitan ordenar pagos, mensualidades, cobranza, recordatorios y seguimiento.',
      },
      {
        question: '¿Puede mejorar la experiencia de apoderados?',
        answer:
          'Ese es uno de los objetivos: entregar informacion mas clara y reducir conversaciones manuales sobre pagos y estados pendientes.',
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
