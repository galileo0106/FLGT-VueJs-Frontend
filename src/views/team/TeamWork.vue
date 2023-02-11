<template>
    <div>
        <div class="lg:h-[638px] md:h-[380px] h-[240px] w-full lg:bg-team_bg_pc md:bg-team_bg_pc bg-none
            bg-[length:100%_100%]">
            <div class="h-full lg:pt-[105px] md:pt-[70px] pt-[30px]
                lg:pl-[calc(calc(50%)-478px)] md:pl-[calc(calc(50%)-278px)] px-[36px] relative">
                <div class="relative">
                    <div class="">
                        <p class="text-[#25277A] font-bold lg:hidden md:hidden block"
                            :class="lang == 'en' ? 'text-[30px] leading-[48px]' : 'text-[32px] leading-[56px] '">Team Work</p>
                        <p class="text-[#25277A] font-bold
                            lg:text-[64px] md:text-[48px] text-left"
                            :class="lang == 'en' ? 'text-[30px]' : 'text-[38px]'">
                            {{ $t("team.team") }}
                        </p>
                        <p class="text-[#25277A] font-bold lg:text-[80px] md:text-[60px] lg:block md:block hidden
                            lg:leading-[56px] md:leading-[56px]">
                            Team Work
                        </p>
                    </div>
                    <div>
                        <div class="absolute right-0 bottom-0">
                            <img src="../../assets/chinese_mobile/team/team_img_mobile.png" alt="team image"
                                class="lg:hidden md:hidden block" />
                        </div>
                    </div>
                </div>
                <div>
                    <p class="lg:w-[413px] md:w-[413px] w-full lg:text-[14px] md:text-[12px] text-[10px] font-medium 
                        lg:text-[#161820] md:text-[#161820] text-[#666]
                        lg:mt-[27px] md:mt-[27px]" :class="lang == 'en' ? 'mt-0' : 'mt-3'">
                        {{ $t("team.teamBannerDesc1") }}
                    </p>
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

<style scoped></style>
