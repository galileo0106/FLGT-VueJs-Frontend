<script setup>
import 'vue3-carousel/dist/carousel.css'
import MovieCarouselItem from '../views/movie/MovieCarouselItem.vue';

const movieSlides = [
    {slide: MovieCarouselItem, id: "1"}, 
    {slide: MovieCarouselItem, id: "2"}, 
    {slide: MovieCarouselItem, id: "3"}
];

const shortcutKeywords = [
    {id: 1, value: "漫威"},
    {id: 2, value: "哈利波特"},
    {id: 3, value: "周星驰"},
    {id: 4, value: "生化危机"},
    {id: 5, value: "加勒比海盗"},
    {id: 6, value: "奥斯卡"},
    {id: 7, value: "爱情"},
];

const recommendList = [
    {
        id: 1, 
        title: "牧野诡事之卸岭力士", 
        description: "陈晟自6岁父亲去世后就被寄养在赵大宝家中，多年来一直对自己的身世存疑。",
        img_pc: "/src/assets/chinese_pc/movie/recommend_movie1_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie1_pc.svg",
        score: 9.7,
    },
    {
        id: 2, 
        title: "侏罗纪世界3", 
        description: "南方巨龙兽与霸王龙，谁是战力天花板？",
        img_pc: "/src/assets/chinese_pc/movie/recommend_movie2_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie2_pc.svg",
        score: 9.7,
    },
    {
        id: 3, 
        title: "阿凡达：水之道", 
        description: "苏里一家为了存活，保护彼此而努力奋战，",
        img_pc: "/src/assets/chinese_pc/movie/recommend_movie3_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie3_pc.svg",
        score: 9.7,
    },
    {
        id: 4, 
        title: "狄仁杰之通天神教", 
        description: "邪教环境花噬少女成悬案",
        img_pc: "/src/assets/chinese_pc/movie/recommend_movie4_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie4_pc.svg",
        score: 9.7,
    },
    {
        id: 5, 
        title: "棺山古墓", 
        description: "元彪惊险摸金",
        img_pc: "/src/assets/chinese_pc/movie/recommend_movie5_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie5_pc.svg",
        score: 9.7,
    },
    {
        id: 6, 
        title: "福尔摩斯小姐", 
        description: "伦敦厄运，刺激来袭！",
        img_pc: "/src/assets/chinese_pc/movie/recommend_movie6_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie6_pc.svg",
        score: 9.7,
    },
    {
        id: 7, 
        title: "疾速逃生", 
        description: "毒气突袭小城，众人绝命逃生",
        img_pc: "/src/assets/chinese_pc/movie/recommend_movie7_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie7_pc.svg",
        score: 9.7,
    },
    {
        id: 8, 
        title: "星际迷航", 
        description: "超越星辰发现新的文明，勇敢地涉足前人未至之地",
        img_pc: "/src/assets/chinese_pc/movie/recommend_movie8_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie8_pc.svg",
        score: 9.7,
    },
];

const mobileMovieList = [
    {
        id: 1, 
        title: "敦刻尔克",
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie1_mobile.svg",
    },
    {
        id: 2, 
        title: "黄飞鸿之英雄有梦", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie2_mobile.svg",
    },
    {
        id: 3, 
        title: "至暗时刻", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie3_mobile.svg",
    },
    {
        id: 4, 
        title: "中国合伙人", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie4_mobile.svg",
    },
    {
        id: 5, 
        title: "我不是药神", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie5_mobile.svg",
    },
    {
        id: 6, 
        title: "决战黄金岛", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie6_mobile.svg",
    },
    {
        id: 7, 
        title: "影", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie7_mobile.svg",
    },
    {
        id: 8, 
        title: "猎杀T34", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie8_mobile.svg",
    },
    {
        id: 9, 
        title: "敦刻尔克",
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie1_mobile.svg",
    },
    {
        id: 10, 
        title: "黄飞鸿之英雄有梦", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie2_mobile.svg",
    },
    {
        id: 11, 
        title: "至暗时刻", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie3_mobile.svg",
    },
    {
        id: 12, 
        title: "中国合伙人", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie4_mobile.svg",
    },
    {
        id: 13, 
        title: "我不是药神", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie5_mobile.svg",
    },
    {
        id: 14, 
        title: "决战黄金岛", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie6_mobile.svg",
    },
    {
        id: 15, 
        title: "影", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie7_mobile.svg",
    },
    {
        id: 16, 
        title: "猎杀T34", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie8_mobile.svg",
    },
    {
        id: 17, 
        title: "敦刻尔克",
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie1_mobile.svg",
    },
    {
        id: 18, 
        title: "黄飞鸿之英雄有梦", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie2_mobile.svg",
    },
    {
        id: 19, 
        title: "至暗时刻", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie3_mobile.svg",
    },
    {
        id: 20, 
        title: "中国合伙人", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie4_mobile.svg",
    },
    {
        id: 21, 
        title: "我不是药神", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie5_mobile.svg",
    },
    {
        id: 22, 
        title: "决战黄金岛", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie6_mobile.svg",
    },
    {
        id: 23, 
        title: "影", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie7_mobile.svg",
    },
    {
        id: 24, 
        title: "猎杀T34", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie8_mobile.svg",
    },
    {
        id: 25, 
        title: "敦刻尔克",
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie1_mobile.svg",
    },
    {
        id: 26, 
        title: "黄飞鸿之英雄有梦", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie2_mobile.svg",
    },
    {
        id: 27, 
        title: "至暗时刻", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie3_mobile.svg",
    },
    {
        id: 28, 
        title: "中国合伙人", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie4_mobile.svg",
    },
    {
        id: 29, 
        title: "我不是药神", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie5_mobile.svg",
    },
    {
        id: 30, 
        title: "决战黄金岛", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie6_mobile.svg",
    },
    {
        id: 31, 
        title: "影", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie7_mobile.svg",
    },
    {
        id: 32, 
        title: "猎杀T34", 
        img_mobile: "/src/assets/chinese_mobile/movie/recommend_movie8_mobile.svg",
    },
];
</script>

<template>
  <div class="w-full font-normal_font">
    <div v-if="!showSearchGroup">
        <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="3000999">
            <Slide v-for="item in movieSlides" :key="item.id">
                <component :is="item.slide" :key="item.id"></component>
            </Slide>
            <template #addons>
                <Navigation class="text-white"/>
            </template>
        </Carousel>
    </div>
    <div class="lg:bg-movie_bg_pc md:bg-movie_bg_pc bg-movie_bg_mobile h-full lg:pb-[60px] md:pb-[40px] pb-[20px]">
        <div class="lg:w-[1024px] md:w-[760px] w-full mx-auto lg:px-[10px] md:px-[10px] px-[28px]">
            <SearchGroup :showSearchGroup="showSearchGroup" />
            <!-- start search & shortcut buttons -->
            <div class="lg:pt-[30px] md:pt-[25px] pt-[20px]">
                <div class="lg:grid md:grid grid-cols-10 hidden">
                    <div class="col-span-6 overflow-hidden">
                        <div class="grid grid-cols-7">
                            <div v-for="item in shortcutKeywords" :key="item.id"
                                class="mr-[10px]">
                                <button class="text-[14px] lg:leading-[24px] md:leading-[23px] leading-[22px] 
                                    py-[6px] px-[16px]
                                    lg:text-[#ffffffbf] md:text-[#ffffffbf] text-white text-center truncate
                                    bg-[#ffffff1a] rounded-[4px] w-full" :title="item.value">
                                    {{ item.value }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-3 px-[20px]">
                        <div class="relative">
                            <input class="border-[#D1D5DB] border rounded-[6px] bg-transparent text-[#ffffff80]
                                px-[10px] py-[6px] text-[16px] leading-[24px] w-full" placeholder="唐朝诡事录" />
                            <i class="fa-solid fa-magnifying-glass text-[#ffffff80] absolute right-[10px] top-[10px]"></i>
                        </div>
                    </div>
                    <div class="col-span-1">
                        <button class="text-[14px] lg:leading-[24px] md:leading-[23px] leading-[22px] py-[6px] px-[16px]
                                lg:text-[#ffffffbf] md:text-[#ffffffbf] text-white text-center truncate
                                bg-[#ffffff1a] rounded-[4px] w-full" @click="toggleBtn">
                                筛选
                        </button>
                    </div>
                </div>
                <div class="lg:hidden md:hidden grid grid-cols-1">
                    <div class="grid grid-cols-4 gap-2">
                        <div class="col-span-3">
                            <div class="relative">
                                <input type="text" class="bg-[#4F4F67] px-[12px] py-[5px] text-[14px] text-white
                                    font-medium leading-[22px] rounded-full w-full" placeholder="最新电影" />
                                <img src="../assets/chinese_mobile/movie/search_icon_mobile.svg" alt="search icon"
                                    class="absolute right-[10px] top-[7px]" />
                            </div>
                        </div>
                        <div class="col-span-1">
                            <button class="text-white text-[14px] leading-[22px] font-bold bg-[#4F4F67] rounded-full w-full
                                text-center py-[5px]" @click="toggleBtn">
                                筛选
                            </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-2 mt-[10px]">
                        <button v-for="item in shortcutKeywords" :key="item.id"
                            class="bg-[#ffffff1a] text-white w-full py-[5px] leading-[22px] text-[14px] px-1
                                rounded-[4px] truncate">
                            {{ item.value }}
                        </button>
                    </div>
                </div>
            </div>
            <!-- end search & shortcut buttons -->

            <!-- start movie list -->
            <div class="lg:mt-[30px] md:mt-[25px] mt-[20px] lg:block md:block hidden">
                <!-- start recommend list -->
                <div>
                    <h3 class="lg:text-[32px] md:text-[24px] lg:leading-[44.8px] md:leading-[35px] text-white mb-[16px]">热门推荐</h3>
                    <div class="grid grid-cols-4 gap-4">
                        <div v-for="item in recommendList" :key="item.id">
                            <img :alt="item.title" :src="item.img_pc" class="rounded-[8px] w-full" />
                            <div class="block">
                                <span class="my-1 lg:text-[18px] md:text-[14px] lg:leading-[25px] md:leading-[20px] font-bold
                                    text-white text-left">{{ item.title }}</span>
                                <span class="my-[7px] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[15px]
                                    text-[#FF9900] font-medium float-right">{{ item.score }}</span>
                            </div>
                            <div class="block">
                                <p class="text-[#999] font-medium lg:text-[14px] md:text-[10px] overflow_text
                                    lg:leading-[19.6px] md:leading-[15px]">
                                    {{ item.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end recommend list -->
                <!-- start new movie list -->
                <div class="lg:mt-[40px] md:mt-[30px] mt-[20px]">
                    <h3 class="lg:text-[32px] md:text-[24px] lg:leading-[44.8px] md:leading-[35px] text-white mb-[16px]">新片速递</h3>
                    <div class="grid grid-cols-4 gap-4">
                        <div v-for="item in recommendList" :key="item.id">
                            <img :alt="item.title" :src="item.img_pc" class="rounded-[8px] w-full" />
                            <div class="block">
                                <span class="my-1 lg:text-[18px] md:text-[14px] lg:leading-[25px] md:leading-[20px] font-bold
                                    text-white text-left">{{ item.title }}</span>
                                <span class="my-[7px] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[15px]
                                    text-[#FF9900] font-medium float-right">{{ item.score }}</span>
                            </div>
                            <div class="block">
                                <p class="text-[#999] font-medium lg:text-[14px] md:text-[10px] overflow_text
                                    lg:leading-[19.6px] md:leading-[15px]">
                                    {{ item.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end new movie list -->
                <!-- start guess movie list -->
                <div class="lg:mt-[40px] md:mt-[30px] mt-[20px]">
                    <h3 class="lg:text-[32px] md:text-[24px] lg:leading-[44.8px] md:leading-[35px] text-white mb-[16px]">猜你喜欢</h3>
                    <div class="grid grid-cols-4 gap-4">
                        <div v-for="item in recommendList" :key="item.id">
                            <img :alt="item.title" :src="item.img_pc" class="rounded-[8px] w-full" />
                            <div class="block">
                                <span class="my-1 lg:text-[18px] md:text-[14px] lg:leading-[25px] md:leading-[20px] font-bold
                                    text-white text-left">{{ item.title }}</span>
                                <span class="my-[7px] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[15px]
                                    text-[#FF9900] font-medium float-right">{{ item.score }}</span>
                            </div>
                            <div class="block">
                                <p class="text-[#999] font-medium lg:text-[14px] md:text-[10px] overflow_text
                                    lg:leading-[19.6px] md:leading-[15px]">
                                    {{ item.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end guess movie list -->
            </div>
            <!-- end movie list -->

            <!-- start movie list mobile version -->
            <div class="mt-[20px] lg:hidden md:hidden block">
                <div class="grid grid-cols-4 gap-3">
                    <div v-for="item in mobileMovieList" :key="item.id" class="mt-2">
                        <img :alt="item.title" :src="item.img_mobile" class="rounded-[8px] w-full" />
                        <p class="text-center text-[11px] font-medium text-[#F2F2F2] 
                            overflow_text leading-[15px] mt-1">{{ item.title }}</p>
                    </div>
                </div>
            </div>
            <!-- end movie list mobile versino -->
        </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import SearchGroup from "../views/movie/SearchGroup.vue";

export default {
    name: 'Home',
    components: {
        Carousel, Slide, Pagination, Navigation,
        SearchGroup,
    },
    data() {
        return {
            showSearchGroup: false,
        };
    },
    methods: {
        toggleBtn: function () {
            this.showSearchGroup = !this.showSearchGroup;
        }
    },
}
</script>


<style>
.search-icon {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(0deg, #F02148 8.34%, #FF5B21 100%);
}

.overflow_text {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.group-selected {
    background: linear-gradient(to right, #F02148 8.34%, #FF5B21 100%);
    color: white;
    padding: 3px 8px;
    border-radius: 41px;
}
</style>