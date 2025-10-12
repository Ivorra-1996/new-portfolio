import styles from './Paragraph.module.css';

interface ParagraphProps {
  currentCategory: string;
  setCategory: (page: string) => void;
}

const Paragraph: React.FC<ParagraphProps> = ({ currentCategory, setCategory }) => {
  const selectType = (type: string) => {
    setCategory(type);
  };

  return (
    <div className={styles.filterList}>
      <p
        className={`${styles.paragraph} ${currentCategory === 'Todo' ? styles.active : ''}`}
        onClick={() => selectType('Todo')}>
        Todo
      </p>
      <p
        className={`${styles.paragraph} ${currentCategory === 'Frontend' ? styles.active : ''}`}
        onClick={() => selectType('Frontend')}>
        Frontend
      </p>
      <p
        className={`${styles.paragraph} ${currentCategory === 'Backend' ? styles.active : ''}`}
        onClick={() => selectType('Backend')}>
        Backend
      </p>
      <p
        className={`${styles.paragraph} ${currentCategory === 'Fullstack' ? styles.active : ''}`}
        onClick={() => selectType('Fullstack')}>
        Fullstack
      </p>
      <p
        className={`${styles.paragraph} ${currentCategory === 'Aplicaciones' ? styles.active : ''}`}
        onClick={() => selectType('Aplicaciones')}>
        Aplicaciones
      </p>
    </div>
  );
};

export default Paragraph;
