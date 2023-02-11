<template>
    <div class="bg-footer lg:pt-[56px] md:pt-[43px] pt-[30px]">
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-1 container mx-auto">
            <div class="px-[26px]">
                <div class="grid grid-cols-3 gap-4">
                    <div class="mx-auto">
                        <p class="lg:text-[18px] md:text-[15px] text-[12px] text-white lg:mb-[16px] md:mb-[11px] mb-[6px]">{{ $t("footer.ecosystem") }}</p>
                        <p class="lg:text-[18px] md:text-[15px] text-[12px] text-[#ffffff80] lg:mb-[16px] md:mb-[11px] mb-[6px]">{{ $t("footer.phoenixCommunity") }}</p>
                        <p class="lg:text-[18px] md:text-[15px] text-[12px] text-[#ffffff80] lg:mb-[16px] md:mb-[11px] mb-[6px]">{{ $t("footer.phoenixFoundation") }}</p>
                        <p class="lg:text-[18px] md:text-[15px] text-[12px] text-[#ffffff80] lg:mb-[16px] md:mb-[11px] mb-[6px]">{{ $t("footer.ecosystemSupportProgram") }}</p>
                        <p class="lg:text-[18px] md:text-[15px] text-[12px] text-[#ffffff80] lg:mb-[16px] md:mb-[11px] mb-[6px]">{{ $t("footer.ecosystemFundingProgram") }}</p>
                        <p class="lg:text-[18px] md:text-[15px] text-[12px] text-[#ffffff80] lg:mb-[16px] md:mb-[11px] mb-[6px]">{{ $t("footer.phoenixBrandAssets") }}</p>
                    </div>
                    <div class="mx-auto">
                        <p class="lg:text-[18px] md:text-[15px] text-[12px] text-white lg:mb-[16px] md:mb-[11px] mb-[6px]">{{ $t("footer.developer") }}</p>
                        <p class="lg:text-[18px] md:text-[15px] text-[12px] text-[#ffffff80] lg:mb-[16px] md:mb-[11px] mb-[6px]">{{ $t("footer.startToExperience") }}</p>
                        <p class="lg:text-[18px] md:text-[15px] text-[12px] text-[#ffffff80] lg:mb-[16px] md:mb-[11px] mb-[6px]">{{ $t("footer.relatedDocuments") }}</p>
                        <p class="lg:text-[18px] md:text-[15px] text-[12px] text-[#ffffff80] lg:mb-[16px] md:mb-[11px] mb-[6px]">{{ $t("footer.tutorial") }}</p>
                        <p class="lg:text-[18px] md:text-[15px] text-[12px] text-[#ffffff80] lg:mb-[16px] md:mb-[11px] mb-[6px]">{{ $t("footer.setUpTheLocalEnvironment") }}</p>
                    </div>
                    <div class="mx-auto">
                        <p class="lg:text-[18px] md:text-[15px] text-[12px] text-white lg:mb-[16px] md:mb-[11px] mb-[6px]">{{ $t("footer.enterpriseApplication") }}</p>
                        <p class="lg:text-[18px] md:text-[15px] text-[12px] text-[#ffffff80] lg:mb-[16px] md:mb-[11px] mb-[6px]">{{ $t("footer.mainnetPhoenixCom") }}</p>
                        <p class="lg:text-[18px] md:text-[15px] text-[12px] text-[#ffffff80] lg:mb-[16px] md:mb-[11px] mb-[6px]">{{ $t("footer.privatePhoenixNetwork") }}</p>
                        <p class="lg:text-[18px] md:text-[15px] text-[12px] text-[#ffffff80] lg:mb-[16px] md:mb-[11px] mb-[6px]">{{ $t("footer.enterpriseApplication") }}</p>
                    </div>
                </div>
            </div>
            <div class="px-[20px]">
                <div>
                    <div class="text-center">
                        <img src="../../assets/chinese_pc/home/fenghuang_icon.svg" alt="fenghuang" class="inline"/>
                        <span class="lg:text-[20px] md:text-[18px] text-[16px] 
                            icon_title lg:ml-1 md:ml-2 ml-[13px]">{{ $t("footer.phoenixCommunity") }}</span>
                    </div>
                    <div class="footer_border_bottom lg:my-[20px] md:my-[18px] my-[15px] mx-auto"></div>
                    <div class="text-center lg:block md:block hidden">
                        <img src="../../assets/chinese_pc/home/discord.svg" alt="discord" class="mr-2 inline" />
                        <img src="../../assets/chinese_pc/home/ins.svg" alt="ins" class="mr-2 inline"  />
                        <img src="../../assets/chinese_pc/home/facebook.svg" alt="facebook" class="mr-2 inline"  />
                        <img src="../../assets/chinese_pc/home/telegram.svg" alt="telegram" class="mr-2 inline"  />
                        <img src="../../assets/chinese_pc/home/skype.svg" alt="skype" class="mr-2 inline"  />
                        <img src="../../assets/chinese_pc/home/twitter.svg" alt="twitter" class="mr-2 inline"  />
                        <img src="../../assets/chinese_pc/home/weixin.svg" alt="weixin" class="mr-2 inline" />
                        <img src="../../assets/chinese_pc/home/weibo.svg" alt="weibo" class="mr-2 inline"  />
                        <img src="../../assets/chinese_pc/home/youjian.svg" alt="youjian" class="mr-2 inline"  />
                    </div>
                    <div class="text-center lg:hidden md:hidden block">
                        <img src="../../assets/chinese_mobile/home/discord.svg" alt="discord" class="mr-2 inline" />
                        <img src="../../assets/chinese_mobile/home/ins.svg" alt="ins" class="mr-2 inline"  />
                        <img src="../../assets/chinese_mobile/home/facebook.svg" alt="facebook" class="mr-2 inline"  />
                        <img src="../../assets/chinese_mobile/home/telegram.svg" alt="telegram" class="mr-2 inline"  />
                        <img src="../../assets/chinese_mobile/home/skype.svg" alt="skype" class="mr-2 inline"  />
                        <img src="../../assets/chinese_mobile/home/twitter.svg" alt="twitter" class="mr-2 inline"  />
                        <img src="../../assets/chinese_mobile/home/weixin.svg" alt="weixin" class="mr-2 inline" />
                        <img src="../../assets/chinese_mobile/home/weibo.svg" alt="weibo" class="mr-2 inline"  />
                        <img src="../../assets/chinese_mobile/home/youjian.svg" alt="youjian" class="mr-2 inline"  />
                    </div>
                </div>
                <div class="lg:pt-[100px] md:pt-[60px] pt-[20px] lg:pb-[60px] md:pb-[40px] pb-[20px] text-center">
                    <p class="lg:text-[12px] md:text-[11px] text-[10px] text-[#ffffffbf]">Copyright @ 2019-2022 Phoenix Community. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.icon_title {
    background: -webkit-linear-gradient(#F02148 8.48%, #FF5B21 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.footer_border_bottom {
    background: rgba(255, 255, 255, 0.25);
    height: 1px;
}

@media (min-width: 768px) {
    .footer_border_bottom {
        width: 370px;
    }
}
</style>
