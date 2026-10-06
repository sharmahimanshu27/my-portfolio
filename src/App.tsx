import { useState } from 'react'
import { SiteHeader } from './components/SiteHeader'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { EducationSection } from './components/sections/EducationSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { IntroSection } from './components/sections/IntroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'
import './styles/global.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="app-shell">
      <SiteHeader activeSection={activeSection} onNavigate={setActiveSection} />

      <main id="main-content" className="page-main">
        <IntroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
