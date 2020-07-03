class FadeInBottom {
    constructor() {
        this.sections = document.querySelectorAll('.ks-fade');
        this.sections.forEach(section => {
            section.classList.add('is-running');
        });
    }

    initFadeEffect() {

        this.sections.forEach(section => {
            const fadingElement = section.querySelector(".ks-fadeInBottom");
            window.addEventListener("scroll", () => {
                if(fadingElement !== null){
                    if(section.offsetTop - window.scrollY <= 500) {
                        fadingElement.classList.add('ks-fadeInBottom--active');
                    }
                }
            }, false);
        })
    }
}

export default FadeInBottom;