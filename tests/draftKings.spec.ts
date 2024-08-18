import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
import { DraftKingHomePage } from '../POM/DraftKingHomePage';

test.use({launchOptions:{slowMo:500}})
test.describe("test DraftKings page", async()=>{    
    let draftKingsHomePage:DraftKingHomePage;
    let scriptContent;


    test('test', async ({ page }) => {
        await page.goto('https://www.blacksand.qa/');
        await page.getByRole('heading', { name: 'Granular Coverage, Refined' }).click();
        await page.getByRole('link', { name: 'Our Services' }).nth(1).click();
        await page.getByRole('heading', { name: 'API Test Automation' }).click();
        await page.getByRole('navigation').getByRole('link', { name: 'About Us' }).click();
        await page.locator('section').filter({ hasText: 'OUR MISSIONDriving software' }).getByRole('link').click();
        await page.getByPlaceholder('Name').click();
        await expect(page.getByText('MY NAME IS NORRALAK')).toBeVisible();
        await page.getByPlaceholder('Name').fill('Name');
        await page.getByPlaceholder('Name').press('Tab');
        await page.getByPlaceholder('Email').fill('Email');
        await page.getByPlaceholder('Email').press('Tab');
        await page.getByPlaceholder('Phone Number').fill('Number ');
        await page.getByPlaceholder('Phone Number').press('Tab');
        await page.getByPlaceholder('Write your message here!').fill('Message');
    });
})




