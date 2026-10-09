'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-inner">
        <Link className="logo" href="/" onClick={close}>
          <span className="logo-mark">JB</span>JB Solutions
        </Link>
        <div className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          <Link href="/sobre-nosotros/" onClick={close}>Sobre nosotros</Link>
          <Link href="/#servicios" onClick={close}>Servicios</Link>
          <Link href="/#como" onClick={close}>Cómo funciona</Link>
          <Link href="/#aquien" onClick={close}>A quién ayudamos</Link>
          <Link className="btn btn-cta" href="/#contacto" onClick={close}>Pedir presupuesto</Link>
        </div>
        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
