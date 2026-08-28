export default function Cuervo() {
  return (
    <section className="section" id="cuervo">
      <div className="section-inner">
        <h2 className="section-title">Enviar un Cuervo Mensajero</h2>
        <p className="section-sub">Contacto</p>
        <form className="contact-form">
          <div className="field">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" placeholder="Tu nombre" className="interactive-hot" />
          </div>
          <div className="field">
            <label htmlFor="email">Correo</label>
            <input id="email" name="email" type="email" placeholder="tu@correo.com" className="interactive-hot" />
          </div>
          <div className="field">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Escribe tu mensaje..."
              className="interactive-hot"
            />
          </div>
          <button type="submit" className="btn btn-primary interactive-hot">
            Enviar cuervo mensajero →
          </button>
        </form>
        <div className="contact-alt">
          <a href="mailto:ivorrajosemaria@gmail.com" className="interactive-hot">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            Correo
          </a>
          <a href="https://github.com/Ivorra-1996" className="interactive-hot" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M5 3 2 8l3 5M11 3l3 5-3 5M9.5 2l-3 12"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Código
          </a>
          <a href="#" className="interactive-hot" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="5" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.3" />
              <circle cx="11" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.3" />
              <path d="M6.6 6.6l2.8 2.8" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            Perfil
          </a>
        </div>
      </div>
    </section>
  );
}
