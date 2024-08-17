class BlackSandUtil {
    constructor() {
        this.counter = 0;
        this.testElements = [];
        this.pageName = "";
        this.setRightClickName();
        this.assignUniqueDataTestId();
    }

    showDataTestIdOnHover(element) {
        element.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'blacksand-testid-tooltip';
            tooltip.textContent = element.getAttribute('blacksand-testid');
            document.body.appendChild(tooltip);

            const rect = element.getBoundingClientRect();
            tooltip.style.position = 'absolute';
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;
        });

        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.blacksand-testid-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    }

    hasDirectTextContent(element) {
        return Array.from(element.childNodes).some(
            node => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== ''
        );
    }

    simpleHash(str) {
        let hash = 5381;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 33) ^ str.charCodeAt(i);
        }
        return (hash >>> 0).toString(16); // Convert to unsigned and then to hex
    }

    async assignUniqueDataTestId() {
        const allElements = document.querySelectorAll('*:not(script):not(style):not(noscript)');
        const elementsToTestId = Array.from(allElements).filter(element => {
            return (
                element.tagName.toLowerCase() === 'img' ||
                element.tagName.toLowerCase() === 'input' ||
                element.tagName.toLowerCase() === 'textarea' ||
                element.tagName.toLowerCase() === 'button' ||
                element.tagName.toLowerCase() === 'a' ||
                element.tagName.toLowerCase() === 'select' ||
                this.hasDirectTextContent(element)
            );
        });

        elementsToTestId.forEach(element => {
            const uniqueTestId = `${element.tagName.toLowerCase()}-${this.simpleHash(content)}-${this.counter++}`;
            element.setAttribute('blacksand-testid', uniqueTestId);
            this.showDataTestIdOnHover(element);
        });

        return
    }

    getAdditionalInfo(element){
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

        return additionalInfo
    }

    async makePostRequests() {
        const data = {
            TestElements: this.testElements,
            PageName: this.pageName,
            PageURL: window.location.href,
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch('http://localhost:3103/generate-script', requestOptions)
            .catch(error => console.error('Error from localhost:3103:', error));
    }

    init() {
        console.log('Script is running...');
        // this.makePostRequests();
    }

    setRightClickName() {
        document.addEventListener('contextmenu', (event) => { // Use arrow function here
            event.preventDefault(); // Prevent the default right-click menu
    
            if (this.pageName === "") {
                const pageName = prompt("Enter Page name: ");
                this.pageName = pageName;
            }
    
            const elementName = prompt("Enter element name: ");

            if(elementName !== "" && elementName !== null){
                let elementInfo = this.getAdditionalInfo(event.target);
                elementInfo.TestName = elementName;
                elementInfo.dataTestID = event.target.getAttribute("blacksand-testid")
        
                console.log("Element that was right-clicked:", elementInfo);
                this.testElements.push(elementInfo);
            }
        });
    }
    
}

const util = new BlackSandUtil();
util.init();
