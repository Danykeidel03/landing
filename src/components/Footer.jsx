export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--color-border)', padding: '40px 0' }}>
      <div className="wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-accent)' }}>
          GridArt<span style={{ color: 'var(--color-text-dim)' }}> Studio</span>
        </span>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-dim)' }}>
          © {new Date().getFullYear()} Daniel Fernandez · Carlos Salamanca — León, España
        </p>
      </div>
    </footer>
  )
}
