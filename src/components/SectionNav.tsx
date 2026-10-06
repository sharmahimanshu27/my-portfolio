import './../styles/navigation.css'

type SectionNavProps = {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export function SectionNav({ activeSection, onNavigate }: SectionNavProps) {
  return (
    <nav className="section-nav" aria-label="Main navigation">
      <ul className="section-nav__list">
        {sections.map(({ id, label }) => (
          <li key={id} className="section-nav__item">
            <a
              href={`#${id}`}
              className="section-nav__link"
              aria-current={activeSection === id ? 'page' : undefined}
              data-current={activeSection === id ? 'true' : 'false'}
              onClick={() => onNavigate(id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
