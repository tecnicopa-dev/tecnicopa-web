import { GITHUB_URL, PORTAFOLIO_URL } from './links';

export const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TecniCopa',
  description: 'Soporte técnico de computadores a domicilio en Copacabana, Antioquia',
  url: 'https://tecnicopa.com',
  telephone: '+573243638746',
  email: 'contacto@tecnicopa.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Copacabana',
    addressRegion: 'Antioquia',
    addressCountry: 'CO',
  },
  areaServed: [
    { '@type': 'City', name: 'Copacabana' },
    { '@type': 'City', name: 'Girardota' },
    { '@type': 'City', name: 'Bello' },
  ],
  priceRange: '$',
  serviceType: 'Computer Repair',
  image: 'https://tecnicopa.com/logo.png',
  sameAs: [
    'https://instagram.com/tecnicopa',
    'https://www.facebook.com/people/TecniCopa/61574508140428/',
    PORTAFOLIO_URL,
    GITHUB_URL,
  ],
  founder: {
    '@type': 'Person',
    name: 'Santiago Molano',
    sameAs: [PORTAFOLIO_URL, GITHUB_URL],
  },
};

export const softwareServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  additionalType: 'https://schema.org/ProfessionalService',
  name: 'Desarrollo de software a la medida y automatización de procesos',
  description:
    'Software a la medida y automatización de procesos para empresas en toda Colombia.',
  url: 'https://tecnicopa.com/software',
  serviceType: 'Desarrollo de software a la medida y automatización de procesos',
  provider: {
    '@type': 'LocalBusiness',
    name: 'TecniCopa',
    url: 'https://tecnicopa.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Colombia',
  },
};
