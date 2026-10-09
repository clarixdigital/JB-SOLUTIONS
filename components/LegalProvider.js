'use client';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { SITE } from '../lib/site';

const LegalContext = createContext({ openLegal: () => {}, closeLegal: () => {} });
export const useLegal = () => useContext(LegalContext);

function Aviso() {
  return (
    <div className="legal-content">
      <h2>Aviso legal</h2>
      <p className="modal-date">Última actualización: 2026</p>
      <h3>1. Datos del titular</h3>
      <p>El presente sitio web es titularidad de {SITE.name} (en adelante, "el Titular"), con domicilio en {SITE.address}, y NIF {SITE.nif}. Puedes contactar a través del correo {SITE.email}.</p>
      <h3>2. Objeto</h3>
      <p>Este sitio tiene como finalidad ofrecer información sobre los servicios de automatización e inteligencia artificial prestados por el Titular, así como facilitar el contacto con clientes potenciales.</p>
      <h3>3. Propiedad intelectual</h3>
      <p>Todos los contenidos del sitio (textos, diseño, logotipos y código) son propiedad del Titular o se utilizan con autorización, y quedan protegidos por la normativa de propiedad intelectual. Queda prohibida su reproducción sin consentimiento.</p>
      <h3>4. Responsabilidad</h3>
      <p>El Titular no se hace responsable del mal uso de los contenidos ni de los daños derivados del acceso al sitio. Se reserva el derecho a modificar la información en cualquier momento.</p>
    </div>
  );
}

function Privacidad() {
  return (
    <div className="legal-content">
      <h2>Política de privacidad</h2>
      <p className="modal-date">Última actualización: 2026</p>
      <h3>1. Responsable del tratamiento</h3>
      <p>{SITE.name}, con NIF {SITE.nif} y correo de contacto {SITE.email}, es responsable del tratamiento de los datos que nos facilites a través de este sitio.</p>
      <h3>2. Datos que recogemos y finalidad</h3>
      <p>A través del formulario de contacto recogemos tu nombre, email y, opcionalmente, teléfono, nombre de negocio y la información que nos escribas. La finalidad es únicamente atender tu solicitud de presupuesto y ponernos en contacto contigo.</p>
      <h3>3. Legitimación</h3>
      <p>La base legal es tu consentimiento, que otorgas al marcar la casilla de aceptación y enviar el formulario.</p>
      <h3>4. Conservación y cesión</h3>
      <p>Conservamos tus datos el tiempo necesario para gestionar tu solicitud y no los cedemos a terceros, salvo obligación legal. El envío del formulario se gestiona a través del proveedor Formspree, que actúa como encargado del tratamiento.</p>
      <h3>5. Tus derechos</h3>
      <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {SITE.email}. También puedes reclamar ante la Agencia Española de Protección de Datos (AEPD).</p>
    </div>
  );
}

function Cookies() {
  return (
    <div className="legal-content">
      <h2>Política de cookies</h2>
      <p className="modal-date">Última actualización: 2026</p>
      <h3>1. Qué son las cookies</h3>
      <p>Las cookies son pequeños archivos que un sitio web guarda en tu dispositivo para recordar información sobre tu visita.</p>
      <h3>2. Cookies que utilizamos</h3>
      <p>Este sitio es una web informativa y no utiliza cookies de seguimiento ni publicidad propias. En caso de incorporar en el futuro herramientas de analítica, se actualizará esta política y se solicitará tu consentimiento previo.</p>
      <h3>3. Gestión de cookies</h3>
      <p>Puedes configurar o bloquear las cookies desde los ajustes de tu navegador en cualquier momento.</p>
    </div>
  );
}

const TEXTOS = { aviso: Aviso, privacidad: Privacidad, cookies: Cookies };

export default function LegalProvider({ children }) {
  const [tipo, setTipo] = useState(null);
  const openLegal = useCallback((t) => setTipo(t), []);
  const closeLegal = useCallback(() => setTipo(null), []);

  useEffect(() => {
    if (!tipo) return;
    const onKey = (e) => e.key === 'Escape' && setTipo(null);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [tipo]);

  const Contenido = tipo ? TEXTOS[tipo] : null;

  return (
    <LegalContext.Provider value={{ openLegal, closeLegal }}>
      {children}
      {Contenido && (
        <div
          className="modal-overlay"
          onClick={(e) => e.target === e.currentTarget && closeLegal()}
        >
          <div className="modal" role="dialog" aria-modal="true">
            <button className="modal-close" aria-label="Cerrar" onClick={closeLegal}>×</button>
            <Contenido />
          </div>
        </div>
      )}
    </LegalContext.Provider>
  );
}
