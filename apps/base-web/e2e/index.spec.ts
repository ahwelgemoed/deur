import { test, expect } from '@playwright/test';

test('should navigate to the about page', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('h1')).toHaveText('Welcome to Base-Web');
});
