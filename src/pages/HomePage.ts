import { Page,expect } from "@playwright/test";

export default class HomePage {
    private readonly salesTitle = "Service";

    constructor(private page:Page){  }
 
    async expectSalesTitleToBeVisible(){
        console.log(this.salesTitle);
        await expect(this.page.getByTitle(this.salesTitle)).toBeVisible({timeout: 15000});
    }
  
}   