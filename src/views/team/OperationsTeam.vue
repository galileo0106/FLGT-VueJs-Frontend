<script setup>
const supportMembers = [
    {
        id: "1",
        name: "teamName1",
        avatar_pc: new URL("/src/assets/chinese_pc/team/team_avatar_7_pc.png", import.meta.url).href,
        avatar_mobile: new URL("/src/assets/chinese_mobile/team/team_avatar_7_mobile.png", import.meta.url).href,
        description: "teamDesc1"
    },
    {
        id: "2",
        name: "teamName2",
        avatar_pc: new URL("/src/assets/chinese_pc/team/team_avatar_8_pc.png", import.meta.url).href,
        avatar_mobile: new URL("/src/assets/chinese_mobile/team/team_avatar_8_mobile.png", import.meta.url).href,
        description: "teamDesc2"
    },
    {
        id: "3",
        name: "teamName3",
        avatar_pc: new URL("/src/assets/chinese_pc/team/team_avatar_9_pc.png", import.meta.url).href,
        avatar_mobile: new URL("/src/assets/chinese_mobile/team/team_avatar_9_mobile.png", import.meta.url).href,
        description: "teamDesc3"
    },
    {
        id: "4",
        name: "teamName4",
        avatar_pc: new URL("/src/assets/chinese_pc/team/team_avatar_10_pc.png", import.meta.url).href,
        avatar_mobile: new URL("/src/assets/chinese_mobile/team/team_avatar_10_mobile.png", import.meta.url).href,
        description: "teamDesc4"
    },
    {
        id: "5",
        name: "teamName5",
        avatar_pc: new URL("/src/assets/chinese_pc/team/team_avatar_11_pc.png", import.meta.url).href,
        avatar_mobile: new URL("/src/assets/chinese_mobile/team/team_avatar_11_mobile.png", import.meta.url).href,
        description: "teamDesc5"
    },
    {
        id: "6",
        name: "teamName6",
        avatar_pc: new URL("/src/assets/chinese_pc/team/team_avatar_12_pc.png", import.meta.url).href,
        avatar_mobile: new URL("/src/assets/chinese_mobile/team/team_avatar_12_mobile.png", import.meta.url).href,
        description: "teamDesc6"
    },
]
</script>

<template>
    <div class="w-full h-full bg-chinese_pc_banner_1 text-center lg:pb-[60px] md:pb-[50px] pb-[40px]">
        <div class="w-full relative lg:pt-[80px] md:pt-[50px] pt-[20px]">
            <h3 class="lg:text-[48px] md:text-[32px] text-[18px] text-[#25277A] font-bold">
                {{ $t("team.operationsTeam") }}
            </h3>
            <p class="lg:text-[16px] md:text-[14px] text-[12px] text-[#15C3CA] font-bold uppercase">Operations team</p>
        </div>
        <div class="lg:w-[995px] md:w-[760px] w-full lg:px-[35px] md:px-[35px] px-[20px] mx-auto">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-6 md:gap-6 gap-2">
                <div v-for="item in supportMembers" :key="item.id" class="support-member-detail">
                    <div class="relative lg:mt-[100px] md:mt-[80px] bg-[#121F62] description_team"
                        :class="lang == 'en' ?
                            'lg:h-[420px] md:h-[300px] h-[250px] mt-[75px] ':
                            'lg:h-[320px] md:h-[235px] h-[185px] mt-[55px] '">
                        <div class="absolute top-[-25%] w-full">
                            <img :src="item.avatar_pc" alt="support avatar"
                                class="lg:block md:block hidden mx-auto" />
                            <img :src="item.avatar_mobile" alt="support avatar"
                                class="lg:hidden md:hidden block mx-auto" />
                        </div>
                        <div class="relative lg:px-[20px] md:px-[15px] px-[10px] ">
                            <p class="lg:text-[20px] md:text-[18px] text-[16px] font-bold text-white
                                lg:pt-[116px] md:pt-[120px] pt-[35px] uppercase">
                                {{ $t("team." + item.name) }}
                            </p>
                            <p class=" font-medium text-white
                                lg:mt-[20px] md:mt-[15px] mt-[10px]
                                flex lg:justify-center md:justify-center justify-start
                                lg:text-[16px] md:text-[12px] text-[10px]">
                                {{ $t("team." + item.description) }}
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
    name: "OperationsTeam",
    data() {
        return {
            lang: localStorage.getItem("lang"),
        }
    },
}
</script>

<style scoped>
.support-member-detail:hover .description_team {
    transform: translateY(-10px);
    transition-duration: 0.5s;
    transition-property: transform;
    background: linear-gradient(to right, #3D1C82 0%, #F4027A 100%) !important;
}
</style>
