<script setup>
import { ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import qrCode from '../../assets/chinese_pc/qr_code_pc.svg';
import CarouselItem from './carousel_item.vue';
const customScenes = [
  {id: "1", title: "短视频", url: "/src/assets/chinese_pc/short_video.svg",
  content: "选择歌曲，配以短视频，形成自己的作品，抖音类似。但不同的是，凤凰社区采用区块链加密技术，是去中心化的短视频平台，让用户更自由、信息更透明。"}, 
  {id: "2", title: "电影", url: "/src/assets/chinese_pc/movie_illustration.svg",
  content: "采用区块链加密技术和用户贡献度算法，让用户免费观赏电影的同时也可以上传电影来获得代币收益。凤凰社区电影内容丰富，数量多，质量高，不卡顿，无广告。"}, 
  {id: "3", title: "购物", url: "/src/assets/chinese_pc/shopping_illustration.svg",
  content: "支持用户在社区内经营自己的网络店铺。所有用户都可以自由购物。凤凰社区采用NFT技术和加密技术，使每件商品都具有唯一性和可溯源性，保障消费者和店铺的利益。"}, 
  {id: "4", title: "钱包", url: "/src/assets/chinese_pc/money_bag_illustration.svg",
  content: "基于资产链和存储链开发出加密钱包功能，支持跨链和链上自由划转。快速且便捷，公开透明，分布式记账保障了每一笔交易都是可查询且不可篡改的。"}, 
  {id: "5", title: "交易所", url: "/src/assets/chinese_pc/exchange.svg",
  content: "凤凰社区交易所支持主流加密货币的自由交易和defi功能，多样化的金融工具和金融衍生品提供给用户，满足用户的各种金融需求。"}, 
  {id: "6", title: "众筹", url: "/src/assets/chinese_pc/crowdfunding_illustration.svg",
  content: "支持点对点需求对接，让资方和需求方无缝对接，降低中间门槛。需求方可以在凤凰社区发起众筹，采用分布式信息化推送，让更多的资方看到需求方的诉求。并利用去中心化加密技术保障每一笔资金的动向，方便资方查询。"}, 
]

const carousel = [{slide: CarouselItem, id: "1"}, {slide: CarouselItem, id: "2"}]

</script>

<template>
  <div class="bg-download_page bg-no-repeat w-full z-[0] relative 
    lg:bg-[length:100%_100%] md:bg-contain bg-[length:100%_420px]">
    <div class="h-full lg:py-[66px] md:py-[40px] py-[20px] container m-auto px-5">
      <div class="title">
        <div class="text-themeGreyText1 font-medium lg:text-[42px] md:text-[30px] text-[18px] text-center">
          使用场景
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
            <div class="relative lg:mt-[72px] md:mt-[61px] mt-[50px]">
              <div class="lg:mb-[55px] md:mb-[46px] mb-[41px] text-center px-[20px]">
                <p class="text-black lg:text-[24px] md:text-[21px] text-[18px] font-bold mb-0">{{item.name}}</p>
                <p class="lg:text-[14px] md:text-[13px] text-[12px] font-medium text-themeGreyText1">
                  {{ item.content }}
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
            <!-- <Pagination /> -->
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
 
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
