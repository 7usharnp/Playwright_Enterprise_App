import { Page,expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";


export default class ContactPage{
    private readonly newContactBtn="button[name='NewContact']";
    private readonly firstName ="First Name";
    private readonly lastName = "Last Name";
    private readonly phone = "input[name='Phone']";
    private readonly saveBtn = "button[name='SaveEdit']";
    constructor(private page:Page){};
    
    async clickCreateNewContactBtn(){
        await this.page.locator(this.newContactBtn).click();
        logger.info("Clicked on new contact button.");
    }

    async fillAddContactForm(firstName:string,lastName:string, contact:string){
        await this.fillFirstName(firstName);
        await this.fillLastName(lastName);
        await this.fillContactNumber(contact);
        await this.submitForm();
        logger.info("form submitted successfully.");
    }

    async fillFirstName(firstName:string){
        await this.page.getByPlaceholder(this.firstName).fill(firstName);
        logger.info("Entered first name")
    }

    async fillLastName(lastName:string){
        await this.page.getByPlaceholder(this.lastName).fill(lastName);
    }

    async fillContactNumber(contact:string){
        await this.page.locator(this.phone).fill(contact);
        logger.info("Enter contact number")

    }

    async submitForm(){
        await this.page.locator(this.saveBtn).click();
        logger.info("Submitted the form.");
    }



}