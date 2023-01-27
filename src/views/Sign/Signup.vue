<template>
    <div class="w-full font-normal_font">
        <div class="bg-sign_bg_pc bg-[length:100%_100%] w-full h-[695px] pt-[156px]">
            <div class="lg:w-[931px] md:w-[710px] h-[440px] mx-auto lg:block md:block hidden">
                <div class="flex flex-row box_shadow">
                    <div>
                        <img src="../../assets/chinese_pc/sign/login_left_img_pc.png" alt="left image" />
                    </div>
                    <div class="lg:w-[360px] md:w-[280px] p-[30px] bg-white text-center">
                        <p class="text-[20px] font-bold leading-[23.8px] text-black">
                            <img src="../../assets/logo.svg" alt="fenghuang icon"
                                class="inline mr-[6px]" />
                            {{ $t("login.phoenixCommunity") }}
                        </p>
                        <p class="lg:mt-[20px] md:mt-[25px] lg:mb-[25px] md:mb-[10px] text-[#333] lg:text-[18px] md:text-[14px]
                            lg:leading-[23.8px] md:leading-[15px] font-medium text-left">
                            {{ $t("login.welcomeRegister") }}
                        </p>
                        <div class="text-white" >
                            <div class="flex flex-row">
                                <div>
                                    <select class="bg-transparent text-[#666] 
                                        lg:text-[14px] md:text-[10px] text-medium lg:leading-[19.6px] md:leading-[14px]
                                        lg:py-[10px] md:py-[5px] lg:mr-[10px] md:mr-[5px] outline-none">
                                        <option v-for="item in countryList" :key="item.id" :value="item.value">
                                            {{ item.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="w-[2px] h-[20px] bg-[#D9D9D9] m-auto"></div>
                                <div>
                                    <input type="text" :placeholder="$t('login.phoneNumber')" 
                                        class="border-none text-[#666] lg:text-[14px] md:text-[10px] 
                                            lg:leading-[19.6px] md:leading-[14px] lg:p-[10px] md:p-[5px] w-full outline-none" />
                                </div>
                            </div>
                            <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                            <div class="lg:mt-[15px] md:mt-2 relative">
                                <input type="text" :placeholder="$t('login.enterPassword')"  
                                    class="border-none text-[#666] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[14px]
                                            lg:py-[10px] md:py-[5px] w-full outline-none" />
                                <i class="text-[#666] cursor-pointer absolute right-0 top-[10px]" 
                                    :class="showPassword ? 'fa fa-eye' : 'fa fa-eye'" @click="handlePassword"></i>
                            </div>
                            <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                            <div class="lg:mt-[15px] md:mt-2 relative">
                                <input type="text" :placeholder="$t('login.enterConfirmPassword')"  
                                    class="border-none text-[#666] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[14px]
                                            lg:py-[10px] md:py-[5px] w-full outline-none" />
                                <i class="absolute right-0 top-[10px] text-[#666] cursor-pointer" 
                                    :class="showConfirmPassword ? 'fa fa-eye' : 'fa fa-eye'"
                                    @click="handleConfirmPassword"></i>
                            </div>
                            <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                            <div class="lg:mt-[30px] md:mt-[10px] text-left flex flex-row">
                                <input type="checkbox" class="mr-1" />
                                <label class="lg:text-[12px] md:text-[9px] leading-[20px] text-[#333]">
                                    {{ $t("login.agreeText") }}
                                    <a class="text-[#0057FF]">{{ $t("login.userAgree") }}</a>
                                    {{ $t("login.agreeAndText") }}
                                    <a class="text-[#0057FF]">{{ $t("login.privacyAgree") }}</a>
                                </label>
                                <!-- <p class="lg:text-[12px] md:text-[9px] leading-[20px] text-[#333] text-left">
                                        {{ $t("login.agreeText") }}<a class="text-[#0057FF]">{{ $t("login.userAgree") }}</a>{{ $t("login.agreeAndText") }}<a class="text-[#0057FF]">{{ $t("login.privacyAgree") }}</a></p> -->
                            </div>
                            <div class="mt-[10px]">
                                <button class="w-full rounded-[48px] login-btn text-white lg:py-[10px] md:py-[5px]
                                            lg:text-[16px] md:text-[12px] leading-[22.4px] text-center font-bold">
                                    {{ $t("login.login") }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            showPassword: false,
            showConfirmPassword: false,
            countryList: [
                { id: 1, name: "中国大陆+86", value: "中国大陆+86" },
                { id: 2, name: "中国台湾+886", value: "中国台湾+886" },
                { id: 3, name: "中国香港+852", value: "中国香港+852" },
                { id: 4, name: "中国澳门+853", value: "中国澳门+853" },
                { id: 5, name: "美国+1", value: "美国+1" },
                { id: 6, name: "英国+44", value: "英国+44" },
                { id: 7, name: "澳大利亚+61", value: "澳大利亚+61" },
                { id: 8, name: "俄罗斯+7", value: "俄罗斯+7" },
                { id: 9, name: "南非+27", value: "南非+27" },
                { id: 10, name: "荷兰+31", value: "荷兰+31" },
                { id: 11, name: "比利时+32", value: "比利时+32" },
            ]
        }
    },
    methods: {
        handlePassword: function() {
            this.showPassword = !this.showPassword
        },
        handleConfirmPassword: function() {
            this.showConfirmPassword = !this.showConfirmPassword
        },
    }
}
</script>


<style>
.login-btn {
    background: linear-gradient(to right, #F02148 8.34%, #FF5B21 100%);
}
.box_shadow {
    box-shadow: 5px 5px 10px #333;
}
</style>