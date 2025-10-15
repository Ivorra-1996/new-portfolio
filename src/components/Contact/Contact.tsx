import style from './Contact.module.css';

const Contact = () => {
  return (
    <div className={style.ContactContainer}>
      <div className={style.descriptionContainer}>
        <div className={style.title}>
          <h2>Contact</h2>
        </div>
        <div className={style.description}>
          <div className={style.contactInfo}>
            {/* Agregar la imagen correcta de Gmail medieval */}
            <a href='mailto:ivorrajosemaria@gmail.com' target='_blank'>
              <img src='/LinkedIn.png' alt='Logo de Gmail medieval' />
            </a>
          </div>
          <div className={style.contactInfo}>
            <a href='https://github.com/Ivorra-1996' target='_blank'>
              <img src='/Github.png' alt='Logo de Github medieval' />
            </a>
          </div>
          <div className={style.contactInfo}>
            <a href='https://www.linkedin.com/in/josemariaivorra/' target='_blank'>
              <img src='/LinkedIn.png' alt='Logo de LinkedIn medieval' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
