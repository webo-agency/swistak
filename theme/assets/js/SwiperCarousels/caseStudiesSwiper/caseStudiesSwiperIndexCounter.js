export const caseStudiesSwiperIndexCounter = {
    indexSpots: Array.from(document.getElementsByClassName('ks-case-studies-swiper-slide')),
    renderIndexInSpots: function() {
        for (let i = 0; i < this.indexSpots.length; i++) {
            const element = this.indexSpots[i];
            const index = i + 1;
            
            if(index <= 9) {
                element.textContent = `0${index}.`;
            }
            else {
                element.textContent = `${index}.`;
            }
        } 
    },
    initSwiper: function() {
        return this.renderIndexInSpots();
    }
};
