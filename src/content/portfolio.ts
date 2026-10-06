export type OwnerProfile = {
  name: string
  role: string
  specialties: string[]
  summary: string
  location: string
  availability: string
}

export type ExperienceRecord = {
  organization: string
  title: string
  startDate: string
  endDate: string
  contributions: string[]
}

export type ProjectRecord = {
  name: string
  summary: string
  contributions: string[]
  technologies: string[]
}

export type SkillGroup = {
  category: string
  skills: string[]
}

export type EducationRecord = {
  qualification: string
  institution: string
}

export type ContactDestination = {
  label: string
  destination: string
  href: string
}

export const portfolio = {
  owner: {
    name: 'Himanshu Sharma',
    role: 'Frontend Developer',
    specialties: ['React.js', 'JavaScript', 'TypeScript'],
    summary:
      'Frontend Developer with 2.5+ years of experience building responsive, product-focused web interfaces using React and modern frontend workflows.',
    location: 'Bengaluru, Karnataka',
    availability: 'Open to opportunities',
  } satisfies OwnerProfile,
  experience: [
    {
      organization: 'Brioso Technologies',
      title: 'Frontend Developer',
      startDate: 'March 2025',
      endDate: 'August 2026',
      contributions: [
        'Developed responsive user interfaces and reusable components for business-facing web experiences.',
        'Worked closely with design and backend teams to translate product requirements into polished frontend flows.',
        'Improved consistency and maintainability through structured UI patterns and clean component logic.',
      ],
    },
    {
      organization: 'Logic Junior',
      title: 'Frontend Developer / Software Engineer',
      startDate: 'December 2023',
      endDate: 'March 2025',
      contributions: [
        'Built interactive dashboards and customer-facing features using React-based architecture.',
        'Handled data-driven UI state, form validation, and debugging across multiple application modules.',
        'Contributed to responsive design implementation and maintainable frontend code across products.',
      ],
    },
  ] satisfies ExperienceRecord[],
  projects: [
    {
      name: 'Clinic Appointment Booking System',
      summary:
        'A clinic booking platform designed to simplify appointment scheduling for patients and staff with a streamlined workflow.',
      contributions: [
        'Built the appointment booking flow for patients and clinic staff to manage schedules efficiently.',
        'Created a clean, state-driven interface for viewing and managing booking data across the product.',
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    },
    {
      name: 'AI Data Management Platform',
      summary:
        'A platform for managing structured and unstructured data workflows with an emphasis on upload continuity and operational clarity.',
      contributions: [
        'Developed interface flows for structured and unstructured data handling across the platform.',
        'Implemented resumable upload interactions and clear data management states for a better user experience.',
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'REST APIs'],
    },
  ] satisfies ProjectRecord[],
  skills: [
    {
      category: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
      category: 'Frontend',
      skills: [
        'React.js',
        'React Hooks',
        'Redux',
        'React Router',
        'Context API',
      ],
    },
    {
      category: 'UI & Styling',
      skills: ['Tailwind CSS', 'Bootstrap', 'Material UI', 'Responsive Design'],
    },
    { category: 'API & Integration', skills: ['REST APIs', 'Axios', 'JSON'] },
    {
      category: 'Development',
      skills: [
        'Reusable Components',
        'State Management',
        'Form Handling',
        'Validation',
        'Error Handling',
        'Debugging',
      ],
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'Postman', 'Chrome DevTools'],
    },
  ] satisfies SkillGroup[],
  education: {
    qualification: 'Bachelor of Technology, Computer Science & Engineering',
    institution: 'Chouksey Engineering College',
  } satisfies EducationRecord,
  contact: [
    {
      label: 'Email',
      destination: 'sharmah665@gmail.com',
      href: 'mailto:sharmah665@gmail.com',
    },
    {
      label: 'LinkedIn',
      destination: 'https://www.linkedin.com/in/himanshusharma-7ab80b2a6',
      href: 'https://www.linkedin.com/in/himanshusharma-7ab80b2a6',
    },
  ] satisfies ContactDestination[],
} as const
