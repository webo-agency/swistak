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
import StringLimitation from './StringLimitation/StringLimitation';
import LazyLoad from "vanilla-lazyload";

const rootScript = {
    wavesStore: new WavesStore(),
    video: new VideoHandler(),
    rodo: new FormRodo(),
    formLabel: new FormLabel(),
    header: new HeaderPosition(),
    fadeInBottom: new FadeInBottom(),
    stringLimitation: new StringLimitation(),
    myLazyLoad: new LazyLoad(),
    init: function() {
        caseStudiesSwiperIndexCounter.initSwiper();
        this.wavesStore.render();
        this.video.init();
        this.rodo.init();
        this.formLabel.eachInputInit();
        this.header.scrollPage();
        this.fadeInBottom.initFadeEffect();
        this.stringLimitation.init();
        this.myLazyLoad.update();
    }
}

document.addEventListener('load', function() {
    rootScript.init();
})