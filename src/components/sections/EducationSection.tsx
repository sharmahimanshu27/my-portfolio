import { portfolio } from '../../content/portfolio'
import '../../styles/education.css'

export function EducationSection() {
  return (
    <section id="education" className="section education-section">
      <div className="section-heading">
        <p className="section-kicker">Academic background</p>
        <h2>Education</h2>
      </div>

      <div className="education-card">
        <p className="education-card__qualification">
          {portfolio.education.qualification}
        </p>
        <p className="education-card__institution">
          {portfolio.education.institution}
        </p>
      </div>
    </section>
  )
}
