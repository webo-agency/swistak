class StringLimitation {
    constructor() {
        this.slides = document.querySelectorAll('.ks-swiper__case-studies .swiper-slide .ks-case-studies__content');
        this.slidesContainer = document.querySelectorAll('.ks-swiper__case-studies .swiper-slide');
    }

    createMoreButton(callback) {
        const readmore = 'Czytaj więcej';
        const readless = 'Zwiń';
        const button = document.createElement('button');
        button.textContent = readmore;
        button.classList.add('ks-button');
        button.classList.add('ks-button--primary');
        button.classList.add('ks-button--slide');

        button.addEventListener('click', () => {
            callback();
            if(button.textContent === readmore) {
                button.textContent = readless;
            }
            else {
                button.textContent = readmore
            }  
        })

        return button;
    }

    transformContent(container, charactersLimit) {

            let entryContent;
            let transformedContent;
            let isContainerExpanded = false;

            const toggleContent = (content, newContent) => {
                isContainerExpanded = !isContainerExpanded;
                container.innerText = isContainerExpanded ? content : newContent;
            }

            const triggerToggle = () => {
                return toggleContent(entryContent, `${transformedContent} . . .`);
            }
            
            let containerContent = container.innerText;
            const containerCharactersNumber = container.innerText.length;
            const maxAcceptableCharactersNumber = charactersLimit;

            if(containerCharactersNumber > maxAcceptableCharactersNumber) {
                entryContent = containerContent;
                transformedContent = entryContent.substring(0, maxAcceptableCharactersNumber).trim();
                container.innerText = isContainerExpanded ? entryContent : `${transformedContent} . . .`;
                container.parentElement.appendChild(this.createMoreButton(triggerToggle));
            }
            return container.innerText;
    }

    initLimitingOnCaseStudiesSlider() {
        return this.slides.forEach(slide => {
            this.transformContent(slide, 500);
        })
    }

    init() {
        this.initLimitingOnCaseStudiesSlider();
    }
}

export default StringLimitation;