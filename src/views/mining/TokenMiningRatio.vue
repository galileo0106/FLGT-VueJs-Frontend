<script setup>

</script>

<template>
    <div class="bg-chinese_pc_banner_1 lg:h-[700px] h-[600px]">
        <div class="container mx-auto lg:w-[932px] md:w-full w-full">
            <h3 class="lg:pt-[80px] md:pt-[50px] pt-[30px]
                lg:text-[48px] md:text-[38px] text-[28px] font-bold text-[#25277A] text-center">
                {{ $t("mining.tokenMiningRatio") }}
            </h3>
            <p class="lg:pt-[20px] md:pt-[18px] pt-[15px] text-center
                lg:text-[32px] md:text-[24px] text-[18px] text-black font-medium">
                {{ $t("mining.distributionRatioChart") }}
            </p>
        </div>
        <div class="lg:mt-[8px] md:mt-[20px] mt-[25px] lg:mb-[37px] md:mb-[35px] mb-[31px]">
            <img src="../../assets/chinese_pc/mining/mining_chart_pc.png" alt="minig_chart"
                class="lg:block md:block hidden mx-auto px-[40px]" />
            <img src="../../assets/chinese_mobile/mining/mining_chart_mobile.png" alt="minig_chart"
                class="lg:hidden md:hidden block mx-auto" />
        </div>
        <div class="ratio-box lg:w-4/5 md:w-4/5 w-[335px] lg:mt-[37px] mt-[34px] mx-auto rounded-[8px] mb-[20px]"
            :class="lang == 'en' ? 'lg:h-[175px] md:h-[135px] h-[230px]' : 'lg:h-[151px] md:h-[110px] h-[196px]'">
            <div class="grid lg:grid-cols-7 md:grid-cols-7 grid-cols-4">
                <div class="col-span-4">
                    <div class="grid grid-cols-4">
                        <div class="py-[20px] text-center">
                            <div class="lg:pl-[20px] md:pl-[15px] pl-[14px] inline-block">
                                <img alt="icon" src="../../assets/chinese_pc/mining/cubic_icon_pc.svg" 
                                    class="mx-auto lg:block md:block hidden" />
                                <img alt="icon" src="../../assets/chinese_mobile/mining/cubic_icon_mobile.svg" 
                                    class="mx-auto lg:hidden md:hidden block" />
                                <p class="lg:text-[24px] md:text-[12px] text-[12px] text-white pt-[10px]">
                                    {{ $t("mining.nodeMortgage") }}
                                </p>
                                <p class="lg:text-[24px] md:text-[12px] text-[12px] text-white">
                                    100{{ $t("mining.billion") }}
                                </p>
                            </div>
                        </div>
                        <div class="py-[20px] text-center">
                            <div class="lg:pl-[20px] md:pl-[15px] pl-[14px] inline-block">
                                <img alt="icon" src="../../assets/chinese_pc/mining/shovel_icon_pc.svg" 
                                    class="mx-auto lg:block md:block hidden" />
                                <img alt="icon" src="../../assets/chinese_mobile/mining/shovel_icon_mobile.svg" 
                                    class="mx-auto lg:hidden md:hidden block" />
                                <p class="lg:text-[24px] md:text-[12px] text-[12px] text-white pt-[10px]">
                                    {{ $t("mining.nodeMining") }}
                                </p>
                                <p class="lg:text-[24px] md:text-[12px] text-[12px] text-white">
                                    80{{ $t("mining.billion") }}
                                </p>
                            </div>
                        </div>
                        <div class="py-[20px] text-center">
                            <div class="lg:pl-[20px] md:pl-[15px] pl-[14px] inline-block">
                                <img alt="icon" src="../../assets/chinese_pc/mining/user_mining_icon_pc.svg" 
                                    class="mx-auto lg:block md:block hidden" />
                                <img alt="icon" src="../../assets/chinese_mobile/mining/user_mining_icon_mobile.svg" 
                                    class="mx-auto lg:hidden md:hidden block" />
                                <p class="lg:text-[24px] md:text-[12px] text-[12px] text-white pt-[10px]">
                                    {{ $t("mining.bloggerMining") }}
                                </p>
                                <p class="lg:text-[24px] md:text-[12px] text-[12px] text-white">
                                    80{{ $t("mining.billion") }}
                                </p>
                            </div>
                        </div>
                        <div class="py-[20px] text-center">
                            <div class="lg:pl-[20px] md:pl-[15px] pl-[14px] inline-block">
                                <img alt="icon" src="../../assets/chinese_pc/mining/mining_anchor_icon_pc.svg" 
                                    class="mx-auto lg:block md:block hidden" />
                                <img alt="icon" src="../../assets/chinese_mobile/mining/mining_anchor_icon_mobile.svg" 
                                    class="mx-auto lg:hidden md:hidden block" />
                                <p class="lg:text-[24px] md:text-[12px] text-[12px] text-white pt-[10px]">
                                    {{ $t("mining.anchorMining") }}
                                </p>
                                <p class="lg:text-[24px] md:text-[12px] text-[12px] text-white">
                                    80{{ $t("mining.billion") }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-3 md:col-span-3 col-span-4">
                    <div class="grid grid-cols-3">
                        <div class="lg:pt-[20px] md:pt-[20px] pt-0 pb-[20px] text-center">
                            <div class="lg:pl-[20px] md:pl-[15px] pl-[14px] inline-block">
                                <img alt="icon" src="../../assets/chinese_pc/mining/copyright_icon_pc.svg" 
                                    class="mx-auto lg:block md:block hidden" />
                                <img alt="icon" src="../../assets/chinese_mobile/mining/copyright_icon_mobile.svg" 
                                    class="mx-auto lg:hidden md:hidden block" />
                                <p class="lg:text-[24px] md:text-[11px] text-[12px] text-white pt-[10px]">
                                    {{ $t("mining.movieCopyrightMining") }}
                                </p>
                                <p class="lg:text-[24px] md:text-[11px] text-[12px] text-white">
                                    80{{ $t("mining.billion") }}
                                </p>
                            </div>
                        </div>
                        <div class="lg:pt-[20px] md:pt-[20px] pt-0 pb-[20px] text-center">
                            <div class="lg:pl-[20px] md:pl-[15px] pl-[14px] inline-block">
                                <img alt="icon" src="../../assets/chinese_pc/mining/list_icon_pc.svg" 
                                    class="mx-auto lg:block md:block hidden" />
                                <img alt="icon" src="../../assets/chinese_mobile/mining/list_icon_mobile.svg" 
                                    class="mx-auto lg:hidden md:hidden block" />
                                <p class="lg:text-[24px] md:text-[11px] text-[12px] text-white pt-[10px]">
                                    {{ $t("mining.communityOperation") }}
                                </p>
                                <p class="lg:text-[24px] md:text-[11px] text-[12px] text-white">
                                    40{{ $t("mining.billion") }}
                                </p>
                            </div>
                        </div>
                        <div class="lg:pt-[20px] md:pt-[20px] pt-0 pb-[20px] text-center">
                            <div class="lg:px-[30px] md:px-[25px] inline-block">
                                <img alt="icon" src="../../assets/chinese_pc/mining/foundations_icon_pc.svg" 
                                    class="mx-auto lg:block md:block hidden" />
                                <img alt="icon" src="../../assets/chinese_mobile/mining/foundations_icon_mobile.svg" 
                                    class="mx-auto lg:hidden md:hidden block" />
                                <p class="lg:text-[24px] md:text-[11px] text-[12px] text-white pt-[10px]">
                                    {{ $t("mining.foundationsAndPrivateEquity") }}
                                </p>
                                <p class="lg:text-[24px] md:text-[11px] text-[12px] text-white">
                                    40{{ $t("mining.billion") }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TokenMiningRatio",
    data() {
        return {
            lang: localStorage.getItem("lang"),
        }
    },
}
</script>


<style scoped>
.ratio-box {
    background: linear-gradient(to right, #132AB7 0%, #CE0FA3 100%);
}
.dividual-border {
    width: 1px;
    height: 64px;
    background: #ffffff40;
}
</style>