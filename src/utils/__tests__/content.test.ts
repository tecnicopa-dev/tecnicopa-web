import { describe, it, expect } from 'vitest';
import {
  NAV_LINKS,
  founder,
  home,
  supportPage,
  supportPlans,
  softwarePage,
  softwarePlans,
  homeSupportPlans,
  homeSoftwarePlans,
  softwarePriceNote,
} from '../content';

describe('NAV_LINKS', () => {
  it('has the three header destinations', () => {
    expect(NAV_LINKS).toHaveLength(3);
    const hrefs = NAV_LINKS.map((l) => l.href);
    expect(hrefs).toContain('/soporte-tecnico');
    expect(hrefs).toContain('/software');
    expect(hrefs).toContain('/#precios');
  });
});

describe('home SEO', () => {
  it('keeps title and description within limits and covers both lines', () => {
    expect(home.seo.title.length).toBeGreaterThan(0);
    expect(home.seo.title.length).toBeLessThanOrEqual(60);
    expect(home.seo.description.length).toBeGreaterThan(0);
    expect(home.seo.description.length).toBeLessThanOrEqual(155);
    const blob = `${home.seo.title} ${home.seo.description}`.toLowerCase();
    expect(blob).toMatch(/soporte/);
    expect(blob).toMatch(/software/);
  });

  it('presents two equal business lines', () => {
    expect(home.lines).toHaveLength(2);
    expect(home.lines[0].href).toBe('/soporte-tecnico');
    expect(home.lines[1].href).toBe('/software');
  });

  it('has three trust points and three process steps', () => {
    expect(home.trust).toHaveLength(3);
    expect(home.process).toHaveLength(3);
    expect(home.process.map((s) => s.step)).toEqual([1, 2, 3]);
  });

  it('FAQ covers both lines without invented testimonials', () => {
    expect(home.faq.length).toBeGreaterThanOrEqual(4);
    expect(home.faq.length).toBeLessThanOrEqual(6);
    const blob = home.faq.map((f) => `${f.question} ${f.answer}`).join(' ');
    expect(blob).not.toMatch(/Maribel|Victor|testimonio/i);
  });
});

describe('founder', () => {
  it('presents Santiago Molano honestly', () => {
    expect(founder.name).toBe('Santiago Molano');
    expect(founder.role).toBe('Fundador');
    expect(founder.bio).toMatch(/4 años/);
    expect(founder.honestLine).toMatch(/técnico aliado/);
  });
});

describe('supportPage', () => {
  it('keeps the local Copacabana SEO', () => {
    expect(supportPage.seo.title).toContain('Copacabana');
    expect(supportPage.seo.title.length).toBeLessThanOrEqual(70);
    expect(supportPage.seo.description.length).toBeLessThanOrEqual(160);
  });

  it('keeps the three support prices unchanged', () => {
    expect(supportPlans).toHaveLength(3);
    expect(supportPlans[0].price).toBe('Desde $80.000');
    expect(supportPlans[1].price).toBe('Desde $100.000');
    expect(supportPlans[2].price).toBe('Desde $100.000');
    expect(supportPlans.filter((p) => p.highlighted)).toHaveLength(1);
  });
});

describe('softwarePage', () => {
  it('has SEO within limits about custom software in Colombia', () => {
    expect(softwarePage.seo.title.length).toBeLessThanOrEqual(60);
    expect(softwarePage.seo.description.length).toBeLessThanOrEqual(155);
    const blob = `${softwarePage.seo.title} ${softwarePage.seo.description}`.toLowerCase();
    expect(blob).toMatch(/software/);
    expect(blob).toMatch(/automatizaci/);
    expect(blob).toMatch(/colombia/);
  });

  it('lists six software services', () => {
    expect(softwarePage.services).toHaveLength(6);
  });

  it('has four process steps', () => {
    expect(softwarePage.process).toHaveLength(4);
    expect(softwarePage.process.map((s) => s.step)).toEqual([1, 2, 3, 4]);
  });

  it('has six software plans with reference prices', () => {
    expect(softwarePlans).toHaveLength(6);
    expect(softwarePlans[0].price).toBe('Gratis (30 min)');
    expect(softwarePlans[1].price).toBe('Desde $90.000 / hora');
    expect(softwarePlans[2].price).toBe('Desde $1.200.000');
    expect(softwarePlans[3].price).toBe('Desde $1.800.000');
    expect(softwarePlans[4].price).toBe('Desde $6.000.000 · según alcance');
    expect(softwarePlans[5].price).toBe('Desde $250.000 / mes');
    expect(softwarePlans.find((p) => p.name === 'Consultoría técnica')?.whatsappMessage).toBe(
      'Hola, quiero agendar una consultoría técnica',
    );
    expect(softwarePlans.find((p) => p.highlighted)?.name).toBe(
      'Automatización de procesos',
    );
    expect(softwarePriceNote).toMatch(/referencia/);
  });
});

describe('home plan subsets', () => {
  it('shows three main plans per line on the home', () => {
    expect(homeSupportPlans).toHaveLength(3);
    expect(homeSoftwarePlans).toHaveLength(3);
  });
});
