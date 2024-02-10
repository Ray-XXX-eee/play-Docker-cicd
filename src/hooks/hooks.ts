import {BeforeAll, AfterAll, Before, After} from '@cucumber/cucumber'
import { Browser, Page, chromium } from '@playwright/test'
import { pageFixture } from './pageFixture';

let browser: Browser;
let page: Page;



BeforeAll(async () => {
  browser = await chromium.launch({'headless': true});
});

AfterAll(async () => {
  await browser.close();
});

Before(async () => {
  let context = await browser.newContext();
  console.log(typeof(context+'---------------------------------------------------'));
  
  page = await context.newPage();
  pageFixture.page = page
});

After(async () => {
  await page.close();
  await browser.close();
});


