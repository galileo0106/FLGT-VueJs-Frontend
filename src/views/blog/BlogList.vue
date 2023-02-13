<script setup>
import { ref } from "vue";
</script>
<template>
    <div class="lg:pt-[40px] md:pt-[30px] pt-[20px] bg-white container mx-auto">
        <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
            <div class="col-span-1 lg:ml-[10px] md:ml-[10px] md:mr-0 mx-[50px]">
                <select class="bg-gray-50 border border-[#DFDFDF] rounded-[2px] text-[14px] leading-[22px]
                    text-themeGreyText1 block w-full p-[10px] outline-[#F02148]" @change="(e) => handleCategory(e)">
                    <option value="" selected>{{ $t("blog.allTypes") }}</option>
                    <option value="cate1">Category 1</option>
                    <option value="cate2">Category 2</option>
                    <option value="cate3">Category 3</option>
                </select>
            </div>
            <div class="lg:col-span-2 md:col-span-2 col-span-1 lg:mx-[10px] md:mx-[10px] mx-[50px] lg:my-0 md:my-0 my-[20px]">
                <div class="flex flex-row">
                    <div class="w-full">
                        <input type="text" placeholder="Please enter" v-model="searchKey"
                            class="border border-[#DFDFDF] focus:border-[#F02148] outline-[#F02148] px-[10px] py-[7.5px]
                                rounded-[2px] w-full input-custom text-[14px] leading-[22px]" />
                    </div>
                    <div class="w-[108px] ml-[10px]">
                        <button class="text-[14px] leading-[22px] font-bold search-btn
                            text-white p-[8px] text-center w-full focus:outline-[#F02148]"
                            @click="getBlogList">
                            {{ $t("blog.search") }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-6 gap-3
            lg:mb-[30px] md:mb-[45px] mb-[35px] lg:mt-[40px] md:mt-[30px] mt-[20px] mx-[10px]">
                <div v-for="item in blogList" :key="item.index"
                    class="col-span-1 lg:mb-[30px] md:mb-[25px] mb-[20px]">
                    <router-link :to="'/blog/' + item.id ">
                        <img :src="IMG_URL + item.coverUrl" :alt="item.title" class="w-full" />
                        <div class="rounded-[10px] card bg-white lg:px-[25px] md:px-[18px] px-[11px]
                            lg:py-[25px] md:py-[20px] py-[15px] h-[200px] overflow-hidden">
                            <p class="lg:text-[18px] md:text-[16px] text-[14px] font-bold blog_overflow_title
                                lg:h-[50px] md:h-[45px] h-[37px]
                                lg:leading-[25px] md:leading-[22px] leading-[18px] text-[#141414]">
                                {{ item.title }}
                            </p>
                            <p class="lg:text-[15px] lg:leading-[27px] text-[#868383] font-medium mt-[14px]
                                lg:block md:block hidden blog_overflow_description"
                                v-html="item.content">
                            </p>
                            <p class="lg:text-[14px] md:text-[13px] text-[12px] font-medium leading-[22px] text-[#696969] mt-[10px]">
                                {{ item.createdAt }}
                            </p>
                        </div>
                    </router-link>
                </div>
            </div>
            <div v-if="totalSize == 0" 
                class="lg:text-[15px] md:text-[13px] text-[10px] text-[#141414] text-center mb-[30px]">
                {{ $t("movie.noData") }}
            </div>
            <div class="text-center mb-[60px] lg:block md:block hidden">
                <a class="text-[#666] px-3 text-[24px] leading-[47px] cursor-pointer" 
                    :class="(page == 1 || totalSize < 9) ? 'hidden': ''"
                    @click="() => goPage(page - 1)">
                    <i class="fa-solid fa-angle-left"></i>
                </a>
                <a class="text-[#666] px-3 text-[24px] leading-[47px] font-medium cursor-pointer"
                    :class="page == item ? 'text-[#F02148] font-bold': ''"
                    v-for="item in (totalSize / perPage > 0 ? Math.ceil(totalSize / perPage) : 0)" :key="item" @click="() => goPage(item)">
                    {{ item }}
                </a>
                <a class="text-[#666] px-3 text-[24px] leading-[47px] cursor-pointer"
                    :class="(page >= (totalSize / perPage) || totalSize < 9) ? 'hidden': ''"
                    @click="() => goPage(page + 1)">
                    <i class="fa-solid fa-angle-right"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
const API_URL = import.meta.env.VITE_API_URL;
const IMG_URL = import.meta.env.VITE_IMG_URL;
export default {
    name: 'Blog List',
    data() {
        return {
            blogList: [],
            totalSize: 0,
            category: "",
            searchKey: "",
            page: 1,
            perPage: 9
        }
    },
    mounted() {
        this.getBlogList();
        window.addEventListener('scroll', this.scrollListener)
    },
    beforeDestroy: function () {
        window.removeEventListener('scroll', this.scrollListener)
    },
    methods: {
        getBlogList: function() {
            var params = {
                category: this.category,
                id: 3,
                blogname: this.searchKey,
                page_num: this.page
            }
            if(window.innerWidth < 767) {
                Object.assign(params, { limit: 8 });
            } else {
                Object.assign(params, { limit: this.perPage });
            }
            var token = localStorage.getItem("token");
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            var url = API_URL + "/api/v1/blog/search";
            this.axios.post(url, params, config).then((res) => {
                if(res.status == 200) {
                    var tempList = this.blogList;
                    tempList.push.apply(tempList, res?.data?.data? res.data.data.blogs : []);
                    if(this.page === 1) {
                        this.blogList = res.data?.data?.blogs ? res.data.data.blogs : [];
                    } else {
                        this.blogList = tempList;
                    }
                    this.totalSize = res.data?.data?.count ? res.data.data.count : 0;
                }
            });
        },
        goPage: function(pageNum) {
            window.scrollTo(0,0);
            this.page = pageNum;
            this.getBlogList();
        },
        handleCategory: function(e) {
            this.category = e.target.value;
            this.page = 1;
            this.getBlogList();
        },
        scrollListener: function() {
            if((document.documentElement.scrollTop + window.innerHeight ===
                document.documentElement.offsetHeight) && window.innerWidth < 767) {
                this.page += 1;
                this.perPage = 8;
                this.getBlogList();
            }
        }
    },
}

</script>
<style scoped>
.search-btn {
    background: linear-gradient(to right, #F02148 8.34%, #FF5B21 100%);
}

.card {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}

.blog_overflow_title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.blog_overflow_description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.input-custom:focus, .input-custom:focus-visible {
    border: 1px solid #F02148 !important;
}

ul.flex-container {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-direction: row wrap;
  flex-wrap: wrap;
  justify-content: space-around;
}
li img {
  display: initial;
  height: 100px;
}
.flex-item {
  background: tomato;
  width: calc(100% / 3.5);
  padding: 5px;
  height: auto;
  margin-top: 10px;
  color: white;
  font-weight: bold;
  text-align: center;
}
.downloads {
  margin-top: 10px;
}
ul.paginate-links.items li {
  display: inline-block;
  margin: 5px;
}
ul.paginate-links.items a {
  cursor: pointer;
}
ul.paginate-links.items li.active a {
  font-weight: bold;
}
ul.paginate-links.items li.next:before {
  content: " | ";
  margin-right: 13px;
  color: #ddd;
}
ul.paginate-links.items li.disabled a {
  color: #ccc;
  cursor: no-drop;
}

</style>