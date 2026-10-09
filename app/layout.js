import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import LegalProvider from '../components/LegalProvider';
import RevealObserver from '../components/RevealObserver';

export const metadata = {
  title: {
    default: 'JB Solutions — Inteligencia Artificial para tu negocio',
    template: '%s — JB Solutions',
  },
  description:
    'Agencia y consultora de Inteligencia Artificial: agentes de voz que atienden tu teléfono, páginas web que convierten y consultoría para automatizar tu negocio.',
  openGraph: {
    title: 'JB Solutions — Inteligencia Artificial para tu negocio',
    description:
      'Agentes de voz con IA, páginas web y consultoría para automatizar tu negocio.',
    locale: 'es_ES',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a2540',
};

// Añade la clase "js" para activar las animaciones de entrada; si algo falla,
// a los 5 s se retira para que el contenido nunca quede oculto.
const bootScript = `document.documentElement.classList.add('js');setTimeout(function(){var d=document.documentElement;if(!d.classList.contains('ready'))d.classList.remove('js')},5000);`;

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <LegalProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LegalProvider>
        <RevealObserver />
      </body>
    </html>
  );
}
