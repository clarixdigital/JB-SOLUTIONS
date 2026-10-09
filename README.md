# JB Solutions — Web (Next.js estático)

Landing de JB Solutions + página "Sobre nosotros". Next.js 16 (App Router) con **exportación estática** (`output: 'export'`): al compilar se genera la carpeta `out/` con HTML/CSS/JS puro, lista para Cloudflare Pages (plan gratuito).

## Desarrollo en local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # genera ./out
npm run preview    # sirve ./out en local
```

Requiere Node 20.9 o superior (se recomienda 22; ver `.node-version`).

## Subir a GitHub

```bash
git init
git add .
git commit -m "Web JB Solutions"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/jb-solutions-web.git
git push -u origin main
```
(Crea antes el repositorio vacío en GitHub, sin README.)

## Desplegar en Cloudflare Pages (gratis)

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → pestaña **Pages** → **Connect to Git**.
2. Autoriza GitHub y elige el repositorio.
3. Configuración de build:
   - **Framework preset:** `Next.js (Static HTML Export)`
   - **Build command:** `npx next build`
   - **Build output directory:** `out`
   - **Production branch:** `main`
4. **Save and Deploy**. Cada `git push` a `main` publica automáticamente.
5. Dominio propio: proyecto → **Custom domains** → añade `jbsolutions.es`.

Guía oficial: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/

## Editar datos de la empresa

Email, NIF, dirección y endpoint del formulario están en `lib/site.js`. El endpoint de Formspree también puede cambiarse con la variable de entorno `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (Cloudflare → Settings → Variables and Secrets; hay que relanzar el build).

## Estructura

```
app/            páginas (page.js = inicio, sobre-nosotros/), layout y estilos globales
components/     Nav, Footer, ContactForm, LegalProvider (modales legales), RevealObserver
lib/site.js     datos de la empresa
public/         robots.txt y _headers (cabeceras de seguridad y caché en Cloudflare)
```

## Notas

- El script de **Vercel Analytics** se ha quitado (solo funciona en Vercel). Alternativa gratuita: Cloudflare → Web Analytics (sin cookies). Si activas analítica, actualiza la Política de cookies.
- El formulario usa Formspree; la primera vez hay que confirmar el email desde Formspree.
- `public/_headers` no incluye Content-Security-Policy a propósito; se puede añadir más adelante.
- Por la exportación estática no hay servidor: no usar API routes ni `next/image` optimizado.
