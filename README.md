# TecniCopa Web

Landing page oficial de TecniCopa, empresa de soporte tecnico de computadores a domicilio en Copacabana, Antioquia (Colombia).

Objetivo principal del sitio: convertir visitantes en clientes que escriban por WhatsApp.

## Resumen funcional

- Servicio local con enfoque en confianza, cercania y claridad.
- CTA principal hacia WhatsApp en puntos estrategicos de la pagina.
- Secciones clave: servicios, diferenciales, precios, testimonios y contacto.
- SEO tecnico base listo para produccion (meta tags, Open Graph, Twitter Card, canonical, sitemap y JSON-LD).

## Stack tecnico

- Astro 6 (sitio estatico)
- TypeScript en modo strict
- Tailwind CSS v4 via @tailwindcss/vite
- Cloudflare Workers (static assets) para despliegue
- @astrojs/sitemap para sitemap automatico
- Vitest con cobertura al 100% en utilidades
- ESLint + Prettier + Husky + Commitlint

## Requisitos

- Node.js >= 22.12.0
- npm >= 10 (recomendado)

## Inicio rapido

```bash
npm install
npm run dev
```

Servidor local por defecto: http://localhost:4321

## Scripts disponibles

| Script | Descripcion |
| :-- | :-- |
| `npm run dev` | Inicia entorno local de desarrollo |
| `npm run build` | Genera build de produccion |
| `npm run preview` | Previsualiza el build localmente |
| `npm run check` | Valida tipos con Astro/TypeScript |
| `npm run lint` | Ejecuta ESLint |
| `npm run format` | Formatea con Prettier |
| `npm run test` | Ejecuta pruebas con Vitest |
| `npm run test:coverage` | Ejecuta pruebas y reporte de cobertura |
| `npm run preview:cf` | Build + `wrangler dev` (Cloudflare local) |
| `npm run deploy` | Build + `wrangler deploy` |

## Estructura del proyecto

```text
tecnicopa-web/
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── WhyUs.astro
│   │   ├── Pricing.astro
│   │   ├── About.astro
│   │   ├── Testimonials.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── SEO.astro
│   │   └── WhatsAppFloat.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── content.ts
│       ├── date.ts
│       ├── links.ts
│       ├── schema.ts
│       ├── seo.ts
│       └── __tests__/
├── astro.config.mjs
├── eslint.config.js
├── vitest.config.ts
├── wrangler.jsonc
└── package.json
```

## Convenciones importantes

- Nombre de marca: TecniCopa (T y C mayusculas).
- Mobile-first y HTML semantico.
- Tailwind v4 sin tailwind.config.js.
- Colores de marca definidos en src/styles/global.css con @theme.
- Evitar React para secciones estaticas (usar Astro).

## SEO y rendimiento

- `lang="es"` configurado en layout base.
- SEO reusable en componente `SEO.astro`.
- JSON-LD LocalBusiness desde `src/utils/schema.ts`.
- Sitemap automatico via `@astrojs/sitemap`.
- `robots.txt` con referencia a sitemap.
- CSP lista para Cloudflare Web Analytics (beacon inyectado por el panel de Cloudflare).

## Seguridad

`public/_headers` define headers de seguridad para todas las rutas, incluyendo:

- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

Adicionalmente, Husky ejecuta en pre-commit:

- `npm audit --audit-level=high`
- `npm run lint`
- `npm run test`

Y `commit-msg` valida Conventional Commits con Commitlint.

## Calidad y pruebas

- TypeScript strict habilitado.
- Lint para Astro + TypeScript.
- Cobertura de Vitest con umbral 100% (lineas, funciones, ramas y statements) en `src/utils/**/*.ts`.

## Datos de negocio

- Sitio: https://tecnicopa.com
- WhatsApp: https://wa.me/573243638746?text=Hola%2C%20quiero%20agendar%20un%20servicio
- Instagram: https://instagram.com/tecnicopa
- Correo: contacto@tecnicopa.com
- Cobertura principal: Copacabana, Girardota y Bello

## Flujo de ramas (GitFlow)

- `main`: produccion
- `develop`: integracion
- `feature/*`: nuevas funcionalidades (base en develop)
- `hotfix/*`: correcciones urgentes (base en main)

Evitar commits directos en `main` y `develop`; trabajar con PRs.

## Deploy

- Plataforma: Cloudflare Workers (static assets)
- Workers Builds conectado a GitHub (`tecnicopa-dev/tecnicopa-web`)
- Push a `main`: produccion
- Otras ramas: URLs de preview
- Headers: `public/_headers`

## Checklist recomendado antes de PR

```bash
npm run lint
npm run test
npm run check
npm run build
```
