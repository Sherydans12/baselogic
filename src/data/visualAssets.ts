export type AssetStatus = 'approved' | 'pending';

export interface VisualAsset {
  src: string;
  alt: string;
  status: AssetStatus;
  objectPosition?: string;
}

export const visualAssets = {
  home: {
    hero: {
      src: '/images/generated/home/home-hero.webp',
      alt: 'Espacio de trabajo moderno con una interfaz digital limpia para gestionar una pyme',
      status: 'approved',
    } as VisualAsset,
  },
  products: {
    bookingHero: {
      src: '/images/generated/products/booking-hero.webp',
      alt: 'Recepción moderna con una tablet mostrando una agenda digital de reservas',
      status: 'approved',
    } as VisualAsset,
    eamHero: {
      src: '/images/generated/products/eam-hero.webp',
      alt: 'Técnico inspeccionando un camión minero de alto tonelaje con registro digital de mantenimiento',
      status: 'approved',
      objectPosition: '80% 50%',
    } as VisualAsset,
  },
};
