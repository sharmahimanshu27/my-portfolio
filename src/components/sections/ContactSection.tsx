import { portfolio } from '../../content/portfolio'
import '../../styles/contact.css'

export function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading">
        <p className="section-kicker">Get in touch</p>
        <h2>Contact</h2>
      </div>

      <ul className="contact-list">
        {portfolio.contact.map((item) => (
          <li key={item.label} className="contact-list__item">
            <a
              href={item.href}
              target={item.label === 'LinkedIn' ? '_blank' : undefined}
              rel={item.label === 'LinkedIn' ? 'noreferrer' : undefined}
            >
              {item.label}
            </a>
            <span>{item.destination}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
