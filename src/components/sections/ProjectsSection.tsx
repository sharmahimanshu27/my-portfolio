import { portfolio } from '../../content/portfolio'
import '../../styles/projects.css'

export function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <p className="section-kicker">Selected work</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {portfolio.projects.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-card__header">
              <h3>{project.name}</h3>
            </div>

            <p className="project-card__summary">{project.summary}</p>

            <ul className="project-card__list">
              {project.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div
              className="tech-stack"
              aria-label={`${project.name} technologies`}
            >
              {project.technologies.map((technology) => (
                <span key={technology} className="tech-chip">
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
