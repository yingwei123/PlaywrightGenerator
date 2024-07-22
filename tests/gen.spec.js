//Generated Script
import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
            
let scriptContent;

// Load the script content before all tests
test.beforeAll(async () => {
    scriptContent = await fs.readFile('setup.js', 'utf-8');
});

            
test.beforeEach(async ({ page }) => {
    // Navigate to the page and wait for the load event to ensure the DOM is fully loaded
    await page.goto('https://www.facebook.com/', { waitUntil: 'load' });

    // Evaluate the script content on the page
    await page.evaluate(scriptContent);
});

test('Test  link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-2b5c4-7');

    // Check if the element has the correct text
    await expect(link).toHaveText('');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('#');

    await link.click();
});
            

test('Test Forgot password? link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-d14dc1e3-11');

    // Check if the element has the correct text
    await expect(link).toHaveText('Forgot password?');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toContain('/recover/initiate/');

    await link.click();
});
            

test('Test Create new account link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-f0cecc1d-12');

    // Check if the element has the correct text
    await expect(link).toHaveText('Create new account');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('#');

    await link.click();
});
            

test('Test Create a Page link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-4f522d72-14');

    // Check if the element has the correct text
    await expect(link).toHaveText('Create a Page');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toContain('/pages/create/');

    await link.click();
});
            

test('Test Español link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-6a3367f1-16');

    // Check if the element has the correct text
    await expect(link).toHaveText('Español');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://es-la.facebook.com/');

    await link.click();
});
            

test('Test Français (France) link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-a049581f-17');

    // Check if the element has the correct text
    await expect(link).toHaveText('Français (France)');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://fr-fr.facebook.com/');

    await link.click();
});
            

test('Test 中文(简体) link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-9bedc57c-18');

    // Check if the element has the correct text
    await expect(link).toHaveText('中文(简体)');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://zh-cn.facebook.com/');

    await link.click();
});
            

test('Test العربية link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-7d2089c4-19');

    // Check if the element has the correct text
    await expect(link).toHaveText('العربية');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://ar-ar.facebook.com/');

    await link.click();
});
            

test('Test Português (Brasil) link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-2cb3d1c5-20');

    // Check if the element has the correct text
    await expect(link).toHaveText('Português (Brasil)');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://pt-br.facebook.com/');

    await link.click();
});
            

test('Test Italiano link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-aa19211d-21');

    // Check if the element has the correct text
    await expect(link).toHaveText('Italiano');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://it-it.facebook.com/');

    await link.click();
});
            

test('Test 한국어 link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-7dc8e7a1-22');

    // Check if the element has the correct text
    await expect(link).toHaveText('한국어');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://ko-kr.facebook.com/');

    await link.click();
});
            

test('Test Deutsch link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-9823df5c-23');

    // Check if the element has the correct text
    await expect(link).toHaveText('Deutsch');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://de-de.facebook.com/');

    await link.click();
});
            

test('Test हिन्दी link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-af746e1-24');

    // Check if the element has the correct text
    await expect(link).toHaveText('हिन्दी');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://hi-in.facebook.com/');

    await link.click();
});
            

test('Test 日本語 link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-7abdbc13-25');

    // Check if the element has the correct text
    await expect(link).toHaveText('日本語');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://ja-jp.facebook.com/');

    await link.click();
});
            

test('Test  link 2', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-2b5c4-26');

    // Check if the element has the correct text
    await expect(link).toHaveText('');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('#');

    await link.click();
});
            

test('Test Sign Up link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-bd64a1f2-27');

    // Check if the element has the correct text
    await expect(link).toHaveText('Sign Up');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('/reg/');

    await link.click();
});
            

test('Test Log In link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-d0b8a907-28');

    // Check if the element has the correct text
    await expect(link).toHaveText('Log In');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('/login/');

    await link.click();
});
            

test('Test Messenger link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-eb4104b7-29');

    // Check if the element has the correct text
    await expect(link).toHaveText('Messenger');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://messenger.com/');

    await link.click();
});
            

test('Test Facebook Lite link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-c2102af8-30');

    // Check if the element has the correct text
    await expect(link).toHaveText('Facebook Lite');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('/lite/');

    await link.click();
});
            

test('Test Video link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-4c9b2e95-31');

    // Check if the element has the correct text
    await expect(link).toHaveText('Video');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('/watch/');

    await link.click();
});
            

test('Test Places link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-ecf36e2c-32');

    // Check if the element has the correct text
    await expect(link).toHaveText('Places');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('/places/');

    await link.click();
});
            

test('Test Games link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-4b6141d9-33');

    // Check if the element has the correct text
    await expect(link).toHaveText('Games');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('/games/');

    await link.click();
});
            

test('Test Marketplace link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-d17a903b-34');

    // Check if the element has the correct text
    await expect(link).toHaveText('Marketplace');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('/marketplace/');

    await link.click();
});
            

test('Test Meta Pay link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-f3d38fd1-35');

    // Check if the element has the correct text
    await expect(link).toHaveText('Meta Pay');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://pay.facebook.com/');

    await link.click();
});
            

test('Test Meta Store link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-36efd8e6-36');

    // Check if the element has the correct text
    await expect(link).toHaveText('Meta Store');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://www.meta.com/');

    await link.click();
});
            

test('Test Meta Quest link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-371186bf-37');

    // Check if the element has the correct text
    await expect(link).toHaveText('Meta Quest');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://www.meta.com/quest/');

    await link.click();
});
            

test('Test Meta AI link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-aa4c3cf1-38');

    // Check if the element has the correct text
    await expect(link).toHaveText('Meta AI');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://www.meta.ai/');

    await link.click();
});
            

test('Test Instagram link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-1d59bf1c-39');

    // Check if the element has the correct text
    await expect(link).toHaveText('Instagram');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toContain('https://l.facebook.com/l.php');

    await link.click();
});
            

test('Test Threads link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-5f9c7df9-40');

    // Check if the element has the correct text
    await expect(link).toHaveText('Threads');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://www.threads.net/');

    await link.click();
});
            

test('Test Fundraisers link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-ecd3f630-41');

    // Check if the element has the correct text
    await expect(link).toHaveText('Fundraisers');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('/fundraisers/');

    await link.click();
});
            

test('Test Services link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-b64a140a-42');

    // Check if the element has the correct text
    await expect(link).toHaveText('Services');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('/biz/directory/');

    await link.click();
});
            

test('Test Voting Information Center link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-d4d15cce-43');

    // Check if the element has the correct text
    await expect(link).toHaveText('Voting Information Center');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toContain('/votinginformationcenter/');

    await link.click();
});
            

test('Test Privacy Policy link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-73eccc82-44');

    // Check if the element has the correct text
    await expect(link).toHaveText('Privacy Policy');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toContain('/privacy/policy/');

    await link.click();
});
            

test('Test Consumer Health Privacy link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-3b9a0da0-45');

    // Check if the element has the correct text
    await expect(link).toHaveText('Consumer Health Privacy');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toContain('/privacy/policies/health/');

    await link.click();
});
            

test('Test Privacy Center link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-3e2b1329-46');

    // Check if the element has the correct text
    await expect(link).toHaveText('Privacy Center');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toContain('/privacy/center/');

    await link.click();
});
            

test('Test Groups link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-b8bbc168-47');

    // Check if the element has the correct text
    await expect(link).toHaveText('Groups');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('/groups/discover/');

    await link.click();
});
            

test('Test About link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-4bce1829-48');

    // Check if the element has the correct text
    await expect(link).toHaveText('About');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('https://about.meta.com/');

    await link.click();
});
            

test('Test Create ad link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-171bd665-49');

    // Check if the element has the correct text
    await expect(link).toHaveText('Create ad');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toContain('/ad_campaign/landing.php');

    await link.click();
});
            

test('Test Create Page link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-4d5f8013-50');

    // Check if the element has the correct text
    await expect(link).toHaveText('Create Page');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toContain('/pages/create/');

    await link.click();
});
            

test('Test Developers link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-e68b4ce1-51');

    // Check if the element has the correct text
    await expect(link).toHaveText('Developers');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toContain('https://developers.facebook.com/');

    await link.click();
});
            

test('Test Careers link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-dc8fdf55-52');

    // Check if the element has the correct text
    await expect(link).toHaveText('Careers');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toContain('/careers/');

    await link.click();
});
            

test('Test Cookies link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-e91a2af3-53');

    // Check if the element has the correct text
    await expect(link).toHaveText('Cookies');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('/policies/cookies/');

    await link.click();
});
            

test('Test Ad choices link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-7884b159-54');

    // Check if the element has the correct text
    await expect(link).toHaveText('Ad choices');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('/help/568137493302217');

    await link.click();
});
            

test('Test Terms link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-4cbab119-55');

    // Check if the element has the correct text
    await expect(link).toHaveText('Terms');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toContain('/policies');

    await link.click();
});
            

test('Test Help link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-a12da75-56');

    // Check if the element has the correct text
    await expect(link).toHaveText('Help');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toContain('/help/');

    await link.click();
});
            

test('Test Contact Uploading & Non-Users link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-125e2961-57');

    // Check if the element has the correct text
    await expect(link).toHaveText('Contact Uploading & Non-Users');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('/help/637205020878504');

    await link.click();
});
            

test('Test Settings link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-ba43be41-58');

    // Check if the element has the correct text
    await expect(link).toHaveText('Settings');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toBe('/settings');

    await link.click();
});
            

test('Test Activity log link', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('a-8982652d-59');

    // Check if the element has the correct text
    await expect(link).toHaveText('Activity log');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    expect(href).toContain('/allactivity');

    await link.click();
});
            