'use client';
import { useState } from 'react';
import proyectos from '../../../projects/Projects';
// import { NotProjects } from './components/NotProjects';
import { FaRegEye } from 'react-icons/fa';
import { NotProjects } from '../NotProjects';
import { Images } from './components/Image';
import { Paragraph } from './components/Paragraph/index';
import style from './Projects.module.css';

const Projects = () => {
  const [currentCategory, setCategory] = useState('Todo');

  const filteredProjects = proyectos.filter((project) => {
    const matchCategory = currentCategory === 'Todo' || project.category === currentCategory;
    return matchCategory;
  });

  return (
    <div className={style.projectsContainer}>
      <div className={style.descriptionContainer}>
        <div className={style.title}>
          <h2>Projects</h2>
        </div>
        <div>
          <Paragraph currentCategory={currentCategory} setCategory={setCategory} />
          {filteredProjects.length > 0 ? (
            <div className={style.projectList}>
              {filteredProjects.map((project, index) => (
                <div key={index} className={`${style.projectItem} ${style.active}`}>
                  <a href={project.link}>
                    <div className={style.projectImg}>
                      <div className={style.projectItemIconBox}>
                        <FaRegEye name='eye' />
                      </div>
                      <Images src={project.image} alt={project.title} />
                    </div>
                    <h2 className={style.projectTitle}>{project.title}</h2>
                    <p className={style.projectDescription}>{project.description}</p>
                    <div className={style.content}>
                      {Array.isArray(project.technology) ? (
                        project.technology.map((tech, techIndex) => (
                          <p key={techIndex} className={style.technology}>
                            {tech}
                          </p>
                        ))
                      ) : (
                        <p className={style.technology}>{project.technology}</p>
                      )}
                    </div>
                    <p className={style.projectCategory}>{project.category}</p>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <NotProjects />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
