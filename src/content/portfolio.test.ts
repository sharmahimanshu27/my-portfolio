import { describe, expect, it } from 'vitest'
import { portfolio } from './portfolio'

describe('portfolio content', () => {
  it('contains the approved owner profile and public contact channels', () => {
    expect(portfolio.owner.name).toBe('Himanshu Sharma')
    expect(portfolio.owner.role).toBe('Frontend Developer')
    expect(portfolio.owner.specialties).toEqual([
      'React.js',
      'JavaScript',
      'TypeScript',
    ])
    expect(portfolio.owner.location).toBe('Bengaluru, Karnataka')
    expect(portfolio.owner.availability).toBe('Open to opportunities')

    expect(portfolio.contact.map((item) => item.label)).toContain('Email')
    expect(portfolio.contact.map((item) => item.label)).toContain('LinkedIn')
    expect(
      portfolio.contact.some(
        (item) => item.destination === 'sharmah665@gmail.com',
      ),
    ).toBe(true)
    expect(
      portfolio.contact.some(
        (item) =>
          item.destination ===
          'https://www.linkedin.com/in/himanshusharma-7ab80b2a6',
      ),
    ).toBe(true)
  })

  it('omits private or unsupported details', () => {
    const publicText = JSON.stringify(portfolio)
    expect(publicText).not.toContain('phone')
    expect(publicText).not.toContain('resume')
    expect(publicText).not.toContain('portfolio')
    expect(publicText).not.toContain('B.Tech')
  })
})
