import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IntroSection } from './IntroSection'

describe('IntroSection', () => {
  it('renders the owner identity and primary call to action', () => {
    render(<IntroSection />)

    expect(
      screen.getByRole('heading', { name: /himanshu sharma/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/frontend developer/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/react\.js/i)).toBeInTheDocument()
    expect(screen.getByText(/bengaluru, karnataka/i)).toBeInTheDocument()
    expect(screen.getByText(/open to opportunities/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact me/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
