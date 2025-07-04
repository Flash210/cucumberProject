import { setWorldConstructor, World, IWorldOptions, setDefaultTimeout, Before, After } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';

setDefaultTimeout(60 * 1000);

export class CustomWorld extends World {
    browser: Browser;
    page: Page;

    constructor(options: IWorldOptions) {
        super(options);
        this.browser = null as any;
        this.page = null as any;
    }
}

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
    this.browser = await chromium.launch({ headless: true });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
});

After(async function (this: CustomWorld) {
    if (this.page) await this.page.close();
    if (this.browser) await this.browser.close();
});
