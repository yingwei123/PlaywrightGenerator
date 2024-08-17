const fs = require('fs');
const path = require('path');

class POMGenerator{
    constructor(testURL, testSelectors, pageName){
        this.pageName = pageName;
        this.testURL = testURL;
        this.testSelectors = testSelectors;
        this.fileContent = `//Generated POM
import { Page, Locator } from '@playwright/test';

export class ${pageName} {
    private page : Page;
    public pageURL = "${testURL}"
`;
        this.generatePOMSelectors();
        this.generatePOMConstructor();
        this.downloadPOM();
    }

    // Function to parse each testInput element and call the generate script based on tagName type
    generatePOMSelectors(){
        const pomContent = this.testSelectors.map((testDetails)=>{
return `
    private ${testDetails.TestName}Selector = '${testDetails.dataTestID}';
    readonly ${testDetails.TestName}: Locator;`
       }).join('\n');

       this.fileContent += pomContent;
    }

    generatePOMConstructor(){
        this.fileContent += `\n
    constructor(page:Page){
        this.page = page;`

        const constructorContent = this.testSelectors.map((testDetails) =>{
return `
        this.${testDetails.TestName} = page.getByTestId(this.${testDetails.TestName}Selector);`
        }).join("")

        this.fileContent += constructorContent
        this.fileContent +=`
    }
}`
    }

    downloadPOM() {
        let fileName = this.pageName + ".ts";
        const dirPath = path.resolve(__dirname, './POM');
        
        // Ensure the directory exists
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        // Generate the file path
        const filePath = path.join(dirPath, fileName);
        
        // Check if the file already exists
        if (fs.existsSync(filePath)) {
            console.error(`Error: The file "${fileName}" already exists at ${filePath}.`);
            return;
        }

        // Write the content to a Playwright test file in the specified directory
        fs.writeFileSync(filePath, this.fileContent);
        console.log(`Playwright POM generated successfully: ${filePath}`);
    }
}


module.exports = POMGenerator;