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
    <div class="lg:h-[804px] md:h-[650px] h-[387px] bg-white relative">
        <div class="lg:bg-mining_bg_pc md:bg-mining_bg_pc bg-mining_bg_mobile bg-no-repeat 
            lg:h-[638px] md:h-[520px] h-[387px] w-full bg-[length:100%_100%] relative">
            <div class="h-full lg:py-[115px] md:py-[60px] py-[27px] relative container mx-auto text-center">
                <div>
                    <p class="lg:text-[64px] md:text-[44px] text-[28px] leading-14 
                        text-themeGradient font-bold lg:tracking-[5px] tracking-0">
                        代币与挖矿
                    </p>
                    <p class="lg:mt-[40px] md:mt-[30px] mt-[8px] lg:text-[36px] md:text-[24px] text-[18px]
                        text-themeGreyText1 font-medium">
                        FLGT通证经济模型
                    </p>
                    <p class="lg:text-[14px] md:text-[13px] text-[12px] text-[#666] mx-auto px-[25px] text-justify
                        mt-[10px] lg:w-[932px] md:w-[570px] w-full lg:leading-[24px] md:leading-[21px] leading-[18px]">
                        FLGT (Film Global Token，全球影视币)是基于ERC20标准的Token，是凤凰社区的平台通证，
                        代表平台的诸多价值权益。用户可以通过FLGT与凤凰社区共享平台的价值增值，也可以通过为平台作出正向价值贡献获得FLGT ，
                        并在凤凰社区及社区生态伙伴体系内应用、流通。社区按每个季度盈利将根据代币50%分红给代币抵押持有人。20%用于回购币，
                        30%用于的进一步发展。
                    </p>
                </div>
                <div class="lg:w-[932px] md:w-[570px] w-full mx-auto px-[25px] lg:mt-[100px] md:mt-[60px] mt-[28px]">
                    <div class="grid grid-cols-3 lg:gap-10 md:gap-10 gap-2">
                        <div class="lg:bg-[#F4F3F9] md:bg-[#F4F3F9] economic_model_div_mobile 
                            text-center lg:py-3 md:py-3 py-[6px] economic_model_div
                            lg:h-[160px] md:h-[160px] h-[88px] hover:relative hover:top-[-20px]" ref="myHoverableElement1">
                            <div class="lg:block md:block hidden">
                                <img src="../../assets/chinese_pc/mining/mining_icon1_pc.svg" alt="mining_icon1"
                                    class="mx-auto" :class="isHovered1 ? 'hidden': 'block'" />
                                <img src="../../assets/chinese_pc/mining/mining_icon1_hover_pc.svg" alt="mining_icon1"
                                    class="mx-auto" :class="isHovered1 ? 'block': 'hidden'" />
                            </div>
                            <img src="../../assets/chinese_mobile/mining/mining_icon1_mobile.svg" alt="mining_icon1"
                                class="mx-auto lg:hidden md:hidden block" />
                            <p class="lg:text-[16px] md:text-[12px] text-[10px] lg:text-black 
                                md:text-black text-white font-bold lg:mt-2 md:mt-2 mt-1 px-2">
                                抵押200代币，成为 <br/>凤凰社区会员用户
                            </p>
                        </div>
                        <div class="lg:bg-[#F4F3F9] md:bg-[#F4F3F9] economic_model_div_mobile 
                            text-center lg:py-3 md:py-3 py-[6px] economic_model_div
                            lg:h-[160px] md:h-[160px] h-[88px] hover:relative hover:top-[-20px]" ref="myHoverableElement2">
                            <div class="lg:block md:block hidden">
                                <img src="../../assets/chinese_pc/mining/mining_icon2_pc.svg" alt="mining_icon2"
                                    class="mx-auto" :class="isHovered2 ? 'hidden': 'block'" />
                                <img src="../../assets/chinese_pc/mining/mining_icon2_hover_pc.svg" alt="mining_icon2"
                                    class="mx-auto" :class="isHovered2 ? 'block': 'hidden'" />
                            </div>
                            <img src="../../assets/chinese_mobile/mining/mining_icon2_mobile.svg" alt="mining_icon2"
                                class="mx-auto lg:hidden md:hidden block" />
                            <p class="lg:text-[16px] md:text-[12px] text-[10px] lg:text-black 
                                md:text-black text-white font-bold lg:mt-2 md:mt-2 mt-1 px-2">
                                成为平台博主、主播、商家、开发者，共创辉煌
                            </p>
                        </div>
                        <div class="lg:bg-[#F4F3F9] md:bg-[#F4F3F9] economic_model_div_mobile 
                            text-center lg:py-3 md:py-3 py-[6px] economic_model_div
                            lg:h-[160px] md:h-[160px] h-[88px] hover:relative hover:top-[-20px]" ref="myHoverableElement3">
                            <div class="lg:block md:block hidden">
                                <img src="../../assets/chinese_pc/mining/mining_icon3_pc.svg" alt="mining_icon3"
                                    class="mx-auto" :class="isHovered3 ? 'hidden': 'block'" />
                                <img src="../../assets/chinese_pc/mining/mining_icon3_hover_pc.svg" alt="mining_icon3"
                                    class="mx-auto" :class="isHovered3 ? 'block': 'hidden'" />
                            </div>
                            <img src="../../assets/chinese_mobile/mining/mining_icon3_mobile.svg" alt="mining_icon3"
                                class="mx-auto lg:hidden md:hidden block" />
                            <p class="lg:text-[16px] md:text-[12px] text-[10px] lg:text-black 
                                md:text-black text-white font-bold lg:mt-2 md:mt-2 mt-1 px-2">
                                参与节点建设，维护生态稳定，共享社区红利
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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