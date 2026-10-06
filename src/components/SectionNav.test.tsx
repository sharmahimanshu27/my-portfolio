import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionNav } from './SectionNav'

describe('SectionNav', () => {
  it('renders same-page section links with a current section state', () => {
    render(<SectionNav activeSection="about" onNavigate={() => undefined} />)

    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute(
      'href',
      '#about',
    )
    expect(screen.getByRole('link', { name: /experience/i })).toHaveAttribute(
      'href',
      '#experience',
    )
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })
})
