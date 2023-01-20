<script setup>
import { ref } from 'vue'
</script>

<template>
    <div class="lg:flex md:flex flex-row lg:justify-between justify-center 2xl:px-[16%] xl:px-[12%] px-[2%] items-center h-[60px] lg:bg-white bg-white hidden">
        <div class="h-full">
            <div class="flex items-center lg:justify-center justify-start lg:w-fit w-full h-full">
                <nav class="lg:flex md:flex hidden items-center h-full">
                    <router-link class="border-0 nav-link" to="/home">
                        <img src='../../assets/logo.svg' alt="logo" class="px-7"/>
                    </router-link>     
                    <ul class="flex flex-row h-full my-auto">
                        <li v-for="(item, index) in navbarList" :key="index" class="lg:px-7 md:px-3 link flex items-center">
                            <router-link class="nav-link" :active='$route.name ==item.name'
                                :to="item.path" :id="item.path">{{ item.title }}</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="items-center lg:justify-center justify-end lg:w-fit md:w-1/4 w-full lg:flex md:flex hidden ">
            <a class="bg-gradient-to-r from-[#F02148] to-[#FC4E2B] h-6 text-white px-[22px] rounded-[4px]"
                href="/login">
                登录
            </a>
            <button></button>
            <LanguageSelect :options="['中文', 'English']" :default="'中文'" class="select"/>
        </div>
    </div>
    <div class="lg:hidden md:hidden flex flex-row relative justify-center items-center h-[44px] bg-[#170550] px-[5%]">
        <div class="grid grid-cols-2">
            <div class="relative">
                <img src="../../assets/logo.svg" alt="logo" class="h-[30px] w-[22.5px] absolute right-0" />
            </div>
            <div class="text-left py-1">
                <span class="text-[18px] text-white px-3">
                    {{ selectedMenuName }}
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

    <nav id="mobile-navigation" class="fixed top-0 right-0 bottom-0 left-0 backdrop-blur-sm z-10"
        v-if="showMenu">
        <ul class="absolute top-0 right-0 bottom-0 w-[240px] py-5 px-4 bg-[#252A3D] 
                drop-shadow-2xl z-10 transition-all text-[#94A4BD]">
            <li class="border-b border-[#ffffff1a] pb-[20px]">
                <div class="flex justify-between">
                    <div>
                        <i class="far fa-user-circle text-[25px]"></i>
                        <span class="ml-1 text-[14px] leading-[22px]">陌生人</span> 
                    </div>
                    <div>
                        <button class="text-white mobile_login_btn w-[76px] rounded text-[12px] leading-[16px] font-medium
                            py-1 px-[11px]" @click="handleLoginPage">
                            登录/注册
                        </button>
                    </div>
                </div>
            </li>
            <li class="">
                <a href="#" class="block p-4">下载APP</a>
            </li>
            <li class="">
                <a href="#" class="block p-4">消息</a>
            </li>
            <li class="">
                <a href="#" class="block p-4">白皮书</a>
            </li>
            <li class="">
                <a href="#" class="block p-4">帮助</a>
            </li>
            <li class="">
                <a href="#" class="block p-4">简体中文</a>
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
        class="lg:hidden md:hidden fixed bottom-0 h-[370px] rounded-t-[8px] bg-white w-full backdrop-blur-sm z-10">
        <div class="relative">
            <button class="absolute right-[23px] top-[17px] text-[#333] text-[10px]" @click="handleLoginPage">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-[10px] w-[10px] absolute" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <h3 class="text-[18px] text-[#333] leading-[23.8px] font-bold text-center mt-[27px]">登录注册获得更多精彩</h3>
        <div class="login-form px-[38px]">
            <div class="flex flex-row mt-[40px]">
                <div>
                    <p class="bg-transparent text-[#333] text-[14px] text-bold leading-[19.6px]
                            py-[10px] outline-none" @click="() => { this.showCountryList = !this.showCountryList }">
                        {{ selectedCountry }}
                        <i class="fa fa-angle-down ml-3 text-[#666] text-[8px]"></i>
                    </p>
                </div>
                <div class="w-[2px] h-[20px] bg-[#D9D9D9] mx-4 my-auto"></div>
                <div>
                    <input type="text" placeholder="请输入手机号" v-model="phoneNumber"
                        class="border-none text-[#999] text-[16px] leading-[22.4px] py-[9px]
                            w-full outline-none" />
                </div>
            </div>
            <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
            <div class="mt-[15px] relative">
                <input type="text" placeholder="请输入验证码" v-model="verifyCode"
                    class="border-none text-[#999] text-[16px] leading-[22.4px] py-2 w-full outline-none" />
                <a class="absolute right-0 top-[10px] text-[#F02148] text-[16px] leading-[22.4px]">获取验证码</a>
            </div>
            <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
            <div class="mt-[30px] text-left">
                <input type="radio" class="mr-1" />
                <label class="text-[14px] leading-[20px] text-[#333]">
                    已阅读并同意
                    <a class="text-[#0057FF]">《用户协议》</a>和
                    <a class="text-[#0057FF]">《隐私政策》</a></label>
            </div>
            <div class="mt-[40px]">
                <button class="w-full rounded-[48px] login-btn text-white py-[10px]
                    text-[16px] leading-[22.4px] text-center font-bold"
                    :class="(verifyCode != '' && phoneNumber != '') ? 'opacity-100' : 'opacity-50'"
                    @click="signin">登录</button>
            </div>
        </div>
    </div>
    <div v-if="isLogin">
        <div class="bg-[#000000cc] w-[96px] h-[86px] py-[16px] text-center 
                absolute top-[40%] left-[40%] rounded z-10 fade">
            <i class="fa fa-check-circle text-white text-[24px]"></i>
            <p class="text-[16px] leading-[22px] text-white mt-2">登录成功</p>
        </div>
    </div>
    <div class="bg-white h-screen z-[20] relative overflow-y-auto lg:hidden md:hidden " v-if="showCountryList">
        <div v-for="country in countryList" :key="country.id" @click="() => handleCountry(country.value)"
            class="flex flex-row justify-between border-b border-[#E5E6EB] ml-4">
            <p class="text-left text-[#333] text-[16px] leading-[22px] py-4">{{ country.name }}</p>
            <p class="text-right text-[#333] text-[14px] leading-[20px] py-[17px] pr-4">{{ country.value }}</p>
        </div>
    </div>
    <!-- <div class="bg-[#170550] fixed z-[10] w-full">
        <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col lg:hidden md:hidden">
            <li v-for="(item, index) in navbarList" :key="index" class="px-5 py-3 text-white hover:bg-[#948fa380]">
                <router-link class="nav-link" :active='$route.name ==item.name' @click="() => toggleNav(item.path)"
                    :to="item.path" :id="item.path">{{ item.title }}</router-link>
            </li>
        </ul>
    </div> -->
</template>

<script>
import LanguageSelect from "../Common/LanguageSelect.vue";
const navbarList = ref([
    {
        title: '首页',
        href: '#',
        path: '/home',
        name: '',
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
        name: '',
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
        var menuName = list.filter(item => window.location.pathname.includes(item.path)).length > 0 ? 
                    list.filter(item => window.location.pathname.includes(item.path))[0].title : "";
        return {
            showMenu: false,
            showLoginPage: false,
            selectedMenuName: menuName,
            showCountryList: false,
            selectedCountry: "+86",
            countryList: [
                { id: 1, name: "中国大陆", value: "+86" },
                { id: 2, name: "中国台湾", value: "+886" },
                { id: 3, name: "中国香港", value: "+852" },
                { id: 4, name: "中国澳门", value: "+853" },
                { id: 5, name: "美国", value: "+1" },
                { id: 6, name: "英国", value: "+44" },
                { id: 7, name: "比利时", value: "+32" },
                { id: 8, name: "澳大利亚", value: "+61" },
                { id: 9, name: "法国", value: "+33" },
                { id: 10, name: "日本", value: "+81" },
                { id: 11, name: "韩国", value: "+82" },
                { id: 12, name: "新加坡", value: "+65" },
                { id: 13, name: "泰国", value: "+66" },
                { id: 14, name: "中国台湾", value: "+886" },
            ],
            phoneNumber: "",
            verifyCode: "",
            isLogin: false,
        };
    },
    methods: {
        toggleNav: function (path) {
            this.showMenu = !this.showMenu;
            var list = navbarList._rawValue;
            var selectedMenuName = list.filter(item => item.path == path).length > 0 ? 
                    list.filter(item => item.path == path)[0].title : this.selectedMenuName;
            this.selectedMenuName = selectedMenuName;
        },
        handleLoginPage: function() {
            this.showMenu = false;
            this.showLoginPage = !this.showLoginPage;
        },
        signin: function() {
            this.showLoginPage = !this.showLoginPage;
            this.isLogin = true;
            setTimeout(() => this.isLogin = false, 5000);
        },
        handleCountry: function(value) {
            this.selectedCountry = value;
            this.showCountryList = !this.showCountryList;
        }
    },
    computed: {
        selectedMenu() {
            var list = navbarList._rawValue;
            return list.filter(item => item.path == window.location.pathname).length > 0 ? 
                    list.filter(item => item.path == window.location.pathname)[0].title : "";
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
</style>
