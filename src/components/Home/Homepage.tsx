import style from './Home.module.css';

const Homepage = () => {
  return (
    <div className={style.homepageContainer}>
      <div className={style.imageContainer}>
        <img src='Sauron.png' alt='Sauron dibujo en papel viejo' width={880} />
        <div className={style.textContainer}>
          <div className={style.presentation}>
            <h1>Ivorra Jose</h1>
            <p>Desarrollador Frontend | React | Next.js | JavaScript | TypeScript</p>
            <button>Ver proyectos</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
