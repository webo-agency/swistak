import WavesStore from './WaveDecoration/WaveStore/WaveStore';
import { caseStudiesSwiper }  from './SwiperCarousels/caseStudiesSwiper/caseStudiesSwiper';
import { caseStudiesSwiperIndexCounter }  from './SwiperCarousels/caseStudiesSwiper/caseStudiesSwiperIndexCounter';
import { recommendationsSwiper }  from './SwiperCarousels/RecommendationSwiper/recommendationSwiper';
import { contentSwiper } from './SwiperCarousels/ContentSwiper/contentSwiper';
import VideoHandler from './Video/VideoHandler';
import FormRodo from './Form/FormRodo/FormRodo';
import FormLabel from './Form/FormLabel/FormLabel';

caseStudiesSwiperIndexCounter.initSwiper();

const wavesStore = new WavesStore();
wavesStore.render();

const video = new VideoHandler();
video.init();

const rodo = new FormRodo();
rodo.init();

const formLabel = new FormLabel();
formLabel.eachInputInit();