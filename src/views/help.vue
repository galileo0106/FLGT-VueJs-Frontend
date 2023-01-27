<script setup>

const contactInfos = [
    {
        id: 1,
        name: "twitter",
        logo_pc: "/src/assets/chinese_pc/help/twitter_logo_pc.svg",
        logo_mobile: "/src/assets/chinese_mobile/help/twitter_logo_mobile.svg",
    },
    {
        id: 2,
        name: "facebook",
        logo_pc: "/src/assets/chinese_pc/help/facebook_logo_pc.svg",
        logo_mobile: "/src/assets/chinese_mobile/help/facebook_logo_mobile.svg",
    },
    {
        id: 3,
        name: "discord",
        logo_pc: "/src/assets/chinese_pc/help/discord_logo_pc.svg",
        logo_mobile: "/src/assets/chinese_mobile/help/discord_logo_mobile.svg",
    },
    {
        id: 4,
        name: "Telegram",
        logo_pc: "/src/assets/chinese_pc/help/telegram_logo_pc.svg",
        logo_mobile: "/src/assets/chinese_mobile/help/telegram_logo_mobile.svg",
    },
    {
        id: 5,
        name: "youtube",
        logo_pc: "/src/assets/chinese_pc/help/youtube_logo_pc.svg",
        logo_mobile: "/src/assets/chinese_mobile/help/youtube_logo_mobile.svg",
    },
    {
        id: 6,
        name: "mail",
        logo_pc: "/src/assets/chinese_pc/help/mail_logo_pc.svg",
        logo_mobile: "/src/assets/chinese_mobile/help/mail_logo_mobile.svg",
    },
]
</script>

<style>
</style>
<template>
    <div class="w-full font-normal_font">
        <div class="lg:bg-help_bg_pc md:bg-help_bg_pc bg-white bg-no-repeat 
            lg:h-[340px] md:h-[340px] h-[200px] w-full z-[-2] bg-[length:100%_100%]">
            <div class="h-full lg:py-[77px] md:py-[60px] py-[20px] 
                lg:pl-[calc(calc(50%)-478px)] md:pl-[calc(calc(50%)-278px)] pl-[20px] pr-[20px] relative">
                <div class="absolute right-[2%]">
                    <img src="../assets/chinese_mobile/help/help_bg_mobile.png" alt="help mobile"
                        class="lg:hidden md:hidden block" />
                </div>
                <div class="text-gradient font-bold
                    lg:text-[46px] md:text-[28px] text-[20px] text-left">
                    {{ $t("help.helpTitle") }}
                </div>
                <div class="lg:w-[455px] md:w-[350px] lg:mt-[40px] md:mt-[20px] lg:block md:block hidden">
                    <div class="flex flex-row">
                        <input :placeholder="$t('help.searchHelpContent')" 
                            class="py-[7px] px-[12px] text-[14px] text-[#86909C]
                                border border-[#C4C4C4] border-r-0 w-full"/>
                        <button class="text-[14px] text-[#86909C] bg-white w-1/4
                            border border-[#C4C4C4] border-l-0 font-bold">
                            {{ $t("help.search") }}
                        </button>
                    </div>
                </div>
                <p class="lg:text-[16px] md:text-[14px] text-[12px] text-[#666] font-medium mt-[30px]
                    lg:w-full md:w-full w-2/3">
                    {{ $t("help.helpDesc") }}
                </p>
                <div class="lg:hidden md:hidden block mt-[25px]">
                    <div class="grid grid-cols-3 gap-2">
                        <div class="col-span-2">
                            <input type="text" class="form-control border border-[#ccc] px-[12px] py-[5px]
                                text-[14px] text-[#666] w-full"
                                :placeholder="$t('help.searchHelpContent')" />
                        </div>
                        <div class="col-span-1">
                            <button class="search-btn py-[5px] w-full rounded-[2px] text-white text-center
                                text-[14px]">{{ $t("help.search") }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:bg-white md:bg-white bg-[#EBF3FF] lg:py-[60px] md:py-[40px] py-[20px] px-[20px]">
            <div class="lg:w-[930px] md:w-[728px] w-[335px] mx-auto ">
                <div class="border-l-4 border-[#F02148] pl-[10px]">
                    <span class="lg:text-[28px] md:text-[23px] text-[18px] text-black font-medium">
                        {{ $t("help.commonProblem") }}
                    </span>
                    <span class="lg:text-[16px] md:text-[14px] text-[12px] text-[#666] font-medium
                        lg:ml-[10px] md:ml-[7px] ml-[5px]">
                        {{ $t("help.commonProblemSmall") }}
                    </span>
                </div>

                <div class="lg:border md:border border-[#25252540] lg:mt-[43px] md:mt-[30px] mt-[20px] faq-box">
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 bg-white py-[20px] 
                        lg:rounded-none md:rounded-none rounded-[6px]">
                        <div class="lg:px-[80px] md:px-[40px] px-[30px]">
                            <ul class="lg:text-[20px] md:text-[17px] text-[14px] font-medium text-themeGreyText1 
                                lg:list-none md:list-none list-disc pl-[20px]">
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ1") }}</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ2") }}</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ3") }}</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ4") }}</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ5") }}</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ6") }}</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ7") }}</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ8") }}</li>
                            </ul>
                        </div>
                        <div class="lg:px-[60px] md:px-[40px] px-[30px]">
                            <ul class="lg:text-[20px] md:text-[17px] text-[14px] font-medium text-themeGreyText1
                                lg:list-none md:list-none list-disc pl-[20px]">
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ9") }}</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ10") }}</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ11") }}</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ12") }}</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ13") }}</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ14") }}</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ15") }}</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">{{ $t("help.feedbackQ16") }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:h-[700px] h-full lg:bg-contact_us_bg_pc md:bg-contact_us_bg_pc bg-white
            lg:pt-[80px] md:pt-[50px] pt-[20px] text-center">
            <h3 class="lg:text-[48px] md:text-[32px] text-[18px] text-[#25277A] font-bold">
                {{ $t("help.contactUs") }}
            </h3>
            <p class="lg:text-[16px] md:text-[14px] text-[12px] text-[#15C3CA] font-bold">contact us</p>

            <div class="lg:w-[930px] md:w-[728px] w-full mx-auto pb-[30px]">
                <div class="lg:flex lg:flex-row md:flex md:flex-row grid grid-cols-1">
                    <div class="">
                        <div class="lg:mx-0 md:mx-0 mx-[26px]">
                            <img alt="contact us" src="../assets/chinese_pc/help/contact_us_pc.png" class="lg:block md:block hidden" />
                            <div class="lg:hidden md:hidden grid grid-cols-5 mt-[32px]">
                                <div class="col-span-3">
                                    <img alt="contact us" src="../assets/chinese_mobile/help/contact_us_mobile.png"
                                        class="mx-auto contact_mobile_img" />
                                    <p class="text-[#0C31B1] text-[20px] font-medium leading-[21px] mt-2
                                        lg:text-left md:text-left text-center contact_mobile">
                                        {{ $t("help.serviceTitle") }}
                                    </p>
                                </div>
                                <div class="col-span-2 flex flex-1 flex-col justify-center ml-[5px]">
                                    <button class="text-[16px] text-white font-medium leading-[24px] py-1
                                        rounded-[30px] text-center consult-btn w-[120px]">
                                        {{ $t("help.consultNow") }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="lg:text-[24px] md:text-[20px] text-[24px] text-[#0C31B1] lg:leading-[21px] md:leading-[14px] leading-[21px] mt-[20px]
                                lg:block md:block hidden lg:text-left md:text-left text-center">
                                {{ $t("help.serviceTitle") }}
                            </p>
                            <p class="lg:text-[14px] md:text-[10px] text-[14px] text-[#666] lg:leading-[21px] md:leading-[14px] leading-[21px] font-medium lg:mt-[20px] md:mt-[21px] mt-[22px] 
                                lg:text-left md:text-left text-center lg:pl-0 md:pl-0 pl-[26px] contact_mobile">
                                {{ $t("help.serviceContent") }}
                            </p>
                            <div class="text-left">
                                <button class="text-[20px] leading-[21px] font-medium text-white py-[10px] text-center
                                    w-[160px] bg-[#5277F7] mt-[26px] rounded-[30px] lg:block md:block hidden">
                                    {{ $t("help.consultNow") }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="grid lg:grid-cols-6 md:grid-cols-6 grid-cols-3 
                        lg:gap-10 md:gap-6 gap-1 lg:ml-[64px] md:ml-[20px] lg:mt-0 md:mt-0">
                        <div v-for="item in contactInfos" :key="item.id"
                            class="flex flex-1 flex-col justify-center mt-[30px]">
                            <img :alt="item.name" :src="item.logo_pc"
                                class="lg:block md:block hidden" />
                            <img :alt="item.name" :src="item.logo_mobile"
                                class="lg:hidden md:hidden block w-[35px] h-[35px] mx-auto" />
                            <p class="text-themeGreyText1 text-[12px] leading-[21px] font-medium uppercase
                                lg:mt-[11px] md:mt-[11px] mt-[7px]">{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-gradient {
    background: -webkit-linear-gradient(45deg, #6A46E5 10%, #EE6DBC 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.search-btn {
    background: linear-gradient(to right, #F02148 8.34%, #FF5B21 100%);
}

.consult-btn {
    background: linear-gradient(to right, #43DF88 0%, #1890FF 100%);
}

@media (max-width: 767px) {
    .faq-box {
        box-shadow: 8px 9px 10px rgba(85, 118, 166, 0.09);
    }
}
@media (max-width: 425px) {
    .contact_mobile_img {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
    .contact_mobile {
        text-align: left !important;
    }
}
</style>