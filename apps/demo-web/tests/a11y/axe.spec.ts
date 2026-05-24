import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('playground 페이지에 a11y 위반이 없다', async ({ page }) => {
  await page.goto('/playground.html');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test('WCAG 2 AA 룰만 검사한다', async ({ page }) => {
  await page.goto('/playground.html');

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();

  expect(results.violations).toEqual([]);
});

test.skip('특정 영역만 스캔한다', async ({ page }) => {
  // TODO: new AxeBuilder({ page }).include('#sec-greet').analyze()
});

test.skip('알려진 위반은 제외하고 신규 위반만 잡는다', async ({ page }) => {
  // TODO: new AxeBuilder({ page }).disableRules(['color-contrast']).analyze()
});
