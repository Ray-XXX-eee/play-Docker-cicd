import {Given,When,Then,setDefaultTimeout} from "@cucumber/cucumber"
import {chromium,Page,Browser, expect} from "@playwright/test"
import { pageFixture as PF } from "../../hooks/pageFixture" ;

setDefaultTimeout(60*1000*2)

  // await PF.page.goto("https://opensource-demo.orangehrmlive.com");

  Given('User navigates to the application', async function () {
    //await PF.page.goto("https://bookcart.azurewebsites.net/");
    await PF.page.goto(process.env.BASEURL);
    PF.logger.info('page opened')
})

// For Bookkart app
// Given('User click on the login link', async function () {
//   await PF.page.locator("//span[text()='Login']").click();
//   
// });

Given('User enter the username as {string}', async function (username) {
  await PF.page.locator('input[name=email]').fill(username);
});

Given('User enter the password as {string}', async function (password) {
  await PF.page.locator('input[type="password"]').fill(password);
})

When('User click on the login button', async function () {
  await PF.page.locator("button[type=submit]").click();
  await PF.page.waitForLoadState();
  // PF.logger.info("Waiting for 2 seconds")
  await PF.page.waitForTimeout(2000);
});


Then('Login should be success', async function () {
  const dasgboardLogo = PF.page.locator('a:has-text("Home")');
  await expect(dasgboardLogo).toBeVisible();
  PF.logger.info("Inside dashboard");
})

When('Login should fail', async function () {
  const dasgboardLogo = PF.page.locator('a:has-text("Home")');
  console.log(dasgboardLogo);
  
  await expect(dasgboardLogo).toBeVisible()
});