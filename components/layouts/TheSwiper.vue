<template>
  <swiper
    class="swiper"
    :modules="modules"
    :slides-per-view="1"
    :space-between="10"
    navigation
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="slide of slides" :key="slide.id">
      <img :src="slide" />
    </swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slides: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, EffectFade],
    };
  },
};
</script>

<style scoped>
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.swiper {
  width: 300px;
}

@media screen and (min-width: 768px) {
  .swiper {
    width: 350px;
  }
}

@media screen and (min-width: 1200px) {
  .swiper {
    width: 400px;
  }
}
</style>
