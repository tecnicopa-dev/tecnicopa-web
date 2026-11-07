export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface Reason {
  title: string;
  description: string;
}

export interface AboutHighlight {
  title: string;
  subtitle: string;
  icon: 'location' | 'partner';
}

export interface AboutFounder {
  name: string;
  role: string;
  description: string;
}

export interface AboutContent {
  badge: string;
  title: string;
  paragraphs: string[];
  highlights: AboutHighlight[];
  founderTitle: string;
  founder: AboutFounder;
}

export interface SoftwareSeo {
  title: string;
  description: string;
}

export interface SoftwareHero {
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
}

export interface SoftwareService {
  title: string;
  description: string;
}

export interface SoftwareProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface SoftwareCta {
  title: string;
  description: string;
  button: string;
}

export interface SoftwareHomeBanner {
  text: string;
  button: string;
}

export interface SoftwarePage {
  seo: SoftwareSeo;
  hero: SoftwareHero;
  servicesTitle: string;
  servicesSubtitle: string;
  services: SoftwareService[];
  processTitle: string;
  processSubtitle: string;
  process: SoftwareProcessStep[];
  reasonsTitle: string;
  reasonsSubtitle: string;
  reasons: Reason[];
  cta: SoftwareCta;
  homeBanner: SoftwareHomeBanner;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#por-que', label: '¿Por qué nosotros?' },
  { href: '/#precios', label: 'Precios' },
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/software', label: 'Software' },
  { href: '/#contacto', label: 'Contacto' },
];

export const services: Service[] = [
  {
    title: 'Mantenimiento preventivo y correctivo',
    description:
      'Limpieza interna profunda, cambio de pasta térmica y revisión completa del hardware. Tu equipo corre más rápido y dura más años.',
    icon: '🔧',
  },
  {
    title: 'Formateo e instalación de sistema operativo',
    description:
      'Instalamos Windows, Linux o macOS desde cero con todos los drivers, actualizaciones y programas esenciales ya listos.',
    icon: '💿',
  },
  {
    title: 'Eliminación de virus y malware',
    description:
      '¿Tu PC está lento, muestra ventanas raras o se apaga solo? Lo analizamos, eliminamos las amenazas y lo dejamos seguro.',
    icon: '🛡️',
  },
  {
    title: 'Soporte remoto',
    description:
      'Resolvemos problemas de software sin movernos de donde estás. Rápido, seguro y sin desplazamientos.',
    icon: '🖥️',
  },
];

export const plans: Plan[] = [
  {
    name: 'Diagnóstico a domicilio',
    price: 'Desde $80.000',
    description:
      'Revisamos tu equipo, identificamos el problema y te decimos exactamente qué tiene y cuánto cuesta arreglarlo.',
    features: [
      'Revisión completa de hardware y software',
      'Informe claro y sin tecnicismos',
      'Sin compromiso de reparación',
      'Atención a domicilio en Copacabana',
    ],
    cta: 'Solicitar diagnóstico',
    highlighted: false,
  },
  {
    name: 'Mantenimiento',
    price: 'Desde $100.000',
    description:
      'Limpieza completa, pasta térmica nueva y optimización del sistema. El servicio más pedido por nuestros clientes.',
    features: [
      'Limpieza interna profunda',
      'Cambio de pasta térmica',
      'Optimización del sistema operativo',
      'Garantía escrita incluida',
      'Comprobante de pago',
      'Seguimiento a los 7 días',
    ],
    cta: 'Agendar mantenimiento',
    highlighted: true,
  },
  {
    name: 'Formateo completo',
    price: 'Desde $100.000',
    description:
      'Instalación limpia del sistema operativo con drivers, actualizaciones y programas esenciales. Como nuevo.',
    features: [
      'Windows, Linux o macOS',
      'Drivers e instalación completa',
      'Programas esenciales incluidos',
      'Garantía escrita incluida',
      'Comprobante de pago',
    ],
    cta: 'Agendar formateo',
    highlighted: false,
  },
];

export const reasons: Reason[] = [
  {
    title: 'Garantía escrita en cada servicio',
    description:
      'Si el problema vuelve dentro del plazo acordado, lo resolvemos sin costo adicional. Cero letra pequeña.',
  },
  {
    title: 'Comprobante de pago en cada servicio',
    description:
      'Te entregamos comprobante de todo lo que pagas. Sabes exactamente por qué servicio pagaste y cuánto. Transparencia total.',
  },
  {
    title: 'Seguimiento a los 7 días',
    description:
      'Después de cada servicio te contactamos para asegurarnos de que todo sigue funcionando. No desaparecemos una vez cobrado.',
  },
  {
    title: 'Somos de acá, conocemos el municipio',
    description:
      'Vivimos y trabajamos en Copacabana. Llegamos rápido, sin cobros extra de desplazamiento desde Medellín.',
  },
];

export const about: AboutContent = {
  badge: 'Quiénes somos',
  title: 'Soporte técnico con cara y nombre',
  paragraphs: [
    'TecniCopa nació con una idea clara: llevar soporte técnico profesional a las personas que lo necesitan en Copacabana, sin que tengan que desplazarse al centro o confiar en alguien que "cree que sabe".',
    'Somos una empresa local con identidad propia, garantía escrita y comprobante de pago en cada servicio. Nuestro objetivo no es solo arreglar tu computador — es que te quedes tranquilo y vuelvas cuando necesites ayuda.',
    'Los servicios técnicos los realiza un técnico aliado de confianza. TecniCopa coordina el servicio, responde por la garantía escrita y hace el seguimiento a los 7 días.',
  ],
  highlights: [
    {
      icon: 'location',
      title: 'Copacabana, Antioquia',
      subtitle: 'Atendemos también Girardota y Bello norte',
    },
    {
      icon: 'partner',
      title: 'Técnico aliado con experiencia',
      subtitle: 'Coordinamos, garantizamos y hacemos seguimiento',
    },
  ],
  founderTitle: 'El fundador',
  founder: {
    name: 'Santiago Molano',
    role: 'Fundador',
    description:
      'Desarrollo de software, automatización y coordinación de servicios técnicos',
  },
};

export const softwarePage: SoftwarePage = {
  seo: {
    title: 'Software a medida y automatización | TecniCopa',
    description:
      'Desarrollamos software a la medida y automatizamos procesos para empresas en toda Colombia. Diagnóstico sin costo y trato directo con quien desarrolla.',
  },
  hero: {
    badge: 'Software para empresas en Colombia',
    title: '¿Tu equipo pierde horas en tareas manuales? Las automatizamos.',
    subtitle:
      'Software a la medida y automatización de procesos para empresas en toda Colombia. Trabajamos remoto, con trato directo y un alcance claro desde el inicio.',
    primaryCta: 'Cotizar un desarrollo',
    secondaryCta: 'Cómo trabajamos',
    secondaryHref: '#como-trabajamos',
  },
  servicesTitle: 'Qué podemos construir juntos',
  servicesSubtitle:
    'Si hoy se hace a mano, se puede ordenar, conectar y dejar corriendo solo. El valor depende del alcance.',
  services: [
    {
      title: 'Software a la medida',
      description:
        'Aplicaciones web y móviles hechas para tu operación. Nos cuentas el problema y lo convertimos en una herramienta que tu equipo sí use.',
    },
    {
      title: 'Automatización de procesos',
      description:
        'Tareas repetitivas, reportes y flujos entre áreas. Si cada semana copian datos o pasan información a mano, lo dejamos corriendo solo.',
    },
    {
      title: 'Integraciones e inteligencia artificial',
      description:
        'Conectamos los sistemas que ya usas y ayudamos a leer y analizar documentos, para que nadie tenga que hacerlo a mano.',
    },
    {
      title: 'Sitios web para empresas',
      description:
        'Una web clara, rápida y hecha para que tus clientes te encuentren y te escriban. Sin vueltas innecesarias.',
    },
  ],
  processTitle: 'Cómo trabajamos',
  processSubtitle: 'Cuatro pasos claros, sin letra pequeña y con avances que puedes ver.',
  process: [
    {
      step: 1,
      title: 'Diagnóstico sin costo del proceso',
      description:
        'Revisamos cómo trabajan hoy, qué les quita tiempo y qué vale la pena automatizar. Sin compromiso y sin costo.',
    },
    {
      step: 2,
      title: 'Propuesta con alcance, tiempos y valor',
      description:
        'Te entregamos una propuesta clara: qué se hace, cuánto tarda y cuánto cuesta. El valor se define según el alcance.',
    },
    {
      step: 3,
      title: 'Desarrollo por etapas con demos frecuentes',
      description:
        'Avanzamos por partes y te mostramos avances reales. Ves cómo queda, comentas y seguimos.',
    },
    {
      step: 4,
      title: 'Entrega, capacitación y soporte',
      description:
        'Te dejamos la herramienta funcionando, te enseñamos a usarla y quedamos pendientes después de la entrega.',
    },
  ],
  reasonsTitle: 'Por qué TecniCopa',
  reasonsSubtitle: 'Desarrollo cercano, con avances que se ven y sin perder el control de lo construido.',
  reasons: [
    {
      title: 'Trato directo con quien desarrolla',
      description:
        'Hablas con Santiago, quien diseña y programa. Sin intermediarios ni filtros de por medio.',
    },
    {
      title: 'Avances visibles en cada etapa',
      description:
        'No esperas meses para ver algo. En cada etapa te mostramos un avance real y tomamos decisiones juntos.',
    },
    {
      title: 'Documentación de lo construido',
      description:
        'Te entregamos documentado lo que se hizo, cómo se usa y cómo se mantiene. Nada queda solo en la cabeza de alguien.',
    },
    {
      title: 'Buenas prácticas profesionales',
      description:
        'Dejamos todo organizado para que mañana se pueda entender, ajustar y crecer. Sin atajos que después salen caros.',
    },
  ],
  cta: {
    title: 'Cuéntanos qué proceso quieres automatizar',
    description:
      'Escríbenos por WhatsApp, cuéntanos cómo trabajan hoy y te decimos si vale la pena automatizarlo. El diagnóstico del proceso no tiene costo.',
    button: 'Escribir por WhatsApp',
  },
  homeBanner: {
    text: '¿Tienes una empresa? También desarrollamos software y automatizamos procesos',
    button: 'Ver software',
  },
};
