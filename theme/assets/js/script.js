import WavesStore from './WaveDecoration/WaveStore/WaveStore';
import { caseStudiesSwiper }  from './SwiperCarousels/caseStudiesSwiper/caseStudiesSwiper';
import { caseStudiesSwiperIndexCounter }  from './SwiperCarousels/caseStudiesSwiper/caseStudiesSwiperIndexCounter';
import { recommendationsSwiper }  from './SwiperCarousels/RecommendationSwiper/recommendationSwiper';
import { contentSwiper } from './SwiperCarousels/ContentSwiper/contentSwiper';

caseStudiesSwiperIndexCounter.initSwiper();
const wavesStore = new WavesStore();
wavesStore.render();