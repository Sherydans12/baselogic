export const site = {
  name: 'BaseLogic',
  legalEntity: 'SENAS TECNOLOGÍAS SpA',
  url: 'https://baselogic.cl',
  email: 'contacto@baselogic.cl',
  whatsapp: {
    enabled: false,
    number: '',
    label: '',
  },
  location: 'Región de Coquimbo, Chile',
  serviceArea: 'Región de Coquimbo, Chile · Atención a todo Chile',
  tagline: 'Tecnología que conecta y simplifica tu operación.',
  description:
    'BaseLogic desarrolla sitios web, automatizaciones y software empresarial para organizar procesos, controlar operaciones y acompañar el crecimiento de empresas en Chile.',
};

export type Site = typeof site;
