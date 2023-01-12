<script setup>
import DownloadApp from "./download/DownloadApp.vue";
import FAQ from "./download/FAQ.vue";

</script>

<style>
</style>
<template>
    <div class="w-full font-normal_font">
      <DownloadApp/>
      <div class="lg:bg-download_show_pc md:bg-download_show_pc bg-download_show_mobile bg-no-repeat 
        lg:h-[700px] md:h-[500px] h-[277px] w-full z-[-2] bg-[length:100%_100%] relative">
      </div>
      <FAQ />
    </div>
</template>