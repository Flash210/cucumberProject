import { Given, When, Then } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';


Given('the user is on the home page', async function () {
    // Write code here that turns the phrase above into concrete actions

    let browser = await chromium.launch({ headless: true });
    let bCtx: BrowserContext = await browser.newContext();
    let page: Page = await bCtx.newPage();
    await page.goto('https://demoqa.com');


    console.log('User is on the home page');
});



When('the user enters login details', function () {
    // Write code here that turns the phrase above into concrete actions

    console.log('User enters login details');
});



Then('the login should be successful', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log('Login should be successful');
});



Then('the home page should be displayed', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log('Home page should be displayed');

});