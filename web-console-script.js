(function() {
    console.log('Script is running...');

    async function assignUniqueDataTestId() {
        function simpleHash(str) {
            let hash = 5381;
            for (let i = 0; i < str.length; i++) {
                hash = (hash * 33) ^ str.charCodeAt(i);
            }
            return (hash >>> 0).toString(16); // Convert to unsigned and then to hex
        }

        // Function to show data-testid on hover
        function showDataTestIdOnHover(element) {
            element.addEventListener('mouseenter', () => {
                const tooltip = document.createElement('div');
                tooltip.className = 'data-testid-tooltip';
                tooltip.textContent = element.getAttribute('data-testid');
                document.body.appendChild(tooltip);

                const rect = element.getBoundingClientRect();
                tooltip.style.position = 'absolute';
                tooltip.style.left = `${rect.left + window.scrollX}px`;
                tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;
            });

            element.addEventListener('mouseleave', () => {
                const tooltip = document.querySelector('.data-testid-tooltip');
                if (tooltip) {
                    tooltip.remove();
                }
            });
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
                hasDirectTextContent(element)
            );
        });

        let counter = 0;
        const elementInfo = [];

        elementsToTestId.forEach(element => {
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
                const url = new URL(element.href);
                if (url.origin === window.location.origin) {
                    additionalInfo.href = (url.pathname === '/' ? '#' : url.pathname + url.search) || '';
                } else {
                    additionalInfo.href = element.href;
                }
            } else {
                content += element.innerText.trim();
            }

            const uniqueTestId = `${element.tagName.toLowerCase()}-${simpleHash(content)}-${counter++}`;
            element.setAttribute('data-testid', uniqueTestId);
            showDataTestIdOnHover(element);

            elementInfo.push({
                tagName: element.tagName.toLowerCase(),
                text: element.innerText.trim(),
                dataTestId: uniqueTestId,
                ...additionalInfo
            });
        });

        console.log(elementInfo);
        return elementInfo;
    }

    async function makePostRequests() {
        const elementsWithTestIds = await assignUniqueDataTestId();

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ elements: elementsWithTestIds })
        };

        fetch('http://localhost:3103/generate-script', requestOptions)
            .catch(error => console.error('Error from localhost:3103:', error));
    }

    makePostRequests();
})();
