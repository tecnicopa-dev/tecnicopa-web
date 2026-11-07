import { describe, it, expect } from 'vitest';
import {
  buildWhatsAppUrl,
  WHATSAPP_URL,
  WHATSAPP_SOFTWARE_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  EMAIL,
  PHONE,
} from '../links';

describe('buildWhatsAppUrl', () => {
  it('points to wa.me with the business phone and encoded message', () => {
    const url = buildWhatsAppUrl('Hola, prueba');
    expect(url).toMatch(/^https:\/\/wa\.me\/573243638746\?text=/);
    expect(url).toContain(encodeURIComponent('Hola, prueba'));
  });

  it('encodes spaces and punctuation', () => {
    expect(buildWhatsAppUrl('Hola, mundo')).toBe(
      'https://wa.me/573243638746?text=Hola%2C%20mundo',
    );
  });
});

describe('WHATSAPP_URL', () => {
  it('points to wa.me', () => {
    expect(WHATSAPP_URL).toMatch(/^https:\/\/wa\.me\//);
  });

  it('contains the correct phone number', () => {
    expect(WHATSAPP_URL).toContain('573243638746');
  });

  it('includes a pre-filled scheduling message', () => {
    expect(WHATSAPP_URL).toContain('text=');
    expect(WHATSAPP_URL).toBe(
      'https://wa.me/573243638746?text=Hola%2C%20quiero%20agendar%20un%20servicio',
    );
  });
});

describe('WHATSAPP_SOFTWARE_URL', () => {
  it('uses the same phone number as the support WhatsApp link', () => {
    expect(WHATSAPP_SOFTWARE_URL).toContain('573243638746');
  });

  it('includes a pre-filled software quote message', () => {
    expect(WHATSAPP_SOFTWARE_URL).toBe(
      'https://wa.me/573243638746?text=Hola%2C%20quiero%20cotizar%20un%20desarrollo%20de%20software',
    );
  });

  it('does not replace the existing support WhatsApp URL', () => {
    expect(WHATSAPP_SOFTWARE_URL).not.toBe(WHATSAPP_URL);
  });
});

describe('INSTAGRAM_URL', () => {
  it('points to the tecnicopa Instagram profile', () => {
    expect(INSTAGRAM_URL).toBe('https://instagram.com/tecnicopa');
  });
});

describe('FACEBOOK_URL', () => {
  it('points to the TecniCopa Facebook profile', () => {
    expect(FACEBOOK_URL).toBe(
      'https://www.facebook.com/people/TecniCopa/61574508140428/',
    );
  });

  it('is an https URL', () => {
    expect(FACEBOOK_URL).toMatch(/^https:\/\//);
  });
});

describe('EMAIL', () => {
  it('is the correct contact address', () => {
    expect(EMAIL).toBe('contacto@tecnicopa.com');
  });
});

describe('PHONE', () => {
  it('is in E.164 format', () => {
    expect(PHONE).toMatch(/^\+\d+$/);
  });

  it('is the correct phone number', () => {
    expect(PHONE).toBe('+573243638746');
  });
});
