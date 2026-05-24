import { test, expect } from '@playwright/test';

test('API 응답을 mock 으로 교체한다', async ({ page }) => {
  await page.route('**/api/users', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { id: 1, name: 'Mocked Alice' },
        { id: 2, name: 'Mocked Bob' },
      ]),
    });
  });

  await page.goto('/');
  // 페이지가 fetch('/api/users') 를 호출하는 시점에 위 mock 이 적용된다.
  // 실제로 호출하는 페이지가 없으면 직접 evaluate 로 fetch 호출 후 검증해도 된다.
  const data = await page.evaluate(() => fetch('/api/users').then((r) => r.json()));
  expect(data).toHaveLength(2);
  expect(data[0].name).toBe('Mocked Alice');
});

test.skip('500 에러 응답을 시뮬레이션한다', async ({ page }) => {
  // TODO: route.fulfill({ status: 500, body: ... }) 로 서버 에러 케이스 검증
});

test.skip('실제 요청은 그대로 보내되 응답만 변형한다 (route.fetch + fulfill)', async ({ page }) => {
  // TODO: const response = await route.fetch(); const json = await response.json();
  //       json 수정 후 route.fulfill({ response, json })
});
