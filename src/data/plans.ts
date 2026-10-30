export const plans = [
  {
    id: 'presencia-digital',
    name: 'Presencia Digital',
    price: '$149.000',
    summary:
      'Para negocios que necesitan una presencia profesional, clara y lista para recibir consultas.',
    includes: ['Página informativa', 'Botones de contacto', 'SEO base', 'Diseño responsive'],
    idealFor: 'Emprendimientos, servicios profesionales y negocios locales.',
  },
  {
    id: 'pyme-activa',
    name: 'Pyme Activa',
    price: '$399.000',
    summary:
      'Para empresas que necesitan una web más completa, autogestión o una base para crecer.',
    includes: ['Sitio multi sección', 'Formulario de contacto', 'Correo comercial', 'Estructura comercial clara'],
    idealFor: 'Pymes que venden servicios, reciben consultas y necesitan ordenar su oferta.',
  },
  {
    id: 'operacion-digital',
    name: 'Operación Digital',
    price: '$690.000',
    summary:
      'Para negocios que requieren web, procesos, automatización o soporte técnico mensual.',
    includes: ['Web o sistema inicial', 'Automatización simple', 'Soporte de lanzamiento', 'Orientación técnica y comercial'],
    idealFor: 'Empresas con procesos internos, reservas, clientes, pagos o inventario.',
  },
];

export const plansNotes = [
  'Los valores son referenciales y pueden variar según alcance, integraciones, soporte requerido y servicios externos.',
  'También podemos evaluar licencias, pagos únicos, mensualidades o acuerdos especiales según el tipo de proyecto.',
];

export type Plan = (typeof plans)[number];
