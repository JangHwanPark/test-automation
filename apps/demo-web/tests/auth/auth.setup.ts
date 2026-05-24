import { test as setup, expect } from '@playwright/test';
import path from 'node:path';

const STORAGE_STATE = path.join(__dirname, '..', '..', 'playwright/.auth/user.json');

setup('인증 상태 저장', async ({ page }) => {
  await page.goto('/');
  await page.locator('#username').fill('admin');
  await page.locator('#password').fill('pass1234');
  await page.locator('#submit').click();

  await expect(page.getByTestId('result')).toHaveText(/환영합니다/);

  await page.context().storageState({ path: STORAGE_STATE });
});
