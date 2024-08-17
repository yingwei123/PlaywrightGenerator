(function() {
    console.log('Script is running...');
    function assignUniqueDataTestId() {
        function simpleHash(str) {
            let hash = 5381;
            for (let i = 0; i < str.length; i++) {
                hash = (hash * 33) ^ str.charCodeAt(i);
            }
            return (hash >>> 0).toString(16); // Convert to unsigned and then to hex
        }

        function hasDirectTextContent(element) {
            return Array.from(element.childNodes).some(node => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '');
        }

        const allElements = document.querySelectorAll('*:not(script):not(style):not(noscript)');
        const elementsToTestId = Array.from(allElements).filter(element => {
            return (
                element.tagName.toLowerCase() === 'img' ||
                element.tagName.toLowerCase() === 'input' ||
                element.tagName.toLowerCase() === 'textarea' ||
                element.tagName.toLowerCase() === 'button' ||
                element.tagName.toLowerCase() === 'a' ||
                element.tagName.toLowerCase() === 'select' ||
                hasDirectTextContent(element)
            );
        });

        let counter = 0;
        const elementInfo = [];

        elementsToTestId.forEach(element => {
            const uniqueTestId = `${element.tagName.toLowerCase()}-${simpleHash(content)}-${counter++}`;
            element.setAttribute('blacksand-testid', uniqueTestId);
        });

        return elementInfo;
    }

    window.elementsWithTestIds = assignUniqueDataTestId();
})();
