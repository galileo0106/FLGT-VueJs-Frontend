<script setup>
import { ref } from "vue";
const supportMembers = [
    {
        id: "1", 
        name: "唐仪", 
        avatar_pc: "/src/assets/chinese_pc/team/team_avatar_7_pc.png",
        avatar_mobile: "/src/assets/chinese_mobile/team/team_avatar_7_mobile.png",
        description: "凤凰社区的运营和战略顾是唐仪先生，唐仪先生是知名企业家、天使投资人。美国硅谷区块链协会名誉主席和天使创投的联合创始人，参与过以太坊早期投资。"
    }, 
    {
        id: "2", 
        name: "Meredith", 
        avatar_pc: "/src/assets/chinese_pc/team/team_avatar_8_pc.png",
        avatar_mobile: "/src/assets/chinese_mobile/team/team_avatar_8_mobile.png",
        description: "曾在IBM公司的托马斯·沃森研究中心从事经济学研究，且曾任普林斯顿大学经济系客座教授、日本金融厅证券交易监督委员会顾问及日本比特币交易所业务创新顾问。"
    }, 
    {
        id: "3", 
        name: "Francis Harry", 
        avatar_pc: "/src/assets/chinese_pc/team/team_avatar_9_pc.png",
        avatar_mobile: "/src/assets/chinese_mobile/team/team_avatar_9_mobile.png",
        description: "亚太区运营总监，至今担任PPG亚太区人力资源运营总监,协同人力资源业务伙伴及专家团队,带领亚太各国人力资源运营团队为业务提供日常支持,交付各类人力资源项目。"
    }, 
    {
        id: "4", 
        name: "olivia cole",
        avatar_pc: "/src/assets/chinese_pc/team/team_avatar_10_pc.png",
        avatar_mobile: "/src/assets/chinese_mobile/team/team_avatar_10_mobile.png",
        description: "法国INNODESIGN PRIZE国际评审团成员、亚太区评审团副主席、中国区运营总监。"
    }, 
    {
        id: "5", 
        name: "evan white", 
        avatar_pc: "/src/assets/chinese_pc/team/team_avatar_11_pc.png",
        avatar_mobile: "/src/assets/chinese_mobile/team/team_avatar_11_mobile.png",
        description: "北美地区运营总监，协同业务伙伴及专家团队,带领亚太各国人力资源运营团队为业务提供日常支持,交付各类人力资源项目。"
    }, 
    {
        id: "6", 
        name: "Jessica page", 
        avatar_pc: "/src/assets/chinese_pc/team/team_avatar_12_pc.png",
        avatar_mobile: "/src/assets/chinese_mobile/team/team_avatar_12_mobile.png",
        description: "前中国和东亚集群的运营总监,然后在2022年担任东亚地区总监的最新职位。通过这些角色,在推动以客户为中心和严格的运营以实现坚实的项目成果。"
    }, 
]

</script>

<template>
    <div class="w-full h-full bg-chinese_pc_banner_1 text-center lg:pb-[60px] md:pb-[50px] pb-[40px]">
        <div class="w-full relative lg:pt-[80px] md:pt-[50px] pt-[20px]">
            <h3 class="lg:text-[48px] md:text-[32px] text-[18px] text-[#25277A] font-bold">运营团队</h3>
            <p class="lg:text-[16px] md:text-[14px] text-[12px] text-[#15C3CA] font-bold uppercase">Operations team</p>
        </div>
        <div class="lg:w-[995px] md:w-[760px] w-full lg:px-[35px] md:px-[35px] px-[20px] mx-auto">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-6 md:gap-6 gap-2">
                <div v-for="item in supportMembers" :key="item.id" class="support-member-detail">
                    <div class="relative lg:mt-[100px] md:mt-[80px] mt-[55px]
                        lg:h-[320px] md:h-[235px] h-[185px] bg-[#121F62] description">
                        <div class="absolute top-[-25%] w-full">
                            <img :src="item.avatar_pc" alt="support avatar"
                                class="lg:block md:block hidden mx-auto" />
                            <img :src="item.avatar_mobile" alt="support avatar"
                                class="lg:hidden md:hidden block mx-auto" />
                        </div>
                        <div class="relative lg:px-[20px] md:px-[15px] px-[10px] ">
                            <p class="lg:text-[20px] md:text-[18px] text-[16px] font-bold text-white 
                                lg:pt-[116px] md:pt-[120px] pt-[35px] uppercase">{{ item.name }}</p>
                            <p class=" font-medium text-white
                                lg:mt-[20px] md:mt-[15px] mt-[10px]
                                flex lg:justify-center md:justify-center justify-start
                                lg:text-[16px] md:text-[12px] text-[10px]">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.support-member-detail:hover .description {
    transform: translateY(-10px);
    transition-duration: 0.5s;
    transition-property: transform;
    background: linear-gradient(to right, #3D1C82 0%, #F4027A 100%) !important;
}
</style>
