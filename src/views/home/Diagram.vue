<template>
  <div class="lg:bg-diagram_page md:bg-diagram_page bg-[#150550] bg-no-repeat w-full bg-[length:100%_100%] 
    pb-[30px]">
    <div class="lg:py-[33px] md:py-[30px] py-[28px]">
      <div class="title">
        <div class="text-white font-medium lg:text-[42px] md:text-[30px] text-[18px] text-center">
          {{ $t("home.routeMap") }}
        </div>
        <div class="title-border mt-[21px]"></div>
      </div>
    </div>
    <div class="bg-diagram_pc h-[800px] bg-[length:100%_100%] lg:block md:block hidden mb-[20px]"></div>
    <div class="bg-diagram_mobile h-[775px] bg-[length:100%_100%] lg:hidden md:hidden block"></div>
  </div>
</template>

<script>
</script>
 
<style scoped>
.title-border{
  background: radial-gradient(circle, #1F9CBC 20%, rgba(25, 161, 190, 0) 0%, #1F9CBC 18.78%, #7D4192 79.79%, rgba(125, 65, 146, 0) 97.05%);
  margin: auto;
  height: 4px;
}

.btn-community {
  background: linear-gradient(#3D1C82 0%, #F4027A 100%);
  border-radius: 5px;
}

@media (min-width: 768px) {
  .title-border {
    width: 360px;
  }

  .btn-community {
    width: 380px;
  }
}

@media (max-width: 767px) {
  .title-border {
    width: 200px;
  }

  .btn-community {
    width: 156px;
  }
}
</style>
