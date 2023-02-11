<script setup>
import 'vue3-carousel/dist/carousel.css'
import MovieCarouselItem from '../views/movie/MovieCarouselItem.vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import SearchGroup from "../views/movie/SearchGroup.vue";

const movieSlides = [
    {slide: MovieCarouselItem, id: "1"},
    {slide: MovieCarouselItem, id: "2"},
    {slide: MovieCarouselItem, id: "3"}
];

const shortcutKeywords = [
    {id: 1, name: "动作", type: 'plotId', value: 2},
    {id: 2, name: "爱情", type: 'plotId', value: 4},
    {id: 3, name: "励志", type: 'plotId', value: 30},
    {id: 4, name: "英语", type: 'languageId', value: 3},
    {id: 5, name: "武侠", type: 'plotId', value: 22},
    {id: 6, name: "动漫", type: 'kindId', value: 4},
    {id: 7, name: "喜剧", type: 'plotId', value: 3},
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
            <SearchGroup :showSearchGroup="showSearchGroup"
                @searchData="getSearchData" />
            <div class="lg:block md:block hidden">
                <!-- start search & shortcut buttons -->
                <div class="lg:pt-[30px] md:pt-[25px] pt-[20px]">
                    <div class="lg:grid md:grid grid-cols-10 hidden">
                        <div class="col-span-6 overflow-hidden">
                            <div class="grid grid-cols-7">
                                <div v-for="item in shortcutKeywords" :key="item.id"
                                    class="mr-[10px]">
                                    <button v-if="selectedQuickType == item.type && selectedQuickValue == item.value"
                                        class="text-[14px] lg:leading-[24px] md:leading-[23px] leading-[22px]
                                        py-[6px] px-[16px]
                                        lg:text-[#FF486B] md:text-[#FF486B] text-white text-center truncate
                                        lg:bg-[#f0214840] md:bg-[#f0214840] bg-[#ffffff1a] rounded-[4px] w-full" :title="item.name"
                                        @click="() => quickFilter(item.type, item.value)">
                                        {{ item.name }}
                                    </button>
                                    <button v-else
                                        class="text-[14px] lg:leading-[24px] md:leading-[23px] leading-[22px]
                                        py-[6px] px-[16px]
                                        lg:text-[#ffffffbf] md:text-[#ffffffbf] text-white text-center truncate
                                        bg-[#ffffff1a] rounded-[4px] w-full" :title="item.name"
                                        @click="() => quickFilter(item.type, item.value)">
                                        {{ item.name }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-3 px-[20px]">
                            <div>
                                <input class="border-[#D1D5DB] border rounded-[6px] bg-transparent text-[#ffffff80]
                                    px-[10px] py-[6px] text-[16px] leading-[24px] w-full" placeholder="唐朝诡事录"
                                    v-model="searchKey" @input="(event) => { handleSearchKey(event) } " />
                                <p class="float-right top-[-30px] right-[10px] relative cursor-pointer" @click="search">
                                    <i class="fa-solid fa-magnifying-glass text-white"></i>
                                </p>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <button class="text-[14px] lg:leading-[24px] md:leading-[23px] leading-[22px] py-[6px] px-[16px]
                                    lg:text-[#ffffffbf] md:text-[#ffffffbf] text-white text-center truncate
                                    bg-[#ffffff1a] rounded-[4px] w-full" @click="toggleBtn">
                                    {{ $t("movie.filter") }}
                            </button>
                        </div>
                    </div>
                </div>
                <!-- end search & shortcut buttons -->
                <!-- start movie list -->
                <div class="lg:mt-[30px] md:mt-[25px] mt-[20px]">
                    <div class="lg:mt-[40px] md:mt-[30px] mt-[20px]">
                        <div class="grid grid-cols-6 gap-4" v-if="movieList && movieList.length > 0">
                            <div v-for="item in movieList" :key="item.id">
                                <router-link class="nav-link" :to="'/movie/' + item.id"
                                    :id="item.id">
                                    <img :alt="item.title" class="rounded-[8px] w-full lg:h-[225px] md:h-[168px] text-white"
                                        :src="IMG_URL + '/' + item.cover2" />
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
                        <div class="text-center text-white text-[18px]" v-if="movieList.length == 0">
                            {{ $t("movie.noData") }}
                        </div>
                    </div>
                </div>
                <!-- end movie list -->

                <!-- start more btn -->
                <div class="mt-[70px] text-center lg:block md:block hidden" v-if="movieList.length > 0">
                    <button class="text-[14px] leading-[24px] font-bold text-white py-2 px-12 more-btn rounded-lg"
                        @click="moreList">
                        {{ $t("movie.more") }}
                    </button>
                </div>
                <!-- end more btn -->
            </div>
            <div class="lg:hidden md:hidden block">
                <!-- start search & shortcut buttons -->
                <div class="lg:pt-[30px] md:pt-[25px] pt-[20px]">
                    <div class="lg:hidden md:hidden grid grid-cols-1">
                        <div class="grid grid-cols-4 gap-2">
                            <div class="col-span-3">
                                <div class="relative">
                                    <input type="text" class="bg-[#4F4F67] px-[12px] py-[5px] text-[14px] text-white
                                        font-medium leading-[22px] rounded-full w-full" placeholder="最新电影"
                                        v-model="searchKey" @input="(event) => { handleSearchKey(event) } " />
                                    <img src="../assets/chinese_mobile/movie/search_icon_mobile.svg" alt="search icon"
                                        class="absolute right-[10px] top-[7px] cursor-pointer"
                                        @click="search" />
                                </div>
                            </div>
                            <div class="col-span-1">
                                <button class="text-white text-[14px] leading-[22px] font-bold bg-[#4F4F67] rounded-full w-full
                                    text-center py-[5px]" @click="toggleBtn">
                                    {{ $t("movie.filter") }}
                                </button>
                            </div>
                        </div>
                        <div class="grid grid-cols-4 gap-2 mt-[10px]">
                            <button v-for="item in shortcutKeywords" :key="item.id"
                                class="bg-[#ffffff1a] text-white w-full py-[5px] leading-[22px] text-[14px] px-1
                                    rounded-[4px] truncate"
                                :title="item.name"
                                @click="() => quickFilter(item.type, item.value)">
                                {{ item.name }}
                            </button>
                        </div>
                    </div>
                </div>
                <!-- end search & shortcut buttons -->
                <!-- start movie list mobile version -->
                <div class="mt-[20px]">
                    <div class="grid grid-cols-3 gap-3" v-if="movieList && movieList?.length > 0">
                        <div v-for="item in movieList" :key="item.id" class="mt-2">
                            <router-link class="nav-link" :to="'/movie/' + item.id"
                                :id="item.id">
                                <img :alt="item.title" class="rounded-[8px] h-[168px] text-white mx-auto"
                                    :src="IMG_URL + '/' + item.cover2" />
                                <p class="text-center text-[11px] font-medium text-[#F2F2F2]
                                    overflow_text leading-[15px] mt-1">
                                    {{ item.title }}
                                </p>
                            </router-link>
                        </div>
                    </div>
                    <div class="text-center text-white text-[14px]" v-if="movieList?.length == 0">
                        {{ $t("movie.noData") }}
                    </div>
                </div>
                <!-- end movie list mobile versino -->
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

const API_URL = import.meta.env.VITE_API_URL;
const IMG_URL = import.meta.env.VITE_IMG_URL;

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
            kindId: 0,
            languageId: 0,
            regionId: 0,
            plotId: "",
            timeId: 0,
            searchKey: "",
            pageNum: 1,
            loggedUser: {
                accessToken: localStorage.getItem("token") ? localStorage.getItem("token") : null
            },
            selectedQuickType: "",
            selectedQuickValue: "",
        };
    },
    mounted() {
        this.getMovieList(null);
        window.scrollTo(0,0);
        window.addEventListener('scroll', this.scrollListener)
    },
    beforeDestroy: function () {
        window.removeEventListener('scroll', this.scrollListener)
    },
    methods: {
        toggleBtn: function () {
            this.showSearchGroup = !this.showSearchGroup;
            window.scrollTo(0,0);
        },
        getSearchData: function(data) {
            this.kindId = data.kindId,
            this.languageId = data.languageId,
            this.regionId = data.regionId,
            this.plotId = data.plotId,
            this.timeId = data.timeId,
            this.getMovieList();
        },
        search: function() {
            this.getMovieList();
        },
        getMovieList: function() {
            var params = {
                id:1,
                page_num: this.pageNum,
                limit: 18
            }
            if(this.searchKey != "") {
                Object.assign(params, { name: this.searchKey });
            }

            if(this.plotId != "") {
                Object.assign(params, { plot_id: this.plotId + "_" });
            }

            if(this.kindId != 0) {
                Object.assign(params, { kind_id: this.kindId });
            }

            if(this.languageId != 0) {
                Object.assign(params, { language_id: this.languageId });
            }

            if(this.regionId != 0) {
                Object.assign(params, { region_id: this.regionId });
            }

            if(this.timeId != 0) {
                Object.assign(params, { time_id: this.timeId });
            }

            if(this.selectedQuickType == "plotId") {
                Object.assign(params, { plot_id: this.selectedQuickValue + "_" });
            }

            if(this.selectedQuickType == "languageId") {
                Object.assign(params, { language_id: this.selectedQuickValue });
            }

            if(this.selectedQuickType == "kindId") {
                Object.assign(params, { kind_id: this.selectedQuickValue });
            }

            var url = API_URL + "/api/v1/film/filter";
            this.axios.post(url, params).then((res) => {
                if(res.status == 200) {
                    var tempList = this.movieList;
                    tempList.push.apply(tempList, res?.data?.data? res.data.data : []);
                    if(this.pageNum == 1) {
                        this.movieList = res?.data?.data? res.data.data : [];
                    } else {
                        this.movieList = tempList;
                    }
                }
            });
        },
        moreList: function() {
            this.pageNum = this.pageNum + 1;
            this.getMovieList();
        },
        quickFilter: function(type, value) {
            this.movieList = [];
            this.selectedQuickType = type;
            this.selectedQuickValue = value;
            this.getMovieList();
        },
        handleSearchKey: function(event) {
            this.searchKey = event.target.value; 
            this.pageNum = 1;
        },
        cover(img) {
            if(img.indexOf("thumb2.jpg") != -1){
                return IMG_URL + `/${img}`
            }else{
                return `http://104.43.88.63:8080/ipfs/${img}`
            }
        },
        scrollListener: function() {
            if((document.documentElement.scrollTop + window.innerHeight ===
                document.documentElement.offsetHeight) && window.innerWidth < 767) {
                this.pageNum += 1;
                this.getMovieList();
            }
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