//Generated Script
import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
import {SignUp} from '../POM/SignUp'

test.use({launchOptions:{slowMo:500}})

test.describe("test SignUp page", async()=>{    
    // Load the script content before all tests
    let signUpPom:SignUp;
    let scriptContent;

    test.beforeAll(async () => {
        scriptContent = await fs.readFile('setup-blacksand-testid.js', 'utf-8');
    });

    test.beforeEach(async ({ page }) => {
        signUpPom = new SignUp(page)
        // Navigate to the page and wait for the load event to ensure the DOM is fully loaded
        await page.goto(signUpPom.pageURL, {waitUntil : "load"});

        await page.evaluate(scriptContent);
    });

    test.afterEach(async({page}) =>{
        await page.close()
    })

    test('Test fill input test', async({page}) =>{
        await signUpPom.firstNameInput.fill("Ying");
        await signUpPom.lastNameInput.fill("Li");
        await signUpPom.emailInput.fill("email@email.com");
        await signUpPom.passwordInput.fill("emailtestpassword")
        await signUpPom.monthDOBSelect.selectOption("Aug");
        await signUpPom.dayDOBSelect.selectOption("25");
        await signUpPom.yearDOBSelect.selectOption("1999");
        await signUpPom.maleRadio.click();
        await signUpPom.signUpBtn.click();
        await expect(page.getByText("Please re-enter your email address.")).toBeVisible()
    })

    test('Test fill input test 1', async({page}) =>{
        await signUpPom.firstNameInput.fill("Ying");
        await signUpPom.lastNameInput.fill("Li");
        await signUpPom.emailInput.fill("email@email.com");
        await signUpPom.passwordInput.fill("emailtestpassword")
        await signUpPom.monthDOBSelect.selectOption("Aug");
        await signUpPom.dayDOBSelect.selectOption("25");
        await signUpPom.yearDOBSelect.selectOption("1999");
        await signUpPom.maleRadio.click();
        await signUpPom.signUpBtn.click();
        await expect(page.getByText("Please re-enter your email address.")).toBeVisible()
    })

    test('Test fill input test 2', async({page}) =>{
        await signUpPom.firstNameInput.fill("Ying");
        await signUpPom.lastNameInput.fill("Li");
        await signUpPom.emailInput.fill("email@email.com");
        await signUpPom.passwordInput.fill("emailtestpassword")
        await signUpPom.monthDOBSelect.selectOption("Aug");
        await signUpPom.dayDOBSelect.selectOption("25");
        await signUpPom.yearDOBSelect.selectOption("1999");
        await signUpPom.maleRadio.click();
        await signUpPom.signUpBtn.click();
        await expect(page.getByText("Please re-enter your email address.")).toBeVisible()
    })

    test('Test fill input test 3', async({page}) =>{
        await signUpPom.firstNameInput.fill("Ying");
        await signUpPom.lastNameInput.fill("Li");
        await signUpPom.emailInput.fill("email@email.com");
        await signUpPom.passwordInput.fill("emailtestpassword")
        await signUpPom.monthDOBSelect.selectOption("Aug");
        await signUpPom.dayDOBSelect.selectOption("25");
        await signUpPom.yearDOBSelect.selectOption("1999");
        await signUpPom.maleRadio.click();
        await signUpPom.signUpBtn.click();
        await expect(page.getByText("Please re-enter your email address.")).toBeVisible()
    })

})
  