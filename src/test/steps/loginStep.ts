import { Given,When,Then } from '@cucumber/cucumber';
import { LandingPage } from '../pages/LandingPage_page';
import { pageFixture as PF } from "../../hooks/pageFixture" ;

Given('user navigates to the website', async function () {
  PF.page.goto("https://liaisongroup.com/")
});

Given('checks all header hyperlink options', async function () {
  const landingPage = new LandingPage(PF.page)
  landingPage.verifyHeaderHyperlinks()
});

Given('check all hover options', async function () {
  const landingPage = new LandingPage(PF.page)
  landingPage.verifyHeaderHoverObjects()
});

When('check resent search', async function () {
  const landingPage = new LandingPage(PF.page)
  landingPage.verifyRecentSearchWorkflow()
});

When('check actual search', async function () {
  const landingPage = new LandingPage(PF.page)
  landingPage.verifyActualSearchWorkflow('vat')
});

When('check popular search', async function () {
  const landingPage = new LandingPage(PF.page)
  landingPage.verifyPopularSearchWorkflow()
});