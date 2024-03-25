import {BeforeAll, AfterAll, Before, After, Status} from '@cucumber/cucumber'
import { Browser, BrowserContext, Page, chromium } from '@playwright/test'
import { pageFixture } from './pageFixture';
import { invokeBrowser } from '../helper/browser/browserManager';
import { getEnv } from '../helper/env/env';
import { options } from '../helper/utils/logger';
import { createLogger } from 'winston';

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async () => {
  getEnv()
  browser = await invokeBrowser();
});

Before(async ({pickle}) => {
  const scenarioName = pickle.name +' '+ pickle.id
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://liaisongroup.com/")
  pageFixture.page = page

  pageFixture.logger = createLogger(options(scenarioName))
});

After(async function ({pickle, result})  {
  let img: Buffer;
  //if (result?.status == Status.FAILED){
  img = await pageFixture.page.screenshot({path:`./test-results/screenshots/${pickle.name}.png`,type:'png'})
  await this.attach(
    img, 'image/png'
  )
 // }
  // await pageFixture.page.close();
  // await context.close();
});

AfterAll(async () => {
  // await browser.close();
});


