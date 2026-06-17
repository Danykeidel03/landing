import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="wrapper">
        <span className="section-eyebrow">// servicios</span>
        <h2 className="section-title">¿En qué puedo ayudarte?</h2>
        <p className="section-subtitle">
          Desarrollo soluciones informáticas a medida en León, desde tiendas Magento hasta aplicaciones web completas.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '64px' }}>
          {services.map(service => (
            <div key={service.title} className="card card--accent" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontSize: '1.5rem' }}>{service.icon}</span>
              <h3 style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text)', lineHeight: 1.4 }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-2) 100%)',
          border: '1px solid var(--color-border)',
          borderRadius: '16px',
          padding: '56px',
          textAlign: 'center',
        }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '12px' }}>
            ¿Tienes un proyecto en mente?
          </h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px', maxWidth: '400px', marginInline: 'auto' }}>
            Cuéntame qué necesitas y te digo si puedo ayudarte.
          </p>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 28px',
            background: 'var(--color-accent)', color: '#080c12',
            fontWeight: 600, fontSize: '0.875rem',
            borderRadius: '8px', textDecoration: 'none',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-dim)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--color-accent)'}
          >
            Empezar conversación
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
