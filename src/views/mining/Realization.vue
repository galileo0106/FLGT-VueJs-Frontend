<script setup>

</script>

<template>
    <div class="bg-white lg:h-[700px] h-[500px]">
        <div class="container mx-auto lg:w-[932px] md:w-full w-full">
            <h3 class="lg:mt-[100px] md:mt-[50px] mt-[20px]
                lg:text-[48px] md:text-[38px] text-[28px] font-bold text-[#25277A] text-center">
                {{ $t("mining.realizationAndAppreciation") }}
            </h3>

            <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 px-[27px] 
                lg:pt-[39px] md:pt-[30px] pt-[20px] relative">
                <div class="lg:col-span-2 md:col-span-2 col-span-1 relative">
                    <div>
                        <div class="lg:w-[360px] md:w-[280px] w-[200px] realization_text_gradient 
                            text-[20px] font-bold text-white pl-[10px] py-[7px]">
                            {{ $t("mining.cashOut") }}
                        </div>
                        <ol class="list-decimal lg:mt-[20px] md:mt-[15px] mt-[10px] text-black pl-[15px]
                                lg:text-[16px] md:text-[14px] text-[12px] font-medium leading-[18px] relative z-10">
                            <li>{{ $t("mining.cashOutDesc1") }}</li>
                            <li>{{ $t("mining.cashOutDesc2") }}</li>
                            <li>{{ $t("mining.cashOutDesc3") }}</li>
                            <li>{{ $t("mining.cashOutDesc4") }}</li>
                        </ol>
                    </div>
                    <div class="lg:hidden md:hidden inline absolute right-0 top-[110px]">
                        <img src="../../assets/chinese_mobile/mining/realization_mobile.svg" alt="realization" />
                    </div>
                    <div class="lg:mt-[62px] md:mt-[60px] "
                        :class="lang == 'en' ? 'mt-[20px]' : 'mt-[60px]'">
                        <div class="lg:w-[360px] md:w-[280px] w-[200px] realization_text_gradient 
                            text-[20px] font-bold text-white pl-[10px] py-[7px]">
                            {{ $t("mining.appreciation") }}
                        </div>
                        <ol class="list-decimal lg:mt-[20px] md:mt-[15px] mt-[10px] text-black pl-[15px]
                                lg:text-[16px] md:text-[14px] text-[12px] font-medium leading-[18px]">
                            <li>{{ $t("mining.appreciationDesc1") }}</li>
                            <li>{{ $t("mining.appreciationDesc2") }}</li>
                            <li>{{ $t("mining.appreciationDesc3") }}</li>
                        </ol>
                    </div>
                </div>
                <div class="absolute right-0 bottom-[20px] lg:block md:block hidden">
                    <img src="../../assets/chinese_pc/mining/realization_pc.svg" alt="realization_pc"
                        class="w-[370px] h-[318px]" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Realization",
    data() {
        return {
            lang: localStorage.getItem("lang"),
        }
    },
}
</script>


<style scoped>
.realization_text_gradient {
    background: linear-gradient(20deg, #2331CE 4.38%, #374ABD 25.1%, rgba(199, 67, 169, 0.84) 45.96%,
        rgba(232, 49, 102, 0.63) 59.05%, rgba(255, 114, 114, 0.01) 78.36%);
}
</style>