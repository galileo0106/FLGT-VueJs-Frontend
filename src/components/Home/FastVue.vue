<script setup>
</script>

<template>
  <div class="lg:hidden md:hidden block h-[68px] bg-fast_box">
    <div class="grid grid-cols-4 gap-4 px-4">
        <button class="text-center">
            <img src="../../assets/chinese_mobile/movie.svg" alt="eth" 
              class="lg:hidden md:hidden flex  w-[24px] h-[24px] mx-auto mt-[11px]" />
            <p class="text-white text-[16px] font-medium my-1">{{ $t("menu.movie") }}</p>
        </button>
        <button class="text-center">
            <img src="../../assets/chinese_mobile/shovel.svg" alt="eth" 
              class="lg:hidden md:hidden flex  w-[24px] h-[24px] mx-auto mt-[11px]" />
            <p class="text-white text-[16px] font-medium my-1">{{ $t("menu.mining") }}</p>
        </button>
        <button class="text-center">
            <img src="../../assets/chinese_mobile/group.svg" alt="eth" 
              class="lg:hidden md:hidden flex  w-[24px] h-[24px] mx-auto mt-[11px]" />
            <p class="text-white text-[16px] font-medium my-1">{{ $t("menu.team") }}</p>
        </button>
        <button class="text-center">
            <img src="../../assets/chinese_mobile/blog.svg" alt="eth" 
              class="lg:hidden md:hidden flex  w-[24px] h-[24px] mx-auto mt-[11px]" />
            <p class="text-white text-[16px] font-medium my-1">{{ $t("menu.blog") }}</p>
        </button>
    </div>
  </div>
</template>

<style scoped></style>
