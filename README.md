# Blacksand Test ID Generator

The **Blacksand Test ID Generator** is a tool designed to create unique `data-test ID`s, named `blacksand-testid`, to simplify the process of finding unique selectors in Page Object Models (POMs) without needing direct access to the codebase. This project aims to accelerate QA workflows by providing a quick, reliable way to identify selectors, significantly reducing time spent on test automation.

## 🚧 Project Status: Work in Progress

### Current Features
- Generate unique and predictable test IDs to streamline POM creation.
- Provide an easy-to-use solution that saves time on finding unique selectors.

### Future Roadmap
We envision expanding this project to enable **no-code QA testing**. In the future, users will be able to:
1. **Label Elements on the Page**: Add data-test IDs and labels directly to elements without coding knowledge.
2. **Define Custom Test Flows and Expectations**: Configure and map out test flows, specify expected behaviors, and outline interaction sequences through a visual interface.
3. **AI-Driven Test Execution**: Using the labeled data, an AI agent will mimic the role of a QA tester, navigating through defined test flows and validating expected outcomes.
4. **Integrated Test Management Platform**: Users will be able to run, monitor, and manage the tests they create through a connected platform, with options to review results, analyze test coverage, and improve testing strategies.

These features aim to empower QA teams, making automated testing accessible and manageable without coding skills.

---

## Requirements:
- cors
- express
- playwright

## How it works:
The script in `web-console-script.js` will grab all tags on the page and assign each a `blacksand-testid`.

The `blacksand-testid` is generated in this format:
```${element.tagName.toLowerCase()}-${simpleHash(content)}-${counter++}```

All the `blacksand-testid`s are sent to the express server via a fetch request. The express server takes the test inputs and uses the `POMGenerator.js` class in `./POMGenerator.js.js` to generate a Playwright POM(page object model) which you can use to create your test. All generated POM will be in the `./POM` folder in this format:
```page_name.ts```


## How to generate a POM:
1. Navigate to the `app.js` directory.
2. Run `node app.js` to start the server.
3. Click on `web-console-script.js` and copy the file contents to the clipboard.
4. Open the page to test.
5. Inspect Element and paste the clipboard content into the console, then press enter.
6. This process will generate a Playwright POM file in the `./POM` directory with the format `page_name.ts`.

## Note:
- `web-console-script.js` also adds an on-hover effect on each element to display its `blacksand-testid` for easier unscripted testing.
- `setup-blacksand-testid.js` is the script run by Playwright to generate the `blacksand-testid` before testing. It is the same as `web-console-script.js` but without the on-hover effect or most requests to generate the script.

