export const industries = [
  {
    name: 'Barberías y centros estéticos',
    need: 'Reservas en línea, organización de profesionales, disponibilidad de boxes y presencia digital.',
  },
  {
    name: 'Comercios, minimarkets y locales',
    need: 'Control de catálogo, apertura de caja, ventas, movimientos de inventario y presencia comercial.',
  },
  {
    name: 'Consultas médicas y profesionales',
    need: 'Agenda programada, información clara de especialidades, captación de consultas y seguimiento.',
  },
  {
    name: 'Gimnasios, centros deportivos y recintos',
    need: 'Reserva de espacios o cupos, horarios, planes y comunicación directa con clientes.',
  },
  {
    name: 'Colegios, jardines e instituciones',
    need: 'Gestión de mensualidades, seguimiento de cobranza, conciliación y portales institucionales.',
  },
  {
    name: 'Minería, contratistas y flotas',
    need: 'Hoja de vida de activos, órdenes de trabajo, abastecimiento, bodegas, Kardex y trazabilidad.',
  },
  {
    name: 'Empresas de servicios y operaciones',
    need: 'Paneles administrativos, automatización de flujos, reportes e integración de procesos internos.',
  },
];

export type Industry = (typeof industries)[number];
