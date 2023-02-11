<template>
    <div class="w-full font-normal_font">
      <DownloadApp/>
      <div class="lg:bg-download_show_pc md:bg-download_show_pc bg-download_show_mobile bg-no-repeat 
        lg:h-[700px] md:h-[500px] h-[277px] w-full z-[-2] bg-[length:100%_100%] relative">
        <img src="../assets/chinese_pc/download/download_app_pc.png" alt="download-app"
          class="m-auto lg:block md:block hidden pt-[85px] mobile_app_img" />
        <img src="../assets/chinese_mobile/download/download_app_mobile.png" alt="download-app"
          class="m-auto lg:hidden md:hidden block pt-[63px]" />
      </div>
      <FAQ />
    </div>
</template>

<script>
import DownloadApp from "./download/DownloadApp.vue";
import FAQ from "./download/FAQ.vue";

export default {
  name: "Download",
  components: {
      DownloadApp,
      FAQ
  },
  mounted() {
    window.scrollTo(0,0);
  }
}
</script>
<style scoped>
@media (max-width: 1023px) and (min-width: 768px) {
  .mobile_app_img {
    width: 85%;
    padding-top: 75px;
  }
}
</style>