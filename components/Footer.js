'use client';
import Link from 'next/link';
import { useLegal } from './LegalProvider';
import { SITE } from '../lib/site';

export default function Footer() {
  const { openLegal } = useLegal();
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="logo" href="/"><span className="logo-mark">JB</span>JB Solutions</Link>
            <p>Agencia y consultora de Inteligencia Artificial. Automatizamos tu negocio para que no pierdas ni una llamada, ni una cita, ni un cliente.</p>
          </div>
          <div className="foot-col">
            <h4>Servicios</h4>
            <Link href="/#agentes">Agentes de IA</Link>
            <Link href="/#servicios">Páginas web</Link>
            <Link href="/#servicios">Consultoría de IA</Link>
          </div>
          <div className="foot-col">
            <h4>Empresa</h4>
            <Link href="/sobre-nosotros/">Sobre nosotros</Link>
            <Link href="/#como">Cómo funciona</Link>
            <Link href="/#contacto">Pedir presupuesto</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 JB Solutions. Todos los derechos reservados.</span>
          <div className="foot-legal">
            <button type="button" className="legal-link" onClick={() => openLegal('aviso')}>Aviso legal</button>
            <button type="button" className="legal-link" onClick={() => openLegal('privacidad')}>Política de privacidad</button>
            <button type="button" className="legal-link" onClick={() => openLegal('cookies')}>Cookies</button>
            <a
              className="mail-ico"
              href={`mailto:${SITE.email}?subject=Solicitud%20de%20presupuesto%20-%20JB%20Solutions`}
              title="Escríbenos por email"
              aria-label="Enviar email a JB Solutions"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6.5h18v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
