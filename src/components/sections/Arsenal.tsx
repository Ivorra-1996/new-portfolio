import { techStack } from '@/data/projects';

export default function Arsenal() {
  return (
    <section className="section" id="arsenal">
      <div className="section-inner">
        <h2 className="section-title">El Arsenal</h2>
        <p className="section-sub">Tecnologías + CV</p>
        <div className="tech-grid">
          {techStack.map((t) => (
            <span className="tech-chip" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="cv-block">
          <div>
            <h3>El Libro Rojo de la Frontera del Oeste</h3>
            <p>Tu curriculum, con todo lo forjado hasta ahora.</p>
          </div>
          <a href="/cv-jose-ivorra.pdf" className="btn btn-secondary interactive-hot" download>
            Descargar CV ↓
          </a>
        </div>
      </div>
    </section>
  );
}
