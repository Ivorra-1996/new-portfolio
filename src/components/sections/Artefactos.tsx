'use client';

import { useState } from 'react';
import { filters, projects } from '@/data/projects';
import ProjectArt from './ProjectArt';

export default function Artefactos() {
  const [active, setActive] = useState('all');
  const visible = projects.filter((p) => active === 'all' || p.tech.includes(active));

  return (
    <section className="section" id="artefactos">
      <div className="section-inner">
        <h2 className="section-title">Los Artefactos Forjados</h2>
        <p className="section-sub">Proyectos</p>

        <div className="filter-bar" role="group" aria-label="Filtrar por tecnología">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              className={`filter-chip interactive-hot${active === f.value ? ' is-active' : ''}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((project) => (
            <article className="project-card interactive-hot" key={project.title}>
              <ProjectArt icon={project.icon} />
              <div className="project-tag">{project.tag}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                Ver repositorio →
              </a>
            </article>
          ))}
          <article className="project-card project-card--ghost interactive-hot">
            <h3>Ver más artefactos</h3>
            <p>El resto de las forjas descansa en el repositorio.</p>
            <a href="https://github.com/Ivorra-1996" className="project-link" target="_blank" rel="noreferrer">
              Ir a GitHub →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
