<script setup>
const download_datas = [
    { id: 1, qrCodeImg: new URL("/src/assets/chinese_pc/download/download_qr_code_pc.svg", import.meta.url).href, title: "androidVersion"},
    { id: 2, qrCodeImg: new URL("/src/assets/chinese_pc/download/download_qr_code_pc.svg", import.meta.url).href, title: "iosVersion"},
    { id: 3, qrCodeImg: new URL("/src/assets/chinese_pc/download/download_qr_code_pc.svg", import.meta.url).href, title: "googlePlay"},
    { id: 4, qrCodeImg: new URL("/src/assets/chinese_pc/download/download_qr_code_pc.svg", import.meta.url).href, title: "testflinght"},
]
</script>

<template>
    <div class="lg:bg-download_bg_pc md:bg-download_bg_pc bg-download_bg_mobile bg-no-repeat
        lg:h-[638px] md:h-[500px] h-[400px] w-full z-[-2] bg-[length:100%_100%] relative">
        <div class="h-full lg:py-[136px] md:py-[60px] py-[16px] relative container mx-auto">
            <div class="lg:pl-[calc(calc(50%)-478px)] md:pl-[100px] pl-[24px]">
                <div class="font-[700] lg:text-[48px] md:text-[39px] text-white text-left"
                    :class="lang == 'en' ? 'leading-[30px] text-[25px]' : 'leading-[56px] text-[30px]'">
                    {{ $t("download.phoenixCommunityClientDownload") }}
                </div>
                <div class="lg:leading-[64px] md:leading-[40px] leading-[18px]">
                    <p class="lg:text-[16px] text-[12px] text-white font-medium pr-2">
                        {{ $t("download.bannerContent") }}
                    </p>
                </div>
                <div class="mt-[60px] lg:block md:block hidden">
                    <div class="flex flex-row">
                        <div v-for="item in download_datas" :key="item.id" class="mr-[50px]">
                            <button class="w-[100px] bg-transparent gr_code_btn text-white
                                lg:text-[14px] md:text-[12px] text-[10px] font-bold text-center leading-[24px]">
                                {{ $t("download."+ item.title) }}
                            </button>
                            <img :src=item.qrCodeImg alt="qr_code_pc"
                                class="my-[10px]" />
                            <p class="text-[14px] leading-[24px] text-white font-[400] text-center">
                                {{ $t("download.scanCodeToDownload") }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute right-[3%] top-0 z-[-1] lg:block md:hidden hidden">
                <img src="../../assets/chinese_pc/download/download_img_pc.svg" alt="download_img"
                    class="mx-auto md:w-4/5 lg:w-full" />
            </div>
            <div class="lg:hidden md:hidden block">
                <div class="grid grid-cols-2">
                    <div class="pl-[20px] pt-[34px]">
                        <img src="../../assets/chinese_mobile/download/download_phone_mobile.svg" alt="download_phone_mobile" />
                    </div>
                    <div class="grid grid-cols-2 gap-2 mt-5">
                        <div v-for="item in download_datas" :key="item.id">
                            <button class="w-[63px] bg-transparent gr_code_btn text-white
                                text-[10px] font-bold text-center">
                                {{ $t("download."+ item.title) }}
                            </button>
                            <img src="../../assets/chinese_mobile/download/download_qr_code_mobile.svg"
                                alt="qr_code_pc" class="mt-[6px] mb-1" />
                            <button class="download_btn_mobile text-white text-center text-[10px]
                                leading-[14px] font-medium py-[3.5px] w-[63px]">
                                {{ $t("download.scanCodeToDownload") }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "OperationsTeam",
    data() {
        return {
            lang: localStorage.getItem("lang"),
        }
    },
}
</script>
<style scoped>
.gr_code_btn {
    border: 1px solid #D9D9D9;
    border-radius: 27px;
}
.download_btn_mobile {
    background: linear-gradient(to right, #43DF88 0%, #1890FF 100%);
}
</style>