import { portfolio } from '../../content/portfolio'
import '../../styles/skills.css'

export function SkillsSection() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <p className="section-kicker">Core strengths</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {portfolio.skills.map((group) => (
          <div key={group.category} className="skill-group">
            <h3>{group.category}</h3>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
