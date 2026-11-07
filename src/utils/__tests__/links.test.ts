import { describe, it, expect } from 'vitest';
import {
  buildWhatsAppUrl,
  buildPlanWhatsAppUrl,
  WHATSAPP_URL,
  WHATSAPP_SUPPORT_URL,
  WHATSAPP_SOFTWARE_URL,
  WHATSAPP_CONSULTING_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  EMAIL,
  PHONE,
  PORTAFOLIO_URL,
  GITHUB_URL,
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

describe('buildPlanWhatsAppUrl', () => {
  it('fills a plan interest message', () => {
    expect(buildPlanWhatsAppUrl('Mantenimiento')).toBe(
      'https://wa.me/573243638746?text=Hola%2C%20me%20interesa%20el%20plan%20Mantenimiento',
    );
  });
});

describe('WHATSAPP_URL', () => {
  it('is a generic TecniCopa message for the home', () => {
    expect(WHATSAPP_URL).toBe(
      'https://wa.me/573243638746?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20TecniCopa',
    );
  });
});

describe('WHATSAPP_SUPPORT_URL', () => {
  it('asks to schedule technical support', () => {
    expect(WHATSAPP_SUPPORT_URL).toContain('soporte%20t%C3%A9cnico');
    expect(WHATSAPP_SUPPORT_URL).toContain('573243638746');
  });
});

describe('WHATSAPP_SOFTWARE_URL', () => {
  it('asks to quote a software project', () => {
    expect(WHATSAPP_SOFTWARE_URL).toBe(
      'https://wa.me/573243638746?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20de%20software',
    );
  });
});

describe('WHATSAPP_CONSULTING_URL', () => {
  it('asks to schedule technical consulting', () => {
    expect(WHATSAPP_CONSULTING_URL).toContain('consultor%C3%ADa%20t%C3%A9cnica');
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

describe('PORTAFOLIO_URL and GITHUB_URL', () => {
  it('point to Santiago public profiles over https', () => {
    expect(PORTAFOLIO_URL).toBe('https://molxno.dev/es');
    expect(GITHUB_URL).toBe('https://github.com/molxno');
  });
});
