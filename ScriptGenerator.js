const fs = require('fs');
const path = require('path');

class ScriptGenerator{
    constructor(testURL, testInputs){
        this.testURL = testURL;
        this.testInputs = testInputs;
        this.fileContent = `//Generated Script
import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
            
let scriptContent;

// Load the script content before all tests
test.beforeAll(async () => {
    scriptContent = await fs.readFile('setup-data-testID.js', 'utf-8');
});

//Load the dataTestIDs into the page before testing
test.beforeEach(async ({ page }) => {
    // Navigate to the page and wait for the load event to ensure the DOM is fully loaded
    await page.goto('${this.testURL}', { waitUntil: 'load' });

    // Evaluate the script content on the page
    await page.evaluate(scriptContent);
});
`;
        this.parseTestInputs();
    }

    // Function to parse each testInput element and call the generate script based on tagName type
    parseTestInputs(){
        let a_list = []
        this.testInputs.elements.forEach(element => {
            console.log('--- Element ---');
            for (const [key, value] of Object.entries(element)) {
                console.log(`${key}: ${value}`);
                if(key == "tagName" && value == 'a'){
                    a_list.push(element)
                }
            }
        });

        this.generateAnchorTagTest(a_list); //only handles generating test for anchor tags for now
    }

    // Function to generate Playwright test scripts for anchor tags
    generateAnchorTagTest(testDetailsArray) {
        const seenTitles = {}; // Initialize a dictionary to track seen titles
        const testContents = testDetailsArray.map((testDetails) => {
            // Function to remove all query parameters
            const stripQueryParams = (url) => url.split('?')[0];
        
            // Check if the href contains a query
            const hasQuery = testDetails.href.includes('?');
            
            // Get the base URL without any query parameters
            const hrefWithoutQueryParams = hasQuery
                ? stripQueryParams(testDetails.href)
                : testDetails.href;

            // Generate a unique test name
            let testName = `Test ${testDetails.text} link`;
            if (seenTitles[testDetails.text]) {
                seenTitles[testDetails.text]++;
                testName += ` ${seenTitles[testDetails.text]}`;
            } else {
                seenTitles[testDetails.text] = 1;
            }
        
        return `
test('${testName}', async ({ page }) => {
    // Wait for the element with the specified properties
    const link = await page.getByTestId('${testDetails.dataTestId}');

    // Check if the element has the correct text
    await expect(link).toHaveText('${testDetails.text}');

    // Check if the element has the correct href attribute
    const href = await link.getAttribute('href');
    ${hasQuery 
        ? `expect(href).toContain('${hrefWithoutQueryParams}');` 
        : `expect(href).toBe('${hrefWithoutQueryParams}');`}

    await link.click();
});
            `;
        }).join('\n');

            this.fileContent += testContents;
        }

    // Download the file content into filename in the ./tests directory
    downloadGeneratedScript(fileName) {
        fileName = this.getCurrentDateTimeString()+fileName
        const dirPath = path.resolve(__dirname, './tests');
        
        // Ensure the directory exists
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        // Write the content to a Playwright test file in the specified directory
        const filePath = path.join(dirPath, fileName);
        fs.writeFileSync(filePath, this.fileContent);
        console.log(`Playwright test script generated successfully: ${filePath}`);
    }

    getCurrentDateTimeString() {
        const now = new Date();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
    
        return `${month}-${day}_${hours}-${minutes}-${seconds}_`;
    }
}

module.exports = ScriptGenerator;