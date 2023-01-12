<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="lg:bg-video_page md:bg-video_page bg-[#170550] bg-no-repeat 
      bg-[length:100%_100%] relative video_pc_size">
        <div class="lg:block md:block hidden relative top-[23.5%]">
            <div class="bg-laptop_pc bg-no-repeat laptop_pc bg-[length:78%_100%] h-[180px] relative">
              <div class="w-[77.2%] video_player_size">
                <video controls class="h-full mx-auto relative top-[17%]">
                  <source src="../../assets/movie/fhsq.mp4" type="video/mp4">
                </video>
              </div>
            </div>
        </div>
        <div class="lg:hidden md:hidden block px-3 py-6">
          <div class="bg-laptop_mobile h-[230px] bg-no-repeat bg-[length:100%_100%] relative">
            <div class="h-[200px] w-[270px] mx-auto">
              <video controls class="w-full h-full">
                <source src="../../assets/movie/fhsq.mp4" type="video/mp4">
              </video>
            </div>
          </div>
          <div class="relative mb-5">
            <img src="../../assets/chinese_mobile/Ecology_mobile.png" alt="laptop" 
              class="flex h-[224px] bg-contain mx-auto" />
          </div>
        </div>
  </div>
</template>

<style scoped>
@media (min-width: 1440px) {
  .video_pc_size {
    height: 710px;
  }
  .laptop_pc {
    height: 377px;
  }
  .video_player_size {
    height: 240px;
  }
}
@media (width: 1440px) {
  .video_pc_size {
    height: 575px;
  }
  .laptop_pc {
    height: 290px;
  }
  .video_player_size {
    height: 185px;
  }
}
@media (min-width: 1024px) and (max-width: 1439px) {
  .video_pc_size {
    height: 410px;
  }
  .laptop_pc {
    height: 205px;
  }
  .video_player_size {
    height: 130px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .video_pc_size {
    height: 320px;
  }
  .laptop_pc {
    height: 155px;
  }
  .video_player_size {
    height: 100px;
  }
}
@media (max-width: 767px) {
  .video_pc_size {
    height: 495px;
  }
}
</style>
