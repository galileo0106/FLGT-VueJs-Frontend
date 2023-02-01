<script setup>
import { ref } from 'vue'
</script>

<template>
    <header class="sticky top-0 z-30 w-full px-2 bg-white shadow-xl">
        <div class="lg:flex md:flex flex-row lg:justify-between justify-center 2xl:px-[16%] xl:px-[12%] px-[2%] items-center h-[60px] lg:bg-white bg-white hidden">
            <div class="h-full">
                <div class="flex items-center lg:justify-center justify-start lg:w-fit w-full h-full">
                    <nav class="lg:flex md:flex hidden items-center h-full">
                        <router-link class="border-0 nav-link" to="/home">
                            <img src='../../assets/logo.svg' alt="logo" class=""/>
                        </router-link>
                        <ul class="flex flex-row h-full my-auto">
                            <li v-for="(item, index) in navbarList" :key="index" class="lg:px-7 md:px-3 link flex items-center">
                                <router-link class="nav-link" :active='$route.path.startsWith(item.path)'
                                    :class="$route.path.startsWith(item.path) ? 'router-link-active' : ''"
                                    :to="item.path" :id="item.path" @click="() => handleMenu(item.name)">
                                    {{ $t("menu." + item.name) }}
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="items-center lg:justify-center justify-end lg:w-fit md:w-1/4 w-full lg:flex md:flex hidden ">
                <a class="bg-gradient-to-r from-[#F02148] to-[#FC4E2B] h-6 text-white lg:px-[22px] md:px-2 rounded-[4px]"
                    href="/login" v-if="!this.loggedUser.accessToken">
                    {{ $t("menu.login") }}
                </a>
                <div class="px-3 dropdow-nmenu">
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdownInformation" v-if="this.loggedUser.accessToken"
                        class="text-white focus:outline-none text-center inline-flex items-center" type="button"
                        @click="() => { this.openLogDropdown = !this.openLogDropdown }">
                        <!-- <img :src="CONSTANT.API_URL + loggedUser.avatar" width="30" height="30" alt="avatar"
                            class="border border-[#7d7c7c] rounded-full mt-2" /> -->
                        <img src="../../assets/profile_icon.png" width="30" height="30" alt="avatar"
                            class="border border-[#7d7c7c] rounded-full mt-2" />
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdown" class="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-38"
                        :class="openLogDropdown ? 'block' : 'hidden'">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <p class="block px-4 py-2 cursor-pointer">
                                    {{ this.loggedUser.username }}
                                </p>
                            </li>
                        </ul>
                        <div class="py-2">
                            <p class="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                                @click="signout">
                                {{ $t("login.signout") }}
                            </p>
                        </div>
                    </div>
                </div>
                <LanguageSelect class="select"/>
            </div>
        </div>
    </header>
    <header class="sticky top-0 z-30 w-full shadow-xl lg:hidden md:hidden">
        <div class="flex flex-row relative justify-center items-center h-[44px] bg-[#170550] px-[5%] w-full">
            <div class="grid grid-cols-2">
                <div class="relative">
                    <img src="../../assets/logo.svg" alt="logo" class="h-[30px] w-[22.5px] absolute right-0" />
                </div>
                <div class="text-left py-1">
                    <span class="text-[18px] text-white px-3">
                        {{ selectedMenuName ? $t("menu." + selectedMenuName) : $t("menu.phoenix") }}
                    </span>
                </div>
                <div class="absolute right-0">
                    <div @click="() => toggleNav('')" class="flex md:hidden">
                        <button type="button" class="focus:outline-none mx-4 p-[5px]">
                            <div class="space-y-1.5">
                                <div class="w-8 h-[3px] bg-white"></div>
                                <div class="w-8 h-[3px] bg-white"></div>
                                <div class="w-8 h-[3px] bg-white"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <nav id="mobile-navigation" class="fixed top-[43px] right-0 bottom-0 left-0 backdrop-blur-sm z-10"
        v-if="showMenu">
        <ul class="absolute top-0 right-0 bottom-0 w-[240px] py-5 px-4 bg-[#252A3D]
                drop-shadow-2xl z-10 transition-all text-[#94A4BD] overflow-y-auto">
            <li class="border-b border-[#ffffff1a] pb-[20px]">
                <div class="flex justify-between">
                    <div v-if="loggedUser.accessToken">
                        <img alt="avatar" :src="loggedUser.avatar" class="w-[25px] h-[25px] inline-block" />
                        <span class="ml-1 text-[14px] leading-[22px]">
                            {{ loggedUser.username }}
                        </span>
                    </div>
                    <div v-else>
                        <i class="far fa-user-circle text-[25px]"></i>
                        <span class="ml-1 text-[14px] leading-[22px]">
                            {{ $t("menu.stranger") }}
                        </span>
                    </div>
                    <div v-if="loggedUser.accessToken">
                        <button class="text-white mobile_login_btn w-[50px] rounded text-[12px] leading-[16px] font-medium
                            p-1" @click="signout">
                            {{ $t("login.signout") }}
                        </button>
                    </div>
                    <div v-else>
                        <button class="text-white mobile_login_btn w-[76px] rounded text-[12px] leading-[16px] font-medium
                            py-1 px-2" @click="handleLoginPage">
                            {{ $t("menu.login") }}
                            {{ activeLanguage == 'en' ? '&' : '/' }}
                            {{ $t("menu.register") }}
                        </button>
                    </div>
                </div>
            </li>
            <li class="" v-for="(item, index) in navbarList" :key="index">
                <a :href="item.path" class="block p-3">
                    <span :class="$route.path.startsWith(item.path) ? 'text-white border-b border-white pb-1' : ''">
                        {{ $t("menu." + item.name) }}
                    </span>
                </a>
            </li>
            <li class="relative" @click="handleLanguage">
                <a href="#" class="block p-3">简体中文</a>
                <i class="fas fa-caret-down absolute right-[20px] top-[15px]"></i>
            </li>
            <li class="pl-2" v-if="showLangSelect" @click="() => selectLanguage('zh')">
                <a href="#" class="block p-3">
                    <span :class="activeLanguage == 'zh' ? 'text-white border-b border-white pb-1' : ''">
                        简体中文
                    </span>
                </a>
            </li>
            <li class="pl-2" v-if="showLangSelect" @click="() => selectLanguage('en')">
                <a href="#" class="block p-3">
                    <span :class="activeLanguage == 'en' ? 'text-white border-b border-white pb-1' : ''">
                        English
                    </span>
                </a>
            </li>
        </ul>

        <!-- Close Button -->
        <button class="absolute top-0 right-0 bottom-0 left-0 text-white" @click="toggleNav">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute top-2 left-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </nav>
    <div v-if="showLoginPage"
        class="lg:hidden md:hidden fixed bottom-0 h-[390px] rounded-t-[8px] bg-white w-full backdrop-blur-sm z-10">
        <div class="relative">
            <button class="absolute right-[23px] top-[17px] text-[#333] text-[10px]" @click="handleLoginPage">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-[10px] w-[10px] absolute" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <h3 class="text-[18px] text-[#333] leading-[23.8px] font-bold text-center mt-[27px]">
            {{ $t("login.mobileLoginTitle") }}
        </h3>
        <div class="login-form px-[38px]" v-if="!openRegister">
            <div class="mt-[40px]">
                <input type="text" :placeholder="$t('login.enterPhoneNum')" v-model="loginParams.phoneNumber"
                    class="border-none text-[#999] text-[16px] leading-[22.4px] py-[9px]
                        w-full outline-none" />
            </div>
            <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
            <div class="mt-[15px] relative">
                <input type="text" :placeholder="$t('login.enterPwd')" v-model="loginParams.password"
                    v-if="loginParams.showPassword"
                    class="border-none text-[#999] text-[16px] leading-[22.4px] py-2 w-full outline-none" />
                <input type="password" :placeholder="$t('login.enterPwd')" v-model="loginParams.password"
                    v-else
                    class="border-none text-[#999] text-[16px] leading-[22.4px] py-2 w-full outline-none" />
                <div class="absolute right-0 top-[10px] text-[#666] cursor-pointer text-[16px] leading-[22.4px]"
                    @click="() => { this.loginParams.showPassword = !this.loginParams.showPassword }" 
                    v-if="loginParams.showPassword">
                    <i class="fa fa-eye"></i>
                </div>
                <div class="absolute right-0 top-[10px] text-[#666] cursor-pointer text-[16px] leading-[22.4px]"
                    @click="() => { this.loginParams.showPassword = !this.loginParams.showPassword }" v-else>
                    <i class="fa fa-eye-slash"></i>
                </div>
            </div>
            <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
            <div class="pt-2 text-[#F02148] text-[14px] text-left">
                {{ loginParams.errorMsg }}
            </div>
            <div class="mt-[15px]">
                <p class="text-[#333] text-[14px] leading-[15.24px] cursor-pointer" 
                    @click="() => { this.openRegister = !this.openRegister }">
                    {{ $t("login.registerAccount") }}
                </p>
            </div>
            <div class="mt-[30px] flex flex-row" @click="() => { this.loginParams.checkAgree = !this.loginParams.checkAgree }">
                <p v-if="!loginParams.checkAgree" class="border rounded-full text-[#999] w-[18px] h-[18px] mr-2"></p>
                <img v-if="loginParams.checkAgree" src="../../assets/chinese_mobile/checkbox_input.svg" alt="checkbox"
                    class="mr-2 w-[18px] h-[18px]" />
                <label class="text-[13px] leading-[20px] text-[#333]">
                    {{ $t('login.mobileAgreeText') }}
                    <a class="text-[#0057FF]">{{ $t('login.userAgree') }}</a>{{ $t('login.agreeAndText') }}
                    <a class="text-[#0057FF]">{{ $t('login.privacyAgree') }}</a></label>
            </div>
            <div class="mt-[40px]">
                <button class="w-full rounded-[48px] login-btn text-white py-[10px]
                    text-[16px] leading-[22.4px] text-center font-bold"
                    :class="loginParams.checkAgree ? 'opacity-100' : 'opacity-50'"
                    :disabled="!loginParams.checkAgree ? true : false"
                    @click="signin">{{ $t('login.login') }}</button>
            </div>
        </div>
        <div class="register-form px-[38px]" v-if="openRegister">
            <div class="mt-[10px]">
                <input type="text" :placeholder="$t('login.enterPhoneNum')" v-model="registerParams.username"
                    class="border-none text-[#999] text-[16px] leading-[22.4px] py-[9px]
                        w-full outline-none" />
            </div>
            <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
            <div class="mt-2 relative">
                <input type="text" :placeholder="$t('login.enterPwd')" v-model="registerParams.password"
                    v-if="registerParams.showPassword"
                    class="border-none text-[#999] text-[16px] leading-[22.4px] py-2 w-full outline-none" />
                <input type="password" :placeholder="$t('login.enterPwd')" v-model="registerParams.password"
                    v-else
                    class="border-none text-[#999] text-[16px] leading-[22.4px] py-2 w-full outline-none" />
                <div class="absolute right-0 top-[10px] text-[#666] cursor-pointer text-[16px] leading-[22.4px]"
                    @click="() => { this.registerParams.showPassword = !this.registerParams.showPassword }" 
                    v-if="registerParams.showPassword">
                    <i class="fa fa-eye"></i>
                </div>
                <div class="absolute right-0 top-[10px] text-[#666] cursor-pointer text-[16px] leading-[22.4px]"
                    @click="() => { this.registerParams.showPassword = !this.registerParams.showPassword }" v-else>
                    <i class="fa fa-eye-slash"></i>
                </div>
            </div>
            <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
            <div class="mt-2">
                <input type="text" :placeholder="$t('login.enterReferrer')" v-model="registerParams.referrer"
                    class="border-none text-[#999] text-[16px] leading-[22.4px] py-[9px]
                        w-full outline-none" />
            </div>
            <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
            <div class="mt-2 relative">
                <input type="text" :placeholder="$t('login.enterReferrer')" v-model="registerParams.code"
                    class="border-none text-[#999] text-[16px] leading-[22.4px] py-[9px]
                        w-full outline-none" />
                <p class="absolute right-0 top-[10px] text-[#666] cursor-pointer
                    lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[14px]"
                    @click="getVerifyCode">
                    {{ $t("login.getVerificationCode") }}
                </p>
            </div>
            <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
            <div class="mt-1 grid grid-cols-2">
                <div class="text-left">
                    <div class="pt-2 text-[#F02148] text-[14px] text-left">
                        {{ this.registerParams.errorMsg == "enterPhoneNumber" ? $t("login.phoneNumber") : this.registerParams.errorMsg }}
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-[#333] text-[14px] leading-[15.24px] pt-2 cursor-pointer" 
                        @click="() => { this.openRegister = !this.openRegister }">
                        {{ $t("login.loginNow") }}
                    </p>
                </div>
            </div>
            <div class="mt-[15px] flex flex-row" 
                @click="() => { this.registerParams.checkAgree = !this.registerParams.checkAgree }">
                <p v-if="!registerParams.checkAgree" class="border rounded-full text-[#999] w-[18px] h-[18px] mr-2"></p>
                <img v-if="registerParams.checkAgree" src="../../assets/chinese_mobile/checkbox_input.svg" alt="checkbox"
                    class="mr-2 w-[18px] h-[18px]" />
                <label class="text-[13px] leading-[20px] text-[#333]">
                    {{ $t('login.mobileAgreeText') }}
                    <a class="text-[#0057FF]">{{ $t('login.userAgree') }}</a>{{ $t('login.agreeAndText') }}
                    <a class="text-[#0057FF]">{{ $t('login.privacyAgree') }}</a></label>
            </div>
            <div class="mt-[15px]">
                <button class="w-full rounded-[48px] login-btn text-white py-[10px]
                    text-[16px] leading-[22.4px] text-center font-bold"
                    :class="registerParams.checkAgree ? 'opacity-100' : 'opacity-50'"
                    :disabled="!registerParams.checkAgree ? true : false"
                    @click="register">{{ $t('login.login') }}</button>
            </div>
        </div>
    </div>
    <div v-if="isLogin">
        <div class="bg-[#000000cc] w-[96px] h-[86px] py-[16px] text-center
                absolute top-[40%] left-[40%] rounded z-10 fade">
            <i class="fa fa-check-circle text-white text-[24px]"></i>
            <p class="text-[16px] leading-[22px] text-white mt-2">{{ $t("login.loginSuccess") }}</p>
        </div>
    </div>
    <div v-if="isRegister">
        <div class="bg-[#000000cc] w-[96px] h-[86px] py-[16px] text-center
                absolute top-[40%] left-[40%] rounded z-10 fade">
            <i class="fa fa-check-circle text-white text-[24px]"></i>
            <p class="text-[16px] leading-[22px] text-white mt-2">{{ $t("login.registerSuccess") }}</p>
        </div>
    </div>

    <a @click="scrollTop" v-show="visible"
        class="fixed z-[1000] bottom-8 right-8 border-0 w-8 h-8 rounded-full
            drop-shadow-md login-btn text-white text-2xl font-bold text-center lg:block md:block hidden">
        <i class="fas fa-angle-up"></i>
    </a>
</template>

<script>
import { ref } from 'vue'

import LanguageSelect from "../Common/LanguageSelect.vue";
import en from '../../assets/lang/en.json';
import zh from '../../assets/lang/zh.json';
const navbarList = ref([
    {
        title: '首页',
        href: '#',
        path: '/home',
        name: 'home',
    },
    {
        title: '下载',
        href: '#',
        path: '/download',
        name: 'download',
    },
    {
        title: '电影',
        href: '#',
        path: '/movie',
        name: 'movie',
    },
    {
        title: '挖矿',
        href: '#',
        path: '/mining',
        name: 'mining',
    },
    {
        title: '团队',
        href: '#',
        path: '/team',
        name: 'team',
    },
    {
        title: '博客',
        href: '#',
        path: '/blog',
        name: 'blog',
    },
    {
        title: '白皮书',
        href: '#',
        path: '/whitePaper',
        name: 'whitePaper',
    },
    {
        title: '帮助',
        href: '#',
        path: '/help',
        name: 'help',
    },
]);

export default {
    components: {
        LanguageSelect
    },
    data() {
        var list = navbarList._rawValue;
        var menuName = list.filter(item => window.location.pathname.startsWith(item.path)).length > 0 ?
                    list.filter(item => window.location.pathname.startsWith(item.path))[0].name : "";
        return {
            showMenu: false,
            showLoginPage: false,
            selectedMenuName: menuName,
            loginParams: {
                phoneNumber: "",
                password: "",
                errorMsg: "",
                showPassword: false,
                checkAgree: false,
            },
            registerParams: {
                username: "",
                password: "",
                referrer: "",
                code: "",
                showPassword: false,
                checkAgree: false,
                errorMsg: ""
            },
            isLogin: false,
            isRegister: false,
            showLangSelect: false,
            language: localStorage.getItem('lang'),
            activeLanguage: this.$i18n.locale,
            visible: false,
            loggedUser: {
                accessToken: localStorage.getItem("token"),
                username: localStorage.getItem("username"),
                avatar: localStorage.getItem("avatar"),
            },
            openLogDropdown: false,
            openRegister: false,
        };
    },
    methods: {
        toggleNav: function () {
            this.showMenu = !this.showMenu;
        },
        handleLoginPage: function() {
            this.showMenu = false;
            this.showLoginPage = !this.showLoginPage;
        },
        signin: function() {
            var params = {
                username: this.loginParams.phoneNumber,
                password: this.loginParams.password
            }
            this.axios.post("http://10.10.10.29:8000/v1/user/login", params).then((res) => {
                if(res.data.error) {
                    this.loginParams.errorMsg = res.data.error;
                } else {
                    localStorage.setItem("token", res.data.data.auth.access_token);
                    localStorage.setItem("username", res.data.data.user.username);
                    localStorage.setItem("avatar", res.data.data.user.avatar);

                    this.loggedUser = {
                        accessToken: res.data.data.auth.access_token,
                        username: res.data.data.user.username,
                        avatar: res.data.data.user.avatar,
                    },
                    this.showLoginPage = !this.showLoginPage;
                    this.isLogin = true;
                    setTimeout(() => this.isLogin = false, 5000);
                }
            });
        },
        handleLanguage: function() {
            this.showLangSelect = !this.showLangSelect;
        },
        selectLanguage: function(lang) {
            this.activeLanguage = lang; // update CSS class in selector
            this.$i18n.locale = lang;
            this.$i18n.setLocaleMessage(lang, lang == "en" ? en : lang == "zh" ? zh : null);
            // persist selected language
            localStorage.setItem("lang", lang);
            window.location.reload();
        },
        scrollTop: function () {
            this.intervalId = setInterval(() => {
                if (window.pageYOffset === 0) {
                clearInterval(this.intervalId)
                }
                window.scroll(0, window.pageYOffset - 100)
            }, 20)
        },
        scrollListener: function (e) {
            this.visible = window.scrollY > 150
        },
        handleMenu: function(name) {
            this.selectedMenuName = name;
        },
        getVerifyCode: function() {
            var username = this.registerParams.username;
            if(username !== "") {
                var param = {
                    tel: username,
                }
                this.axios.post("http://10.10.10.29:8000/v1/user/sms", param).then((res) => {
                    if(res.data.error) {
                        this.registerParams.errorMsg = res.data.error;
                    }
                });
            } else {
                this.registerParams.errorMsg = "enterPhoneNumber"
            }
        },
        register: function() {
            var params = {
                username: this.registerParams.username,
                password: this.registerParams.password,
                referrer: this.registerParams.referrer,
                code: this.registerParams.code,
            }
            this.axios.post("http://10.10.10.29:8000/v1/user/tel-register", params).then((res) => {
                if(res.data.message == "success") {
                    this.openRegister = false;
                    this.isRegister = true;
                    setTimeout(() => this.isRegister = false, 3000);
                    this.registerParams = {
                        username: "",
                        password: "",
                        referrer: "",
                        code: "",
                        showPassword: false,
                        checkAgree: false,
                        errorMsg: ""
                    }
                } else {
                    this.registerParams.errorMsg = res.data.error;
                }
            });
        },
        signout: function() {
            this.loggedUser = {};
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.removeItem("avatar");
            this.openLogDropdown = false;
            window.location.href = "/";
        },
        close (e) {
            if(e.target.parentNode != null && e.target.parentNode.parentNode != null) {
                if(!e.target.parentNode.parentNode.classList.contains('dropdow-nmenu')) {
                    this.openLogDropdown = false;
                }
            }
        }
    },
    mounted: function () {
        window.addEventListener('scroll', this.scrollListener)
        document.addEventListener('click', this.close)
    },
    beforeDestroy: function () {
        window.removeEventListener('scroll', this.scrollListener)
        document.removeEventListener('click',this.close)
    },
    computed: {
        selectedMenu() {
            var list = navbarList._rawValue;
            return list.filter(item => window.location.pathname.startsWith(item.path)).length > 0 ?
                    list.filter(item => window.location.pathname.startsWith(item.path))[0].name : "";
        }
    }
  };
</script>

<style scoped>
.link:hover {
    background: rgba(246, 96, 47, 0.1);
}
.router-link-active {
    color: #F02148 !important;
    display: inline-block;
    border-bottom: 1px solid #F02148;
    padding-bottom: 2px;
}
.border-0 {
    border-width: 0px !important;
}

.mobile_login_btn {
    background: linear-gradient(to right, #3D1C82 0%, #F4027A 100%);
}
.login-btn {
    background: linear-gradient(to right, #F02148 8.34%, #FF5B21 100%);
}

.check-icon {
    background: -webkit-linear-gradient(to right, #F02148 8.34%, #FF5B21 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
