import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    retries: 0,
    reporter: 'html',
    use: {
        browserName: 'chromium',
        headless: true,
        viewport: { width: 1280, height: 720 },
    },
});