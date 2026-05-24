import { defineConfig } from "@playwright/test";

const apiBaseURL = process.env.API_BASE_URL ?? "http://localhost:3001";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: [["html", { open: "never" }], ["list"]],
  use: {
    baseURL: apiBaseURL,
    extraHTTPHeaders: {
      "Accept": "application/json",
    },
  },
  projects: [
    { name: "api", testMatch: /.*\.spec\.ts/ },
  ],
  webServer: {
    command: "pnpm --filter api-playground dev",
    url: `${apiBaseURL}/api/health`,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
