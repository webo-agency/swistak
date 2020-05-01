class FadeInBottom {
    constructor() {
        this.sections = document.querySelectorAll('.ks-fade');
    }

    initFadeEffect() {
        this.sections.forEach(section => {
            const fadingElement = section.querySelector(".ks-fadeInBottom");
            window.addEventListener("scroll", () => {
                if(section.offsetTop - window.scrollY <= 500) {
                    fadingElement.classList.add('ks-fadeInBottom--active');
                }
            }, false);
        })
    }
}

export default FadeInBottom;