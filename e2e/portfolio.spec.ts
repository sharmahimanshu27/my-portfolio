import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('portfolio renders approved public content and navigation', async ({
  page,
}) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Himanshu Sharma/i)
  await expect(
    page.getByRole('heading', { name: /Himanshu Sharma/i, level: 1 }),
  ).toBeVisible()
  await expect(page.locator('#intro .eyebrow')).toHaveText(
    /Frontend Developer/i,
  )
  await expect(page.getByText(/Open to opportunities/i)).toBeVisible()
  await expect(page.getByRole('link', { name: /Contact me/i })).toHaveAttribute(
    'href',
    '#contact',
  )
  await expect(page.getByRole('link', { name: /^Email$/i })).toHaveAttribute(
    'href',
    'mailto:sharmah665@gmail.com',
  )
  await expect(page.getByRole('link', { name: /^LinkedIn$/i })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/himanshusharma-7ab80b2a6',
  )
  await expect(page.getByText(/phone/i)).toHaveCount(0)
})

test('portfolio remains responsive and accessible at common widths', async ({
  page,
}) => {
  const sizes = [320, 375, 768, 1280, 1920]

  for (const width of sizes) {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')

    const overflow = await page.evaluate(() => {
      const doc = document.documentElement
      return doc.scrollWidth > window.innerWidth + 1
    })

    expect(overflow).toBeFalsy()
  }

  const accessibilityScan = await new AxeBuilder({ page }).analyze()
  expect(accessibilityScan.violations).toEqual([])
})
