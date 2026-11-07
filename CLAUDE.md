# TecniCopa — Guía del proyecto para Claude Code

## Flujo autónomo (SIEMPRE seguir este orden)

GitFlow activo — **NUNCA** commitear directo a `main` ni a `develop`.

```
main (producción)  ← solo releases y hotfixes
  └── develop      ← integración, base de todos los features
        └── feature/*  → PR a develop
  └── hotfix/*         → PR a main Y develop
```

Para cualquier cambio:
1. `/feature <nombre>` — crea rama desde `develop`
2. Implementar con los agentes especializados
3. `/check` — seguridad + lint + types + tests + build
4. `/ship` — audit → commit → push → PR a `develop`
5. Para ir a producción: PR de `develop` → `main`

**Hotfix urgente**: `/hotfix <nombre>` (parte de `main`, PR a `main` y `develop`).

## Agentes disponibles

| Tarea | Agente | Cuándo usarlo |
|---|---|---|
| Vulnerabilidades, headers, secrets | `security` | **Siempre antes de /ship** + cualquier nueva dep o link externo |
| Tests, cobertura, Vitest | `tests` | Nuevo código en `src/utils/`, tests fallando, coverage < 100% |
| Meta tags, schema.org, sitemap | `seo` | Cambios en SEO.astro, schema.ts, nuevas páginas |
| Componentes, Tailwind, layout | `ui-ux` | Cualquier cambio visual o de componentes |
| Estructura de archivos, utils | `architect` | Dónde poner código nuevo, extraer lógica a utils |
| Git, ramas, PR, deploy | `gitflow` | Al entregar cualquier cambio |

## Comandos disponibles

| Comando | Qué hace |
|---|---|
| `/feature <nombre>` | Crea `feature/<nombre>` desde `develop` |
| `/hotfix <nombre>` | Crea `hotfix/<nombre>` desde `main` |
| `/ship` | audit→lint→test→build→commit→push→PR |
| `/check` | Reporte completo: seguridad + calidad |

## MCP configurado

Definidos en `.mcp.json` (raíz del proyecto). Tras clonar y abrir el proyecto en Claude Code, autentícalos con OAuth desde el comando `/mcp` (no requieren tokens manuales).

- **GitHub** (servidor remoto oficial, `https://api.githubcopilot.com/mcp/`): PRs, branches, issues, CI. Login OAuth al conectar.
- **Vercel** (servidor remoto oficial, `https://mcp.vercel.com`): proyectos, deploys y logs. Login OAuth al conectar.

---

## Descripción del proyecto

**TecniCopa** es el sitio web de una empresa en Copacabana, Antioquia, Colombia, con **dos líneas al mismo nivel**:

1. **Soporte técnico** de computadores a domicilio (lo realiza un técnico aliado; TecniCopa coordina, garantiza y hace el seguimiento).
2. **Software a la medida y automatización** de procesos para empresas en Colombia (lo desarrolla el fundador).

No hay equipo interno. El **objetivo principal** es convertir visitantes en clientes que escriban por WhatsApp.

El sitio debe transmitir confianza, profesionalismo y cercanía — sin jerga técnica innecesaria.

---

## Stack técnico

| Tecnología | Versión | Notas |
|---|---|---|
| Node.js | >= 22.23.4 | `engines` en `package.json` |
| Astro | ^7.4.7 | Framework principal |
| TypeScript | strict | `astro/tsconfigs/strict` en tsconfig.json |
| Tailwind CSS | ^4.2.2 | Vía `@tailwindcss/vite` — sin tailwind.config.js |
| Vitest | ^5.1.0 | Tests de `src/utils/` con cobertura 100% |
| @astrojs/sitemap | latest | Genera sitemap automático |
| ESLint | latest | Con `eslint-plugin-astro` y soporte TypeScript |
| Prettier | latest | Con `prettier-plugin-astro` |

Overrides de seguridad en `package.json`: `glob` ^14.0.4 y `minimatch` ^11.0.5 (además de `path-to-regexp` y `yaml`).

---

## Estructura de carpetas

```
tecnicopa-web/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── logo.png
│   ├── founder/santiago-molano.jpg   # URL estable para Schema.org Person
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── founder/santiago-molano.jpg  # Fuente para astro:assets (avif/webp)
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── SEO.astro
│   │   ├── WhatsAppFloat.astro
│   │   ├── CtaButton.astro
│   │   ├── Section.astro
│   │   ├── PageHero.astro
│   │   ├── ServiceGrid.astro
│   │   ├── ProcessSteps.astro
│   │   ├── PricingTable.astro
│   │   ├── PricingTabs.astro
│   │   ├── FounderCard.astro
│   │   ├── Faq.astro
│   │   ├── TrustBar.astro
│   │   ├── LineCards.astro
│   │   └── FinalCta.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro              # Hub: las dos líneas al mismo nivel
│   │   ├── soporte-tecnico.astro
│   │   └── software.astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── content.ts               # TODO el texto visible
│       ├── links.ts
│       ├── schema.ts
│       ├── seo.ts
│       └── date.ts
├── astro.config.mjs
├── tsconfig.json
├── eslint.config.js
├── vitest.config.ts
├── .prettierrc
└── CLAUDE.md
```

### Rutas

| Ruta | Página |
|---|---|
| `/` | Hub: soporte y software al mismo nivel |
| `/soporte-tecnico` | Servicios, precios y cobertura de soporte |
| `/software` | Software a la medida, automatización y precios |

---

## Convenciones de código

### General
- **TypeScript strict** en todos los archivos `.astro` y `.ts`
- Componentes **Astro** para todo lo estático
- **React (islas)** SOLO cuando se necesite interactividad que Astro no puede manejar con `<script>` vanilla
- Mobile-first siempre — primero estilos base, luego `md:`, `lg:`
- HTML semántico: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`, etc.
- **Nunca** usar emojis en código — solo en contenido visible si aplica al diseño
- **Código sin comentarios innecesarios ni de relleno.** Solo comentar lo estrictamente no obvio (workarounds, decisiones no evidentes, el porqué). El código debe ser autoexplicativo mediante nombres claros; no narrar en comentarios lo que el código ya dice.

### Contenido
- **Todo el texto visible vive en `src/utils/content.ts`.** Los componentes no inventan copy inline.
- **No inventar testimonios, clientes ni cifras.** Si no hay testimonios reales, no hay sección de testimonios.
- **No publicar datos del técnico aliado** (nombre, tarifas internas, comisiones, contacto personal).
- WhatsApp y URLs públicas viven en `src/utils/links.ts`. Schema.org en `src/utils/schema.ts`.

### Tailwind CSS v4
- **NO crear** `tailwind.config.js` ni `tailwind.config.mjs` — Tailwind v4 no los usa
- Los tokens de diseño se definen en `src/styles/global.css` bajo `@theme`
- Usar las clases de color de marca directamente: `bg-tecni-purple`, `text-tecni-dark`, etc.
- Configuración de Tailwind via `@tailwindcss/vite` plugin en `astro.config.mjs`

### Accesibilidad
- `alt` descriptivo en todas las imágenes (no dejar vacío salvo imágenes decorativas con `alt=""`)
- `aria-label` en botones que solo tengan iconos
- Contraste mínimo WCAG AA (4.5:1 texto normal, 3:1 texto grande)
- Navegación por teclado funcional

### Imágenes
- Fotos de contenido: `src/assets/` + `<Image />` o `<Picture />` de `astro:assets` (avif/webp, `widths` 1x/2x)
- `loading="lazy"` en imágenes que no estén above the fold
- Imágenes above the fold: no agregar `loading="lazy"` (evitar LCP penalizado)
- Ancho y alto explícitos para evitar layout shift
- Quitar EXIF (GPS, cámara, fecha) antes de commitear fotos
- CSP `img-src 'self'`: no cargar imágenes de dominios externos

---

## Paleta de colores

| Nombre | Clase Tailwind | Hex | Uso |
|---|---|---|---|
| Morado TecniCopa | `tecni-purple` | `#534AB7` | Primario, CTAs, enlaces activos |
| Gris oscuro | `tecni-dark` | `#2C2C2A` | Texto principal |
| Lavanda suave | `tecni-lavender` | `#EEEDFE` | Fondos suaves, badges |
| Morado claro | `tecni-lilac` | `#CECBF6` | Bordes, acentos secundarios |
| Blanco | `white` | `#FFFFFF` | Fondos limpios |

Definidos en `src/styles/global.css`:
```css
@theme {
  --color-tecni-purple: #534AB7;
  --color-tecni-dark: #2C2C2A;
  --color-tecni-lavender: #EEEDFE;
  --color-tecni-lilac: #CECBF6;
}
```

---

## Tipografía

- **Familia**: Inter (self-hosted via `@fontsource/inter`)
- **Pesos cargados**: 400 (Regular), 500 (Medium), 700 (Bold)
- Títulos: `font-bold` (700)
- Contenido y UI: `font-normal` (400) o `font-medium` (500)

---

## Identidad de marca

- **Nombre**: TecniCopa (siempre T y C mayúsculas — nunca "Tecnicopa" o "tecnicopa")
- **Slogan**: "Soporte integral, soluciones reales."
- **Voz**: Cercana pero profesional. Directa. Sin jerga corporativa.
  - Correcto: "¿Tu computador no enciende? Escríbenos y lo diagnosticamos gratis."
  - Incorrecto: "Implementamos soluciones tecnológicas de vanguardia para su empresa."
- **WhatsApp (CTA principal)**: construir con `buildWhatsAppUrl` en `src/utils/links.ts` (`wa.me/573243638746`)
- **Instagram**: @tecnicopa — `https://instagram.com/tecnicopa`
- **Correo**: contacto@tecnicopa.com
- **Ubicación**: Copacabana, Antioquia, Colombia
- **Fundador**: Santiago Molano (foto en `src/assets/founder/`, schema `Person` con `image`)

---

## Líneas de servicio

### Soporte técnico
1. Mantenimiento preventivo y correctivo
2. Formateo e instalación de sistema operativo
3. Eliminación de virus y malware
4. Soporte remoto

Lo realiza un técnico aliado. TecniCopa coordina, da garantía escrita y hace seguimiento.

### Software y automatización
1. Software a la medida
2. Automatización de procesos
3. Integraciones e inteligencia artificial
4. Sitios web para empresas
5. Consultoría técnica
6. Soporte mensual de software

Lo desarrolla el fundador, de forma remota, para empresas en toda Colombia.

---

## Diferenciadores clave

- Garantía escrita en todos los servicios de soporte
- Comprobante de pago
- Seguimiento post-servicio (a los 7 días en soporte)
- Trato directo con quien coordina o desarrolla
- Diagnóstico de software sin costo (30 minutos)

---

## SEO

### Reglas generales
- `lang="es"` en el `<html>` siempre
- Title format: `[Página] | TecniCopa — …` (el copy exacto vive en `content.ts`)
- Meta description única por página, entre 150-160 caracteres
- Canonical URL en todas las páginas
- Open Graph completo (og:title, og:description, og:image, og:url, og:type, og:locale=es_CO)
- Twitter card: `summary_large_image`
- Schema.org `LocalBusiness` + `Person` (founder) en `src/utils/schema.ts`; `Service`/`ProfessionalService` en `/software`

### Schema.org LocalBusiness
```json
{
  "@type": "LocalBusiness",
  "name": "TecniCopa",
  "telephone": "+573243638746",
  "url": "https://tecnicopa.com",
  "areaServed": ["Copacabana", "Girardota", "Bello"],
  "priceRange": "$",
  "founder": {
    "@type": "Person",
    "name": "Santiago Molano",
    "image": "https://tecnicopa.com/founder/santiago-molano.jpg"
  }
}
```

### Favicon
- Reemplazar `public/favicon.ico` y `public/favicon.svg` con versión de marca definitiva
- El SVG debería ser el isotipo morado (#534AB7) sobre fondo blanco o transparente

---

## Comandos del proyecto

```bash
npm run dev            # Servidor de desarrollo en localhost:4321
npm run build          # Build de producción (verifica errores TypeScript y Astro)
npm run preview        # Preview del build de producción
npm run check          # Verificación de tipos Astro + TypeScript
npm run lint           # Linting con ESLint
npm run format         # Formateo con Prettier
npm test               # Vitest
npm run test:coverage  # Vitest + cobertura 100% en src/utils
```

---

## Deploy

- **Hosting: migración de Vercel a Cloudflare pendiente.**
- **Dominio**: tecnicopa.com (DNS en Cloudflare)
- **Variable de entorno**: no se requieren variables de entorno para el sitio base

Antes de hacer push a `main`, verificar:
1. `npm run build` pasa sin errores
2. `npm run check` pasa sin errores de tipos
3. `npm audit --audit-level=high` → 0 HIGH/CRITICAL
4. El sitio se ve bien en mobile y desktop

---

## Lo que NO hacer

- NO crear `tailwind.config.js` o `tailwind.config.mjs`
- NO usar React para componentes estáticos (Astro es suficiente)
- NO agregar emojis en el código fuente (solo en contenido visible si el diseño lo requiere)
- NO hardcodear colores hex — usar siempre las clases de marca de Tailwind
- NO olvidar `alt` en imágenes ni `aria-label` en botones con solo iconos
- NO inventar testimonios, clientes, cifras ni datos del técnico aliado
- NO poner copy fuera de `src/utils/content.ts`
- NO commitear fotos con metadatos EXIF
