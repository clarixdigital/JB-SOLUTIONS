import Link from 'next/link';

export const metadata = {
  title: 'Sobre nosotros',
  description:
    'Hacemos la Inteligencia Artificial fácil para tu negocio: visión de negocio y dominio técnico en un solo equipo.',
};

export default function SobreNosotros() {
  return (
    <section className="sobre" id="sobre">
      <div className="container sobre-page">
        <Link className="volver" href="/">← Volver al inicio</Link>
        <span className="sec-tag">Sobre nosotros</span>
        <h1>Hacemos la Inteligencia Artificial fácil para tu negocio</h1>
        <p>En JB Solutions ayudamos a las empresas a dar el salto a la inteligencia artificial sin complicaciones ni grandes inversiones. Lo que para muchos suena a tecnología lejana, nosotros lo convertimos en herramientas prácticas que te ahorran tiempo y te ayudan a vender más.</p>
        <p>Unimos la <b>visión de negocio</b> con el <b>dominio de la tecnología</b>. Esa combinación nos permite entender no solo cómo se construye una solución de IA, sino qué necesita de verdad tu empresa para funcionar mejor.</p>
        <p>Trabajamos cerca de ti, con un trato directo y soluciones pensadas para tu caso concreto. Tú te centras en lo que sabes hacer; nosotros, en la tecnología.</p>
        <div className="sobre-visual reveal">
          <div className="fusion-wrap">
            <div className="fcircle a"><div className="c-inner"><span className="c-ico">📊</span><b>Visión de negocio</b></div></div>
            <div className="fcircle b"><div className="c-inner"><span className="c-ico">🤖</span><b>Dominio técnico</b></div></div>
            <div className="fusion-core">JB</div>
          </div>
          <p className="fusion-caption">Donde se cruzan el <b>negocio</b> y la <b>tecnología</b> está lo que nos hace diferentes.</p>
        </div>
      </div>
    </section>
  );
}
