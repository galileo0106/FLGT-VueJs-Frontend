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
                    嗨！有什么需要帮忙的吗？
                </div>
                <div class="lg:w-[455px] md:w-[350px] lg:mt-[40px] md:mt-[20px] lg:block md:block hidden">
                    <div class="flex flex-row">
                        <input placeholder="搜素帮助内容" 
                            class="py-[7px] px-[12px] text-[14px] text-[#86909C]
                                border border-[#C4C4C4] border-r-0 w-full"/>
                        <button class="text-[14px] text-[#86909C] bg-white w-1/4
                            border border-[#C4C4C4] border-l-0 font-bold">搜素</button>
                    </div>
                </div>
                <p class="lg:text-[16px] md:text-[14px] text-[12px] text-[#666] font-medium mt-[30px]
                    lg:w-full md:w-full w-2/3">
                    找不到需要的答案？请下载凤凰社区app，在app内联系在线客服！
                </p>
                <div class="lg:hidden md:hidden block mt-[25px]">
                    <div class="grid grid-cols-3 gap-2">
                        <div class="col-span-2">
                            <input type="text" class="form-control border border-[#ccc] px-[12px] py-[5px]
                                text-[14px] text-[#666] w-full"
                                placeholder="搜索帮助内容" />
                        </div>
                        <div class="col-span-1">
                            <button class="search-btn py-[5px] w-full rounded-[2px] text-white text-center
                                text-[14px]">搜素</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:bg-white md:bg-white bg-[#EBF3FF] lg:py-[60px] md:py-[40px] py-[20px] px-[20px]">
            <div class="lg:w-[930px] md:w-[728px] w-[335px] mx-auto ">
                <div class="border-l-4 border-[#F02148] pl-[10px]">
                    <span class="lg:text-[28px] md:text-[23px] text-[18px] text-black font-medium">常见问题</span>
                    <span class="lg:text-[16px] md:text-[14px] text-[12px] text-[#666] font-medium
                        lg:ml-[10px] md:ml-[7px] ml-[5px]">帮你快速找到解决方案</span>
                </div>

                <div class="lg:border md:border border-[#25252540] lg:mt-[43px] md:mt-[30px] mt-[20px] faq-box">
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 bg-white py-[20px] 
                        lg:rounded-none md:rounded-none rounded-[6px]">
                        <div class="lg:px-[80px] md:px-[40px] px-[30px]">
                            <ul class="lg:text-[20px] md:text-[17px] text-[14px] font-medium text-themeGreyText1 
                                lg:list-none md:list-none list-disc pl-[20px]">
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">凤凰社区有什么功能？</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">USDF是什么</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">如何获得FLGT</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">代币如何变现</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">APP怎么下载的</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">什么是凤凰链</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">什么是节点</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">如何下载凤凰社区app</li>
                            </ul>
                        </div>
                        <div class="lg:px-[60px] md:px-[40px] px-[30px]">
                            <ul class="lg:text-[20px] md:text-[17px] text-[14px] font-medium text-themeGreyText1
                                lg:list-none md:list-none list-disc pl-[20px]">
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">我要怎么充值购买FLGT</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">USDF是什么</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">凤凰社区对节点有什么支持下的服务</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">凤凰社区有什么功能</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">节点挖矿所产生的代币怎么变现</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">在凤凰社区开网店需要什么</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">凤凰社区怎么打广告</li>
                                <li class="lg:leading-[50px] md:leading-[37px] leading-[28px]">如果不做主播了押金可以退吗</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:h-[700px] h-full lg:bg-contact_us_bg_pc md:bg-contact_us_bg_pc bg-white
            lg:pt-[80px] md:pt-[50px] pt-[20px] text-center">
            <h3 class="lg:text-[48px] md:text-[32px] text-[18px] text-[#25277A] font-bold">联系我们</h3>
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
                                        lg:text-left md:text-left text-center contact_mobile">凤凰社区在线客服：</p>
                                </div>
                                <div class="col-span-2 flex flex-1 flex-col justify-center ml-[5px]">
                                    <button class="text-[16px] text-white font-medium leading-[24px] py-1
                                        rounded-[30px] text-center consult-btn w-[120px]">立即咨询</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="text-[24px] text-[#0C31B1] leading-[21px] mt-[20px]
                                lg:block md:block hidden lg:text-left md:text-left text-center">
                                凤凰社区在线客服：
                            </p>
                            <p class="text-[14px] text-[#666] leading-[21px] font-medium lg:mt-[20px] md:mt-[21px] mt-[22px] 
                                lg:text-left md:text-left text-center lg:pl-0 md:pl-0 pl-[26px] contact_mobile">
                                智能接待，随时回复，为你提供快速便捷的服务体验！
                            </p>
                            <div class="text-left">
                                <button class="text-[20px] leading-[21px] font-medium text-white py-[10px] text-center
                                    w-[160px] bg-[#5277F7] mt-[26px] rounded-[30px] lg:block md:block hidden">立即咨询</button>
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