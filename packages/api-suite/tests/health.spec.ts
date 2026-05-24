import { test, expect } from '@playwright/test';

test('GET /api/health 는 200 과 status:ok 를 반환한다', async ({ request }) => {
  const response = await request.get('/api/health');

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.status).toBe('ok');
  expect(body.ts).toEqual(expect.any(String));
});
