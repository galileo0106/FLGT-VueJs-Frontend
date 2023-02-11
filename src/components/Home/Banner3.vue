<template>
  <div class="lg:bg-chinese_pc_banner_3 md:bg-chinese_pc_banner_3 bg-chinese_mobile_banner_3
        bg-no-repeat lg:h-[638px] md:h-[380px] w-full bg-[length:100%_100%] z-[-2]"
        :class="lang == 'en' ? 'h-[250px]' : 'h-[200px]'">
  <div class="lg:pt-[177px] md:pt-[67px] pt-[16px] 
      lg:pl-[calc(calc(50%)-478px)] md:pl-[calc(calc(50%)-330px)] pl-[28px]
      lg:text-center md:text-center text-left">
      <p class="font-bold lg:text-[48px] md:text-[30px] text-[24px] text-[#54FEFF] flex">
        {{ $t("home.banner3Title1") }}
        <span class="transform scale-x-50 scale-y-100 flex">FLGT</span>
      </p>
      <p class="font-bold lg:text-[48px] md:text-[30px] text-[24px] text-[#54FEFF] text-left">
        {{ $t("home.banner3Title2") }}
      </p>
      <p class="lg:block md:block hidden mt-4 text-[#63FEFF] text-[10px] w-[362px] text-left">
        Phoenix Community will sign strategic cooperation agreements with top
        corporate/institutional projects in the target industry. Jointly set up
        an investor protection fund with the world's top capital and
        communities, and the use of funds will be disclosed to investors on a
        regular basis to ensure the openness of the use of funds.
      </p>
    </div>
  </div>
</template>

<script>
export default {
    name: "Banner3",
    data() {
        return {
            lang: localStorage.getItem("lang"),
        }
    },
}
</script>
<style scoped></style>
