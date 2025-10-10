import style from './Projects.module.css';

const Projects = () => {
  return (
    <div className={style.contentProjects}>
      <div className={style.descriptionProjects}>
        <div className={style.title}>
          <h2>My Projects</h2>
        </div>
        <section className={style.layout}>
          <div className={style.projectCard}>
            <img src='Sauron.png' alt='Sauron dibujo en papel viejo' />
            <h3>Lavado de manos</h3>
            <p>Este es un proyectos de lavados de manos que sirve para mejorar la trazabilidad y control del lavado.</p>
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>9</div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
