import { portfolio } from '../../content/portfolio'
import '../../styles/intro.css'

export function IntroSection() {
  const { owner } = portfolio

  return (
    <section id="intro" className="section intro-section">
      <div className="intro-section__content">
        <p className="eyebrow">Frontend Developer</p>
        <h1>{owner.name}</h1>
        <p className="intro-section__title">{owner.role}</p>
        <p className="intro-section__specialties">
          {owner.specialties.join(' / ')}
        </p>

        <div className="intro-section__meta" aria-label="Owner overview">
          <span>{owner.location}</span>
          <span>{owner.availability}</span>
        </div>

        <p className="intro-section__summary">{owner.summary}</p>

        <div className="intro-section__actions">
          <a href="#contact" className="button button--primary">
            Contact me
          </a>
          <a href="#projects" className="button button--secondary">
            View projects
          </a>
        </div>
      </div>
    </section>
  )
}
