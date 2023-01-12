<script setup>
import { ref } from "vue";

const nodePartners = [
    { 
        id: 1, 
        name: "阿里云", 
        logo_pc: "/src/assets/chinese_pc/team/ali_logo_pc.svg",
        logo_mobile: "/src/assets/chinese_mobile/team/ali_logo_mobile.svg",
        description: "凤凰社区携手阿里云全面开启数字化转型，打造区块链开放短视频社交平台。"
    },
    { 
        id: 2, 
        name: "华为云", 
        logo_pc: "/src/assets/chinese_pc/team/huawei_logo_pc.svg",
        logo_mobile: "/src/assets/chinese_mobile/team/huawei_logo_mobile.svg",
        description: "华为云为凤凰社区提供服务，响应速度提升百倍。让客户享受流畅体验。"
    },
    { 
        id: 3, 
        name: "腾讯云", 
        logo_pc: "/src/assets/chinese_pc/team/tencent_logo_pc.svg",
        logo_mobile: "/src/assets/chinese_mobile/team/tencent_cloud_logo_mobile.svg",
        description: "凤凰社区卓越的合作伙伴之一，辅助实现核心业务系统。"
    },
    { 
        id: 4, 
        name: "Microsoft Azure", 
        logo_pc: "/src/assets/chinese_pc/team/azure_logo_pc.svg",
        logo_mobile: "/src/assets/chinese_mobile/team/azure_logo_mobile.svg",
        description: "凤凰社区携手AZURE全面开启数字化转型，打造区块链开放短视频社交平台。"
    },
    { 
        id: 5, 
        name: "谷歌云", 
        logo_pc: "/src/assets/chinese_pc/team/google_cloud_logo_pc.svg",
        logo_mobile: "/src/assets/chinese_mobile/team/google_cloud_logo_mobile.svg",
        description: "谷歌云为凤凰社区提供服务，响应速度提升百倍。让客户享受流畅体验。"
    },
]
</script>

<template>
    <div>
        <div class="h-full w-full lg:bg-white md:bg-white node_partner_bg
            bg-[length:100%_100%] text-center lg:pb-[60px] md:pb-[50px] pb-[40px]">
            <div class="w-full relative lg:pt-[80px] md:pt-[50px] pt-[20px]">
                <h3 class="lg:text-[48px] md:text-[32px] text-[18px] 
                    lg:text-[#25277A] md:text-[#25277A] text-white font-bold">节点伙伴</h3>
                <p class="lg:text-[16px] md:text-[14px] text-[12px] text-[#15C3CA] font-bold uppercase">Node partner</p>
            </div>

            <div class="lg:w-[995px] md:w-[760px] w-full lg:px-[35px] md:px-[35px] px-[20px] mx-auto">
                <div class="grid grid-cols-3 gap-4 lg:mt-[60px] md:mt-[40px] mt-[20px]">
                    <div v-for="item in nodePartners" :key="item.id" 
                        class="node_partner_div text-left mb-[20px]">
                        <div class="lg:block md:block hidden">
                            <div class="grid grid-cols-5 p-[20px]">
                                <div class="col-span-2 pr-[20px] border-r border-[#00000040]">
                                    <img alt="ali-logo" :src="item.logo_pc"
                                        class="w-full h-full" />
                                </div>
                                <div class="col-span-3 pl-[20px]">
                                    <div class="py-[10px]">
                                        <p class="lg:text-[20px] md:text-[15px] font-bold text-[#25277A] uppercase">{{ item.name }}</p>
                                        <p class="lg:text-[14px] md:text-[10px] justify-start text-[#101218] lg:mt-[20px] md:mt-[10px]">
                                            {{ item.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:hidden md:hidden block">
                            <img :src="item.logo_mobile" alt="ali-logo" class="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 767px) {
    .node_partner_bg {
        background: linear-gradient(to right, #4D1C8E 8.2%, #3C3392 56.25%, #2649B9 85.06%);
    }
    .node_partner_div:hover {
        box-shadow: 5px 3px 10px #2c0891 !important;
    }
}

.node_partner_div:hover {
    transform: translateY(-5px);
    transition-duration: 0.5s;
    transition-property: transform;
    box-shadow: 0 0 10px 5px #9baec026;
}

</style>
