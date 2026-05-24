import { test, expect } from '@playwright/test';

test('storageState 가 적용된 컨텍스트로 진입한다', async ({ page }) => {
  await page.goto('/');

  // chromium-authed 프로젝트로 실행하면 auth.setup.ts 가 먼저 돌아서
  // playwright/.auth/user.json 의 cookies/localStorage 가 주입된다.
  // (이 데모 페이지는 server-side 세션이 없어서 화면상으로는 차이가 안 보이지만,
  //  실제 사이트에서는 로그인 폼이 아니라 인증된 화면이 바로 떠야 한다)
  await expect(page).toHaveTitle(/로그인|Demo Web/);
});

test.skip('인증된 사용자만 접근 가능한 페이지 검증', async ({ page }) => {
  // TODO: 직접 작성
  // - 보호된 페이지로 이동
  // - 인증된 사용자에게만 보이는 요소 검증
});
