export const tracking = {
  enabled: false,
  gaMeasurementId: '',
  metaPixelId: '',
  events: [
    'click_cotizar_proyecto',
    'submit_mailto',
    'click_email',
    'click_producto_booking',
    'click_producto_eam',
    'click_planes',
    'click_casos_de_uso',
  ],
};

export type Tracking = typeof tracking;
