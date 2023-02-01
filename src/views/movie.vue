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
</script>

<template>
  <div class="w-full font-normal_font" v-if="loggedUser.accessToken">
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
            <SearchGroup :showSearchGroup="showSearchGroup" :getMovieList="getMovieList" 
                @searchData="getSearchData" />
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
                <div class="lg:mt-[40px] md:mt-[30px] mt-[20px]">
                    <div class="grid grid-cols-6 gap-4">
                        <div v-for="item in movieList" :key="item.id">
                            <router-link class="nav-link" :to="'/movie/' + item.id" 
                                :id="item.id">
                                <img :alt="item.title" class="rounded-[8px] w-full h-[225px]"
                                :src="'http://20.198.170.39:8080/' + item.cover2" />
                                <div class="grid grid-cols-2">
                                    <span class="my-1 lg:text-[18px] md:text-[14px] lg:leading-[25px] md:leading-[20px] font-bold
                                        text-white text-left truncate">
                                        {{ item.title }}
                                    </span>
                                    <span class="my-[7px] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[15px]
                                        text-[#FF9900] font-medium text-right">{{ item.grade ? item.grade.toFixed(1) : 0 }}</span>
                                </div>
                                <div class="block">
                                    <p class="text-[#999] font-medium lg:text-[14px] md:text-[10px] overflow_text
                                        lg:leading-[19.6px] md:leading-[15px]">
                                        {{ item.desc }}
                                    </p>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end movie list -->

            <!-- start movie list mobile version -->
            <div class="mt-[20px] lg:hidden md:hidden block">
                <div class="grid grid-cols-3 gap-3">
                    <div v-for="item in movieList" :key="item.id" class="mt-2">
                        <router-link class="nav-link" :to="'/movie/' + item.id" 
                            :id="item.id">
                            <img :alt="item.title" class="rounded-[8px] w-full h-[130px]"
                                :src="'http://20.198.170.39:8080/' + item.cover2" />
                            <p class="text-center text-[11px] font-medium text-[#F2F2F2] 
                                overflow_text leading-[15px] mt-1">
                                {{ item.title }}
                            </p>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- end movie list mobile versino -->

            <div class="mt-[70px] text-center">
                <button class="text-[14px] leading-[24px] font-bold text-white py-2 px-12 more-btn rounded-lg"
                    @click="this.moreList">
                    加载更多
                </button>
            </div>
        </div>
    </div>
  </div>
  <div v-else class="w-full font-normal_font">
    <div class="lg:bg-movie_bg_pc md:bg-movie_bg_pc bg-movie_bg_mobile h-full lg:pb-[60px] md:pb-[40px] pb-[20px]">
        <div class="lg:w-[1024px] md:w-[760px] w-full mx-auto lg:px-[10px] md:px-[10px] px-[28px] h-[300px]">
            <div class="table h-[300px] overflow-hidden mx-auto">
                <div class="table-cell align-middle">
                    <div class="text-white text-center font-bold text-[30px]">
                        {{ $t("menu.loginFirst") }}
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import SearchGroup from "../views/movie/SearchGroup.vue";
import CONSTANT from '../components/Common/Constant';

export default {
    name: 'Home',
    components: {
        Carousel, Slide, Pagination, Navigation,
        SearchGroup,
    },
    data() {
        return {
            showSearchGroup: false,
            movieList: [],
            totalCnt: 0,
            searchParams: {
                kindId: 0,
                languageId: 0,
                plotId: "0",
                regionId: 0,
                timeId: 0,
                offset: 0,
            },
            loggedUser: {
                accessToken: localStorage.getItem("token") ? localStorage.getItem("token") : null
            },
        };
    },
    mounted() {
        this.getMovieList(null);
    },
    methods: {
        toggleBtn: function () {
            this.showSearchGroup = !this.showSearchGroup;
        },
        getSearchData: function(data) {
            this.getMovieList(data);
        },
        getMovieList(data) {
            var params = {}
            if(data != null) {
                params = data;
                Object.assign(params);
                
            } else {
                params = this.searchParams;
            }
            this.axios.post(CONSTANT.API_URL + "/api/v1/user-films", params).then((res) => {
                if(res.status == 200) {
                    var tempList = this.movieList;
                    tempList.push.apply(tempList, res.data.data);
                    if(this.searchParams.offset == 0) {
                        this.movieList = res.data.data;
                    } else {
                        this.movieList = tempList;
                    }                    
                    this.totalCnt = res.data.count;
                }
            });
        },
        moreList() {
            this.searchParams.offset += 18;
            this.getMovieList(this.searchParams);
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

.more-btn {
    background: linear-gradient(to right, #F02148 8.34%, #FF5B21 100%);
}
</style>