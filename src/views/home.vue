<script setup>
import 'vue3-carousel/dist/carousel.css'
import Banner from '../components/Home/Banner.vue';
import Banner2 from '../components/Home/Banner2.vue';
import Banner3 from '../components/Home/Banner3.vue';

const slides = [{slide: Banner, id: "1"}, {slide: Banner2, id: "2"}, {slide: Banner3, id: "3"}]
</script>

<template>
  <div class="w-full font-normal_font">
    <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="3000999">
      <Slide v-for="item in slides" :key="item.id">
        <component :is="item.slide" :key="item.id"></component>
      </Slide>
      <template #addons>
        <Navigation class="text-white"/>
        <Pagination />
      </template>
    </Carousel>
    <FastVue/>
    <VideoVue />
    <DownloadVue />
    <Community/>
    <CustomScenes/>
    <WhatCommunity/>
    <Competitiveness/>
    <Diagram/>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import VideoVue from "./home/VideoPage.vue";
import DownloadVue from "./home/DownloadPage.vue";
import FastVue from '../components/Home/FastVue.vue';
import Community from './home/Community.vue';
import WhatCommunity from './home/WhatCommunity.vue';
import CustomScenes from './home/CustomScenes.vue';
import Competitiveness from './home/Competitiveness.vue';
import Diagram from './home/Diagram.vue';

export default {
  name: 'Home',
  components: {
    Carousel, Slide, Pagination, Navigation,
    VideoVue,
    DownloadVue,
    FastVue,
    Community,
    WhatCommunity,
    CustomScenes,
    Competitiveness,
    Diagram,
  },
  mounted() {
    window.scrollTo(0,0);
  }
}
</script>


<style>
@media (min-width: 1024px) {
  .carousel__pagination {
    top: 545px;
    float: left;
    padding-left: calc(50% - 478px)
  }

  .carousel__pagination-button::after {
    width: 48px;
  }

  .carousel__pagination {
    justify-content: start;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .carousel__pagination {
    top: 325px;
    float: left;
    padding-left: calc(50% - 335px);
  }

  .carousel__pagination-button::after {
    width: 48px;
  }

  .carousel__pagination {
    justify-content: start;
  }
}
@media (max-width: 767px) {
  .carousel__pagination {
    top: 170px;
    float: auto;
  }

  .carousel__pagination-button::after {
    width: 44.25px;
  }
  .carousel__pagination {
    justify-content: center;
  }
}
.carousel__pagination {
  position: absolute;
  width: 100%;
}

.carousel__pagination-button::after {
  background: white !important;
  border-radius: 2px;
}

.carousel__pagination-button--active::after {
  background: #F02148 !important;
}
</style>