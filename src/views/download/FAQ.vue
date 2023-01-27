<script setup>
</script>

<template>
    <div class="lg:pt-[60px] md:pt-[40px] pt-[20px] text-center bg-[#F4F7FA]">
        <div class="container mx-auto lg:pb-[200px] md:pb-[100px] pb-10">
            <div class="faq-title">
                <p class="lg:text-[48px] md:text-[32px] text-[18px] text-themeGreyText1 
                    lg:leading-[74px] md:leading-[50px] leading-[27px] font-medium">
                    {{ $t("download.faqTitle") }}
                </p>
                <p class="text-[#15C3CA] font-medium lg:text-[16px] md:text-[14px] text-[12px] leading-6">
                    Frequently Asked Questions
                </p>
            </div>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-20 md:mt-10 mt-5">
                <div class="rounded-1 card text-left mx-[30px] mb-5">
                    <div class="px-[10px]">
                        <li class="lg:py-10 md:py-5 py-[10px] lg:px-5 md:px-3 px-[10px] font-bold 
                            lg:text-[18px] md:text-[17px] text-[16px] text-black leading-[27px] list-disc">
                            {{ $t("download.faq1Title") }}
                        </li>
                    </div>
                    <div class="lg:p-5 md:p-3 pl-5 pb-2">
                        <ol class="list-decimal pl-5 pr-3">
                            <li>{{ $t("download.faq1Desc1") }}</li>
                            <li>{{ $t("download.faq1Desc2") }}</li>
                            <li>{{ $t("download.faq1Desc3") }}</li>
                            <li>{{ $t("download.faq1Desc4") }}</li>
                        </ol>
                    </div>
                </div>
                <div class="rounded-1 card text-left mx-[30px] mb-5">
                    <div class="px-[10px]">
                        <li class="lg:py-10 md:py-5 py-[10px] lg:px-5 md:px-3 px-[10px] font-bold 
                            lg:text-[18px] md:text-[17px] text-[16px] text-black leading-[27px] list-disc">
                            {{ $t("download.faq2Title") }}
                        </li>
                    </div>
                    <div class="lg:p-5 md:p-3 pl-5 pb-2">
                        <ol class="list-decimal pl-5 pr-3">
                            <li>{{ $t("download.faq2Desc1") }}</li>
                            <li>{{ $t("download.faq2Desc2") }}</li>
                            <li>{{ $t("download.faq2Desc3") }}</li>
                            <li>{{ $t("download.faq2Desc4") }}</li>
                        </ol>
                    </div>
                </div>
                <div class="rounded-1 card text-left mx-[30px] mb-5">
                    <div class="px-[10px]">
                        <li class="lg:py-10 md:py-5 py-[10px] lg:px-5 md:px-3 px-[10px] font-bold 
                            lg:text-[18px] md:text-[17px] text-[16px] text-black leading-[27px] list-disc">
                            {{ $t("download.faq3Title") }}
                        </li>
                    </div>
                    <div class="lg:p-5 md:p-3 pl-5 pb-2">
                        <ol class="list-decimal pl-5 pr-3">
                            <li>{{ $t("download.faq3Desc1") }}</li>
                            <li>{{ $t("download.faq3Desc2") }}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    box-shadow: 0 0 10px 4px rgba(155, 174, 192, 0.15);
}
</style>