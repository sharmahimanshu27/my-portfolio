import { portfolio } from '../../content/portfolio'
import '../../styles/about.css'

export function AboutSection() {
  const { owner } = portfolio

  return (
    <section id="about" className="section about-section">
      <div className="section-heading">
        <p className="section-kicker">Profile</p>
        <h2>About</h2>
      </div>

      <div className="about-section__body">
        <p>{owner.summary}</p>
        <p>
          I focus on building interfaces that are responsive, accessible, and
          easy to use, with a strong emphasis on React.js, JavaScript, and
          TypeScript.
        </p>
      </div>
    </section>
  )
}
