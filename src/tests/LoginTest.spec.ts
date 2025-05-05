import {test} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import { encrypt,decrypt } from '../utils/CryptojsUtils';
import { encryptEnvFile } from '../utils/EncryptEnvFile';
import dotenv from 'dotenv' ;
import logger from '../utils/LoggerUtil';
import {faker} from '@faker-js/faker';
import cdata from "../data/contact.json";
import {convertCsvFileToJsonFile } from "../utils/CSVtoJSONUtil";


dotenv.config();
test('test',async({page})=>{
    faker.person.firstName;
    console.log(faker.person.firstName());
    console.log(process.env.password);
})

test("Login Test", async({page})=>{
    const loginPage = new LoginPage(page);  
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername(process.env.userid!);
    await loginPage.fillPassword(process.env.password!);
    const homePage = await loginPage.clickLoginBtn();
    await homePage.expectSalesTitleToBeVisible();
})

test.skip("Sample env Test", async({page})=>{
    const plainText = "Hello Tushar";
    const encryptedText = encrypt(plainText);
    console.log("SALT:", process.env.SALT);
    console.log('Encrypted: ', encryptedText);
    const decryptedText = decrypt(encryptedText);
    console.log('Decrypted', decryptedText);
    encryptEnvFile();
})

for(const contact of cdata){
    test(`Add contact ${contact.firstName}`, async({page})=>{
        const loginPage = new LoginPage(page);  
        await loginPage.navigateToLoginPage();
        await loginPage.fillUsername(process.env.userid!);
        await loginPage.fillPassword(process.env.password!);
        const homePage = await loginPage.clickLoginBtn();
        await homePage.expectSalesTitleToBeVisible();
        const contactPage =await homePage.clickContacts();
        contactPage.clickCreateNewContactBtn();
        await contactPage.fillAddContactForm(contact.firstName,contact.lastName,contact.contact);
    })
}
