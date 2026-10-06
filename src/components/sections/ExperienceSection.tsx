import { portfolio } from '../../content/portfolio'
import '../../styles/experience.css'

export function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading">
        <p className="section-kicker">Background</p>
        <h2>Experience</h2>
      </div>

      <div className="experience-section__timeline">
        {portfolio.experience.map((role) => (
          <article
            key={`${role.organization}-${role.title}`}
            className="experience-item"
          >
            <div className="experience-item__meta">
              <p className="experience-item__role">{role.title}</p>
              <p className="experience-item__company">{role.organization}</p>
              <p className="experience-item__dates">
                {role.startDate} — {role.endDate}
              </p>
            </div>

            <ul className="experience-item__list">
              {role.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
