export const plans = [
  {
    id: 'presencia-digital',
    name: 'Presencia Digital',
    price: '$149.000',
    summary:
      'Para negocios que necesitan una presencia profesional, clara y lista para recibir consultas.',
    includes: ['Pagina informativa', 'Botones de contacto', 'SEO base', 'Diseño responsive'],
    idealFor: 'Emprendimientos, servicios profesionales y negocios locales.',
  },
  {
    id: 'pyme-activa',
    name: 'Pyme Activa',
    price: '$399.000',
    summary:
      'Para empresas que necesitan una web mas completa, autogestion o una base para crecer.',
    includes: ['Sitio multi seccion', 'Formulario de contacto', 'Correo comercial', 'Estructura comercial clara'],
    idealFor: 'Pymes que venden servicios, reciben consultas y necesitan ordenar su oferta.',
  },
  {
    id: 'operacion-digital',
    name: 'Operacion Digital',
    price: '$690.000',
    summary:
      'Para negocios que requieren web, procesos, automatizacion o soporte tecnico mensual.',
    includes: ['Web o sistema inicial', 'Automatizacion simple', 'Soporte de lanzamiento', 'Orientacion tecnica y comercial'],
    idealFor: 'Empresas con procesos internos, reservas, clientes, pagos o inventario.',
  },
];

export const plansNotes = [
  'Los valores son referenciales y pueden variar segun alcance, integraciones, soporte requerido y servicios externos.',
  'Tambien podemos evaluar licencias, pagos unicos, mensualidades o acuerdos especiales segun el tipo de proyecto.',
];

export type Plan = (typeof plans)[number];
