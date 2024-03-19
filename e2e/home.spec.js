const { test, expect } = require('@playwright/test')

test('home page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page.locator('h1')).toContainText('home')
})

test('en el home debería renderizar un link a /about y al presionarlo lleve a url /about', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('a[href="/about"]')
  await expect(page).toHaveURL(/\/about/)
})
