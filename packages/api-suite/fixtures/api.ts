import { test as base, APIRequestContext } from "@playwright/test";

type ApiFixtures = {
  api: APIRequestContext;
};

export const test = base.extend<ApiFixtures>({
  api: async ({ playwright }, use) => {
    const ctx = await playwright.request.newContext({
      baseURL: process.env.API_BASE_URL ?? "http://localhost:3001",
    });
    await use(ctx);
    await ctx.dispose();
  },
});

export { expect } from "@playwright/test";
