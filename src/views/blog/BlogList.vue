<script setup>
</script>

<template>
    <div class="lg:pt-[40px] md:pt-[30px] pt-[20px] bg-white container mx-auto">
        <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
            <div class="col-span-1 lg:ml-[10px] md:ml-[10px] md:mr-0 mx-[50px]">
                <select class="bg-gray-50 border border-[#DFDFDF] rounded-[2px] text-[14px] leading-[22px]
                    text-themeGreyText1 block w-full p-[10px]">
                    <option selected>所有类型</option>
                </select>
            </div>
            <div class="lg:col-span-2 md:col-span-2 col-span-1 lg:mx-[10px] md:mx-[10px] mx-[50px] lg:my-0 md:my-0 my-[20px]">
                <div class="flex flex-row">
                    <div class="w-full">
                        <input type="text" placeholder="Please enter" 
                            class="border border-[#DFDFDF] focus:border-[#F02148] outline-[#F02148] px-[10px] py-[6px] 
                                rounded-[2px] w-full input-custom" />
                    </div>
                    <div class="w-[108px] ml-[10px]">
                        <button class="text-[14px] leading-[22px] font-bold search-btn
                            text-white p-[8px] text-center w-full focus:outline-[#F02148]">搜素</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-6 gap-3 
            lg:mb-[30px] md:mb-[45px] mb-[70px] lg:mt-[40px] md:mt-[30px] mt-[20px] mx-[10px]">
                <div v-for="item in paginatedData" :key="item.index"
                    class="col-span-1 lg:mb-[30px] md:mb-[25px] mb-[20px]">
                    <img :src="item.data.img_pc" :alt="item.data.title" class="w-full lg:block md:block hidden" />
                    <img :src="item.data.img_mobile" :alt="item.data.title" class="w-full lg:hidden md:hidden block" />
                    <div class="rounded-[10px] card bg-white lg:px-[25px] md:px-[18px] px-[11px] 
                        lg:py-[25px] md:py-[20px] py-[15px]">
                        <a class="lg:text-[18px] md:text-[16px] text-[14px] font-bold blog_overflow_title
                            lg:h-[50px] md:h-[45px] h-[37px]
                            lg:leading-[25px] md:leading-[22px] leading-[18px] text-[#141414]"
                            href="/blog/detail">
                            {{ item.data.title }}
                        </a>
                        <p class="lg:text-[15px] lg:leading-[27px] text-[#868383] font-medium mt-[14px]
                            lg:block md:block hidden blog_overflow_description">
                            {{ item.data.description }}
                        </p>
                        <p class="lg:text-[14px] md:text-[13px] text-[12px] font-medium leading-[22px] text-[#696969] mt-[10px]">
                            {{ item.data.createdDate }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="text-center mb-[60px] lg:block md:block hidden">
                <a class="text-[#666] px-3 text-[24px] leading-[47px] cursor-pointer" :class="page == 1 ? 'hidden': ''"
                    @click="backPage">
                    <i class="fa-solid fa-angle-left"></i>
                </a>
                <a class="text-[#666] px-3 text-[24px] leading-[47px] font-medium cursor-pointer" 
                    :class="page == item ? 'text-[#F02148] font-bold': ''"
                    v-for="item in Math.ceil(data.length / perPage)" :key="item" @click="() => goToPage(item)">
                    {{ item }}
                </a>
                <a class="text-[#666] px-3 text-[24px] leading-[47px] cursor-pointer" 
                    :class="page >= (data.length / perPage) ? 'hidden': ''"
                    @click="nextPage">
                    <i class="fa-solid fa-angle-right"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import handlePagination from "../../components/Common/HandlePagination";

export default {    
    name: 'Blog List',
    components: {
    },
    setup() {
        const handlePaginationValue = handlePagination();
        return { ...handlePaginationValue };
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