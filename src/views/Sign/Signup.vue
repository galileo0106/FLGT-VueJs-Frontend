<template>
    <div class="w-full font-normal_font">
        <div class="bg-sign_bg_pc bg-[length:100%_100%] w-full h-[695px] pt-[156px]">
            <div class="lg:w-[931px] md:w-[710px] h-[440px] mx-auto lg:block md:block hidden">
                <div class="flex flex-row box_shadow">
                    <div class="relative">
                        <img src="../../assets/chinese_pc/sign/login_left_img_pc.png" alt="left image" />
                        <div class="absolute text-white text-[40px] leading-[56px] top-[62px] left-[68px]">
                            <p>Hello,</p>
                            <p>{{ $t("login.welcomeText") }}</p>
                            <p class="text-[14px] leading-[21px] w-[327px]">{{ $t("login.welcomeContent") }}</p>
                        </div>
                    </div>
                    <div class="lg:w-[360px] md:w-[280px] p-[30px] bg-white text-center">
                        <div v-if="isLogin" class="lg:mt-[50px] md:mt-[20px]">
                            <img src="../../assets/chinese_pc/sign/register_success_pc.svg" alt="register success"
                                class="mx-auto" />
                            <p class="mt-[10px] text-[20px] leading-[28px] text-[#333] text-center">
                                {{ $t("login.registerSuccess") }}
                            </p>
                            <p class="text-[14px] leading-[23.8px] text-[#666]">
                                {{ $t("login.successText") }}
                            </p>
                            <div class="lg:mt-[60px] md:mt-[40px]">
                                <button class="w-full rounded-[48px] login-btn text-white py-[10px]
                                    text-[16px] leading-[22.4px] text-center font-bold"
                                    @click="gotoLogin">
                                    {{ $t("login.loginNow") }}
                                </button>
                            </div>
                        </div>
                        <div v-else>
                            <p class="text-[20px] font-bold leading-[23.8px] text-black">
                                <img src="../../assets/logo.svg" alt="fenghuang icon"
                                    class="inline mr-[6px]" />
                                {{ $t("login.phoenixCommunity") }}
                            </p>
                            <p class="lg:mt-2 md:mt-2 lg:mb-[10px] md:mb-[10px] text-[#333] lg:text-[18px] md:text-[14px]
                                lg:leading-[23.8px] md:leading-[15px] font-medium text-left">
                                {{ $t("login.welcomeRegister") }}
                            </p>
                            <div class="text-white" >
                                <div class="flex flex-row">
                                    <div class="w-2/5">
                                        <Vue3CountryIntl v-model="phoneCountry" :useChinese="lang == 'zh' ? true : false" 
                                            onlyValue selectedText=""
                                            :placeholder="$t('login.selectCountry')"
                                            type="phone" iso2="86" @onChange="getSelected">
                                        </Vue3CountryIntl>
                                    </div>
                                    <div class="w-[2px] h-[20px] bg-[#D9D9D9] m-auto"></div>
                                    <div>
                                        <input type="text" :placeholder="$t('login.phoneNumber')" v-model="registerData.username"
                                            class="border-none text-[#666] lg:text-[14px] md:text-[10px]
                                                lg:leading-[19.6px] md:leading-[14px] lg:p-[10px] md:p-[5px] w-full outline-none" />
                                    </div>
                                </div>
                                <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                                <div class="mt-2 relative">
                                    <input type="text" :placeholder="$t('login.enterPassword')" v-model="registerData.password"
                                        v-if="showPassword"
                                        class="border-none text-[#666] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[14px]
                                                lg:py-[10px] md:py-[5px] w-full outline-none" />
                                    <input type="password" :placeholder="$t('login.enterPassword')" v-model="registerData.password"
                                        v-else
                                        class="border-none text-[#666] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[14px]
                                                lg:py-[10px] md:py-[5px] w-full outline-none" />
                                    <div class="absolute right-0 top-[10px] text-[#666] cursor-pointer text-[16px] leading-[22.4px]"
                                        @click="() => { showPassword = !showPassword }" v-if="showPassword">
                                        <i class="fa fa-eye"></i>
                                    </div>
                                    <div class="absolute right-0 top-[10px] text-[#666] cursor-pointer text-[16px] leading-[22.4px]"
                                        @click="() => { showPassword = !showPassword }" v-else>
                                        <i class="fa fa-eye-slash"></i>
                                    </div>
                                </div>
                                <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                                <div class="mt-2 relative">
                                    <input type="text" :placeholder="$t('login.enterReferrer')" v-model="registerData.referrer"
                                        class="border-none text-[#666] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[14px]
                                                lg:py-[10px] md:py-[5px] w-full outline-none" />
                                </div>
                                <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                                <div class="mt-2 relative">
                                    <input type="text" :placeholder="$t('login.enterVerifyCode')" v-model="registerData.code"
                                        class="border-none text-[#666] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[14px]
                                                lg:py-[10px] md:py-[5px] w-full outline-none" />
                                    <p class="absolute right-0 top-[10px] text-[#666] cursor-pointer
                                        lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[14px]"
                                        @click="getVerifyCode">
                                        {{ $t("login.getVerificationCode") }}
                                    </p>
                                </div>
                                <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                                <div class="pt-2 text-[#F02148] lg:text-[12px] md:text-[10px] text-left">
                                    {{ registerData.errorMsg == "enterPhoneNumber" ? $t("login.phoneNumber") : registerData.errorMsg }}
                                </div>
                                <div class="lg:mt-[20px] md:mt-[10px] text-left flex flex-row cursor-pointer"
                                    @click="() => { checkAgree = !checkAgree }">
                                    <input type="checkbox" class="mr-1 cursor-pointer" v-model="checkAgree" />
                                    <p class="lg:text-[12px] md:text-[9px] leading-[20px] text-[#333] text-left">
                                            {{ $t("login.agreeText") }}<a class="text-[#0057FF]">{{ $t("login.userAgree") }}</a>{{ $t("login.agreeAndText") }}<a class="text-[#0057FF]">{{ $t("login.privacyAgree") }}</a></p>
                                </div>
                                <div class="mt-[10px]">
                                    <button class="w-full rounded-[48px] login-btn text-white lg:py-[10px] md:py-[5px]
                                                lg:text-[16px] md:text-[12px] leading-[22.4px] text-center font-bold"
                                        :class="checkAgree ? 'opacity-100' : 'opacity-50'"
                                        :disabled="!checkAgree ? true : false"
                                        @click="register">
                                        {{ $t("login.login") }}
                                    </button>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const API_URL = import.meta.env.VITE_API_URL;
export default {
    name: 'Login',
    data() {
        return {
            showPassword: false,
            showConfirmPassword: false,
            isLogin: false,
            phoneCountry: "",
            registerData: {
                username: "",
                password: "",
                referrer: "",
                code: "",
                errorMsg: "",
            },
            checkAgree: false,
            lang: localStorage.getItem("lang")
        }
    },
    mounted() {
        window.scrollTo(0,0);
    },
    methods: {
        handlePassword: function() {
            this.showPassword = !this.showPassword
        },
        handleConfirmPassword: function() {
            this.showConfirmPassword = !this.showConfirmPassword
        },
        getVerifyCode: function() {
            var username = this.registerData.username;
            if(username !== "") {
                var param = {
                    tel: username,
                }
                var url = API_URL + "/v1/user/sms";
                this.axios.post(url, param).then((res) => {
                    if(res.data.error) {
                        this.registerData.errorMsg = res.data.error;
                    }
                });
            } else {
                this.registerData.errorMsg = "enterPhoneNumber"
            }
        },
        register: function() {
            var url = API_URL + "/v1/user/tel-register";
            this.axios.post(url, this.registerData).then((res) => {
                if(res.data.message == "success") {
                    this.isLogin = true;
                } else {
                    this.registerData.errorMsg = res.data.error;
                }
            });
        },
        gotoLogin: function() {
            window.location.href = "/login";
        },
        getSelected: function(selected) {
            this.registerData.code = selected.dialCode;
        }
    },
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