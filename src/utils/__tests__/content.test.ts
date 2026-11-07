import { describe, it, expect } from 'vitest';
import { NAV_LINKS, services, plans, reasons, about, softwarePage } from '../content';

describe('NAV_LINKS', () => {
  it('has 6 navigation links', () => {
    expect(NAV_LINKS).toHaveLength(6);
  });

  it('every link has a non-empty href and label', () => {
    for (const link of NAV_LINKS) {
      expect(link.href.length).toBeGreaterThan(0);
      expect(link.label.length).toBeGreaterThan(0);
    }
  });

  it('home section anchors work from any page', () => {
    const hrefs = NAV_LINKS.map((l) => l.href);
    expect(hrefs).toContain('/#servicios');
    expect(hrefs).toContain('/#por-que');
    expect(hrefs).toContain('/#precios');
    expect(hrefs).toContain('/#nosotros');
    expect(hrefs).toContain('/#contacto');
  });

  it('includes the software page', () => {
    expect(NAV_LINKS.map((l) => l.href)).toContain('/software');
    expect(NAV_LINKS.map((l) => l.label)).toContain('Software');
  });
});

describe('services', () => {
  it('has 4 services', () => {
    expect(services).toHaveLength(4);
  });

  it('every service has a non-empty title, description and icon', () => {
    for (const service of services) {
      expect(service.title.length).toBeGreaterThan(0);
      expect(service.description.length).toBeGreaterThan(0);
      expect(service.icon.length).toBeGreaterThan(0);
    }
  });
});

describe('plans', () => {
  it('has 3 pricing plans', () => {
    expect(plans).toHaveLength(3);
  });

  it('exactly one plan is highlighted', () => {
    const highlighted = plans.filter((p) => p.highlighted);
    expect(highlighted).toHaveLength(1);
  });

  it('every plan has required fields and at least one feature', () => {
    for (const plan of plans) {
      expect(plan.name.length).toBeGreaterThan(0);
      expect(plan.price.length).toBeGreaterThan(0);
      expect(plan.description.length).toBeGreaterThan(0);
      expect(plan.cta.length).toBeGreaterThan(0);
      expect(typeof plan.highlighted).toBe('boolean');
      expect(plan.features.length).toBeGreaterThan(0);
    }
  });

  it('first plan is the Diagnóstico a domicilio', () => {
    expect(plans[0].name).toBe('Diagnóstico a domicilio');
    expect(plans[0].price).toBe('Desde $80.000');
    expect(plans[0].highlighted).toBe(false);
  });

  it('highlighted plan is Mantenimiento', () => {
    const highlighted = plans.find((p) => p.highlighted);
    expect(highlighted?.name).toBe('Mantenimiento');
  });
});

describe('reasons', () => {
  it('has 4 reasons', () => {
    expect(reasons).toHaveLength(4);
  });

  it('every reason has a non-empty title and description', () => {
    for (const reason of reasons) {
      expect(reason.title.length).toBeGreaterThan(0);
      expect(reason.description.length).toBeGreaterThan(0);
    }
  });
});

describe('about', () => {
  it('presents Santiago Molano as founder', () => {
    expect(about.founder.name).toBe('Santiago Molano');
    expect(about.founder.role).toBe('Fundador');
    expect(about.founder.description.length).toBeGreaterThan(0);
  });

  it('does not claim an internal team of several people', () => {
    const blob = [
      about.title,
      ...about.paragraphs,
      ...about.highlights.map((h) => `${h.title} ${h.subtitle}`),
      about.founderTitle,
      about.founder.name,
      about.founder.role,
      about.founder.description,
    ].join(' ');

    expect(blob).not.toMatch(/equipo de 3/i);
    expect(blob).not.toMatch(/Maribel/i);
    expect(blob).not.toMatch(/Victor/i);
    expect(about.founderTitle).not.toMatch(/equipo/i);
  });

  it('explains the allied technician model', () => {
    const blob = about.paragraphs.join(' ');
    expect(blob).toMatch(/técnico aliado/i);
    expect(blob).toMatch(/garantía escrita/i);
    expect(blob).toMatch(/7 días/);
  });

  it('has location and partner highlights', () => {
    expect(about.highlights).toHaveLength(2);
    const icons = about.highlights.map((h) => h.icon);
    expect(icons).toContain('location');
    expect(icons).toContain('partner');
    for (const highlight of about.highlights) {
      expect(highlight.title.length).toBeGreaterThan(0);
      expect(highlight.subtitle.length).toBeGreaterThan(0);
    }
  });

  it('has a badge, title and at least two paragraphs', () => {
    expect(about.badge.length).toBeGreaterThan(0);
    expect(about.title.length).toBeGreaterThan(0);
    expect(about.paragraphs.length).toBeGreaterThanOrEqual(2);
  });
});

describe('softwarePage', () => {
  it('has SEO title and description within limits', () => {
    expect(softwarePage.seo.title.length).toBeGreaterThan(0);
    expect(softwarePage.seo.title.length).toBeLessThanOrEqual(60);
    expect(softwarePage.seo.description.length).toBeGreaterThan(0);
    expect(softwarePage.seo.description.length).toBeLessThanOrEqual(155);
  });

  it('SEO copy covers custom software and process automation in Colombia', () => {
    const blob = `${softwarePage.seo.title} ${softwarePage.seo.description}`.toLowerCase();
    expect(blob).toMatch(/software/);
    expect(blob).toMatch(/automatizaci/);
    expect(blob).toMatch(/colombia/);
  });

  it('hero has title, subtitle and CTAs', () => {
    expect(softwarePage.hero.title.length).toBeGreaterThan(0);
    expect(softwarePage.hero.subtitle.length).toBeGreaterThan(0);
    expect(softwarePage.hero.primaryCta.length).toBeGreaterThan(0);
    expect(softwarePage.hero.secondaryCta.length).toBeGreaterThan(0);
    expect(softwarePage.hero.secondaryHref).toBe('#como-trabajamos');
  });

  it('has 4 software services with titles and descriptions', () => {
    expect(softwarePage.services).toHaveLength(4);
    for (const service of softwarePage.services) {
      expect(service.title.length).toBeGreaterThan(0);
      expect(service.description.length).toBeGreaterThan(0);
    }
  });

  it('has 4 process steps numbered 1 to 4', () => {
    expect(softwarePage.process).toHaveLength(4);
    expect(softwarePage.process.map((s) => s.step)).toEqual([1, 2, 3, 4]);
    for (const step of softwarePage.process) {
      expect(step.title.length).toBeGreaterThan(0);
      expect(step.description.length).toBeGreaterThan(0);
    }
  });

  it('software reasons do not repeat technical support benefits', () => {
    const blob = softwarePage.reasons.map((r) => `${r.title} ${r.description}`).join(' ');
    expect(blob).not.toMatch(/garantía escrita/i);
    expect(blob).not.toMatch(/comprobante de pago/i);
    expect(blob).not.toMatch(/7 días/);
    expect(softwarePage.reasons).toHaveLength(4);
  });

  it('has a final CTA and a home banner', () => {
    expect(softwarePage.cta.title.length).toBeGreaterThan(0);
    expect(softwarePage.cta.description.length).toBeGreaterThan(0);
    expect(softwarePage.cta.button.length).toBeGreaterThan(0);
    expect(softwarePage.homeBanner.text.length).toBeGreaterThan(0);
    expect(softwarePage.homeBanner.button.length).toBeGreaterThan(0);
  });
});
