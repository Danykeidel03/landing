import { useState, useEffect } from 'react'

const links = [
  { label: 'equipo', href: '#about' },
  { label: 'proyectos', href: '#projects' },
  { label: 'experiencia', href: '#experience' },
  { label: 'servicios', href: '#services' },
  { label: 'contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      backgroundColor: scrolled ? 'rgba(8,12,18,0.95)' : 'rgba(8,12,18,0.6)',
      backdropFilter: 'blur(12px)',
      transition: 'background-color 0.3s, border-color 0.3s',
    }}>
      <nav className="wrapper" style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <a href="#top" style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.05em', color: 'var(--color-accent)', textDecoration: 'none' }}>
          jk<span style={{ color: 'var(--color-text-dim)' }}>.studio</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }}
          className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                color: 'var(--color-text-muted)', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--color-accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" style={{
          display: 'inline-flex', alignItems: 'center',
          padding: '8px 18px',
          fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 500,
          color: 'var(--color-accent)',
          border: '1px solid rgba(0,212,255,0.35)',
          borderRadius: '6px',
          textDecoration: 'none',
          transition: 'background 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,212,255,0.08)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          className="nav-cta"
        >
          Hablemos
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', padding: '4px' }}
          className="nav-toggle"
          aria-label="Toggle menu">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </nav>

      {open && (
        <div style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', padding: '20px 0' }}>
          <ul className="wrapper" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.875rem',
                  color: 'var(--color-text-muted)', textDecoration: 'none',
                }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
