import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
import { DraftKingHomePage } from '../POM/DraftKingHomePage';


test.describe("test DraftKings page", async()=>{    
    let draftKingsHomePage:DraftKingHomePage;
    let scriptContent;

    test.beforeAll(async () => {
        scriptContent = await fs.readFile('PlaywrightGenerator/setup-blacksand-testid.js', 'utf-8');
    });

    test.beforeEach(async ({ page }) => {
        draftKingsHomePage = new DraftKingHomePage(page)
        await page.goto(draftKingsHomePage.pageURL, {waitUntil : "load"});
        await page.evaluate(scriptContent);
    });

    test.afterEach(async({page}) =>{
        await page.close()
    })

    test("Testing the homepage 1", async({page}) =>{
        await draftKingsHomePage.OddsDropDown.hover();
        await expect(draftKingsHomePage.OddsDropDown).toBeVisible();
       
        await draftKingsHomePage.PromosDropDown.hover();
        await expect(draftKingsHomePage.PromosDropDown).toBeVisible();
      
        await draftKingsHomePage.HowToBetDropDown.hover();
        await expect(draftKingsHomePage.HowToBetDropDown).toBeVisible();

        await draftKingsHomePage.LoginBtn.click();

    })
    test("Testing the homepage 2", async({page}) =>{
        await draftKingsHomePage.OddsDropDown.hover();
        await expect(draftKingsHomePage.OddsDropDown).toBeVisible();
       
        await draftKingsHomePage.PromosDropDown.hover();
        await expect(draftKingsHomePage.PromosDropDown).toBeVisible();
      
        await draftKingsHomePage.HowToBetDropDown.hover();
        await expect(draftKingsHomePage.HowToBetDropDown).toBeVisible();

        await draftKingsHomePage.LoginBtn.click();

    })
    test("Testing the homepage 3", async({page}) =>{
        await draftKingsHomePage.OddsDropDown.hover();
        await expect(draftKingsHomePage.OddsDropDown).toBeVisible();
       
        await draftKingsHomePage.PromosDropDown.hover();
        await expect(draftKingsHomePage.PromosDropDown).toBeVisible();
      
        await draftKingsHomePage.HowToBetDropDown.hover();
        await expect(draftKingsHomePage.HowToBetDropDown).toBeVisible();

        await draftKingsHomePage.LoginBtn.click();

    })
    test("Testing the homepage 4", async({page}) =>{
        await draftKingsHomePage.OddsDropDown.hover();
        await expect(draftKingsHomePage.OddsDropDown).toBeVisible();
       
        await draftKingsHomePage.PromosDropDown.hover();
        await expect(draftKingsHomePage.PromosDropDown).toBeVisible();
      
        await draftKingsHomePage.HowToBetDropDown.hover();
        await expect(draftKingsHomePage.HowToBetDropDown).toBeVisible();

        await draftKingsHomePage.LoginBtn.click();

    })
    test("Testing the homepage 5", async({page}) =>{
        await draftKingsHomePage.OddsDropDown.hover();
        await expect(draftKingsHomePage.OddsDropDown).toBeVisible();
       
        await draftKingsHomePage.PromosDropDown.hover();
        await expect(draftKingsHomePage.PromosDropDown).toBeVisible();
      
        await draftKingsHomePage.HowToBetDropDown.hover();
        await expect(draftKingsHomePage.HowToBetDropDown).toBeVisible();

        await draftKingsHomePage.LoginBtn.click();

    })
})




