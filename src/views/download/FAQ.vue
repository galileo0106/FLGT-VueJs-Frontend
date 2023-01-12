<script setup>
import { ref } from "vue";
</script>

<template>
    <div class="lg:pt-[60px] md:pt-[40px] pt-[20px] text-center bg-[#F4F7FA]">
        <div class="container mx-auto lg:pb-[200px] md:pb-[100px] pb-10">
            <div class="faq-title">
                <p class="lg:text-[48px] md:text-[32px] text-[18px] text-themeGreyText1 
                    lg:leading-[74px] md:leading-[50px] leading-[27px] font-medium">
                    常见下载问题
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
                            苹果手机下载软件为什么失败？
                        </li>
                    </div>
                    <div class="lg:p-5 md:p-3 pl-5 pb-2">
                        <ol class="list-decimal pl-5 pr-3">
                            <li>系统和软件要求的版本不符合</li>
                            <li>软件可能是需要越狱的</li>
                            <li>手机的设置问题检查手机是否关闭了【访问限制】</li>
                            <li>检查自己的手机内存是否还有足够的空间</li>
                        </ol>
                    </div>
                </div>
                <div class="rounded-1 card text-left mx-[30px] mb-5">
                    <div class="px-[10px]">
                        <li class="lg:py-10 md:py-5 py-[10px] lg:px-5 md:px-3 px-[10px] font-bold 
                            lg:text-[18px] md:text-[17px] text-[16px] text-black leading-[27px] list-disc">
                            APP安装不上或者出现闪退情况怎么办？
                        </li>
                    </div>
                    <div class="lg:p-5 md:p-3 pl-5 pb-2">
                        <ol class="list-decimal pl-5 pr-3">
                            <li>关闭后台APP 重新开启</li>
                            <li>用App Store 更新或重新下载</li>
                            <li>更新iPhone 系统版本</li>
                            <li>iPhone重开机一次</li>
                        </ol>
                    </div>
                </div>
                <div class="rounded-1 card text-left mx-[30px] mb-5">
                    <div class="px-[10px]">
                        <li class="lg:py-10 md:py-5 py-[10px] lg:px-5 md:px-3 px-[10px] font-bold 
                            lg:text-[18px] md:text-[17px] text-[16px] text-black leading-[27px] list-disc">
                            为什么手机网络开了，APP却登录不上去？
                        </li>
                    </div>
                    <div class="lg:p-5 md:p-3 pl-5 pb-2">
                        <ol class="list-decimal pl-5 pr-3">
                            <li>系统首先还是要检查网络信号好坏</li>
                            <li>检查手机上是否安装了手机卫士、360卫士等相关软件，检查是否对我们的APP软件进行了上网限制</li>
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