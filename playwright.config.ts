import { PlaywrightTestConfig, devices } from '@playwright/test'
import path from 'path'

const baseURL = `http://localhost:${process.env.PORT || 3000}`
const baseCommand =
  (process.env.PORT || 'Next') === 'Next' ? `pnpm build && pnpm start` : `pnpm storybook:start`

const config: PlaywrightTestConfig = {
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  testMatch: '**/?(*.)+(spec|test).[tj]s?(x)',
  testDir: path.join(__dirname, 'test'),
  outputDir: '.playwright',
  webServer: {
    command: baseCommand,
    url: baseURL,
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI
  },
  use: {
    actionTimeout: 0,
    baseURL,
    trace: 'retry-with-trace',
    headless: true,
    ignoreHTTPSErrors: true
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome']
      }
    },
    {
      name: 'Desktop Safari',
      use: {
        ...devices['Desktop Safari']
      }
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5']
      }
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 12']
    }
  ]
}

export default config
