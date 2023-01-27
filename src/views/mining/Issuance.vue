<script setup>

</script>

<template>
    <div class="lg:bg-issuance_bg_pc md:bg-issuance_bg_pc bg-[#0A1F71] bg-no-repeat 
        bg-[length:100%_100%] issuance_bg"
        :class="lang == 'en' ? 'h-[450px]' : 'h-[395px]'">
        <div class="container mx-auto">
            <div class="lg:block md:block hidden">
                <div class="grid grid-cols-5">
                    <div class="col-span-2 relative img-app">
                        <img src="../../assets/chinese_pc/mining/img_app_pc.png" alt="app img" class="mx-auto"/>
                    </div>
                    <div class="col-span-3">
                        <div class="lg:mt-[60px] md:mt-[40px] lg:pl-[70px] md:pl-[35px] pr-[20px]">
                            <h3 class="font-bold text-white lg:text-[48px] md:text-[32px]">
                                {{ $t("mining.miningAndIssuance") }}
                            </h3>

                            <div>
                                <div class="grid grid-cols-4 gap-1 lg:mt-[20px] md:mt-[10px]">
                                    <div>
                                        <button class="border-bottom-purple-2 bg-[#15C3CA] px-[16px] text-white text-center w-full
                                            lg:text-[16px] md:text-[10px] py-[9px]">{{ $t("mining.mining") }}</button>
                                    </div>
                                    <div>
                                        <button class="border-bottom-purple-2 bg-[#15C3CA] px-[16px] text-white text-center w-full
                                            lg:text-[16px] md:text-[10px] py-[9px]">{{ $t("mining.directBenefit") }}</button>
                                    </div>
                                    <div>
                                        <button class="border-bottom-purple-2 bg-[#15C3CA] px-[16px] text-white text-center w-full
                                            lg:text-[16px] md:text-[10px] py-[9px] truncate" :title="$t('mining.firstlevelPromotionIncome')">
                                            {{ $t("mining.firstlevelPromotionIncome") }}
                                        </button>
                                    </div>
                                    <div>
                                        <button class="border-bottom-purple-2 bg-[#15C3CA] px-[16px] text-white text-center w-full
                                            lg:text-[16px] md:text-[10px] py-[9px] truncate" :title="$t('mining.secondlevelPromotionIncome')">
                                            {{ $t("mining.secondlevelPromotionIncome") }}
                                        </button>
                                    </div>
                                </div>
                                <div class="grid grid-cols-4 gap-1">
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">
                                        {{ $t("mining.nodeMining") }}
                                    </p>
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">1000-1200FLGT/{{ $t("mining.unitAndDay") }}
                                    </p>
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">150-180FLGT/{{ $t("mining.unitAndDay") }}
                                    </p>
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">60-72FLGT/{{ $t("mining.unitAndDay") }}
                                    </p>
                                </div>
                                <div class="grid grid-cols-4 gap-1">
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">
                                        {{ $t("mining.anchorMining") }}
                                    </p>
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">1FLGT/{{ $t("mining.hour") }}
                                    </p>
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">0.15FLGT/{{ $t("mining.hour") }}
                                    </p>
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">0.06FLGT/{{ $t("mining.hour") }}
                                    </p>
                                </div>
                                <div class="grid grid-cols-4 gap-1">
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">
                                        {{ $t("mining.bloggerMining") }}
                                    </p>
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">1FLGT/{{ $t("mining.hour") }}
                                    </p>
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">0.15FLGT/{{ $t("mining.hour") }}
                                    </p>
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">0.06FLGT/{{ $t("mining.hour") }}
                                    </p>
                                </div>
                                <div class="grid grid-cols-4 gap-1">
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">
                                        {{ $t("mining.recommendedVIP") }}
                                    </p>
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">15FLGT/{{ $t("mining.unit") }}
                                    </p>
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">7FLGT/{{ $t("mining.unit") }}
                                    </p>
                                    <p class="border-bottom-purple-2 text-white text-center w-full
                                        lg:text-[14px] md:text-[10px] lg:py-[9px] md:py-[3px]">3FLGT/{{ $t("mining.unit") }}
                                    </p>
                                </div>
                            </div>

                            <div class="lg:mt-[20px] md:mt-[10px] md:mb-[16.5px]">
                                <button class="remark_btn text-center text-white px-[22px]
                                    lg:text-[12px] md:text-[10px] font-medium py-[3px]">{{ $t("mining.remark") }}</button>
                                <ol class="list-decimal mt-[5px] text-white pl-[20px]
                                    lg:text-[12px] md:text-[10px]">
                                    <li>{{ $t("mining.remarkDesc1") }}</li>
                                    <li>{{ $t("mining.remarkDesc2") }}</li>
                                    <li>{{ $t("mining.remarkDesc3") }}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:hidden md:hidden block px-[6px] pt-[26px]">
                <h3 class="font-bold text-white text-[28px] leading-[52px] text-center">
                    {{ $t("mining.miningAndIssuance") }}
                </h3>

                <div class="mt-[10px]">
                    <table class="w-full">
                        <thead class="bg-[#F9346C] ">
                            <tr>
                                <th class="text-[12px] px-[8px] py-[2px] text-white font-medium
                                    border-[#D587F0] border-r border-b border-l border-t-0">
                                    {{ $t("mining.mining") }}
                                </th>
                                <th class="text-[12px] px-[8px] py-[2px] text-white font-medium
                                    border-[#D587F0] border-r border-b border-t-0">
                                    {{ $t("mining.directBenefit") }}
                                </th>
                                <th class="text-[12px] px-[8px] py-[2px] text-white font-medium
                                    border-[#D587F0] border-r border-b border-t-0">
                                    {{ $t("mining.firstlevelPromotionIncome") }}
                                </th>
                                <th class="text-[12px] px-[8px] py-[2px] text-white font-medium
                                    border-[#D587F0] border-r border-b border-t-0">
                                    {{ $t("mining.secondlevelPromotionIncome") }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center">
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">{{ $t("mining.nodeMining") }}</td>
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">1000-1200FLGT/{{ $t("mining.unitAndDay") }}</td>
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">150-180FLGT/{{ $t("mining.unitAndDay") }}</td>
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">60-72FLGT/{{ $t("mining.unitAndDay") }}</td>
                            </tr>
                            <tr class="text-center">
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">{{ $t("mining.anchorMining") }}</td>
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">1FLGT/{{ $t("mining.hour") }}</td>
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">0.15FLGT/{{ $t("mining.hour") }}</td>
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">0.06FLGT/{{ $t("mining.hour") }}</td>
                            </tr>
                            <tr class="text-center">
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">{{ $t("mining.bloggerMining") }}</td>
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">1FLGT/{{ $t("mining.hour") }}</td>
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">0.15FLGT/{{ $t("mining.hour") }}</td>
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">0.06FLGT/{{ $t("mining.hour") }}</td>
                            </tr>
                            <tr class="text-center">
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">{{ $t("mining.recommendedVIP") }}</td>
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">15FLGT/{{ $t("mining.unity") }}</td>
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">7FLGT/{{ $t("mining.unity") }}</td>
                                <td class="border-[#D587F0] py-[2px] border-l border-r border-b text-[10px] font-medium text-white">3FLGT/{{ $t("mining.unity") }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="flex flex-row mt-[26px]">
                    <div class="">
                        <img src="../../assets/chinese_mobile/mining/graph_coin_mobile.png" alt="graph-coin"
                            class="w-[115px] h-[135px]"/> 
                    </div>
                    <div class="px-[15px]">
                        <button class="text-[12px] text-white text-center font-medium py-[2px] px-[22px]
                            border border-[#F9346C] rounded-[28px]">{{ $t("mining.remark") }}</button>
                        <ol class="list-decimal mt-[5px] text-white pl-[10px] text-[10px] font-medium pr-[10px]">
                            <li>{{ $t("mining.remarkDesc1") }}</li>
                            <li>{{ $t("mining.remarkDesc2") }}</li>
                            <li>{{ $t("mining.remarkDesc3") }}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Issuance",
    data() {
        return {
            lang: localStorage.getItem("lang"),
        }
    },
}
</script>

<style scoped>
@media (min-width: 1536px) {
    .issuance_bg {
        height: 480px;
    }
    .img-app {
        top: -16%;
    }
}
@media (min-width: 1280px) and (max-width: 1535px) {
    .issuance_bg {
        height: 100%;
    }
    .img-app {
        top: 0;
    }
}
@media (min-width: 1024px) and (max-width: 1279px) {
    .issuance_bg {
        height: 100%;
    }
    .img-app {
        top: 11%;
    }
}
@media (min-width: 768px) and (max-width: 1023px) {
    .issuance_bg {
        height: 100%;
    }
    .img-app {
        top: 0;
    }
}

.border-bottom-purple-2 {
    border-bottom: 2px solid #6E45F0;
}

.remark_btn {
    border: 1px solid #15C3CA;
    border-radius: 28px;
    background: transparent;
}
</style>