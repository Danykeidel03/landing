const values = [
  {
    icon: '💻',
    title: 'Desarrollo web profesional',
    desc: 'Tiendas, webs y aplicaciones que funcionan y se ven bien en cualquier pantalla.',
  },
  {
    icon: '🎨',
    title: 'Identidad y dirección creativa',
    desc: 'Marca, imagen corporativa y narrativa visual con propósito y coherencia.',
  },
  {
    icon: '🤝',
    title: 'Tech y diseño bajo el mismo techo',
    desc: 'Sin fricción entre lo visual y lo técnico. Del concepto al resultado final.',
  },
]

export default function Hero() {
  return (
    <section id="top" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrapper" style={{ paddingBlock: '120px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-green)', flexShrink: 0, animation: 'pulse 2s infinite' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-green)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                disponibles para nuevos proyectos
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
              <span style={{ color: 'var(--color-text)', display: 'block' }}>Tech y diseño,</span>
              <span style={{ color: 'var(--color-accent)', display: 'block' }}>todo en uno.</span>
            </h1>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '16px', maxWidth: '440px' }}>
              Somos Daniel y Carlos — desarrollo web profesional y dirección creativa en un mismo equipo, para negocios que necesitan las dos cosas.
            </p>

            <p style={{ color: 'var(--color-text-dim)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '40px', maxWidth: '400px' }}>
              Sin intermediarios entre la idea y la pantalla. Sin separar lo visual de lo funcional.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href="#contact" style={{
                padding: '14px 32px',
                background: 'var(--color-accent)', color: '#080c12',
                fontWeight: 700, fontSize: '0.95rem',
                borderRadius: '8px', textDecoration: 'none',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-dim)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--color-accent)'}
              >
                Hablemos →
              </a>
              <a href="#projects" style={{
                padding: '14px 28px',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text)', fontWeight: 500, fontSize: '0.95rem',
                borderRadius: '8px', textDecoration: 'none',
                transition: 'border-color 0.2s, background 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-border-2)'; e.currentTarget.style.background = 'var(--color-surface)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.background = 'transparent' }}
              >
                Ver proyectos
              </a>
            </div>
          </div>

          {/* Right — value props */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {values.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '20px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '14px',
                padding: '24px 28px',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.25)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                <span style={{ fontSize: '1.6rem', lineHeight: 1, flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text)', marginBottom: '6px' }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '16px 24px',
              background: 'rgba(63,185,80,0.06)',
              border: '1px solid rgba(63,185,80,0.2)',
              borderRadius: '10px',
              marginTop: '4px',
            }}>
              <span style={{ fontSize: '1.1rem' }}>💬</span>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--color-text)' }}>Primera consulta gratis.</strong>{' '}
                Cuéntanos tu proyecto y te decimos exactamente qué necesitas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
