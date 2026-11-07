import { describe, it, expect } from 'vitest';
import { schemaOrg, softwareServiceSchema } from '../schema';

describe('schemaOrg', () => {
  it('has the schema.org @context', () => {
    expect(schemaOrg['@context']).toBe('https://schema.org');
  });

  it('is a LocalBusiness', () => {
    expect(schemaOrg['@type']).toBe('LocalBusiness');
  });

  it('has the correct business name', () => {
    expect(schemaOrg.name).toBe('TecniCopa');
  });

  it('has the correct URL', () => {
    expect(schemaOrg.url).toBe('https://tecnicopa.com');
  });

  it('has the correct telephone', () => {
    expect(schemaOrg.telephone).toBe('+573243638746');
  });

  it('has the correct email', () => {
    expect(schemaOrg.email).toBe('contacto@tecnicopa.com');
  });

  it('has a PostalAddress in Copacabana, Antioquia, CO', () => {
    expect(schemaOrg.address['@type']).toBe('PostalAddress');
    expect(schemaOrg.address.addressLocality).toBe('Copacabana');
    expect(schemaOrg.address.addressRegion).toBe('Antioquia');
    expect(schemaOrg.address.addressCountry).toBe('CO');
  });

  it('lists 3 served cities', () => {
    expect(schemaOrg.areaServed).toHaveLength(3);
  });

  it('areaServed includes Copacabana, Girardota and Bello', () => {
    const names = schemaOrg.areaServed.map((c) => c.name);
    expect(names).toContain('Copacabana');
    expect(names).toContain('Girardota');
    expect(names).toContain('Bello');
  });

  it('has $ priceRange', () => {
    expect(schemaOrg.priceRange).toBe('$');
  });

  it('has the logo image URL', () => {
    expect(schemaOrg.image).toBe('https://tecnicopa.com/logo.png');
  });

  it('lists Instagram in sameAs', () => {
    expect(schemaOrg.sameAs).toContain('https://instagram.com/tecnicopa');
  });

  it('lists Facebook in sameAs', () => {
    expect(schemaOrg.sameAs).toContain(
      'https://www.facebook.com/people/TecniCopa/61574508140428/',
    );
  });

  it('has a Person founder', () => {
    expect(schemaOrg.founder['@type']).toBe('Person');
    expect(schemaOrg.founder.name).toBe('Santiago Molano');
  });
});

describe('softwareServiceSchema', () => {
  it('is a Service with ProfessionalService additionalType', () => {
    expect(softwareServiceSchema['@context']).toBe('https://schema.org');
    expect(softwareServiceSchema['@type']).toBe('Service');
    expect(softwareServiceSchema.additionalType).toBe(
      'https://schema.org/ProfessionalService',
    );
  });

  it('does not replace the LocalBusiness schema', () => {
    expect(schemaOrg['@type']).toBe('LocalBusiness');
    expect(softwareServiceSchema['@type']).not.toBe('LocalBusiness');
  });

  it('is provided by TecniCopa', () => {
    expect(softwareServiceSchema.provider['@type']).toBe('LocalBusiness');
    expect(softwareServiceSchema.provider.name).toBe('TecniCopa');
    expect(softwareServiceSchema.provider.url).toBe('https://tecnicopa.com');
  });

  it('serves Colombia', () => {
    expect(softwareServiceSchema.areaServed['@type']).toBe('Country');
    expect(softwareServiceSchema.areaServed.name).toBe('Colombia');
  });

  it('points to the software page', () => {
    expect(softwareServiceSchema.url).toBe('https://tecnicopa.com/software');
    expect(softwareServiceSchema.name.length).toBeGreaterThan(0);
    expect(softwareServiceSchema.description.length).toBeGreaterThan(0);
    expect(softwareServiceSchema.serviceType.length).toBeGreaterThan(0);
  });
});
