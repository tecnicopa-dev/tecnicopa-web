export interface NavLink {
  href: string;
  label: string;
}

export interface SeoContent {
  title: string;
  description: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  showOnHome: boolean;
  whatsappMessage?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LineCard {
  title: string;
  subtitle: string;
  href: string;
  cta: string;
}

export interface TrustPoint {
  title: string;
  description: string;
}

export interface FounderContent {
  name: string;
  role: string;
  bio: string;
  honestLine: string;
  photoAlt: string;
  portfolioLabel: string;
  githubLabel: string;
}

export interface PageHero {
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/soporte-tecnico', label: 'Soporte técnico' },
  { href: '/software', label: 'Software' },
  { href: '/#precios', label: 'Precios' },
];

export const headerCtaLabel = 'Escríbenos';

export const founder: FounderContent = {
  name: 'Santiago Molano',
  role: 'Fundador',
  bio: 'Más de 4 años desarrollando software en banca, fintech y salud digital.',
  honestLine:
    'El soporte técnico lo realiza un técnico aliado; TecniCopa coordina, garantiza y hace el seguimiento.',
  photoAlt: 'Santiago Molano, fundador de TecniCopa',
  portfolioLabel: 'Portafolio',
  githubLabel: 'GitHub',
};

export const softwarePriceNote =
  'Valores de referencia; el valor final depende del alcance.';

export const home = {
  seo: {
    title: 'TecniCopa | Soporte técnico y software',
    description:
      'Soporte técnico a domicilio en Copacabana y software a la medida para empresas en Colombia. Garantía escrita y trato directo.',
  } satisfies SeoContent,
  hero: {
    title: 'Tecnología que funciona para ti y tu empresa',
    subtitle: 'Soporte a domicilio y software a la medida, con cara y nombre.',
  },
  lines: [
    {
      title: 'Soporte técnico',
      subtitle: 'Tu computador como nuevo, a domicilio',
      href: '/soporte-tecnico',
      cta: 'Ver soporte técnico',
    },
    {
      title: 'Software y automatización',
      subtitle: 'Deja de perder horas en tareas manuales',
      href: '/software',
      cta: 'Ver software',
    },
  ] satisfies LineCard[],
  trust: [
    { title: 'Garantía escrita', description: 'Si el problema vuelve, lo resolvemos.' },
    { title: 'Trato directo', description: 'Hablas con quien coordina o desarrolla.' },
    { title: 'Seguimiento', description: 'Te contactamos después de cada entrega.' },
  ] satisfies TrustPoint[],
  processTitle: 'Cómo trabajamos',
  process: [
    {
      step: 1,
      title: 'Nos cuentas',
      description: 'El computador, el proceso o el proyecto. Sin tecnicismos.',
    },
    {
      step: 2,
      title: 'Te proponemos',
      description: 'Alcance claro, tiempos y valor. Sin letra pequeña.',
    },
    {
      step: 3,
      title: 'Lo resolvemos y hacemos seguimiento',
      description: 'Entregamos, te acompañamos y confirmamos que quedó bien.',
    },
  ] satisfies ProcessStep[],
  pricingTitle: 'Precios',
  pricingSubtitle: 'Referencia clara. El detalle está en cada línea.',
  supportTab: 'Soporte',
  softwareTab: 'Software',
  viewAllSupport: 'Ver todos los precios de soporte',
  viewAllSoftware: 'Ver todos los precios de software',
  founderTitle: 'Quién está detrás',
  faqTitle: 'Preguntas frecuentes',
  faq: [
    {
      question: '¿Van a domicilio?',
      answer:
        'Sí. Atendemos Copacabana, Girardota y Bello norte. También resolvemos por remoto cuando aplica.',
    },
    {
      question: '¿El soporte lo hace el fundador?',
      answer:
        'Lo realiza un técnico aliado de confianza. TecniCopa coordina, responde por la garantía escrita y hace el seguimiento a los 7 días.',
    },
    {
      question: '¿Trabajan software para empresas fuera de Antioquia?',
      answer:
        'Sí. El desarrollo y la automatización son remotos, para empresas en toda Colombia.',
    },
    {
      question: '¿El diagnóstico de software tiene costo?',
      answer:
        'No. Revisamos tu proceso 30 minutos sin costo y te decimos si vale la pena automatizarlo.',
    },
    {
      question: '¿Hay garantía en el soporte técnico?',
      answer:
        'Sí. Garantía escrita en cada servicio. Si el problema vuelve en el plazo acordado, lo resolvemos sin costo extra.',
    },
    {
      question: '¿Cómo se cotiza un desarrollo?',
      answer:
        'Después del diagnóstico te enviamos alcance, tiempos y valor. El precio final depende de lo que haya que construir.',
    },
  ] satisfies FaqItem[],
  ctaTitle: 'Cuéntanos qué necesitas',
  ctaSubtitle: 'Escríbenos por WhatsApp. Te respondemos y te decimos el siguiente paso.',
  ctaSupport: 'Agendar soporte técnico',
  ctaSoftware: 'Cotizar un proyecto de software',
};

export const supportPage = {
  seo: {
    title: 'TecniCopa | Soporte Técnico a Domicilio en Copacabana, Antioquia',
    description:
      'Soporte técnico de computadores a domicilio en Copacabana. Garantía escrita y comprobante de pago. Mantenimiento, formateo, antivirus, soporte remoto y más.',
  } satisfies SeoContent,
  hero: {
    badge: 'A domicilio en Copacabana',
    title: '¿Tu PC anda lento? Lo arreglamos.',
    subtitle: 'Soporte técnico con garantía escrita. Escríbenos y te ayudamos hoy.',
    primaryCta: 'Agendar servicio',
    secondaryCta: 'Ver precios',
    secondaryHref: '#precios',
  } satisfies PageHero,
  servicesTitle: 'Qué resolvemos',
  servicesSubtitle: 'Los problemas más comunes, sin tecnicismos ni sorpresas.',
  services: [
    {
      title: 'Mantenimiento preventivo y correctivo',
      description:
        'Limpieza interna, pasta térmica y revisión de hardware. Tu equipo corre más rápido y dura más.',
    },
    {
      title: 'Formateo e instalación de sistema',
      description:
        'Windows, Linux o macOS desde cero, con drivers, actualizaciones y programas esenciales.',
    },
    {
      title: 'Eliminación de virus y malware',
      description: 'Si está lento, muestra ventanas raras o se apaga solo, lo dejamos seguro.',
    },
    {
      title: 'Soporte remoto',
      description: 'Problemas de software sin desplazarte. Rápido y sin llevar el equipo.',
    },
  ] satisfies ServiceItem[],
  extraTitle: 'También ofrecemos',
  extras: [
    'Ensamble de PCs a la medida',
    'Actualización de RAM y SSD',
    'Instalación de software',
    'Configuración de redes WiFi',
    'Asesoría en compra de equipos',
    'Cotización y compra de componentes',
  ],
  reasonsTitle: 'Por qué TecniCopa',
  reasons: [
    {
      title: 'Garantía escrita en cada servicio',
      description: 'Si el problema vuelve en el plazo acordado, lo resolvemos sin costo extra.',
    },
    {
      title: 'Comprobante de pago',
      description: 'Sabes qué pagaste y cuánto. Transparencia total.',
    },
    {
      title: 'Seguimiento a los 7 días',
      description: 'Te contactamos para confirmar que todo sigue bien.',
    },
    {
      title: 'Somos de acá',
      description: 'Copacabana, Girardota y Bello norte. Sin cobros extra desde Medellín.',
    },
  ] satisfies TrustPoint[],
  pricingTitle: 'Precios de soporte',
  pricingSubtitle: 'Lo que cotizamos es lo que pagas. Sin cobros ocultos.',
  coverageTitle: 'Cobertura',
  coverage: 'Copacabana, Girardota y Bello norte. Remoto donde aplique.',
  ctaTitle: '¿Listo para agendar?',
  ctaSubtitle: 'Escríbenos por WhatsApp y te cotizamos sin compromiso.',
  ctaLabel: 'Agendar soporte técnico',
};

export const supportPlans: Plan[] = [
  {
    name: 'Diagnóstico a domicilio',
    price: 'Desde $80.000',
    description: 'Identificamos el problema y te decimos qué tiene y cuánto cuesta arreglarlo.',
    features: [
      'Revisión de hardware y software',
      'Informe claro, sin tecnicismos',
      'Sin compromiso de reparación',
      'A domicilio en Copacabana',
    ],
    cta: 'Solicitar diagnóstico',
    highlighted: false,
    showOnHome: true,
  },
  {
    name: 'Mantenimiento',
    price: 'Desde $100.000',
    description: 'Limpieza, pasta térmica nueva y optimización del sistema.',
    features: [
      'Limpieza interna profunda',
      'Cambio de pasta térmica',
      'Optimización del sistema',
      'Garantía escrita',
      'Comprobante de pago',
      'Seguimiento a los 7 días',
    ],
    cta: 'Agendar mantenimiento',
    highlighted: true,
    showOnHome: true,
  },
  {
    name: 'Formateo completo',
    price: 'Desde $100.000',
    description: 'Instalación limpia del sistema, drivers y programas esenciales.',
    features: [
      'Windows, Linux o macOS',
      'Drivers e instalación completa',
      'Programas esenciales',
      'Garantía escrita',
      'Comprobante de pago',
    ],
    cta: 'Agendar formateo',
    highlighted: false,
    showOnHome: true,
  },
];

export const softwarePage = {
  seo: {
    title: 'Software a medida y automatización | TecniCopa',
    description:
      'Desarrollamos software a la medida y automatizamos procesos para empresas en toda Colombia. Diagnóstico sin costo y trato directo con quien desarrolla.',
  } satisfies SeoContent,
  hero: {
    badge: 'Para empresas en Colombia',
    title: '¿Tu equipo pierde horas en tareas manuales?',
    subtitle: 'Las automatizamos. Software a la medida, remoto, con trato directo.',
    primaryCta: 'Cotizar un proyecto',
    secondaryCta: 'Cómo trabajamos',
    secondaryHref: '#como-trabajamos',
  } satisfies PageHero,
  servicesTitle: 'Qué podemos construir',
  servicesSubtitle: 'Si hoy se hace a mano, se puede ordenar y dejar corriendo solo.',
  services: [
    {
      title: 'Software a la medida',
      description: 'Aplicaciones web y móviles hechas para tu operación, no plantillas genéricas.',
    },
    {
      title: 'Automatización de procesos',
      description: 'Reportes, documentos y flujos entre áreas. Menos copiar y pegar.',
    },
    {
      title: 'Integraciones e inteligencia artificial',
      description: 'Conectamos sistemas y ayudamos a leer documentos para no hacerlo a mano.',
    },
    {
      title: 'Sitios web para empresas',
      description: 'Una web clara, rápida y lista para que te escriban.',
    },
    {
      title: 'Consultoría técnica',
      description: 'Arquitectura, tecnología o revisión de un proyecto. Por hora.',
    },
    {
      title: 'Soporte mensual de software',
      description: 'Mantenimiento, ajustes y monitoreo de lo que ya construimos.',
    },
  ] satisfies ServiceItem[],
  processTitle: 'Cómo trabajamos',
  processSubtitle: 'Cuatro pasos. Avances que puedes ver.',
  process: [
    {
      step: 1,
      title: 'Diagnóstico sin costo',
      description: 'Revisamos tu proceso 30 minutos. Sin compromiso.',
    },
    {
      step: 2,
      title: 'Propuesta con alcance, tiempo y valor',
      description: 'Qué se hace, cuánto tarda y cuánto cuesta. Según el alcance.',
    },
    {
      step: 3,
      title: 'Desarrollo por etapas con demos',
      description: 'Ves avances reales, comentas y seguimos.',
    },
    {
      step: 4,
      title: 'Entrega, capacitación y soporte',
      description: 'Queda funcionando, te enseñamos a usarlo y quedamos pendientes.',
    },
  ] satisfies ProcessStep[],
  pricingTitle: 'Precios de software',
  founderTitle: 'Quién desarrolla',
  faqTitle: 'Preguntas de software',
  faq: [
    {
      question: '¿El diagnóstico tiene costo?',
      answer: 'No. 30 minutos para entender el proceso y decirte si se puede automatizar.',
    },
    {
      question: '¿Trabajan remoto en toda Colombia?',
      answer: 'Sí. El desarrollo es remoto. Hablas directo con Santiago, quien programa.',
    },
    {
      question: '¿Por qué los precios dicen “desde”?',
      answer:
        'Son valores de referencia. El valor final depende del alcance. Te lo dejamos por escrito antes de empezar.',
    },
    {
      question: '¿Puedo pedir solo una consultoría?',
      answer: 'Sí. Una hora para arquitectura, tecnología o revisar un proyecto que ya tienes.',
    },
  ] satisfies FaqItem[],
  ctaTitle: 'Cuéntanos qué proceso quieres automatizar',
  ctaSubtitle: 'El diagnóstico del proceso no tiene costo.',
  ctaLabel: 'Cotizar un proyecto de software',
};

export const softwarePlans: Plan[] = [
  {
    name: 'Diagnóstico',
    price: 'Gratis (30 min)',
    description: 'Llamada para entender tu proceso y decirte si se puede automatizar.',
    features: ['30 minutos', 'Sin compromiso', 'Recomendación clara'],
    cta: 'Agendar diagnóstico',
    highlighted: false,
    showOnHome: true,
  },
  {
    name: 'Consultoría técnica',
    price: 'Desde $90.000 / hora',
    description: 'Asesoría en arquitectura, tecnología o revisión de un proyecto.',
    features: ['Por hora', 'Arquitectura o revisión', 'Recomendación accionable'],
    cta: 'Agendar consultoría',
    highlighted: false,
    showOnHome: false,
    whatsappMessage: 'Hola, quiero agendar una consultoría técnica',
  },
  {
    name: 'Landing page / sitio web',
    price: 'Desde $1.200.000',
    description: 'Sitio rápido, SEO básico, responsive, listo para vender.',
    features: ['Responsive', 'SEO básico', 'Listo para publicar'],
    cta: 'Cotizar sitio web',
    highlighted: false,
    showOnHome: false,
  },
  {
    name: 'Automatización de procesos',
    price: 'Desde $1.800.000',
    description: 'Automatizar una tarea o flujo concreto: reportes, documentos o integraciones.',
    features: ['Un flujo concreto', 'Menos trabajo manual', 'Entrega con capacitación'],
    cta: 'Cotizar automatización',
    highlighted: true,
    showOnHome: true,
  },
  {
    name: 'Software a la medida',
    price: 'Desde $6.000.000 · según alcance',
    description: 'Aplicación web o móvil a la medida, por etapas con demos.',
    features: ['Web o móvil', 'Por etapas con demos', 'Documentación de lo construido'],
    cta: 'Cotizar software',
    highlighted: false,
    showOnHome: true,
  },
  {
    name: 'Soporte mensual de software',
    price: 'Desde $250.000 / mes',
    description: 'Mantenimiento, ajustes y monitoreo de tu software.',
    features: ['Ajustes mensuales', 'Monitoreo', 'Prioridad de soporte'],
    cta: 'Pedir soporte mensual',
    highlighted: false,
    showOnHome: false,
  },
];

export const homeSupportPlans = supportPlans.filter((plan) => plan.showOnHome);
export const homeSoftwarePlans = softwarePlans.filter((plan) => plan.showOnHome);

export const notFound = {
  seo: {
    title: 'Página no encontrada | TecniCopa',
    description:
      'Esta página no existe o el enlace está desactualizado. Vuelve al inicio de TecniCopa para ver soporte técnico y software.',
  } satisfies SeoContent,
  heading: 'Esta página no existe',
  body: 'El enlace puede estar desactualizado o mal escrito. Vuelve al inicio y encuentra lo que buscas.',
  ctaLabel: 'Volver al inicio',
};
