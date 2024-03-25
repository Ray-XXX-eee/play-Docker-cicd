import {Page, expect} from "@playwright/test"
import { Logger } from "winston";

export class LandingPage {
    public _page: Page;
    public _logger: Logger;

    constructor(page: Page) {
        this._page = page;
    }

    // Common Header hyperlinks
    private readonly  header_workforce_link = "(//a[contains(@href, 'liaison-workforce')])[1]";
    private readonly header_financial_link = "(//a[contains(@href, 'liaison-financial')])[1]";
    private readonly header_care_link = "(//a[contains(@href, 'liaison-care')])[1]";
    private readonly header_tempre_link = "(//a[contains(@href, 'tempre')])[1]";
    private readonly header_newsInsight_link = " //div[class='flex-shrink-0']>a[href*=news-insights-events]";
    private readonly header_contacts_link = "//div[class='flex-shrink-0']>a[href*=financial]";
    //Common Header Hover objects 
    private readonly header_aboutUs_hover = "(//a[text()='About Us'])[1]";

    //Common Header pop-up objects

    //Search Locators
    private readonly search_input_area = "(//input[@type='text' and @name='s' and @placeholder='Search'])[1]"
    private readonly recent_search_optn ="(//div/p[contains(text(), 'Recently Searched')])[2]"
    private readonly popular_search_optn ="(//div/p[contains(text(), 'Popular Topics')])[2]"  
    private readonly search_output = "//h1[contains(text(),'Search results for')]"  
    private readonly popular_search_hover = "((//div[@class='flex w-full md:hidden sm:flex-wrap'])[2]/a)[1]"

    public async navigateToPage() {
        // await this._page.goto("https://liaisongroup.com/");
    }

    public async verifyHeaderHyperlinks()
    {
        await expect(this._page.locator(this.header_workforce_link)).toBeAttached()
        await expect(this._page.locator(this.header_financial_link)).toBeAttached()
        await expect(this._page.locator(this.header_care_link)).toBeAttached()
        await expect(this._page.locator(this.header_tempre_link)).toBeAttached()
        await expect(this._page.locator(this.header_newsInsight_link)).toBeAttached()
        await expect(this._page.locator(this.header_contacts_link)).toBeAttached()
        // Future enhancement : Could've tried to open in a new window and verify 
    }

    public async verifyHeaderHoverObjects()
    {
        //could not debug it
        
        // Future enhancement : Could've tried to open in a new window and verify 
    }

    public async verifyRecentSearchWorkflow()
    {
        await this._page.locator(this.search_input_area).click()
        await expect(this._page.locator(this.recent_search_optn)).toBeVisible()        
        // Future enhancement : Could've tried to open in a new window and verify 
    }

    public async verifyActualSearchWorkflow(value: string)
    {
        await this._page.locator(this.search_input_area).fill(value)
        await expect(this._page.locator(this.search_output)).toContainText(value)
        // Future enhancement : Could've tried to open in a new window and verify 
    }

    public async verifyPopularSearchWorkflow(){
                    
                /// Select the element
        const link = await this._page.locator(this.popular_search_hover);
        link.hover()
        await expect(link).toHaveCSS('border-color', 'rgb(107 ,60 ,114)');
        
    }

    

}





