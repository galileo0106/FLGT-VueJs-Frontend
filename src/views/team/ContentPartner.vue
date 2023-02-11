<script setup>
const contentPartners = [
    {
        id: 1,
        name: "contentDesc1",
        logo_pc: new URL("/src/assets/chinese_pc/team/warner_bros_logo_pc.svg", import.meta.url).href,
        logo_mobile: new URL("/src/assets/chinese_mobile/team/warner_bros_logo_mobile.svg", import.meta.url).href,
        description: "Warner Bros. Entertainment, Inc."
    },
    {
        id: 2,
        name: "contentDesc2",
        logo_pc: new URL("/src/assets/chinese_pc/team/century_studios_logo_pc.svg", import.meta.url).href,
        logo_mobile: new URL("/src/assets/chinese_mobile/team/century_studios_logo_mobile.svg", import.meta.url).href,
        description: "20th Century Studios"
    },
    {
        id: 3,
        name: "contentDesc3",
        logo_pc: new URL("/src/assets/chinese_pc/team/mgm_logo_pc.svg", import.meta.url).href,
        logo_mobile: new URL("/src/assets/chinese_mobile/team/mgm_logo_mobile.svg", import.meta.url).href,
        description: "Metro-Goldwyn-Mayer Pictures"
    },
    {
        id: 4,
        name: "contentDesc4",
        logo_pc: new URL("/src/assets/chinese_pc/team/united_artists_logo_pc.svg", import.meta.url).href,
        logo_mobile: new URL("/src/assets/chinese_mobile/team/united_artists_logo_mobile.svg", import.meta.url).href,
        description: "United Artists Releasing"
    },
    {
        id: 5,
        name: "contentDesc5",
        logo_pc: new URL("/src/assets/chinese_pc/team/columbia_logo_pc.svg", import.meta.url).href,
        logo_mobile: new URL("/src/assets/chinese_mobile/team/columbia_logo_mobile.svg", import.meta.url).href,
        description: "Columbia Pictures"
    },
    {
        id: 6,
        name: "contentDesc6",
        logo_pc: new URL("/src/assets/chinese_pc/team/universal_logo_pc.svg", import.meta.url).href,
        logo_mobile: new URL("/src/assets/chinese_mobile/team/universal_logo_mobile.svg", import.meta.url).href,
        description: "Universal Studios"
    },
    {
        id: 7,
        name: "contentDesc7",
        logo_pc: new URL("/src/assets/chinese_pc/team/paramount_logo_pc.svg", import.meta.url).href,
        logo_mobile: new URL("/src/assets/chinese_mobile/team/paramount_logo_mobile.svg", import.meta.url).href,
        description: "Paramount Pictures Corporation"
    },
    {
        id: 8,
        name: "contentDesc8",
        logo_pc: new URL("/src/assets/chinese_pc/team/disney_logo_pc.svg", import.meta.url).href,
        logo_mobile: new URL("/src/assets/chinese_mobile/team/disney_logo_mobile.svg", import.meta.url).href,
        description: "Walt Disney Studios"
    },
]
</script>
<template>
    <div>
        <div class="h-full w-full content_partner_bg bg-white
            bg-[length:100%_100%] text-center lg:pb-[60px] md:pb-[50px] pb-[40px]">
            <div class="w-full relative lg:pt-[80px] md:pt-[50px] pt-[20px]">
                <h3 class="lg:text-[48px] md:text-[32px] text-[18px]
                    lg:text-white md:text-white text-[#25277A] font-bold">{{ $t("team.contentPartner") }}</h3>
                <p class="lg:text-[16px] md:text-[14px] text-[12px] text-[#15C3CA] font-bold uppercase">content partner</p>
            </div>

            <div class="lg:w-[995px] md:w-[760px] w-full lg:px-[35px] md:px-[35px] px-[20px] mx-auto">
                <div class="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-3 gap-4 lg:mt-[60px] md:mt-[40px] mt-[20px]
                    lg:px-0 md:px-0 px-[20px]">
                    <div v-for="item in contentPartners" :key="item.id">
                        <div class="content_partner_div text-left mb-[20px] bg-white p-[20px] min-h-[140px]
                            h-[160px] lg:block md:block hidden">
                            <div>
                                <img :src="item.logo_pc" :alt="item.name" />
                            </div>
                            <div class="mt-[20px]">
                                <p class="text-themeGreyText1 lg:text-[14px] md:text-[12px]">
                                    {{ $t("team." + item.name) }}
                                </p>
                                <p class="lg:text-[12px] md:text-[10px] uppercase truncate ">{{ item.description }}</p>
                            </div>
                        </div>
                        <div class="lg:hidden md:hidden flex flex-row">
                            <div>
                                <img :src="item.logo_mobile" :alt="item.name" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (min-width: 768px) {
    .content_partner_bg {
        background: linear-gradient(to right, #4D1C8E 8.2%, #3C3392 56.25%, #2649B9 85.06%);
    }
}

.content_partner_div:hover {
    transform: translateY(-5px);
    transition-duration: 0.5s;
    transition-property: transform;
    border-left: 8px solid linear-gradient(#A100DA 0%, #FF5252 100%);
}

</style>
