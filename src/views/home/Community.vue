<script setup>
import { ref } from "vue";
const datas = [
  {id: "1", name: "存储和分布节", value: 2800, unit: "+", icon: "/src/assets/chinese_pc/btn-node.svg"},
  {id: "2", name: "社区", value: 2500, unit: "万", icon: "/src/assets/chinese_pc/btn-community.svg"},
  {id: "3", name: "网红博主", value: 800, unit: "多万", icon: "/src/assets/chinese_pc/btn-internet.svg"},
  {id: "4", name: "版权合作方", value: 1500, unit: "多家", icon: "/src/assets/chinese_pc/btn-copyright.svg"},
]
</script>

<template>
  <div class="bg-community_mobile_page md:bg-community_page lg:bg-community_page bg-no-repeat 
    lg:h-[800px] md:h-[100%] h-[400px] bg-[length:100%_100%]">
    <div class="h-full lg:py-[66px] md:py-[40px] py-[20px]">
      <div class="title">
        <div class="text-white font-medium lg:text-[42px] md:text-[30px] text-[18px] text-center">
          凤凰社区
        </div>
        <div class="title-border mt-[21px]"></div>
      </div>

      <div class="grid grid-cols-4 lg:gap-5 md:gap-3 gap-0 px-[10px] md:px-[20%] lg:mt-[40px] md:mt-[34px] mt-[28px]">
        <div v-for="item in datas" :key="item.id" class="flex justify-center">
          <div>
            <div class="px-5 md:px-0">
              <img :src=item.icon :alt=item.name class="mx-auto" />
            </div>
            <p class="text-white mb-0 text-md text-center font-medium
              lg:text-[32px] md:text-[24px] text-[16px]">
              {{item.value}} {{item.unit}}
            </p>
            <p class="text-white text-center 
              lg:text-[18px] md:text-[15px] text-[12px] font-medium">{{item.name}}</p>
          </div>
        </div>
      </div>

      <div class="mt-[7px] md:mt-[67px] mb-[87px] px-[10px] md:px-[20%] grid grid-cols-2 md:block">
        <div class="mb-[18px] md:mb-[37px] flex md:block justify-start">
          <button class="btn_community text-white text-center lg:py-3 md:py-3 py-2
            lg:text-[24px] md:text-[19px] text-[14px]">
            去中心化短视频社交
          </button>
        </div>
        <div class="mb-[18px] md:mb-[37px] flex md:block justify-end">
          <button class="btn_community text-white text-center lg:py-3 md:py-3 py-2
            lg:text-[24px] md:text-[19px] text-[14px]">
            海里文件链上存储
          </button>
        </div>
        <div class="mb-[18px] md:mb-[37px] flex md:block justify-start">
          <button class="btn_community text-white text-center lg:py-3 md:py-3 py-2
            lg:text-[24px] md:text-[19px] text-[14px]">
            去中心化交易所
          </button>
        </div>
        <div class="mb-[18px] md:mb-[37px] flex md:block justify-end">
          <button class="btn_community text-white text-center lg:py-3 md:py-3 py-2
            lg:text-[24px] md:text-[19px] text-[14px]">
            统一身份证系统
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
 
<style scoped>
.title-border{
  background: radial-gradient(circle, #1F9CBC 20%, rgba(25, 161, 190, 0) 0%, #1F9CBC 18.78%, #7D4192 79.79%, rgba(125, 65, 146, 0) 97.05%);
  margin: auto;
  height: 4px;
}

.btn_community {
  background: linear-gradient(to right, #3D1C82 0%, #F4027A 100%);
  border-radius: 25px;
  box-shadow: 0px 12px 10px rgba(0, 0, 0, 0.25);
}

@media (min-width: 768px) {
  .title-border {
    width: 360px;
  }

  .btn_community {
    width: 380px;
  }
}

@media (max-width: 767px) {
  .title-border {
    width: 200px;
  }

  .btn_community {
    width: 90%;
  }
}
@media (max-width: 475px) {
  .btn_community {
    width: 156px;
  }
}
</style>
