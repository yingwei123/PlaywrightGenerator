## Requirements:
- cors
- express
- playwright

## How it works:
The script in `web-console-script.js` will grab all tags on the page and assign each a `blacksand-testid`.

The `blacksand-testid` is generated in this format:
```${element.tagName.toLowerCase()}-${simpleHash(content)}-${counter++}```

All the `blacksand-testid`s are sent to the express server via a fetch request. The express server takes the test inputs and uses the `ScriptGenerator` class in `./ScriptGenerator.js` to generate a Playwright script. All generated tests will be in the `./tests` folder in this format:
```month-day_hour-minutes-seconds_filename```


## How to generate a script:
1. Navigate to the `app.js` directory.
2. Run `node app.js` to start the server.
3. Click on `web-console-script.js` and copy the file contents to the clipboard.
4. Open the page to test.
5. Inspect Element and paste the clipboard content into the console, then press enter.
6. This process will generate a Playwright test file in the `./tests` directory with the format `month-day_hour-minutes-seconds_filename`.

## Note:
- `web-console-script.js` also adds an on-hover effect on each element to display its `blacksand-testid` for easier unscripted testing.
- `setup-blacksand-testid.js` is the script run by Playwright to generate the `blacksand-testid` before testing. It is the same as `web-console-script.js` but without the on-hover effect or most requests to generate the script.

