<script setup>
const searchTypeList = [
    {
        id: 1,
        name: "分类",
        keyname: "kindId",
        children: [
            {id: 1, name: "全部", value: 0},
            {id: 2, name: "电影", value: 1},
            {id: 3, name: "电视剧", value: 2},
            {id: 4, name: "综艺", value: 3},
            {id: 5, name: "动漫", value: 4}
        ]
    },
    {
        id: 2,
        name: "剧情",
        keyname: "plotId",
        children: [
            {id: 1, name: "全部", value: 0},
            {id: 2, name: "科幻", value: 1},
            {id: 3, name: "动作", value: 2},
            {id: 4, name: "喜剧", value: 3},
            {id: 5, name: "爱情", value: 4},
            {id: 6, name: "冒险", value: 5},
            {id: 7, name: "儿童", value: 6},
            {id: 8, name: "歌舞", value: 7},
            {id: 9, name: "音乐", value: 8},
            {id: 10, name: "奇幻", value: 9},
            {id: 11, name: "动画", value: 10},
            {id: 12, name: "恐怖", value: 11},
            {id: 13, name: "惊悚", value: 12},
            {id: 14, name: "丧尸", value: 13},
            {id: 15, name: "战争", value: 14},
            {id: 16, name: "传记", value: 15},
            {id: 17, name: "纪录", value: 16},
            {id: 18, name: "犯罪", value: 17},
            {id: 19, name: "悬疑", value: 18},
            {id: 20, name: "西部", value: 19},
            {id: 21, name: "灾难", value: 20},
            {id: 22, name: "古装", value: 21},
            {id: 23, name: "武侠", value: 22},
            {id: 24, name: "家庭", value: 23},
            {id: 25, name: "短片", value: 24},
            {id: 26, name: "校园", value: 25},
            {id: 27, name: "文艺", value: 26},
            {id: 28, name: "运动", value: 27},
            {id: 29, name: "青春", value: 28},
            {id: 30, name: "同性", value: 29},
            {id: 31, name: "励志", value: 30},
            {id: 32, name: "人性", value: 31},
            {id: 33, name: "美食", value: 32},
            {id: 34, name: "女性", value: 33},
            {id: 35, name: "治愈", value: 34},
            {id: 36, name: "历史", value: 35},
        ]
    },
    {
        id: 3,
        name: "地区",
        keyname: "regionId",
        children: [
            {id: 1, name: "全部", value: 0},
            {id: 2, name: "大陆", value: 1},
            {id: 3, name: "香港", value: 2},
            {id: 4, name: "台湾", value: 3},
            {id: 5, name: "日本", value: 4},
            {id: 6, name: "韩国", value: 5},
            {id: 7, name: "泰国", value: 6},
            {id: 8, name: "美国", value: 7},
            {id: 9, name: "英国", value: 8},
            {id: 10, name: "法国", value: 9},
            {id: 11, name: "德国", value: 10},
            {id: 12, name: "印度", value: 11},
            {id: 13, name: "丹麦", value: 12},
            {id: 14, name: "瑞典", value: 13},
            {id: 15, name: "荷兰", value: 14},
            {id: 16, name: "加拿大", value: 15},
            {id: 17, name: "俄罗斯", value: 16},
            {id: 18, name: "意大利", value: 17},
            {id: 19, name: "比利时", value: 18},
            {id: 20, name: "西班牙", value: 19},
            {id: 21, name: "澳大利亚", value: 20},
            {id: 22, name: "其他", value: 21},
        ]
    },
    {
        id: 4,
        name: "语言",
        keyname: "languageId",
        children: [
            {id: 1, name: "全部", value: 0},
            {id: 2, name: "国语", value: 1},
            {id: 3, name: "粤语", value: 2},
            {id: 4, name: "英语", value: 3},
            {id: 5, name: "法语", value: 4},
            {id: 6, name: "日语", value: 5},
            {id: 7, name: "韩语", value: 6},
            {id: 8, name: "泰语", value: 7},
            {id: 9, name: "德语", value: 8},
            {id: 10, name: "俄语", value: 9},
            {id: 11, name: "闽南语", value: 10},
            {id: 12, name: "丹麦语", value: 11},
            {id: 13, name: "波兰语", value: 12},
            {id: 14, name: "瑞典语", value: 13},
            {id: 15, name: "印地语", value: 14},
            {id: 16, name: "挪威语", value: 15},
            {id: 18, name: "意大利语", value: 16},
            {id: 17, name: "西班牙语", value: 17},
            {id: 19, name: "无对白", value: 18},
            {id: 20, name: "其他", value: 19},
        ]
    },
    {
        id: 5,
        name: "年代",
        keyname: "timeId",
        children: [
            {id: 1, name: "全部", value: 0},
            {id: 2, name: "更早", value: 1},
            {id: 3, name: "2010", value: 2},
            {id: 4, name: "2011", value: 3},
            {id: 5, name: "2012", value: 4},
            {id: 6, name: "2013", value: 5},
            {id: 7, name: "2014", value: 6},
            {id: 8, name: "2015", value: 7},
            {id: 9, name: "2016", value: 8},
            {id: 10, name: "2017", value: 9},
            {id: 11, name: "2018", value: 10},
            {id: 12, name: "2019", value: 11},
            {id: 13, name: "2020", value: 12},
            {id: 14, name: "2021", value: 13},
            {id: 15, name: "2022", value: 14},
        ]
    },
]
</script>

<template>
    <div v-if="showSearchGroup" class="lg:pt-[40px] md:pt-[25px] pt-[10px]">
        <div class="lg:bg-[#00000026] md:bg-[#00000026] bg-transparent pt-[20px]">
            <div v-for="item in searchTypeList" :key="item.id" class="lg:pb-[30px] md:pb-[20px] pb-[10px]">
                <div class="grid grid-cols-7 lg:hidden md:hidden">
                    <div class="col-span-2">
                        <div class="mr-2">
                            <button class="text-[14px] font-bold lg:leading-[19.6px] md:leading-[21px] leading-[22px]
                                lg:text-[#ffffffbf] md:text-[#ffffffbf] text-[#FF5B21] w-[74px]
                                lg:bg-transparent md:bg-transparent bg-[#ffffff1a] rounded-[4px] py-[3px] px-[23px]">
                                {{ item.name }}
                            </button>
                        </div>
                    </div>
                    <div class="col-span-5">
                        <section ref="el" style="width: 100%; overflow: auto; display: flex"
                            :style="{ cursor: isDragging ? 'grabbing' : 'grab', scrollSnapType: isDragging ? '' : '', }"
                            @mousedown="onMouseDown"
                            @mouseup="onMouseUp">
                            <div v-for="detailItem in item.children" :key="detailItem.id"
                                style="scroll-snap-align: start;">
                                <button @click="() => handleSearchType(detailItem.value, item.keyname)"
                                    class="text-[14px] font-bold lg:leading-[19.6px] md:leading-[21px] leading-[22px]
                                    lg:text-[#ffffffbf] md:text-[#ffffffbf] text-white truncate
                                    rounded-[4px] py-[3px] px-[15px]" 
                                    :class="(detailItem.value == search[item.keyname]) ? 'group-selected bg-[#FF5B21]' : ''">
                                    {{ detailItem.name }}
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="lg:flex md:flex flex-row hidden">
                    <div class="mr-2">
                        <button class="text-[14px] font-bold lg:leading-[19.6px] md:leading-[21px] leading-[22px]
                            lg:text-[#ffffffbf] md:text-[#ffffffbf] text-[#FF5B21] w-[74px]
                            lg:bg-transparent md:bg-transparent bg-[#ffffff1a] rounded-[4px] py-[3px] px-[23px]">
                            {{ item.name }}
                        </button>
                    </div>
                    <div>
                        <button v-for="detailItem in item.children" :key="detailItem.id"
                            class="text-[14px] font-bold lg:leading-[19.6px] md:leading-[21px] leading-[22px]
                            lg:text-[#ffffffbf] md:text-[#ffffffbf] text-white
                            rounded-[4px] py-[3px] px-[15px]" 
                            :class="(detailItem.value == search[item.keyname]) ? 'group-selected bg-[#FF5B21]' : ''"
                            @click="() => handleSearchType(detailItem.value, item.keyname)">
                            {{ detailItem.name }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    export default {
        name: "SearchGroup",
        props: ['showSearchGroup'],
        data() {
            return {
                isDragging: false,
                cursorPos: [0, 0],
                el: null,
                search: {
                    kindId: 0,
                    languageId: 0,
                    plotId: "",
                    regionId: 0,
                    timeId: 0,
                }
            };
        },
        mounted() {
            window.addEventListener("mouseup", this.onMouseUp);
        },
        destroyed() {
            window.removeEventListener("mouseup", this.onMouseUp);
        },
        methods: {
            handleSearchType(value, keyname) {
                this.search[keyname] = value;
                var params = {
                    kindId: this.search.kindId,
                    languageId: this.search.languageId,
                    plotId: this.search.plotId,
                    regionId: this.search.regionId,
                    timeId: this.search.timeId,
                }
                this.$emit('searchData', params);
            },
            /** @param {MouseEvent} ev */
            onMouseDown(ev) {
                this.cursorPos = [ev.pageX, ev.pageY];
                this.isDragging = true;
                window.addEventListener("mousemove", this.onMouseHold);
            },
      
            /** @param {MouseEvent} ev */
            onMouseUp(ev) {
                window.removeEventListener("mousemove", this.onMouseHold);
                this.isDragging = false;
            },
  
            /** @param {MouseEvent} ev */
            onMouseHold(ev) {
                ev.preventDefault();
        
                requestAnimationFrame(() => {
                const delta = [
                    ev.pageX - this.cursorPos[0],
                    ev.pageY - this.cursorPos[1],
                ];
        
                this.cursorPos = [ev.pageX, ev.pageY];
        
                if (!this.$refs.el) return;
                this.$refs.el.scrollBy({
                    left: -delta[0],
                    top: -delta[1],
                });
                });
            },
        },
    };
</script>
  
<style>
.group-selected {
    background: linear-gradient(to right, #F02148 8.34%, #FF5B21 100%);
    color: white;
    padding: 3px 8px;
    border-radius: 41px;
}
</style>