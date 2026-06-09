import { experience, education } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="wrapper">
        <span className="section-eyebrow">// trayectoria</span>
        <h2 className="section-title">Experiencia & Formación</h2>
        <p className="section-subtitle">
          Más de 2 años especializándome en Magento 2, combinando trabajo real con formación continua.
        </p>

        <div className="two-col">
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#ffa657' }}>▸</span> experiencia laboral
            </p>
            <div className="timeline" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {experience.map(item => (
                <ExperienceItem key={item.company} item={item} />
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#79c0ff' }}>▸</span> formación
            </p>
            <div className="timeline" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {education.map(item => (
                <EducationItem key={item.institution} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ item }) {
  return (
    <div style={{ position: 'relative' }}>
      <div className={`timeline-dot${item.current ? ' timeline-dot--active' : ''}`} />
      <div className="card card--accent" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
          <div>
            <h4 style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text)', marginBottom: '4px' }}>
              {item.role}
            </h4>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-accent)' }}>
              {item.company}
            </p>
          </div>
          {item.current && (
            <span style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
              color: 'var(--color-green)',
              background: 'rgba(63,185,80,0.08)',
              border: '1px solid rgba(63,185,80,0.2)',
              padding: '3px 10px', borderRadius: '20px',
              whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-green)', animation: 'pulse 2s infinite' }} />
              actual
            </span>
          )}
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-text-dim)' }}>
          {item.period} · {item.type}
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
          {item.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '8px', borderTop: '1px solid var(--color-border)' }}>
          {item.tech.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </div>
  )
}

function EducationItem({ item }) {
  return (
    <div style={{ position: 'relative' }}>
      <div className="timeline-dot" />
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
          <h4 style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text)' }}>
            {item.degree}
          </h4>
          {item.grade && (
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
              color: '#ffa657', background: 'rgba(255,166,87,0.08)',
              border: '1px solid rgba(255,166,87,0.2)',
              padding: '3px 10px', borderRadius: '20px',
              whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              {item.grade}
            </span>
          )}
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-accent)' }}>
          {item.institution}
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-text-dim)' }}>
          {item.period}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '8px', borderTop: '1px solid var(--color-border)' }}>
          {item.highlights.map(h => <span key={h} className="tag">{h}</span>)}
        </div>
      </div>
    </div>
  )
}
