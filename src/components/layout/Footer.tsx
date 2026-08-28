export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ marginBottom: 24 }}>
        <SectionDividerInline />
      </div>
      <p className="footer-line">&quot;No todo lo que es oro reluce, pero este código sí compila.&quot;</p>
      <p className="footer-copy">
        © {new Date().getFullYear()} José Ivorra — estética con guiño a la Tierra Media, sin afiliación oficial.
      </p>
    </footer>
  );
}

function SectionDividerInline() {
  return (
    <div className="divider" style={{ display: 'flex', alignItems: 'center', gap: 14, maxWidth: 1100, margin: '0 auto' }}>
      <span style={{ flex: 1, height: 1, background: 'var(--stone-2)', opacity: 0.6 }} />
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: 'var(--stone-2)', opacity: 0.6 }}>
        <rect x="2" y="2" width="10" height="10" transform="rotate(45 7 7)" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <span style={{ flex: 1, height: 1, background: 'var(--stone-2)', opacity: 0.6 }} />
    </div>
  );
}
