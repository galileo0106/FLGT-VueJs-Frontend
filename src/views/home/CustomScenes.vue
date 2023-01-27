<script setup>
import { ref } from "vue";
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import CarouselItem from './carousel_item.vue';
const customScenes = [
  {id: "1", title: "shortVideo", url: "/src/assets/chinese_pc/short_video.svg", content: "scenesDetail1"}, 
  {id: "2", title: "movie", url: "/src/assets/chinese_pc/movie_illustration.svg", content: "scenseDetail2"}, 
  {id: "3", title: "shopping", url: "/src/assets/chinese_pc/shopping_illustration.svg", content: "scenseDetail3"}, 
  {id: "4", title: "wallet", url: "/src/assets/chinese_pc/money_bag_illustration.svg", content: "scenseDetail4"}, 
  {id: "5", title: "exchange", url: "/src/assets/chinese_pc/exchange.svg", content: "scenesDetail5"}, 
  {id: "6", title: "crowdfunding", url: "/src/assets/chinese_pc/crowdfunding_illustration.svg", content: "scenesDetail6"}, 
]

const carousel = [{slide: CarouselItem, id: "1"}, {slide: CarouselItem, id: "2"}]

</script>

<template>
  <div class="bg-download_page bg-no-repeat w-full z-[0] relative 
    lg:bg-[length:100%_100%] md:bg-contain bg-[length:100%_420px]">
    <div class="h-full lg:py-[66px] md:py-[40px] py-[20px] container m-auto px-5">
      <div class="title">
        <div class="text-themeGreyText1 font-medium lg:text-[42px] md:text-[30px] text-[18px] text-center">
          {{ $t("home.scenesToBeUsed") }}
        </div>
        <div class="title-border mt-[21px]"></div>
      </div>
      <div class="lg:block md:block hidden">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mt-[51px] md:mt-[40px] mt-[34px]">
          <div class="gradient_box relative lg:mt-[51px] md:mt-[40px] mt-[34px] m-auto" v-for="item in customScenes" :key="item.id">
            <div class="absolute left-[25%] top-[-23%]">
              <div class="icon_box w-[124px] h-[124px] m-auto">
                <img :src=item.url alt="short video" class="m-auto mt-4" />
              </div>
            </div>
            <div class="relative lg:mt-[72px] md:mt-[61px] mt-[50px] overflow-y-auto"
              :class="lang == 'en' ? 'h-[225px]' : 'h-[285px]'">
              <div class="lg:mb-[55px] md:mb-[46px] mb-[41px] text-center px-[20px]">
                <p class="text-black lg:text-[24px] md:text-[21px] text-[18px] font-bold mb-0">
                  {{ $t("home." + item.title) }}
                </p>
                <p class="lg:text-[14px] md:text-[13px] text-[12px] font-medium text-themeGreyText1">
                  {{ $t("home." + item.content) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:hidden md:hidden block mt-[6px]">
        <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="3000999">
          <Slide v-for="item in carousel" :key="item.id">
            <component :is="item.slide" :key="item.id"></component>
          </Slide>
          <template #addons>
            <Navigation class="text-white"/>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
    name: "CustomScenes",
    data() {
        return {
            lang: localStorage.getItem("lang"),
        }
    },
}
</script>

<style scoped>
.title-border{
  background: radial-gradient(circle,  #F02148 0%, #ff5b2100 100%);
  margin: auto;
  height: 4px;
}
.gradient_box {
  background: linear-gradient(to right, #fff 0%, #E5D5F9 100%);
  border-bottom: 21px solid transparent;
  border-image: linear-gradient(to right, #3D1C82 0%, #F4027A 100%);
  border-image-slice: 1;
  width:100%;
  z-index: 0;
}

.icon_box {
    position: relative;
    border: 2px solid transparent;
    border-radius: 50%;
    background: linear-gradient(to right, #FFFFFF 0%, #F6F6F6 11.76%, #EFEFF4 28.37%, #F9F9FF 46.47%, #D5DFE7 71.2%);
    background-clip: padding-box;
}

.icon_box::after {
    position: absolute;
    top: -4px; bottom: -4px;
    left: -4px; right: -4px;
    background: linear-gradient(to right, #6A46E5 0%, #EE6DBC 100%);
    content: '';
    z-index: -1;
    border-radius: 50%;
}

@media (min-width: 768px) {
  .title-border {
    width: 360px;
  }

  .gradient_box {
    width: 265px;
    height: 304px;
  }
}

@media (max-width: 767px) {
  .title-border {
    width: 200px;
  }

  .gradient_box {
    width: 220px;
    height: 260px;
  }
}
</style>
