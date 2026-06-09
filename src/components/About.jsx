export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="wrapper">
        <div className="two-col two-col--center">

          <div>
            <span className="section-eyebrow">// sobre mí</span>
            <h2 className="section-title">
              Desarrollo soluciones.<br />
              <span style={{ color: 'var(--color-text-muted)' }}>Resuelvo problemas.</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              <p>
                Empecé a programar por curiosidad. Hoy soy desarrollador por convicción. Me apasiona
                escribir código que aporte valor real, optimice procesos y mejore la experiencia de
                usuarios y equipos.
              </p>
              <p>
                Mi especialidad es Magento 2 — tanto temas Hyvä como customizaciones avanzadas — pero
                no me limito a eso. Construyo aplicaciones completas con React, Node.js y las
                herramientas que el proyecto necesite.
              </p>
              <p>
                Creo que el buen código nace de la comunicación clara, la escucha activa y el enfoque
                en soluciones reales.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="stat-row">
              <span className="stat-row__label">años de experiencia en Magento</span>
              <span className="stat-row__value">2.5+</span>
            </div>
            <div className="stat-row">
              <span className="stat-row__label">proyectos entregados</span>
              <span className="stat-row__value">10+</span>
            </div>
            <div className="stat-row">
              <span className="stat-row__label">nota Máster Full Stack & IA</span>
              <span className="stat-row__value">8.4</span>
            </div>
            <div className="card" style={{ marginTop: '8px' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-dim)', marginBottom: '16px' }}>
                // en constante aprendizaje
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Hyvä Themes', 'Magento 2', 'React', 'Docker', 'IA aplicada', 'Laravel'].map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
