import { test, expect } from '@playwright/test';

test('playground 페이지 전체 스냅샷', async ({ page }) => {
  await page.goto('/playground.html');

  // 최초 실행: __screenshots__/snapshot.spec.ts/playground-page-*.png 생성됨
  // 이후 실행: baseline 과 픽셀 비교. 차이 발견 시 test-results 에 diff 이미지 저장
  // baseline 갱신: `pnpm --filter demo-web run test:update-snapshots`
  await expect(page).toHaveScreenshot('playground-page.png', {
    fullPage: true,
  });
});

test('특정 위젯만 부분 스냅샷', async ({ page }) => {
  await page.goto('/playground.html');
  const counter = page.locator('#sec-counter');
  await expect(counter).toHaveScreenshot('counter-widget.png');
});

test.skip('동적 영역은 마스킹해서 비교한다', async ({ page }) => {
  // TODO: await expect(page).toHaveScreenshot({
  //         mask: [page.locator('[data-testid="delay-output"]')],
  //       })
});
