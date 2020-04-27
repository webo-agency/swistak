
export const recommendationsSwiper = new Swiper('.ks-recommendations__swiper-container', {
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
