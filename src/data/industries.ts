export const industries = [
  {
    name: 'Barberias y centros esteticos',
    need: 'Reservas, servicios, horarios, recordatorios y presencia digital.',
  },
  {
    name: 'Restaurantes y cafeterias',
    need: 'Carta online, reservas, promociones, pedidos simples y contacto directo.',
  },
  {
    name: 'Consultas medicas',
    need: 'Agenda, informacion clara, contacto, pagos y seguimiento de pacientes.',
  },
  {
    name: 'Gimnasios y canchas',
    need: 'Reservas, membresias, horarios, pagos y comunicacion con clientes.',
  },
  {
    name: 'Colegios y jardines',
    need: 'Pagos, cobranza, comunicacion y presencia institucional.',
  },
  {
    name: 'Tiendas y negocios locales',
    need: 'Catalogos, tiendas simples, contacto y soporte digital.',
  },
  {
    name: 'Empresas con procesos internos',
    need: 'Paneles, reportes, inventario, clientes y automatizacion.',
  },
];

export type Industry = (typeof industries)[number];
