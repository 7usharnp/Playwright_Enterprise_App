import { Page,expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";
import ContactPage from "./ContactPage";

export default class HomePage {
    private readonly salesTitle = "Service";
    private readonly contactNavbar= "a[title='Contacts']";


    constructor(private page:Page){  }
 
    async expectSalesTitleToBeVisible(){
        await expect(this.page.getByTitle(this.salesTitle)).toBeVisible({timeout: 15000});
        logger.info("Service title visible as per requirment. Successfully navigated to home page.");
    }

    async clickContacts(){
         await this.page.locator(this.contactNavbar).click();
         logger.info("Clicked on contact button from header");
         const contactPage =new ContactPage(this.page);
         return contactPage;
    }
  
}   