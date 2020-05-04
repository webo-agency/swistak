import WavesStore from './WaveDecoration/WaveStore/WaveStore';
import { caseStudiesSwiper }  from './SwiperCarousels/caseStudiesSwiper/caseStudiesSwiper';
import { caseStudiesSwiperIndexCounter }  from './SwiperCarousels/caseStudiesSwiper/caseStudiesSwiperIndexCounter';
import { recommendationsSwiper }  from './SwiperCarousels/RecommendationSwiper/recommendationSwiper';
import { contentSwiper } from './SwiperCarousels/ContentSwiper/contentSwiper';
import VideoHandler from './Video/VideoHandler';
import FormRodo from './Form/FormRodo/FormRodo';
import FormLabel from './Form/FormLabel/FormLabel';
import HeaderPosition from './HeaderPosition/HeaderPosition';
import FadeInBottom from './FadeAnimation/FadeInBottom';

const rootScript = {
    wavesStore: new WavesStore(),
    rodo: new FormRodo(),
    formLabel: new FormLabel(),
    header: new HeaderPosition(),
    fadeInBottom: new FadeInBottom(),
    init: function() {
        caseStudiesSwiperIndexCounter.initSwiper();
        this.wavesStore.render();
        this.rodo.init();
        this.formLabel.eachInputInit();
        this.header.scrollPage();
        this.fadeInBottom.initFadeEffect();
    }
}

rootScript.init();