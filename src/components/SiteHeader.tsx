import { SectionNav } from './SectionNav'

type SiteHeaderProps = {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

export function SiteHeader({ activeSection, onNavigate }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="site-header__inner">
        <div className="site-brand" aria-label="Himanshu Sharma home">
          Himanshu Sharma
        </div>

        <SectionNav activeSection={activeSection} onNavigate={onNavigate} />
      </div>
    </header>
  )
}
