const WHATSAPP_PHONE = '573243638746';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl('Hola, quiero agendar un servicio');
export const WHATSAPP_SOFTWARE_URL = buildWhatsAppUrl(
  'Hola, quiero cotizar un desarrollo de software',
);
export const INSTAGRAM_URL = 'https://instagram.com/tecnicopa';
export const FACEBOOK_URL = 'https://www.facebook.com/people/TecniCopa/61574508140428/';
export const EMAIL = 'contacto@tecnicopa.com';
export const PHONE = '+573243638746';
