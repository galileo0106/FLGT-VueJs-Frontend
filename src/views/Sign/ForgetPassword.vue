<template>
    <div class="w-full font-normal_font">
        <div class="bg-sign_bg_pc bg-[length:100%_100%] w-full h-[695px] pt-[156px] p-[10px]">
            <div class="lg:w-[931px] md:w-[710px] h-[480px] mx-auto bg-white">
                <div class="lg:px-[40px] md:px-[20px] px-[10px] lg:py-[32px] md:py-[16px] py-[10px]">
                    <div class="">
                        <img src="../../assets/logo.svg" alt="fenghuang icon"
                            class="inline mr-[6px] w-[20px]" />
                        <h3 class="lg:text-[20px] md:text-[15px] text-[12px] leading-[23.8px] text-black font-bold lg:mr-[20px] md:mr-[15px] mr-[10px]
                            inline">
                            {{ $t("login.phoenixCommunity") }}
                        </h3>
                        <div class="bg-[#D9D9D9] lg:h-[12px] md:h-[6px] h-[6px] m-auto w-[1px] inline-block"></div>
                        <p class="lg:ml-[20px] md:ml-[15px] ml-[10px] text-[#333] lg:text-[16px] md:text-[12px] text-[10px] leading-[23.8px] font-medium
                            inline">{{ step == 4 ? $t("login.resetPassword") : $t("login.retrievePassword") }}</p>
                    </div>
                    <div class="lg:my-[50px] md:my-[35px] my-[20px] mx-auto">
                        <div v-if="step != 4" class="w-full py-6">
                            <div class="flex">
                                <div class="w-1/3">
                                    <div class="relative mb-2" @click="() => selectStep(1)">
                                        <div class="w-10 h-10 mx-auto gradient_div rounded-full text-lg text-white flex items-center">
                                            <span class="text-center text-white w-full">1</span>
                                        </div>
                                    </div>
                                    <div class="lg:text-[14px] md:text-[12px] text-[10px] text-center text-[#999] leading-[19.6px]">
                                        {{ $t("login.safetyVerification") }}
                                    </div>
                                </div>
                                <div class="w-1/3">
                                    <div class="relative mb-2" @click="() => selectStep(2)">
                                        <div class="absolute flex align-center items-center align-middle content-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
                                        <div class="w-full bg-[#C0C3CC] rounded items-center align-middle align-center flex-1">
                                            <div class="w-0 bg-[#F02148] py-1 rounded" :class="step == 1 ? 'w-[66%]' : 'w-[100%]'"></div>
                                        </div>
                                        </div>
                                        <div class="w-10 h-10 mx-auto rounded-full text-lg text-white flex items-center"
                                            :class="step != 1 ? 'gradient_div' : 'bg-[#C0C3CC]'">
                                            <span class="text-center text-white w-full">2</span>
                                        </div>
                                    </div>
                                    <div class="lg:text-[14px] md:text-[12px] text-[10px] text-center text-[#999] leading-[19.6px]">
                                        {{ $t("login.retrievePassword") }}
                                    </div>
                                </div>
                                <div class="w-1/3">
                                    <div class="relative mb-2" @click="() => selectStep(3)">
                                        <div class="absolute flex align-center items-center align-middle content-center" style="width: calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)">
                                            <div class="w-full bg-[#C0C3CC] rounded items-center align-middle align-center flex-1">
                                                <div class="w-0 py-1 rounded bg-[#F02148]" :class="step == 1 ? 'w-[0%]' : step == 2 ? 'w-[66%]' : 'w-[100%]'"></div>
                                            </div>
                                        </div>

                                        <div class="w-10 h-10 mx-auto bg-[#C0C3CC] rounded-full text-lg text-white flex items-center"
                                            :class="step == 3 ? 'gradient_div' : 'bg-[#C0C3CC]'">
                                            <span class="text-center text-white w-full">3</span>
                                        </div>                                        
                                    </div>
                                    <div class="lg:text-[14px] md:text-[12px] text-[10px] text-center text-[#999] leading-[19.6px]">
                                        {{ $t("login.successfulOperation") }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div v-if="step == 1">
                            <div class="lg:mt-[60px] md:mt-[40px] mt-[20px] lg:w-[450px] md:w-[350px] w-[300px] mx-auto">
                                <div class="inline-block mr-4">
                                    <label class="text-[#666] lg:text-[18px] md:text-[14px] text-[10px] leading-[23.8px] font-medium">
                                        {{ $t("login.account") }}
                                    </label>
                                </div>
                                <div class="lg:px-[20px] md:px-[15px] px-[10px] inline-block border border-[#D9D9D9]">
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
                                            <input type="text" :placeholder="$t('login.phoneNumber')" v-model="account"
                                                class="border-none text-[#666] lg:text-[14px] md:text-[12px] text-[10px]
                                                    lg:leading-[19.6px] md:leading-[14px] lg:p-[10px] md:p-[8px] p-1 px-[10px] w-full outline-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="lg:mt-[40px] md:mt-[30px] mt-[20px]">
                                <div class="lg:w-[300px] md:w-[250px] w-[200px] mx-auto">
                                    <button @click="setNewPassword"
                                        class="rounded-[48px] text-white bg-[#C7C9CC] w-full
                                            lg:text-[16px] md:text-[13px] text-[10px] py-[10px] text-center mx-auto">
                                            {{ $t("login.retrievePassword") }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div v-if="step == 2">
                            <div class="lg:mt-[40px] md:mt-[30px] mt-[20px] text-center hidden">
                                <h3 class="lg:text-[20px] md:text-[16px] text-[14px] leading-[28px] text-black font-medium mr-2">
                                    <i class="fa fa-check text-[#3DCC47] text-[24px]"></i>
                                    {{ $t("login.verifySuccesMsg") }}
                                </h3>
                                <p class="lg:mt-[25px] md:mt-[20px] mt-[15px] lg:text-[16px] md:text-[14px] text-[12px]
                                    leading-[24px] text-[#222]">
                                    {{ $t("login.verifySuccessContent1") }}<br/>
                                    {{ $t("login.verifySuccessContent2") }}<br/>
                                    {{ $t("login.verifySuccessContent3") }}<a class="text-[#0B57FC] ml-1">{{ $t("login.retry") }}</a>
                                </p>
                            </div>
                            <div class="lg:mt-[60px] md:mt-[40px] mt-[20px] lg:w-[400px] md:w-[300px] w-[250px] mx-auto">
                                <div class="lg:px-[20px] md:px-[15px] px-[10px] inline-block border border-[#D9D9D9] relative w-full rounded">
                                    <input type="text" :placeholder="$t('login.enterVerifyCode')" v-model="code"
                                        class="border-none text-[#666] lg:text-[14px] md:text-[12px] text-[10px]
                                            lg:leading-[19.6px] md:leading-[14px] lg:p-[10px] md:p-[8px] p-1 px-[10px] w-full outline-none" />
                                    <p class="absolute right-[20px] lg:top-[10px] md:top-[6px] top-[4px] lg:text-[14px] md:text-[12px] text-[10px] leading-[19.6px]
                                        text-[#F02148]">{{ $t('login.retryAgain') }}</p>
                                </div>
                                <div class="lg:mt-[40px] md:mt-[30px] mt-[20px]">
                                    <div class="lg:w-[300px] md:w-[250px] w-[200px] mx-auto">
                                        <button @click="setCode"
                                            class="rounded-[48px] text-white bg-[#C7C9CC] w-full
                                                lg:text-[16px] md:text-[13px] text-[10px] py-[10px] text-center mx-auto">
                                                {{ $t('login.next') }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="step == 3">
                            <div class="lg:mt-[20px] md:mt-[15px] mt-[10px] lg:w-[400px] md:w-[300px] w-[250px] mx-auto">
                                <div class="lg:px-[20px] md:px-[15px] px-[10px] inline-block border border-[#D9D9D9] relative w-full rounded">
                                    <input type="text" :placeholder="$t('login.enterPassword')" v-model="loginPassword"
                                        class="border-none text-[#666] lg:text-[14px] md:text-[12px] text-[10px]
                                            lg:leading-[19.6px] md:leading-[14px] lg:p-[10px] md:p-[8px] p-1 px-[10px] w-full outline-none" />
                                    <i class="fa fa-eye absolute right-[20px] top-[10px]
                                        lg:text-[14px] md:text-[12px] text-[10px] leading-[19.6px] text-[#000000e6]"></i>
                                </div>
                                <div class="lg:px-[20px] md:px-[15px] px-[10px] lg:mt-[20px] md:mt-[15px] mt-[10px] inline-block border border-[#D9D9D9] relative w-full rounded">
                                    <input type="text" :placeholder="$t('login.enterConfirmPassword')" v-model="confirmLoginPassword"
                                        class="border-none text-[#666] lg:text-[14px] md:text-[12px] text-[10px]
                                            lg:leading-[19.6px] md:leading-[14px] lg:p-[10px] md:p-[8px] p-1 px-[10px] w-full outline-none" />
                                    <i class="fa fa-eye absolute right-[20px] top-[10px]
                                        lg:text-[14px] md:text-[12px] text-[10px] leading-[19.6px] text-[#000000e6]"></i>
                                </div>
                                <div class="lg:mt-[40px] md:mt-[30px] mt-[20px]">
                                    <div class="lg:w-[300px] md:w-[250px] w-[200px] mx-auto">
                                        <button @click="setLoginPassword"
                                            class="rounded-[48px] text-white bg-[#C7C9CC] w-full
                                                lg:text-[16px] md:text-[13px] text-[10px] py-[10px] text-center mx-auto">
                                                {{ $t('login.next') }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="step == 4">
                            <div class="lg:mt-[60px] md:mt-[40px] mt-[20px]">
                                <img src="../../assets/chinese_pc/sign/reset_success_pc.svg" alt="reset success"
                                    class="mx-auto" />
                                <p class="lg:mt-[20px] md:mt-[15px] mt-[10px] lg:text-[18px] md:text-[15px] text-[12px]
                                    leading-[25.2px] text-[#333] font-bold text-center">
                                    {{ $t('login.resetPasswordSuccess') }}
                                </p>
                                <div class="lg:w-[300px] md:w-[250px] w-[200px] mx-auto lg:mt-[55px] md:mt-[40px] mt-[30px]">
                                    <button class="rounded-[48px] gradient_div text-white py-[10px]
                                        text-[16px] leading-[22.4px] text-center font-bold w-full">
                                        <a href="/login">{{ $t('login.toLogin') }}</a>
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
export default {
    name: 'ForgetPassword',
    data() {
        return {
            step: 1,
            account: "",
            code: "",
            loginPassword: "",
            confirmLoginPassword: "",
            phoneCountry: "",
        }
    },
    mounted() {
        window.scrollTo(0,0);
    },
    methods: {
        selectStep: function(step) {
            this.step = step;
        },
        setNewPassword: function() {
            this.step = 2;
        },
        setCode: function() {
            this.step = 3;
        },
        setLoginPassword: function() {
            this.step = 4;
        },
        getSelected: function(selected) {
            this.code = selected.dialCode;
        }
    }
}
</script>


<style>
.gradient_div {
    background: linear-gradient(to right, #F02148 8.34%, #FF5B21 100%);
}
</style>