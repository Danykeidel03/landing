import { personalInfo, partnerInfo } from '../data'

function MemberCard({ member, stats }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        {member.image && (
          <div style={{ marginBottom: '20px' }}>
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: '88px',
                height: '88px',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                border: '2px solid var(--color-border)',
              }}
            />
          </div>
        )}
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-dim)', marginBottom: '8px' }}>
          // {member.role}
        </p>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '6px' }}>
          {member.name}
        </h3>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent)', marginBottom: '16px' }}>
          {member.specialty}
        </p>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.9rem' }}>
          {member.description}
        </p>
      </div>

      {stats && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {stats.map((s, i) => (
            <div key={i} className="stat-row">
              <span className="stat-row__label">{s.label}</span>
              <span className="stat-row__value">{s.value}</span>
            </div>
          ))}
        </div>
      )}

      <div className="card">
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-dim)', marginBottom: '12px' }}>
          // especialidades
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {(member.tags ?? []).map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const danielStats = [
    { label: 'Años de experiencia en Magento', value: '2.5+' },
    { label: 'Proyectos entregados', value: '10+' },
    { label: 'Nota Máster Full Stack & IA', value: '8.4' },
  ]

  return (
    <section id="about" className="section section--alt">
      <div className="wrapper">
        <span className="section-eyebrow">// el equipo</span>
        <h2 className="section-title">
          Dos perfiles.<br />
          <span style={{ color: 'var(--color-text-muted)' }}>Un resultado.</span>
        </h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '560px', marginBottom: '56px' }}>
          Unimos desarrollo técnico y dirección creativa para entregar proyectos completos, coherentes y con identidad propia.
        </p>

        <div className="two-col">
          <MemberCard
            member={personalInfo}
            stats={danielStats}
          />
          <MemberCard
            member={partnerInfo}
          />
        </div>
      </div>
    </section>
  )
}
