<template>
    <div class="w-full font-normal_font">
        <div class="bg-sign_bg_pc bg-[length:100%_100%] w-full lg:h-[695px] md:h-[695px] h-[450px] pt-[156px]">
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
                        <p class="lg:text-[20px] md:text-[16px] font-bold leading-[23.8px] text-black">
                            <img src="../../assets/logo.svg" alt="fenghuang icon"
                                class="inline mr-[6px]" />
                            {{ $t("login.phoenixCommunity") }}
                        </p>
                        <div>
                            <ul class="nav nav-tabs flex flex-row md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 relative
                                lg:mt-[33px] md:mt-[15px]"
                                id="tabs-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <p class="cursor-pointer lg:text-[18px] md:text-[12px] lg:leading-[23.8px] md:leading-[15px] font-medium py-1 lg:px-3 md:px-1"
                                        :class="selectedTab == 'password' ? 'text-[#F02148]' : 'text-[#333]'"
                                        id="tabs-password-tab" data-bs-toggle="pill"
                                        data-bs-target="#tabs-password" role="tab" aria-controls="tabs-password"
                                        aria-selected="false" @click="() => handleTab('password')">
                                        {{ $t("login.passwordLogin") }}
                                    </p>
                                    <div class="w-[30px] h-[2px] mx-auto bg-[#F02148]"
                                        :class="selectedTab == 'password' ? 'block' : 'hidden'"></div>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <p class="cursor-pointer lg:text-[18px] md:text-[12px] lg:leading-[23.8px] md:leading-[15px] font-medium py-1 lg:px-3 md:px-1"
                                        :class="selectedTab == 'message' ? 'text-[#F02148]' : 'text-[#333]'"
                                        id="tabs-message-tab" data-bs-toggle="pill"
                                        data-bs-target="#tabs-message" role="tab" aria-controls="tabs-message"
                                        aria-selected="false" @click="() => handleTab('message')">
                                        {{ $t("login.smsLogin") }}
                                    </p>
                                    <div class="w-[30px] h-[2px] mx-auto bg-[#F02148]"
                                        :class="selectedTab == 'message' ? 'block' : 'hidden'"></div>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <p class="cursor-pointer lg:text-[18px] md:text-[12px] lg:leading-[23.8px] md:leading-[15px] font-medium py-1 lg:px-3 md:px-1"
                                        :class="selectedTab == 'qrCode' ? 'text-[#F02148]' : 'text-[#333]'"
                                        id="tabs-qrCode-tab" data-bs-toggle="pill"
                                        data-bs-target="#tabs-qrCode" role="tab" aria-controls="tabs-qrCode"
                                        aria-selected="false" @click="() => handleTab('qrCode')">
                                        {{ $t("login.scanCodeToLogin") }}
                                    </p>
                                    <div class="w-[30px] h-[2px] mx-auto bg-[#F02148]"
                                        :class="selectedTab == 'qrCode' ? 'block' : 'hidden'"></div>
                                </li>
                            </ul>
                            <div class="tab-content" id="tabs-tabContent">
                                <div class="tab-pane fade text-white lg:mt-[30px] md:mt-[25px]"
                                    :class="selectedTab == 'password' ? 'show active block' : 'hidden'"
                                    id="tabs-password" role="tabpanel" aria-labelledby="tabs-password-tab">
                                    <div class="">
                                        <input type="text" :placeholder="$t('login.phoneNumber')" v-model="passwordLogin.username"
                                            class="border-none text-[#666] lg:text-[14px] md:text-[10px]
                                                lg:leading-[19.6px] md:leading-[14px] lg:py-[10px] md:py-[5px] w-full outline-none" />
                                    </div>
                                    <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                                    <div class="mt-[15px] relative">
                                        <input type="text" :placeholder="$t('login.enterPwd')" v-model="passwordLogin.password"
                                            v-if="showPassword"
                                            class="border-none text-[#666] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[14px]
                                                lg:py-[10px] md:py-[5px] w-full outline-none" />
                                        <input type="password" :placeholder="$t('login.enterPwd')" v-model="passwordLogin.password"
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
                                    <div class="pt-3 text-[#F02148] text-[12px] text-left">
                                        {{ passwordLogin.errorMsg }}
                                    </div>
                                    <div class="mt-[15px]">
                                        <div class="grid grid-cols-2">
                                            <div class="col-span-1 text-left">
                                                <a class="text-[#333] lg:text-[12px] md:text-[10px] leading-[15.24px]"
                                                    href="/register">
                                                    {{ $t("login.registerAccount") }}
                                                </a>
                                            </div>
                                            <div class="col-span-1 text-right">
                                                <a class="text-[#333] lg:text-[12px] md:text-[10px] leading-[15.24px]"
                                                    href="/resetPassword">
                                                    {{ $t("login.forgotPwd") }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-row cursor-pointer"
                                        :class="passwordLogin.errorMsg ? 'lg:mt-[14px] md:mt-[5px]' : 'lg:mt-[30px] md:mt-[15px]'"
                                        @click="() => { passwordLogin.checkAgreePwd = !passwordLogin.checkAgreePwd }">
                                        <input type="checkbox" class="mr-1 cursor-pointer" v-model="passwordLogin.checkAgreePwd" />
                                        <p class="lg:text-[12px] md:text-[9px] leading-[20px] text-[#333] text-left">
                                            {{ $t("login.agreeText") }}<a class="text-[#0057FF]">{{ $t("login.userAgree") }}</a>{{ $t("login.agreeAndText") }}<a class="text-[#0057FF]">{{ $t("login.privacyAgree") }}</a></p>
                                    </div>
                                    <div class="mt-[10px]">
                                        <button class="w-full rounded-[48px] login-btn text-white lg:py-[10px] md:py-[5px]
                                            lg:text-[16px] md:text-[12px] leading-[22.4px] text-center font-bold"
                                            :class="passwordLogin.checkAgreePwd ? 'opacity-100' : 'opacity-50'"
                                            :disabled="!passwordLogin.checkAgreePwd ? true : false"
                                            @click="login">{{ $t("login.login") }}</button>
                                    </div>
                                </div>
                                <div class="tab-pane fade text-white lg:mt-[30px] md:mt-[25px]"
                                    :class="selectedTab == 'message' ? 'show active block' : 'hidden'"
                                    id="tabs-message" role="tabpanel" aria-labelledby="tabs-message-tab">
                                    <div class="flex flex-row">
                                        <div class="w-3/5">
                                            <Vue3CountryIntl v-model="phoneCountry" :useChinese="lang == 'zh' ? true : false" 
                                                onlyValue selectedText=""
                                                :placeholder="$t('login.selectCountry')"
                                                type="phone" iso2="86" @onChange="getSelected">
                                            </Vue3CountryIntl>
                                        </div>
                                        <div class="w-[2px] h-[20px] bg-[#D9D9D9] m-auto"></div>
                                        <div>
                                            <input type="text" :placeholder="$t('login.enterPhoneNum')" v-model="smsLogin.username"
                                                class="border-none text-[#666] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[14px]
                                                 lg:p-[10px] md:p-[5px] w-full outline-none" />
                                        </div>
                                    </div>
                                    <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                                    <div class="mt-[15px] relative">
                                        <input type="text" :placeholder="$t('login.enterVerifyCode')" v-model="smsLogin.verifyCode"
                                            class="border-none text-[#666] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[14px]
                                             lg:py-[10px] md:py-[5px] w-full outline-none" />
                                        <a class="absolute right-0 lg:top-[10px] md:top-[4px] text-[#F02148] lg:text-[14px] md:text-[10px] leading-[19.6px]"
                                            >
                                            {{ $t("login.getVerificationCode") }}
                                        </a>
                                    </div>
                                    <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                                    <div class="lg:mt-[60px] md:mt-[40px] flex flex-row cursor-pointer" @click="() => { checkAgreeMsg = !checkAgreeMsg }">
                                        <input type="checkbox" class="mr-1 cursor-pointer" v-model="checkAgreeMsg" @change="() => { checkAgreeMsg = !checkAgreeMsg }" />
                                        <p class="lg:text-[12px] md:text-[9px] leading-[20px] text-[#333] text-left">
                                            {{ $t("login.agreeText") }}<a class="text-[#0057FF]">{{ $t("login.userAgree") }}</a>{{ $t("login.agreeAndText") }}<a class="text-[#0057FF]">{{ $t("login.privacyAgree") }}</a></p>
                                    </div>
                                    <div class="mt-[10px]">
                                        <button class="w-full rounded-[48px] login-btn text-white lg:py-[10px] md:py-[5px]
                                            lg:text-[16px] md:text-[12px] leading-[22.4px] text-center font-bold"
                                            :class="checkAgreeMsg ? 'opacity-100' : 'opacity-50'" :disabled={checkAgreeMsg}
                                            @click="smsLogin">{{ $t("login.login") }}</button>
                                    </div>
                                </div>
                                <div class="tab-pane fade text-white mt-[30px]"
                                    :class="selectedTab == 'qrCode' ? 'show active block' : 'hidden'"
                                    id="tabs-qrCode" role="tabpanel" aria-labelledby="tabs-qrCode-tab">
                                    <p class="text-[#666] lg:text-[14px] md:text-[10px] leading-[19.6px] text-center">
                                        {{ $t("login.open") }}
                                        <a class="text-[#F02148]">
                                            {{ $t("login.phoenixMobileAPP") }}
                                        </a><br/>{{ $t("login.scanQRcodeToLogin") }}
                                    </p>
                                    <div class="lg:mt-[20px] md:mt-[10px] lg:w-[150px] md:w-[100px] lg:h-[150px] md:h-[100px] mx-auto border border-[#BEBEBE] p-[20px]">
                                        <img src="../../assets/chinese_pc/sign/login_qr_code_pc.png" alt="qr code image" id="qrCode" />
                                    </div>
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
            selectedTab: "password",
            checkAgreeMsg: false,
            showPassword: false,
            phoneCountry: "",
            passwordLogin: {
                checkAgreePwd: false,
                username: "",
                password: "",
                errorMsg: "",
            },
            smsLogin: {
                username: "",
                code: "",
                verifyCode: "",
            },
            qrLogin: {
                qrCode: "",
            }

        }
    },
    mounted() {
        window.scrollTo(0,0);
    },
    methods: {
        handleTab: function(tab) {
            this.selectedTab = tab;
        },
        login: function() {
            var params = {
                username: this.passwordLogin.username,
                password: this.passwordLogin.password
            }
            var url = API_URL + "/v1/user/login";
            this.axios.post(url, params).then((res) => {
                if(res.data.error) {
                    this.passwordLogin.errorMsg = res.data.error;
                } else {
                    localStorage.setItem("token", res.data.data.auth.access_token);
                    localStorage.setItem("username", res.data.data.user.username);
                    localStorage.setItem("avatar", res.data.data.user.avatar);
                    window.location.href = "/";
                }
            });
        },
        smsLogin: function() {
        },
        getSelected: function(selected) {
            this.smsLogin.code = selected.dialCode;
        }
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