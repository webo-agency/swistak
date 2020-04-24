
const caseStudiesSwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.ks-case-studies__swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
})

const caseStudiesSwiperObject = {
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
}

const recommendationsSwiper = new Swiper('.ks-recommendations__swiper-container', {
    slidesPerView: 1,
    spaceBetween: 70,
    pagination: {
        el: '.ks-recommendations__swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
          slidesPerView: 2,
        },
    }
});

const contentSwiper = new Swiper('.ks-content__swiper-container', {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
        el: '.ks-content__swiper-pagination',
        clickable: true,
    },
});

caseStudiesSwiperObject.initSwiper();



