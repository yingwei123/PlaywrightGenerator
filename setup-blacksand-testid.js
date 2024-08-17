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
            let additionalInfo = getAdditionalInfo(element)
            const uniqueTestId = `${element.tagName.toLowerCase()}-${simpleHash(additionalInfo.Content)}-${counter++}`;
            element.setAttribute('blacksand-testid', uniqueTestId);
        });

        return elementInfo;
    }

    function getAdditionalInfo(element){
        let content = element.tagName.toLowerCase();
        let additionalInfo = {};

        if (element.tagName.toLowerCase() === 'img') {
            content += element.src;
            additionalInfo.src = element.src;
            additionalInfo.alt = element.alt || '';
        } else if (element.tagName.toLowerCase() === 'input') {
            content += element.type + element.value;
            additionalInfo.type = element.type;
            additionalInfo.value = element.value;
            additionalInfo.placeholder = element.placeholder || '';
            additionalInfo.maxlength = element.maxLength !== -1 ? element.maxLength : '';
        } else if (element.tagName.toLowerCase() === 'textarea') {
            content += element.value;
            additionalInfo.value = element.value;
            additionalInfo.placeholder = element.placeholder || '';
            additionalInfo.maxlength = element.maxLength !== -1 ? element.maxLength : '';
        } else if (element.tagName.toLowerCase() === 'button') {
            content += element.innerText.trim();
            if (element.href) {
                additionalInfo.href = element.href;
            }
        } else if (element.tagName.toLowerCase() === 'a') {
            content += element.innerText.trim();
            additionalInfo.href = element.href;
        } else {
            content += element.innerText.trim();
        }

        additionalInfo.Content = content

        return additionalInfo
    }

    window.elementsWithTestIds = assignUniqueDataTestId();
})();
