export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-kicker">Forjado en las fraguas del código</p>
        <h1 className="hero-name">José Ivorra</h1>
        <p className="hero-role">Desarrollador Frontend</p>
        <p className="hero-tagline">
          Construyo interfaces sólidas línea por línea, con la misma paciencia con la que se forja un arma legendaria.
        </p>
        <div className="hero-actions">
          <a href="#artefactos" className="btn btn-primary interactive-hot">
            Ver los artefactos forjados →
          </a>
        </div>
      </div>
      <div className="ring-legend" aria-hidden="true">
        <div className="ring-legend-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="7.2" stroke="currentColor" strokeWidth="2.2" />
          </svg>
          <span>El Anillo en reposo</span>
        </div>
        <div className="ring-legend-item hot">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="7.2" stroke="currentColor" strokeWidth="2.2" />
          </svg>
          <span>Al acercarse al fuego</span>
        </div>
      </div>
    </section>
  );
}
