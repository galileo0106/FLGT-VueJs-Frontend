<script setup>
const datas = [
  {qrCode: new URL("/src/assets/chinese_mobile/qr_code_mobile.svg", import.meta.url).href, id: "1", name: "androidVersion", url: "下载网址: https://www.fenghuang.com"},
  {qrCode: new URL("/src/assets/chinese_mobile/qr_code_mobile.svg", import.meta.url).href, id: "2", name: "iosVersion", url: "下载网址: https://www.fenghuang.com"},
  {qrCode: new URL("/src/assets/chinese_mobile/qr_code_mobile.svg", import.meta.url).href, id: "3", name: "googlePlay", url: "下载网址: https://www.fenghuang.com"},
  {qrCode: new URL("/src/assets/chinese_mobile/qr_code_mobile.svg", import.meta.url).href, id: "4", name: "testflinght", url: "下载网址: https://www.fenghuang.com"},
]

</script>

<template>
  <div class="bg-download_page bg-no-repeat lg:h-[699px] md:h-[100%] h-[382px] w-full z-[-3]">
    <div class="h-full lg:py-[66px] md:py-[40px] py-[20px]">
      <div class="title">
        <div class="text-themeGreyText1 font-medium lg:text-[42px] md:text-[30px] text-[18px] text-center">
          {{ $t("home.freeDownload") }}
        </div>
        <div class="title-border mt-[21px]"></div>
      </div>
      <div class="lg:block md:block hidden">
        <div class="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-4 lg:mt-[51px] md:mt-[40px] mt-[34px]
          lg:gap-10 md:gap-0 gap-0">
          <div class="lg:col-span-2 md:col-span-1 col-span-1 float-right block">
            <div class="text-right">
              <div class="flex justify-end">
                <div class="lg:block md:flex hidden w-30px">
                  <img src="../../assets/chinese_pc/red_dot.svg" />
                </div>
              </div>
              <p class="lg:text-[24px] md:text-[18px] text-[12px] font-bold text-themeGreyText1 ">
                {{ $t("home.androidVersion") }}
              </p>
              <div class=" flex justify-end">
                <div class="">
                  <div class="flex justify-end">
                    <img src="../../assets/chinese_pc/qr_code_pc.svg" alt="qr code" class="qr_code_img" />
                  </div>
                  <p class="mt-[7px] text-[#666] font-[14px] text-center">{{ $t("home.scanCodeToDownload") }}</p>
                </div>
              </div>
              <p class="text-black text-[14px] mt-1">{{ $t("home.downloadUrl") }}: https://www.fenghuang.com</p>
            </div>

            <div class="text-right mt-[30px]">
              <div class="flex justify-end">
                <div class="lg:block md:flex hidden w-30px">
                  <img src="../../assets/chinese_pc/red_dot.svg" />
                </div>
              </div>
              <p class="lg:text-[24px] md:text-[18px] text-[12px] font-bold text-themeGreyText1 ">Google Play</p>
              <div class=" flex justify-end">
                <div class="">
                  <div class="flex justify-end">
                    <img src="../../assets/chinese_pc/qr_code_pc.svg" alt="qr code" class="qr_code_img" />
                  </div>
                  <p class="mt-[7px] text-[#666] font-[14px] text-center">{{ $t("home.scanCodeToDownload") }}</p>
                </div>
              </div>
              <p class="text-black text-[14px] mt-1">{{ $t("home.downloadUrl") }}: https://www.fenghuang.com</p>
            </div>
          </div>
          <div class="lg:col-span-1 md:col-span-2 col-span-2">
            <img src="../../assets/chinese_pc/phone_pc.png" alt="phone" class="mx-auto qr_code_img" />
          </div>
          <div class="lg:col-span-2 md:col-span-1 col-span-1 float-left block">
            <div class="text-left">
              <div class="flex justify-start">
                <div class="lg:block md:flex hidden w-30px">
                  <img src="../../assets/chinese_pc/red_dot.svg" />
                </div>
              </div>
              <p class="lg:text-[24px] md:text-[18px] text-[12px] font-bold text-themeGreyText1 ">{{ $t("home.iosVersion") }}</p>
              <div class=" flex justify-start">
                <div class="">
                  <img src="../../assets/chinese_pc/qr_code_pc.svg" alt="qr code" class="qr_code_img" />
                  <p class="mt-[7px] text-[#666] font-[14px] text-center">{{ $t("home.scanCodeToDownload") }}</p>
                </div>
              </div>
              <p class="text-black text-[14px] mt-1">{{ $t("home.downloadUrl") }}: https://www.fenghuang.com</p>
            </div>
            <div class="text-left mt-[30px]">
              <div class="flex justify-start">
                <div class="lg:block md:flex hidden w-30px">
                  <img src="../../assets/chinese_pc/red_dot.svg" />
                </div>
              </div>
              <p class="lg:text-[24px] md:text-[18px] text-[12px] font-bold text-themeGreyText1 ">Testflinght</p>
              <div class=" flex justify-start">
                <div class="">
                  <img src="../../assets/chinese_pc/qr_code_pc.svg" alt="qr code" class="qr_code_img" />
                  <p class="mt-[7px] text-[#666] font-[14px] text-center">{{ $t("home.scanCodeToDownload") }}</p>
                </div>
              </div>
              <p class="text-black text-[14px] mt-1">{{ $t("home.downloadUrl") }}: https://www.fenghuang.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:hidden md:hidden block">
        <div class="grid grid-cols-3 mt-[34px]">
          <div class="pl-[12px]">
            <img src="../../assets/chinese_mobile/phone_mobile.png" alt="phone" class="mx-auto qr_code_img" />
          </div>
          <div class="col-span-2">
            <div class="grid grid-cols-2">
              <div v-for="item in datas" :key="item.id" class=" mb-[21px]">
                <div class="text-center">
                  <p class="text-[12px] text-themeGreyText1 font-bold">
                    {{ $t("download." + item.name) }}
                  </p>
                </div>
                <div class="text-center mx-auto">
                  <img :src=item.qrCode alt="qr code" class="mx-auto qr_code_img" />
                </div>
                <div class="text-center pt-[7px]">
                  <button class="text-[10px] text-white font-medium download_btn px-[14px] py-[3.5px] rounded-[2px]">
                    {{ $t("home.clickToDownload") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-border{
  background: radial-gradient(circle,  #F02148 0%, #ff5b2100 100%);
  margin: auto;
  height: 4px;
}

.download_btn {
  background: linear-gradient(to right, #3D1C82 0%, #F4027A 100%);
}

.qr_code_img {
  box-shadow: 5px 5px 10px rgb(222 230 236);
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
