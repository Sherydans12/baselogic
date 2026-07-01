export const caseStudies = [
  {
    title: 'Barberia o centro estetico',
    label: 'Caso de uso',
    problem: 'Agenda desordenada por mensajes sueltos, horarios duplicados y muchas preguntas repetidas.',
    solution: 'Web clara con BaseLogic Booking para servicios, disponibilidad, solicitudes de reserva y contacto directo.',
    expectedResult: 'Reservas mas ordenadas, menos mensajes repetitivos y mejor experiencia para clientes.',
    relatedHref: '/productos/booking',
    relatedLabel: 'Ver Booking',
  },
  {
    title: 'Restaurante o cafeteria',
    label: 'Ejemplo de solucion',
    problem: 'Carta dispersa, consultas repetidas, dependencia de redes sociales y poca informacion centralizada.',
    solution: 'Pagina web con menu o catalogo, horarios, ubicacion, secciones comerciales y CTA de contacto.',
    expectedResult: 'Presencia mas profesional, contacto mas claro y menos friccion para clientes nuevos.',
    relatedHref: '/servicios/paginas-web',
    relatedLabel: 'Ver paginas web',
  },
  {
    title: 'Consulta medica o profesional',
    label: 'Escenario tipico',
    problem: 'Falta de presencia profesional, reservas manuales y dificultad para explicar servicios.',
    solution: 'Web profesional con agenda, formulario, informacion de servicios y contacto visible.',
    expectedResult: 'Mayor confianza, mejor organizacion y una ruta mas simple para pedir hora o consultar.',
    relatedHref: '/servicios/landing-pages',
    relatedLabel: 'Ver landing pages',
  },
  {
    title: 'Colegio o jardin',
    label: 'Caso de uso',
    problem: 'Pagos, mensualidades y comunicaciones financieras gestionadas de forma manual.',
    solution: 'Evaluacion de EduPay o portal de pagos para seguimiento, recordatorios, reportes y panel administrativo.',
    expectedResult: 'Mejor seguimiento financiero y menos carga administrativa para el equipo.',
    relatedHref: '/productos/edupay',
    relatedLabel: 'Ver EduPay',
  },
  {
    title: 'Empresa con activos o inventario',
    label: 'Ejemplo de solucion',
    problem: 'Control de mantenimiento, inventario y ordenes de trabajo repartido en planillas.',
    solution: 'BaseLogic EAM para centralizar activos, mantenimiento, inventario, trazabilidad y reportes.',
    expectedResult: 'Mayor control operacional, trazabilidad y reportes mas claros para tomar decisiones.',
    relatedHref: '/productos/eam',
    relatedLabel: 'Ver EAM',
  },
];

export type CaseStudy = (typeof caseStudies)[number];
