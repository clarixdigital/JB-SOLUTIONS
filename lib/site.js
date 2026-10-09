// Datos de la empresa en un único sitio: si cambia algo (email, dirección, formulario), se toca aquí.
export const SITE = {
  name: 'JB Solutions',
  email: 'info.solutionsjb@gmail.com',
  nif: '20099311W',
  address: 'Calle Patricia, 22, Mairena del Alcor, Sevilla, España',
  // Endpoint de Formspree. Se puede sobrescribir con la variable de entorno
  // NEXT_PUBLIC_FORMSPREE_ENDPOINT (Cloudflare Pages > Settings > Variables).
  formspreeEndpoint:
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xykqyrwz',
};
