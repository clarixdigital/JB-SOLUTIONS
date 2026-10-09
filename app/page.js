import Link from 'next/link';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>

<header className="hero" id="inicio">
  <div className="container hero-grid">
    <div className="hero-text reveal">
      <span className="badge"><span className="dot"></span> Agencia &amp; Consultora de Inteligencia Artificial</span>
      <h1>Llevamos la <span className="grad">Inteligencia Artificial</span> a tu negocio.</h1>
      <p className="lead">Agentes de voz que atienden tu teléfono, páginas web que convierten visitas en clientes y consultoría para automatizar lo que te quita tiempo. Todo en un solo sitio.</p>
      <div className="hero-cta">
        <Link href="/#servicios" className="btn btn-primary">Ver nuestros servicios →</Link>
        <Link href="/#contacto" className="btn btn-ghost">Pedir presupuesto</Link>
      </div>
      <div className="hero-trust">
        <div><span className="check">✓</span> Sin permanencia</div>
        <div><span className="check">✓</span> Soporte directo y cercano</div>
        <div><span className="check">✓</span> A medida de tu negocio</div>
      </div>
    </div>
    <div className="hero-visual reveal">
      <div className="call-stage">
      <div className="hero-blob"></div>
      <div className="float-pill pill-1"><span className="ico">📞</span> Llamada entrante</div>
      <div className="float-pill pill-2"><span className="ico">📅</span> Cita agendada</div>
      <svg className="flow-arrow arrow-1" width="46" height="46" viewBox="0 0 64 64" fill="none"><path d="M10 12 C 30 16, 46 26, 52 48" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/><path d="M52 48 L 39 46 M52 48 L 51 34" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/></svg>
      <svg className="flow-arrow arrow-2" width="46" height="46" viewBox="0 0 64 64" fill="none"><path d="M10 12 C 30 16, 46 26, 52 48" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/><path d="M52 48 L 39 46 M52 48 L 51 34" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/></svg>
      <div className="call-card">
        <div className="call-head">
          <div className="call-avatar">🤖</div>
          <div className="info"><b>Asistente JB</b><span>● En llamada</span></div>
        </div>
        <div className="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <div className="chat-line chat-ai">Hola, gracias por llamar. ¿En qué puedo ayudarte?</div>
        <div className="chat-line chat-user">Quería pedir cita para el jueves.</div>
        <div className="chat-line chat-ai">¡Claro! Tengo hueco el jueves a las 17:30. ¿Te viene bien?</div>
        <div className="booked"><span>✅</span> Cita confirmada · Jueves 17:30</div>
      </div>
      </div>
    </div>
  </div>
</header>


<section className="servicios" id="servicios">
  <div className="container">
    <div className="sec-head reveal">
      <span className="sec-tag">Nuestros servicios</span>
      <h2>Soluciones de IA para hacer crecer tu negocio</h2>
      <p>Elige por dónde empezar. Nuestro servicio estrella son los agentes de voz, pero podemos ayudarte en mucho más.</p>
    </div>
    <div className="serv-grid">
      <div className="serv-card destacado reveal">
        <span className="serv-badge"><span className="star">⭐</span> Servicio estrella</span>
        <div className="serv-ico">🤖</div>
        <h3>Agentes de IA</h3>
        <p className="serv-desc">Un asistente con voz natural que contesta tu teléfono, resuelve dudas y agenda citas las 24 horas, sin que tengas que parar de trabajar.</p>
        <ul className="serv-list">
          <li>Atiende llamadas 24/7, sin descansos</li>
          <li>Voz natural, sin sonar a robot</li>
          <li>Agenda citas en tu calendario</li>
          <li>Configurado a medida de tu negocio</li>
        </ul>
        <Link href="/#agentes" className="btn btn-ghost">Saber más</Link>
      </div>
      <div className="serv-card reveal">
        <div className="serv-ico">🌐</div>
        <h3>Páginas web</h3>
        <p className="serv-desc">Creamos la presencia digital que tu negocio necesita: webs modernas, rápidas y pensadas para convertir visitas en clientes.</p>
        <ul className="serv-list">
          <li>Diseño moderno y adaptado a móvil</li>
          <li>Optimizada para aparecer en Google</li>
          <li>Pensada para captar clientes</li>
          <li>Lista para integrar tu agente de IA</li>
        </ul>
        <Link href="/#contacto" className="btn btn-ghost">Pedir presupuesto</Link>
      </div>
      <div className="serv-card reveal">
        <div className="serv-ico">💡</div>
        <h3>Consultoría de IA</h3>
        <p className="serv-desc">Analizamos tu negocio y detectamos qué tareas se pueden automatizar para ahorrarte tiempo y dinero, más allá del teléfono.</p>
        <ul className="serv-list">
          <li>Diagnóstico de procesos automatizables</li>
          <li>Recordatorios y seguimiento de clientes</li>
          <li>Gestión de reseñas y mensajes</li>
          <li>Soluciones a medida, sin complicaciones</li>
        </ul>
        <Link href="/#contacto" className="btn btn-ghost">Pedir presupuesto</Link>
      </div>
    </div>
  </div>
</section>


<section className="problema" id="agentes">
  <div className="container">
    <div className="sec-head reveal">
      <span className="sec-tag">Agentes de IA · Servicio estrella</span>
      <h2>Mientras trabajas, el teléfono sigue sonando</h2>
      <p>En la mayoría de los negocios, quien atiende a los clientes es la misma persona que coge el teléfono. Y cada llamada sin contestar es una venta que se va a otro sitio.</p>
    </div>
    <p className="problema-note reveal">Con un agente de IA, cada llamada se convierte en <b>una cita confirmada y un cliente que no se te escapa</b> — y eso, al final de mes, se nota en la caja.</p>
  </div>
</section>


<section className="como" id="como">
  <div className="container">
    <div className="sec-head reveal">
      <span className="sec-tag">Cómo funciona</span>
      <h2>De la primera llamada a tu negocio automatizado</h2>
      <p>Un proceso sencillo y sin tecnicismos. Nosotros nos encargamos de la parte difícil.</p>
    </div>
    <div className="pasos">
      <div className="paso reveal"><div className="paso-num">1</div><div className="paso-conn"></div><h3>Diagnóstico</h3><p>Hablamos de tu negocio y vemos qué necesitas automatizar.</p></div>
      <div className="paso reveal"><div className="paso-num">2</div><div className="paso-conn"></div><h3>Demo en vivo</h3><p>Te enseñamos la solución funcionando para que lo compruebes tú mismo.</p></div>
      <div className="paso reveal"><div className="paso-num">3</div><div className="paso-conn"></div><h3>Implementación</h3><p>Lo configuramos a medida y lo dejamos listo en pocos días.</p></div>
      <div className="paso reveal"><div className="paso-num">4</div><h3>Soporte continuo</h3><p>Cualquier ajuste o duda, nos escribes y lo resolvemos rápido.</p></div>
    </div>
  </div>
</section>


<section id="porque">
  <div className="container">
    <div className="sec-head reveal">
      <span className="sec-tag">Por qué nosotros</span>
      <h2>Tecnología avanzada, trato de toda la vida</h2>
      <p>Detrás de cada proyecto hay personas cercanas que se implican de verdad en tu negocio.</p>
    </div>
    <div className="why-grid">
      <div className="why-card reveal"><div className="why-ico">🤝</div><div><h3>Trato cercano</h3><p>Hablas siempre con personas que conocen tu proyecto y se preocupan por él.</p></div></div>
      <div className="why-card reveal"><div className="why-ico">⚡</div><div><h3>Respuesta rápida</h3><p>Cuando necesitas algo, nos escribes y te respondemos enseguida.</p></div></div>
      <div className="why-card reveal"><div className="why-ico">🎯</div><div><h3>A medida, no de catálogo</h3><p>Una solución y un precio pensados para tu negocio concreto.</p></div></div>
      <div className="why-card reveal"><div className="why-ico">📄</div><div><h3>Sin letra pequeña</h3><p>Sin permanencias ni sorpresas. Si no te aporta valor, lo dejas.</p></div></div>
    </div>
  </div>
</section>


<section className="aquien" id="aquien">
  <div className="container">
    <div className="aquien-box reveal">
      <span className="sec-tag">A quién ayudamos</span>
      <h2>Si tu negocio puede automatizarse, podemos ayudarte</h2>
      <p>Trabajamos con negocios de cualquier tamaño y sector que quieren ahorrar tiempo, atender mejor a sus clientes y no perder ni una sola oportunidad.</p>
      <div className="tags">
        <span>Pymes y autónomos</span>
        <span>Empresas con atención al cliente</span>
        <span>Negocios con citas previas</span>
        <span>Servicios profesionales</span>
        <span>Cualquier sector</span>
      </div>
    </div>
  </div>
</section>


<section className="validado">
  <div className="container">
    <div className="validado-box reveal">
      <div className="validado-grid">
        <div className="validado-left">
          <h2>VALIDADO EN EL MERCADO REAL</h2>
          <p>Antes de lanzar JB Solutions, hablamos directamente con negocios reales para entender su día a día. El problema de las llamadas perdidas y las ganas de resolverlo nos lo confirmaron ellos mismos.</p>
        </div>
        <div className="validado-stats">
          <div className="vstat"><div className="n">8/10</div><p>asocian el teléfono sonando con estrés e interrupciones</p></div>
          <div className="vstat"><div className="n">86%</div><p>se interesaron por una solución que atienda el teléfono por ellos</p></div>
          <div className="vstat"><div className="n">+20</div><p>llamadas semanales que un negocio puede dejar sin atender</p></div>
          <div className="vstat"><div className="n">24/7</div><p>disponibilidad real que ningún recepcionista puede ofrecer</p></div>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="cta-final" id="contacto">
  <div className="container cta-grid">
    <div className="cta-left reveal">
      <h2>Pide tu presupuesto sin compromiso</h2>
      <p>Cuéntanos un poco sobre tu negocio y te preparamos una propuesta a medida. Sin coste y sin compromiso.</p>
      <ul className="cta-points">
        <li><span className="c">✓</span> Te respondemos en menos de 24 horas</li>
        <li><span className="c">✓</span> Demo en vivo para que lo veas funcionar</li>
        <li><span className="c">✓</span> Propuesta adaptada a tu negocio real</li>
      </ul>
    </div>
    <div className="form-card reveal">
      <ContactForm />
    </div>
  </div>
</section>


    </>
  );
}
