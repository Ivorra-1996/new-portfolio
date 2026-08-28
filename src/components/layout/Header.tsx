import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <nav className="nav-links nav-links-left">
          <a href="#viajero" className="interactive-hot">
            El Viajero
          </a>
          <a href="#artefactos" className="interactive-hot">
            Los Artefactos
          </a>
        </nav>
        <a href="#hero" className="nav-eye-mark interactive-hot" aria-label="Inicio">
          <div className="nav-eye-glow" />
          <div className="nav-eye-pupil" id="eyePupil" />
        </a>
        <div className="nav-links nav-links-right">
          <nav className="nav-links">
            <a href="#arsenal" className="interactive-hot">
              El Arsenal
            </a>
            <a href="#cuervo" className="interactive-hot">
              Cuervo Mensajero
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
