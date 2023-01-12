<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="gradient_box relative lg:mt-[51px] md:mt-[40px] mt-[34px] m-auto">
    <div class="absolute left-[25%] top-[-23%]">
      <div class="icon_box w-[124px] h-[124px] m-auto">
        <img src="../../assets/chinese_pc/short_video.svg" alt="short video" class="m-auto mt-4" />
      </div>
    </div>
    <div class="relative lg:mt-[72px] md:mt-[61px] mt-[50px]">
      <div class="lg:mb-[55px] md:mb-[46px] mb-[41px] text-center px-[20px]">
        <p class="text-black lg:text-[24px] md:text-[21px] text-[18px] font-bold mb-0">短视频</p>
        <p class="lg:text-[14px] md:text-[13px] text-[12px] font-medium text-themeGreyText1">
          选择歌曲，配以短视频，形成自己的作品，抖音类似。但不同的是，凤凰社区采用区块链加密技术，是去中心化的短视频平台，让用户更自由、信息更透明。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
<script>
export default {
      props: ['data'],
      created: function () {
          // console.log(this.data) //prints out an empty string
      },
  }
</script>
