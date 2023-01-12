<script setup>

</script>

<style>
</style>
<template>
    <div class="w-full font-normal_font">
        <div class="lg:bg-help_bg_pc md:lg:bg-help_bg_pc bg-white bg-no-repeat 
            lg:h-[340px] md:h-[340px] h-[200px] w-full z-[-2] bg-[length:100%_100%]">
            <div class="h-full lg:py-[77px] md:py-[60px] py-[20px] 
                lg:pl-[calc(calc(50%)-478px)] md:pl-[calc(calc(50%)-278px)] pl-[20px] pr-[20px]">
                <div class="text-gradient font-bold
                    lg:text-[46px] md:text-[28px] text-[20px] text-left">
                    嗨！有什么需要帮忙的吗？
                </div>
                <input placeholder="搜素帮助内容" 
                    class="py-[7px] px-[12px] text-[14px] text-[#86909C] lg:mt-[40px] md:mt-[20px]
                        lg:block md:block hidden"/>
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
            <div class="lg:w-[930px] md:w-[748px] w-[335px] mx-auto ">
                <div class="border-l-4 border-[#F02148] pl-[10px]">
                    <span class="lg:text-[28px] md:text-[23px] text-[18px] text-black font-medium">常见问题</span>
                    <span class="lg:text-[16px] md:text-[14px] text-[12px] text-[#666] font-medium
                        lg:ml-[10px] md:ml-[7px] ml-[5px]">帮你快速找到解决方案</span>
                </div>

                <div class="lg:border md:border border-none border-[#25252540] py-[20px] lg:rounded-none md:rounded-none rounded-[6px]">
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 bg-white py-[20px]">
                        <div class="lg:px-[80px] md:px-[40px] px-[30px]">
                            <ul class="lg:text-[20px] md:text-[17px] text-[14px] font-medium text-themeGreyText1 
                                lg:list-none md:list-none list-disc pl-[20px]">
                                <li class="leading-[28px]">凤凰社区有什么功能？</li>
                                <li class="leading-[28px]">USDF是什么</li>
                                <li class="leading-[28px]">如何获得FLGT</li>
                                <li class="leading-[28px]">代币如何变现</li>
                                <li class="leading-[28px]">APP怎么下载的</li>
                                <li class="leading-[28px]">什么是凤凰链</li>
                                <li class="leading-[28px]">什么是节点</li>
                                <li class="leading-[28px]">如何下载凤凰社区app</li>
                            </ul>
                        </div>
                        <div class="lg:px-[60px] md:px-[40px] px-[30px]">
                            <ul class="lg:text-[20px] md:text-[17px] text-[14px] font-medium text-themeGreyText1
                                lg:list-none md:list-none list-disc pl-[20px]">
                                <li class="leading-[28px]">我要怎么充值购买FLGT</li>
                                <li class="leading-[28px]">USDF是什么</li>
                                <li class="leading-[28px]">凤凰社区对节点有什么支持下的服务</li>
                                <li class="leading-[28px]">凤凰社区有什么功能</li>
                                <li class="leading-[28px]">节点挖矿所产生的代币怎么变现</li>
                                <li class="leading-[28px]">在凤凰社区开网店需要什么</li>
                                <li class="leading-[28px]">凤凰社区怎么打广告</li>
                                <li class="leading-[28px]">如果不做主播了押金可以退吗</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:h-[700px] h-full bg-chinese_pc_banner_1 lg:pt-[80px] md:pt-[50px] pt-[20px] text-center">
            <h3 class="lg:text-[48px] md:text-[32px] text-[18px] text-[#25277A] font-bold">联系我们</h3>
            <p class="lg:text-[16px] md:text-[14px] text-[12px] text-[#15C3CA] font-bold">contact us</p>
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
</style>