import { personalInfo, partnerInfo } from '../data'

const inputStyle = {
  width: '100%',
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: '8px',
  padding: '14px 16px',
  fontSize: '0.875rem',
  color: 'var(--color-text)',
  fontFamily: 'var(--font-sans)',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="wrapper">
        <span className="section-eyebrow">// contacto</span>
        <h2 className="section-title">Hablemos</h2>
        <p className="section-subtitle">
          Abiertos a nuevos proyectos, colaboraciones y conversaciones que valgan la pena.
        </p>

        <div className="two-col">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <PersonContact
              name={personalInfo.name}
              role={personalInfo.role}
              email={personalInfo.email}
              linkedin={personalInfo.linkedin}
              github={personalInfo.github}
            />

            <PersonContact
              name={partnerInfo.name}
              role={partnerInfo.role}
              email={partnerInfo.email}
            />

            <div className="card" style={{ marginTop: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-green)', animation: 'pulse 2s infinite', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-green)' }}>
                  disponibles para proyectos
                </span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                León, España · Presencial / Híbrido / Remoto
              </p>
            </div>
          </div>

          <form
            onSubmit={e => {
              e.preventDefault()
              window.location.href = `mailto:${personalInfo.email}?subject=Contacto desde web`
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <input type="text" placeholder="Tu nombre" required style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.4)'}
                onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
              />
              <input type="email" placeholder="Tu email" required style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.4)'}
                onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
              />
            </div>
            <input type="text" placeholder="Asunto" style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.4)'}
              onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
            />
            <textarea
              placeholder="Cuéntanos sobre tu proyecto..."
              required rows={5}
              style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }}
              onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.4)'}
              onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
            />
            <button type="submit" style={{
              padding: '14px',
              background: 'var(--color-accent)', color: '#080c12',
              fontWeight: 600, fontSize: '0.875rem',
              border: 'none', borderRadius: '8px',
              cursor: 'pointer', transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-dim)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--color-accent)'}
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function PersonContact({ name, role, email, linkedin, github }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ marginBottom: '4px' }}>
        <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text)' }}>{name}</p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-dim)', marginTop: '2px' }}>{role}</p>
      </div>
      <ContactLink icon={<EmailIcon />} label="Email" value={email} href={`mailto:${email}`} />
      {linkedin && <ContactLink icon={<LinkedInIcon />} label="LinkedIn" value={name.split(' ')[0].toLowerCase()} href={linkedin} />}
      {github && <ContactLink icon={<GitHubIcon />} label="GitHub" value="github.com/daniel-dev" href={github} />}
    </div>
  )
}

function ContactLink({ icon, label, value, href }) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
      className="card--accent"
      style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', transition: 'border-color 0.2s' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
    >
      <div style={{
        width: '36px', height: '36px', flexShrink: 0,
        background: 'var(--color-surface-2)',
        border: '1px solid var(--color-border)',
        borderRadius: '8px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--color-text-muted)',
      }}>
        {icon}
      </div>
      <div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-text-dim)', marginBottom: '2px' }}>
          {label}
        </p>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text)' }}>{value}</p>
      </div>
    </a>
  )
}

function EmailIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}
