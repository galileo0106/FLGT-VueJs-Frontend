<script setup>
import { ref } from "vue";
import { useElementHover } from '@vueuse/core'

const myHoverableElement1 = ref()
const myHoverableElement2 = ref()
const myHoverableElement3 = ref()
const isHovered1 = useElementHover(myHoverableElement1)
const isHovered2 = useElementHover(myHoverableElement2)
const isHovered3 = useElementHover(myHoverableElement3)

</script>

<template>
    <div class="bg-white relative"
        :class="lang == 'en' ? 'lg:h-[804px] md:h-[650px] h-[475px]' : 'lg:h-[804px] md:h-[650px] h-[387px]'">
        <div class="lg:bg-mining_bg_pc md:bg-mining_bg_pc bg-mining_bg_mobile bg-no-repeat 
            lg:h-[638px] md:h-[520px] h-[387px] w-full bg-[length:100%_100%] relative">
            <div class="h-full lg:py-[115px] md:py-[60px] py-[27px] relative container mx-auto text-center">
                <div>
                    <p class="lg:text-[64px] md:text-[44px] text-[28px] leading-14 
                        text-themeGradient font-bold lg:tracking-[5px] tracking-0">
                        {{ $t("mining.tokensAndMining") }}
                    </p>
                    <p class="lg:mt-[40px] md:mt-[30px] mt-[8px] lg:text-[36px] md:text-[24px] text-[18px]
                        text-themeGreyText1 font-medium">
                        {{ $t("mining.FLGTTokenEconomicModel") }}
                    </p>
                    <p class="lg:text-[14px] md:text-[13px] text-[12px] text-[#666] mx-auto px-[25px] text-justify
                        mt-[10px] lg:w-[932px] md:w-[570px] w-full lg:leading-[24px] md:leading-[21px] leading-[18px]">
                        {{ $t("mining.miningDesc") }}
                    </p>
                </div>
                <div class="lg:w-[932px] md:w-[570px] w-full mx-auto px-[25px] lg:mt-[100px] md:mt-[60px] mt-[28px]">
                    <div class="grid grid-cols-3 lg:gap-10 md:gap-10 gap-2">
                        <div class="lg:bg-[#F4F3F9] md:bg-[#F4F3F9] economic_model_div_mobile 
                            text-center lg:py-3 md:py-3 py-[6px] economic_model_div hover:relative hover:top-[-20px]" 
                            :class="lang == 'en' ? 'lg:h-[180px] md:h-[195px] h-[135px]' : 'lg:h-[160px] md:h-[160px] h-[88px]'"
                            ref="myHoverableElement1">
                            <div class="lg:block md:block hidden">
                                <img src="../../assets/chinese_pc/mining/mining_icon1_pc.svg" alt="mining_icon1"
                                    class="mx-auto" :class="isHovered1 ? 'hidden': 'block'" />
                                <img src="../../assets/chinese_pc/mining/mining_icon1_hover_pc.svg" alt="mining_icon1"
                                    class="mx-auto" :class="isHovered1 ? 'block': 'hidden'" />
                            </div>
                            <img src="../../assets/chinese_mobile/mining/mining_icon1_mobile.svg" alt="mining_icon1"
                                class="mx-auto lg:hidden md:hidden block" />
                            <p class="lg:text-[16px] md:text-[12px] text-[10px] lg:text-black 
                                md:text-black text-white font-bold lg:mt-2 md:mt-2 mt-1 px-2 break-keep">
                                {{ $t("mining.vipDesc") }}
                            </p>
                        </div>
                        <div class="lg:bg-[#F4F3F9] md:bg-[#F4F3F9] economic_model_div_mobile 
                            text-center lg:py-3 md:py-3 py-[6px] economic_model_div hover:relative hover:top-[-20px]" 
                            :class="lang == 'en' ? 'lg:h-[180px] md:h-[195px] h-[135px]' : 'lg:h-[160px] md:h-[160px] h-[88px]'"
                            ref="myHoverableElement2">
                            <div class="lg:block md:block hidden">
                                <img src="../../assets/chinese_pc/mining/mining_icon2_pc.svg" alt="mining_icon2"
                                    class="mx-auto" :class="isHovered2 ? 'hidden': 'block'" />
                                <img src="../../assets/chinese_pc/mining/mining_icon2_hover_pc.svg" alt="mining_icon2"
                                    class="mx-auto" :class="isHovered2 ? 'block': 'hidden'" />
                            </div>
                            <img src="../../assets/chinese_mobile/mining/mining_icon2_mobile.svg" alt="mining_icon2"
                                class="mx-auto lg:hidden md:hidden block" />
                            <p class="lg:text-[16px] md:text-[12px] text-[10px] lg:text-black 
                                md:text-black text-white font-bold lg:mt-2 md:mt-2 mt-1 px-2 break-keep">
                                {{ $t("mining.platformDesc") }}
                            </p>
                        </div>
                        <div class="lg:bg-[#F4F3F9] md:bg-[#F4F3F9] economic_model_div_mobile 
                            text-center lg:py-3 md:py-3 py-[6px] economic_model_div hover:relative hover:top-[-20px]" 
                            :class="lang == 'en' ? 'lg:h-[180px] md:h-[195px] h-[135px]' : 'lg:h-[160px] md:h-[160px] h-[88px]'"
                            ref="myHoverableElement3">
                            <div class="lg:block md:block hidden">
                                <img src="../../assets/chinese_pc/mining/mining_icon3_pc.svg" alt="mining_icon3"
                                    class="mx-auto" :class="isHovered3 ? 'hidden': 'block'" />
                                <img src="../../assets/chinese_pc/mining/mining_icon3_hover_pc.svg" alt="mining_icon3"
                                    class="mx-auto" :class="isHovered3 ? 'block': 'hidden'" />
                            </div>
                            <img src="../../assets/chinese_mobile/mining/mining_icon3_mobile.svg" alt="mining_icon3"
                                class="mx-auto lg:hidden md:hidden block" />
                            <p class="lg:text-[16px] md:text-[12px] text-[10px] lg:text-black 
                                md:text-black text-white font-bold lg:mt-2 md:mt-2 mt-1 px-2 break-keep">
                                {{ $t("mining.nodeDesc") }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TokensMining",
    data() {
        return {
            lang: localStorage.getItem("lang"),
        }
    },
}
</script>


<style scoped>
.text-themeGradient {
    background: -webkit-linear-gradient(0deg, #FF5252 35%, #A100DA 45%, #0016DA 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.economic_model_div:hover {
    transform: translateY(-8px);
    transition-duration: 0.5s;
    transition-property: transform;
    background: linear-gradient(220deg, #2532C7 4.38%, #374ABD 16.54%, #C743A9 62.87%, #E83166 87.28%) !important;
}

.economic_model_div:hover > p {
    color: white !important;
}
@media (max-width: 767px) {
    .economic_model_div_mobile {
        background: linear-gradient(220deg, #2532C7 4.38%, #374ABD 16.54%, #C743A9 62.87%, #E83166 87.28%) !important;
    }
}
</style>