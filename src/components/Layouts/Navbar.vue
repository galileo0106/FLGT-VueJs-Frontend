<script setup>
import { ref } from 'vue'
</script>

<template>
    <div class="lg:flex md:flex flex-row lg:justify-between justify-center 2xl:px-[16%] xl:px-[12%] px-[2%] items-center h-[60px] lg:bg-white bg-white hidden">
        <div class="h-full">
            <div class="flex items-center lg:justify-center justify-start lg:w-fit w-full h-full">
                <nav class="lg:flex md:flex hidden items-center h-full">
                    <router-link class="border-0 nav-link" to="/">
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
            <button class="bg-gradient-to-r from-[#F02148] to-[#FC4E2B] h-6 text-white px-[22px] rounded-[4px]">登录</button>
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
        <!-- <div class="flex flex-row justify-between items-center">
            <div class="grid grid-cols-5 gap-4">
                <div class="lg:hidden md:hidden col-span-4 text-center">
                    <div class="grid grid-cols-2">
                        <div class="relative">
                            <img src="../../assets/logo.svg" alt="logo" class="h-[30px] w-[22.5px] absolute right-0" />
                        </div>
                        <div class="text-left py-1">
                            <span class="text-[18px] text-white px-3">首页</span>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="flex items-right my-1 text-right">
                        <div @click="toggleNav" class="flex md:hidden">
                            <button type="button" class="focus:outline-none mx-4 py-1">
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
        </div> -->
    </div>
    <div class="bg-[#170550] fixed z-[10] w-full top-[7%]">
        <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col lg:hidden md:hidden">
            <li v-for="(item, index) in navbarList" :key="index" class="px-5 py-3 text-white hover:bg-[#948fa380]">
                <router-link class="nav-link" :active='$route.name ==item.name' @click="() => toggleNav(item.path)"
                    :to="item.path" :id="item.path">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import LanguageSelect from "../Common/LanguageSelect.vue";
const navbarList = ref([
    {
        title: '首页',
        href: '#',
        path: '/',
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
        return {
            showMenu: false,
            selectedMenuName: list.filter(item => item.path == window.location.pathname) ? 
                    list.filter(item => item.path == window.location.pathname)[0].title : "",
        };
    },
    methods: {
        toggleNav: function (path) {
            this.showMenu = !this.showMenu;
            var list = navbarList._rawValue;
            var selectedMenuName = list.filter(item => item.path == path).length > 0 ? 
                    list.filter(item => item.path == path)[0].title : this.selectedMenuName;
            this.selectedMenuName = selectedMenuName;
        }
    },
    computed: {
        selectedMenu() {
            var list = navbarList._rawValue;
            return list.filter(item => item.path == window.location.pathname) ? 
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
</style>
