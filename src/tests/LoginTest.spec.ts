import {test} from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test("Login Test", async({page})=>{
    const loginPage = new LoginPage(page);
    const username = "tusharnangre5446552@agentforce.com";
    const password = "Tushar3412@";
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername(username);
    await loginPage.fillPassword(password);
    const homePage = await loginPage.clickLoginBtn();
    await homePage.expectSalesTitleToBeVisible();
})