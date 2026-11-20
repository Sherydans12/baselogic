import {
  Blocks,
  Gauge,
  Globe2,
  Layers3,
  MousePointerClick,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

export const serviceVisuals = {
  'paginas-web': {
    icon: Globe2,
    image: '/images/servicios/paginas-web-hero.webp',
    imageAlt: 'Diseño de un sitio web adaptable en una pantalla y un teléfono',
    imageStyle: 'photo',
    visualTitle: 'Una presencia que conecta',
    visualText: 'Tu información, tus servicios y una forma clara de contactarte.',
  },
  'landing-pages': {
    icon: MousePointerClick,
    image: '/images/servicios/landing-pages-hero.webp',
    imageAlt: 'Ilustración de una página digital con un botón de acción',
    imageStyle: 'illustration',
    visualTitle: 'Una oferta, una acción',
    visualText: 'Una página enfocada en comunicar y recibir consultas.',
  },
  wordpress: {
    icon: Blocks,
    image: '/images/servicios/wordpress-hero.webp',
    imageAlt: 'Ilustración de una página web organizada en bloques de contenido',
    imageStyle: 'illustration',
    visualTitle: 'Contenido en tus manos',
    visualText: 'Una base administrable para actualizar lo que tu empresa comunica.',
  },
  'webs-estaticas': {
    icon: Gauge,
    image: '/images/servicios/webs-rapidas-hero.webp',
    imageAlt: 'Ilustración de una página web clara y adaptable',
    imageStyle: 'illustration',
    visualTitle: 'Una base simple y liviana',
    visualText: 'La información esencial de tu negocio, presentada con claridad.',
  },
  'sistemas-para-pymes': {
    icon: Layers3,
    image: '/images/servicios/sistemas-pymes-hero.webp',
    imageAlt: 'Ilustración de software conectado con herramientas y datos',
    imageStyle: 'illustration',
    visualTitle: 'Tu operación, más conectada',
    visualText: 'Procesos y datos organizados alrededor de tu forma de trabajar.',
  },
  automatizacion: {
    icon: Workflow,
    image: '/images/servicios/automatizacion-hero.webp',
    imageAlt: 'Ilustración de un flujo automatizado con tareas conectadas',
    imageStyle: 'illustration',
    visualTitle: 'Del proceso al flujo',
    visualText: 'Conecta herramientas y reduce pasos manuales en tu operación.',
  },
  'soporte-digital': {
    icon: ShieldCheck,
    image: '/images/servicios/soporte-digital-hero.webp',
    imageAlt: 'Ilustración de herramientas digitales y sistemas conectados',
    imageStyle: 'illustration',
    visualTitle: 'Continuidad para crecer',
    visualText: 'Mantención y evolución de tu plataforma según tus prioridades.',
  },
} as const;

export type ServiceVisualId = keyof typeof serviceVisuals;
