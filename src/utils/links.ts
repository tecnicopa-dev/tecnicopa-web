const WHATSAPP_PHONE = '573243638746';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function buildPlanWhatsAppUrl(planName: string): string {
  return buildWhatsAppUrl(`Hola, me interesa el plan ${planName}`);
}

export const WHATSAPP_URL = buildWhatsAppUrl('Hola, quiero más información sobre TecniCopa');
export const WHATSAPP_SUPPORT_URL = buildWhatsAppUrl(
  'Hola, quiero agendar un servicio de soporte técnico',
);
export const WHATSAPP_SOFTWARE_URL = buildWhatsAppUrl(
  'Hola, quiero cotizar un proyecto de software',
);
export const WHATSAPP_CONSULTING_URL = buildWhatsAppUrl(
  'Hola, quiero agendar una consultoría técnica',
);

export const INSTAGRAM_URL = 'https://instagram.com/tecnicopa';
export const FACEBOOK_URL = 'https://www.facebook.com/people/TecniCopa/61574508140428/';
export const EMAIL = 'contacto@tecnicopa.com';
export const PHONE = '+573243638746';
export const PORTAFOLIO_URL = 'https://molxno.dev/es';
export const GITHUB_URL = 'https://github.com/molxno';
