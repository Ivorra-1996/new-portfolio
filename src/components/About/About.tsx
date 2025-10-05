import style from './About.module.css';

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.title}>
        <h2>About Me</h2>
      </div>
      <div>
        <div>
          {/* <img src='' alt='' /> */}
          <div className={style.text}>
            <p>
              Forjado en el fuego del Monte del Destino, soy diseñador y desarrollador apasionado por crear experiencias
              digitales oscuras e inmersivas que transportan a los usuarios a reinos fantásticos.
            </p>
            <p>
              Con más de una década de experiencia en la creación de sitios web y aplicaciones para clientes de toda la
              Tierra Media, me especializo en estética gótica y medieval que combina tradiciones antiguas con
              funcionalidad moderna.
            </p>
            <p>
              Mi trabajo se inspira en los reinos legendarios de Tolkien y las atmósferas oscuras de juegos como Diablo
              y Dark Souls, creando experiencias digitales tan hermosas como evocadoras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
