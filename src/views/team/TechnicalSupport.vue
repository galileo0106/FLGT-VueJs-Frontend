<script setup>
import { ref } from "vue";
const supportMembers = [
    {
        id: "1", 
        name: "William G.Kaelin", 
        avatar_pc: "/src/assets/chinese_pc/team/team_avatar_1_pc.png",
        avatar_mobile: "/src/assets/chinese_mobile/team/team_avatar_1_mobile.png",
        description: "国际知名的数据工程师。曾在多家全球知名互联网大数据研究中心就任过关键职位。负责互联网基础技术应用研发。参与众多国际知名项目。是区块链技术领域先驱。"
    }, 
    {
        id: "2", 
        name: "Michael Meredith", 
        avatar_pc: "/src/assets/chinese_pc/team/team_avatar_2_pc.png",
        avatar_mobile: "/src/assets/chinese_mobile/team/team_avatar_2_mobile.png",
        description: "拥有15年技术开发经验，并在区块链底层技术开发方面拥有权威影响力，职业生涯中覆盖了学术界和企业界两个领域，是一名研究学者、工程师及领导者。"
    }, 
    {
        id: "3", 
        name: "Francis Harry", 
        avatar_pc: "/src/assets/chinese_pc/team/team_avatar_3_pc.png",
        avatar_mobile: "/src/assets/chinese_mobile/team/team_avatar_3_mobile.png",
        description: "架构师、数据库专家，交易所构建的首席技术专家，长期从事交易行业的数据库应用、数据仓库、大数据和区块链开发，拥有丰富的区块链项目开发经验。"
    }, 
    {
        id: "4", 
        name: "olivia cole",
        avatar_pc: "/src/assets/chinese_pc/team/team_avatar_4_pc.png",
        avatar_mobile: "/src/assets/chinese_mobile/team/team_avatar_4_mobile.png",
        description: "曾在IBM公司从事经济学研究，且曾任普林斯顿大学经济系客座教授、日本金融厅证券交易监督委员会顾问及日本比特币交易所业务创新顾问。"
    }, 
    {
        id: "5", 
        name: "evan white", 
        avatar_pc: "/src/assets/chinese_pc/team/team_avatar_5_pc.png",
        avatar_mobile: "/src/assets/chinese_mobile/team/team_avatar_5_mobile.png",
        description: "擅长M&A融资、夹层融资、证券化、各种基金事物及以金融商品交易法为中心的相关业务。任职纳斯达克交易所法律顾问，德勤律师事务所金融律师。"
    }, 
    {
        id: "6", 
        name: "Jessica page", 
        avatar_pc: "/src/assets/chinese_pc/team/team_avatar_6_pc.png",
        avatar_mobile: "/src/assets/chinese_mobile/team/team_avatar_6_mobile.png",
        description: "架构师、数据库专家，交易所构建的首席技术专家，长期从事交易行业的数据库应用、数据仓库、大数据和区块链开发，拥有丰富的区块链项目开发经验。"
    }, 
]

</script>

<template>
    <div class="w-full h-full bg-chinese_pc_banner_1 text-center lg:pb-[60px] md:pb-[50px] pb-[40px]">
        <div class="w-full relative lg:pt-[80px] md:pt-[50px] pt-[20px]">
            <h3 class="lg:text-[48px] md:text-[32px] text-[18px] text-[#25277A] font-bold">技术团队</h3>
            <p class="lg:text-[16px] md:text-[14px] text-[12px] text-[#15C3CA] font-bold uppercase">Technical Support</p>
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
                        <div class="relative lg:px-[20px] md:px-[15px] px-[10px]">
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
