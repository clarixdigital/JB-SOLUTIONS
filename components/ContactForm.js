'use client';
import { useState } from 'react';
import { useLegal } from './LegalProvider';
import { SITE } from '../lib/site';

const limpiar = (v) => v.replace(/<[^>]*>/g, '').replace(/[<>]/g, '').trim();
const validarEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const NOTA = 'Tus datos solo se usan para contactarte sobre tu solicitud.';

const vacio = { nombre: '', email: '', negocio: '', tel: '', servicio: '', mensaje: '', consent: false, hp: '' };

export default function ContactForm() {
  const { openLegal } = useLegal();
  const [f, setF] = useState(vacio);
  const [bad, setBad] = useState({});
  const [nota, setNota] = useState({ text: NOTA, error: false });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k, v) => {
    setF((p) => ({ ...p, [k]: v }));
    if (bad[k]) setBad((p) => ({ ...p, [k]: false }));
    if (nota.error) setNota({ text: NOTA, error: false });
  };

  const fail = (text, fields = {}) => {
    setBad(fields);
    setNota({ text, error: true });
  };

  async function submit(e) {
    e.preventDefault();
    if (sending) return;
    if (f.hp) { setDone(true); return; } // honeypot: un bot rellenó el campo oculto

    const nombre = limpiar(f.nombre).slice(0, 60);
    const email = f.email.trim().slice(0, 80);
    const negocio = limpiar(f.negocio).slice(0, 80);
    const mensaje = limpiar(f.mensaje).slice(0, 600);
    const tel = f.tel.trim();
    const digitos = tel.replace(/\D/g, '');

    const bads = {};
    if (!nombre) bads.nombre = true;
    if (!validarEmail(email)) bads.email = true;
    if (bads.nombre || bads.email) return fail('Por favor, rellena tu nombre y un email válido.', bads);
    if (tel && (digitos.length < 7 || digitos.length > 15))
      return fail('El teléfono no parece válido. Revísalo, por favor.', { tel: true });
    if (!f.consent) return fail('Debes aceptar la política de privacidad para continuar.');

    setSending(true);
    try {
      const fd = new FormData();
      fd.append('nombre', nombre);
      fd.append('email', email);
      fd.append('negocio', negocio);
      fd.append('telefono', tel);
      fd.append('servicio', f.servicio);
      fd.append('mensaje', mensaje);
      fd.append('_subject', 'Nueva solicitud de presupuesto - JB Solutions');
      const res = await fetch(SITE.formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      });
      if (!res.ok) throw new Error('error');
      setDone(true);
    } catch {
      fail('Ha habido un problema al enviar. Inténtalo de nuevo o escríbenos directamente.');
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="form-success">
        <div className="big">✓</div>
        <h3>¡Solicitud enviada!</h3>
        <p>Gracias por confiar en JB Solutions. Te contactaremos en menos de 24 horas para preparar tu propuesta.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <h3>Hablemos de tu negocio</h3>
      <p className="sub">Rellena el formulario y te contactamos enseguida.</p>

      <div className="field">
        <label htmlFor="nombre">Nombre *</label>
        <input type="text" id="nombre" maxLength={60} placeholder="Tu nombre" autoComplete="name"
          className={bad.nombre ? 'invalid' : ''} value={f.nombre} onChange={(e) => set('nombre', e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="email">Email *</label>
        <input type="email" id="email" maxLength={80} placeholder="tucorreo@ejemplo.com" autoComplete="email"
          className={bad.email ? 'invalid' : ''} value={f.email} onChange={(e) => set('email', e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="negocio">Nombre del negocio</label>
        <input type="text" id="negocio" maxLength={80} placeholder="Tu negocio" autoComplete="organization"
          value={f.negocio} onChange={(e) => set('negocio', e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="tel">Teléfono <span style={{ color: 'var(--gris-400)', fontWeight: 400 }}>(opcional)</span></label>
        <input type="tel" id="tel" inputMode="tel" maxLength={20} placeholder="600 000 000" autoComplete="tel"
          className={bad.tel ? 'invalid' : ''} value={f.tel}
          onChange={(e) => set('tel', e.target.value.replace(/[^\d\s+()\-]/g, '').slice(0, 20))} />
      </div>
      <div className="field">
        <label htmlFor="servicio">¿Qué servicio te interesa?</label>
        <select id="servicio" value={f.servicio} onChange={(e) => set('servicio', e.target.value)}>
          <option value="">Selecciona una opción</option>
          <option>Agentes de IA (teléfono)</option>
          <option>Página web</option>
          <option>Consultoría de IA</option>
          <option>No estoy seguro, quiero asesoramiento</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="mensaje">Cuéntanos qué necesitas (opcional)</label>
        <textarea id="mensaje" maxLength={600} placeholder="Escribe aquí brevemente..."
          value={f.mensaje} onChange={(e) => set('mensaje', e.target.value)} />
      </div>

      {/* Honeypot anti-spam: oculto para personas */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="web">No rellenar</label>
        <input type="text" id="web" tabIndex={-1} autoComplete="off" value={f.hp} onChange={(e) => set('hp', e.target.value)} />
      </div>

      <div className="consent">
        <input type="checkbox" id="consent" checked={f.consent} onChange={(e) => set('consent', e.target.checked)} />
        <label htmlFor="consent">
          He leído y acepto la{' '}
          <button type="button" className="linklike" onClick={() => openLegal('privacidad')}>política de privacidad</button>{' '}
          y el tratamiento de mis datos para ser contactado. *
        </label>
      </div>

      <button type="submit" className="btn btn-cta" disabled={sending} style={sending ? { opacity: 0.7 } : undefined}>
        {sending ? 'Enviando...' : 'Pedir presupuesto →'}
      </button>
      <p className={`form-note${nota.error ? ' error' : ''}`} aria-live="polite">{nota.text}</p>
    </form>
  );
}
