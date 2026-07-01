export const site = {
  name: 'BaseLogic',
  url: 'https://baselogic.cl',
  email: 'contacto@baselogic.cl',
  whatsapp: {
    enabled: false,
    number: '',
    label: '',
  },
  location: 'Santiago, Chile',
  serviceArea: 'Chile',
  tagline: 'Soluciones digitales simples, profesionales y escalables para pymes.',
  description:
    'BaseLogic crea paginas web, sistemas simples, automatizacion, soporte digital y productos propios para pymes y empresas en Chile.',
};

export type Site = typeof site;
