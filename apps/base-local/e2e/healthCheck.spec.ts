import { test, expect } from '@playwright/test';

// Simple health check test
test('should retrun /healthcheck', async ({ request }) => {
  const newIssue = await request.get(`/healthcheck`);
  expect(newIssue.ok()).toBeTruthy();
  expect(await newIssue.json()).toHaveProperty('status', 'OK');
});
