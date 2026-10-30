import { site } from './site';

export const projectTypes = [
  'Página web',
  'Landing page',
  'WordPress',
  'Sistema para pyme',
  'Automatización',
  'BaseLogic Booking',
  'BaseLogic EduPay',
  'BaseLogic EAM',
  'BaseLogic POS (Piloto)',
  'Soporte mensual',
  'No estoy seguro',
];

export const budgetRanges = [
  'Aún no lo tengo definido',
  'Hasta $300.000',
  '$300.000 a $700.000',
  '$700.000 a $1.500.000',
  'Más de $1.500.000',
  'Prefiero recibir orientación',
];

export const contact = {
  email: site.email,
  whatsapp: site.whatsapp,
  responseNote:
    'Después de recibir tu correo revisamos el contexto, te orientamos sobre la mejor alternativa y coordinamos los siguientes pasos para una propuesta clara.',
  whatsappMessages: {
    general:
      'Hola BaseLogic, quiero cotizar un proyecto digital para mi negocio.',
    services:
      'Hola BaseLogic, quiero conversar sobre sus servicios digitales.',
    products:
      'Hola BaseLogic, quiero conocer los productos BaseLogic.',
    booking:
      'Hola BaseLogic, me interesa BaseLogic Booking para gestionar reservas.',
    edupay:
      'Hola BaseLogic, quiero consultar por BaseLogic EduPay para una institución educativa.',
    eam:
      'Hola BaseLogic, me interesa BaseLogic EAM para activos, mantenimiento e inventario.',
    plans:
      'Hola BaseLogic, quiero orientación sobre los planes disponibles.',
    caseStudies:
      'Hola BaseLogic, quiero una solución digital para mi rubro.',
  },
};

export const isWhatsappEnabled = Boolean(contact.whatsapp.enabled && contact.whatsapp.number);

export const createWhatsappHref = (message = contact.whatsappMessages.general) =>
  isWhatsappEnabled
    ? `https://api.whatsapp.com/send?phone=${contact.whatsapp.number}&text=${encodeURIComponent(message)}`
    : '';

export const createMailtoHref = (subject: string, body: string) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const createContactMailtoHref = (message = contact.whatsappMessages.general) =>
  createMailtoHref('Cotización de proyecto digital', message);
