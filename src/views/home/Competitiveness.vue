<template>
  <div class="bg-download_page bg-no-repeat w-full z-[0] relative bg-[length:100%_100%]">
    <div class="h-full lg:py-[66px] md:py-[40px] py-[20px] container m-auto px-5">
      <div class="title">
        <div class="text-themeGreyText1 font-medium lg:text-[42px] md:text-[30px] text-[18px] text-center">
            {{ $t("home.phoenixCommunityCompetitiveness") }}
        </div>
        <div class="title-border mt-[21px]"></div>
      </div>
      <div class="bg-competitivense_page h-[530px] bg-[length:100%_100%] lg:block md:block hidden lg:mt-[63px] md:mt-[20px]"></div>
      <div class="bg-competitivense_mobile_page h-[340px] bg-[length:100%_100%] lg:hidden md:hidden block mt-[12px]"></div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.title-border{
  background: radial-gradient(circle,  #F02148 0%, #ff5b2100 100%);
  margin: auto;
  height: 4px;
}
@media (min-width: 768px) {
  .title-border {
    width: 360px;
  }
}

@media (max-width: 767px) {
  .title-border {
    width: 200px;
  }
}
</style>
