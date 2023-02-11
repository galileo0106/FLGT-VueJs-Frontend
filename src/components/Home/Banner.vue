<template>
  <div class="lg:bg-chinese_pc_banner_1 md:lg:bg-chinese_pc_banner_1 
          bg-chinese_mobile_banner_1 bg-no-repeat lg:h-[638px] md:h-[380px] 
          w-full z-[-2] bg-[length:100%_100%]"
        :class="lang == 'en' ? 'h-[250px]' : 'h-[200px]'">
    <div class="h-full lg:py-[90px] md:py-[60px] pl-[calc(calc(50%)-478px)]">
      <div class="lg:text-themeGreyText1 md:text-themeGreyText1 px-[23px] pt-[28px] font-bold
        lg:text-[42px] md:text-[28px] text-[20px] text-[#170550] text-left">
        {{ $t("home.banner1Title") }}
        <hr class="border-none" />
        {{ $t("home.socialPlatform") }}
      </div>
      <div class="px-[23px] lg:mt-[40px] md:mt-[40px] mt-[10px]">
        <div class="flex items-center">
          <div class="flex items-center">
            <img src="../../assets/chinese_pc/home/icons/eth.svg" alt="eth" class="lg:flex md:flex hidden" />
            <img src="../../assets/chinese_mobile/home/Polygon.svg" alt="eth" class="lg:hidden md:hidden flex" />
            <p class="ml-0.5 lg:text-themeGreyText1 md:text-themeGreyText1 text-themeDarkPurpleText
              lg:text-[18px] md:text-[13px] text-[10px]">{{ $t("home.watchMoviesForFree") }}</p>
          </div>
          <div class="flex items-center lg:ml-10 md:ml-10 ml-5">
            <img src="../../assets/chinese_pc/home/icons/eth.svg" alt="eth" class="lg:flex md:flex hidden" />
            <img src="../../assets/chinese_mobile/home/Polygon.svg" alt="eth" class="lg:hidden md:hidden flex" />
            <p class="ml-0.5 lg:text-themeGreyText1 md:text-themeGreyText1 text-themeDarkPurpleText
              lg:text-[18px] md:text-[13px] text-[10px]">{{ $t("home.unlimitedTrafficForBloggers") }}</p>
          </div>
          <div class="flex items-center lg:ml-10 md:ml-10 ml-5">
            <img src="../../assets/chinese_pc/home/icons/eth.svg" alt="eth" class="lg:flex md:flex hidden" />
            <img src="../../assets/chinese_mobile/home/Polygon.svg" alt="eth" class="lg:hidden md:hidden flex" />
            <p class="ml-0.5 lg:text-themeGreyText1 md:text-themeGreyText1 text-themeDarkPurpleText
              lg:text-[18px] md:text-[13px] text-[10px]">{{ $t("home.miningWithZeroInvestment") }}</p>
          </div>
        </div>
        <div class="text-left">
          <button class="bg-gradient-to-r from-[#F02148] to-[#FC4E2B] 
              lg:text-[18px] md:text-[14px] text-[12px] lg:w-[186px] md:w-[114px] w-[72px]
            text-white py-2 lg:mt-[100px] md:mt-[50px] mt-[25px] shadow-btn1 text-center">
            {{ $t("home.downloadNow") }}
          </button>
        </div>
      </div>
    </div>
    <div class="lg:flex md:flex hidden bg-banner_illustration_1 absolute 
          bg-no-repeat bottom-0 lg:h-[586px] md:h-[450px] h-[320px] w-2/3 right-0 z-[-1]"></div>
  </div>
</template>
<script>
export default {
    name: "Banner",
    data() {
        return {
            lang: localStorage.getItem("lang"),
        }
    },
}
</script>

<style scoped></style>
