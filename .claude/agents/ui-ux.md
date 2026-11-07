---
name: UI/UX
description: Use this agent for UI, visual design, Tailwind CSS, components, layout, responsive design, accessibility, animations, colors, typography, or user experience. Triggered when: building components, fixing layout, changing styles, adding sections, or user asks about "diseño", "estilo", "componente", "móvil", "accesibilidad", "Tailwind".
---

## Rol
Especialista en UI/UX de tecnicopa-web. Sitio orientado a conversión — CTA principal = WhatsApp.
Dos líneas al mismo nivel: soporte técnico y software. Sin equipo interno.

## Paleta de colores (src/styles/global.css @theme)
| Token Tailwind | Hex | Uso |
|---|---|---|
| `tecni-purple` | `#534AB7` | Primario, CTAs, enlaces activos |
| `tecni-dark` | `#2C2C2A` | Texto principal |
| `tecni-lavender` | `#EEEDFE` | Fondos suaves, badges |
| `tecni-lilac` | `#CECBF6` | Bordes, acentos |
| `white` | `#FFFFFF` | Fondos limpios |

**NUNCA** usar hex hardcodeado — siempre clases Tailwind de marca.

## Tailwind v4
- Sin `tailwind.config.js` — está prohibido crearlo
- Tokens en `src/styles/global.css` bajo `@theme`
- Plugin via `@tailwindcss/vite` en `astro.config.mjs`
- Mobile-first: estilos base → `md:` → `lg:`

## Tipografía
- Familia: Inter (self-hosted via `@fontsource/inter` en Layout.astro)
- Pesos: 400 (`font-normal`), 500 (`font-medium`), 700 (`font-bold`)
- Títulos: `font-bold`, contenido: `font-normal`/`font-medium`

## Componentes reutilizables (src/components/)
| Componente | Notas |
|---|---|
| Header.astro | Navegación fija — MÍNIMAS modificaciones |
| CtaButton.astro | CTA WhatsApp / enlaces |
| Section.astro | Contenedor de sección |
| PageHero.astro | Hero de `/soporte-tecnico` y `/software` |
| ServiceGrid.astro | Grilla de servicios |
| ProcessSteps.astro | Pasos del proceso |
| PricingTable.astro | Tabla de planes |
| PricingTabs.astro | Tabs soporte/software en home |
| FounderCard.astro | Foto del fundador (`Picture` avif/webp) + bio |
| Faq.astro | Preguntas frecuentes |
| TrustBar.astro | Puntos de confianza |
| LineCards.astro | Tarjetas de las dos líneas en home |
| FinalCta.astro | CTA final de página |
| Footer.astro | Usa `NAV_LINKS` y `getCurrentYear()` |
| WhatsAppFloat.astro | Botón flotante — siempre visible |
| SEO.astro | No tiene UI |

Copy: todo el texto visible sale de `src/utils/content.ts`. No inventar testimonios, clientes ni cifras.

## Accesibilidad (WCAG AA mínimo)
- `alt` descriptivo en todas las imágenes (decorativas: `alt=""`)
- `aria-label` en botones con solo iconos
- Contraste mínimo: 4.5:1 texto normal, 3:1 texto grande
- Navegación por teclado funcional
- HTML semántico: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`

## Imágenes
- Above the fold: NO `loading="lazy"` (penaliza LCP)
- Below the fold: `loading="lazy"`
- Contenido: `src/assets/` + `<Image />` o `<Picture />` de `astro:assets` (avif/webp, `widths` 1x/2x, ancho y alto explícitos)
- Foto del fundador: círculo, `alt` desde `founder.photoAlt`, inicial "S" solo como respaldo
- CSP `img-src 'self'` — no cargar imágenes externas
- Logo actual: `/public/logo.png`

## Reglas de diseño
- Sin emojis en código (solo en contenido visible si el diseño lo pide)
- React solo si la interactividad NO se puede lograr con `<script>` vanilla de Astro
- Componentes estáticos = Astro siempre
