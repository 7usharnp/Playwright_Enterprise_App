import { Page } from "@playwright/test";
import HomePage from "../pages/HomePage";
import logger from "../utils/LoggerUtil";

export default class LoginPage{
    private readonly usernameInputSelector = "#username";
    private readonly passwordInputSelector = "#password";
    private readonly loginButtonSelector = "#Login";

    constructor(private page:Page){

    }
    async navigateToLoginPage(){
        await this.page.goto("/");
         logger.info("Navigated to login page");

    }

    async fillUsername(username: string){
        await this.page.locator(this.usernameInputSelector).fill(username);
        logger.info("entered username.");  
    }

    async fillPassword(password:string){
        await this.page.locator(this.passwordInputSelector).fill(password);
        logger.info("entered password");
    }

    async clickLoginBtn(){
        await this.page
           .locator(this.loginButtonSelector)
           .click()
           .catch((error)=>{
            logger.error(`Error clicking login button : ${error}`)
            throw error;
           }).then(()=> logger.info("Clicked on login button"));
           const homePage =  new HomePage(this.page);
           return homePage;
    }
}