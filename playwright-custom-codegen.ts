import { chromium } from 'playwright';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

async function customCodegen() {
  // Read the BlackSandUtil.js file
  const blackSandUtilScript =  await fs.readFileSync(path.join(__dirname, 'BlackSandUtil.js'), 'utf8');

  // Launch the browser and create a new page
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the target URL (replace with your target URL)
  await page.goto(process.argv[2] || 'https://example.com/');

  // Inject and execute the BlackSandUtil script
  await page.evaluate(blackSandUtilScript);

  // Get the current URL after potential redirects
  const url = page.url();

  // Close the browser
  await browser.close();

  // Start the Playwright codegen process
  const codegen = spawn('npx', ['playwright', 'codegen', url], {
    stdio: 'inherit'
  });

  codegen.on('close', (code) => {
    console.log("Codegen process exited with code: ", code);
  });
}

customCodegen().catch(console.error);