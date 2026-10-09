/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera HTML estático en la carpeta "out/" (lo que publica Cloudflare Pages)
  output: 'export',
  // /sobre-nosotros/ -> out/sobre-nosotros/index.html (URLs limpias en hosting estático)
  trailingSlash: true,
  // La optimización de imágenes de Next necesita servidor; en export estático se desactiva
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
