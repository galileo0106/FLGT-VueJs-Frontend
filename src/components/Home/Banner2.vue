<template>
  <div class="lg:bg-chinese_pc_banner_2 md:bg-chinese_pc_banner_2 bg-chinese_mobile_banner_2
        bg-no-repeat lg:h-[638px] md:h-[380px] w-full z-[-2] bg-[length:100%_100%]"
        :class="lang == 'en' ? 'h-[250px]' : 'h-[200px]'">
    <div class="h-full lg:py-[90px] md:py-[70px] 
            lg:pl-[calc(calc(50%)-478px)] md:pl-[calc(calc(50%)-330px)] pl-[51px]
            lg:pt-[177px] md:pt-[67px] pt-[21px] text-left">
      <label class="font-bold lg:text-[88px] md:text-[36px] text-[26px]
        bg-clip-text text-transparent bg-gradient-to-r from-[#CC3CFF] to-[#20E4C1]">
        {{ $t("home.banner2Title") }}
      </label>
      <p class="lg:mt-12 md:mt-6 :mt-[30px] text-white 
        lg:text-[24px] md:text-[18px] text-[14px]">
        ——{{ $t("home.banner2Desc") }}——
      </p>
      <button class="text-white bg-gradient-to-r from-[#43DF88] to-[#1890FF] 
          lg:px-[54px] md:px-[36px] px-[24px] lg:py-[8px] md:py-[8px] py-[4px] rounded-[27px] mt-[24px] 
          lg:float-left md:float-left float-right mr-[29px]">
          {{ $t("home.downloadNow") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: "Banner2",
    data() {
        return {
            lang: localStorage.getItem("lang"),
        }
    },
}
</script>

<style scoped></style>
