<script setup>
const searchTypeList = [
    {
        id: 1,
        name: "全部",
        children: [
            {id: 1, name: "电影"},
            {id: 2, name: "电视剧"},
            {id: 3, name: "综艺"},
            {id: 4, name: "动漫"}
        ]
    },
    {
        id: 2,
        name: "分类",
        children: [
            {id: 1, name: "全部"},
            {id: 2, name: "剧情"},
            {id: 3, name: "动作"},
            {id: 4, name: "喜剧"},
            {id: 5, name: "爱情"},
            {id: 6, name: "惊悚"},
            {id: 7, name: "犯罪"},
            {id: 8, name: "悬疑"},
            {id: 9, name: "战争"},
            {id: 10, name: "科幻"},
            {id: 11, name: "恐怖"},
            {id: 12, name: "家庭"},
            {id: 13, name: "战争"},
            {id: 14, name: "冒险"},
            {id: 15, name: "动画"},
            {id: 16, name: "历史"},
            {id: 17, name: "歌舞"},
            {id: 18, name: "运动"},
            {id: 19, name: "音乐"},
            {id: 20, name: "伦理"},
            {id: 21, name: "记录"},
            {id: 22, name: "西部"},
        ]
    },
    {
        id: 3,
        name: "地区",
        children: [
            {id: 1, name: "全部"},
            {id: 2, name: "内地"},
            {id: 3, name: "香港"},
            {id: 4, name: "美国"},
            {id: 5, name: "欧洲"},
            {id: 6, name: "日本"},
            {id: 7, name: "韩国"},
            {id: 8, name: "印度"},
            {id: 9, name: "泰国"},
            {id: 10, name: "英国"},
            {id: 11, name: "法国"},
            {id: 12, name: "德国"},
            {id: 13, name: "北欧"},
            {id: 14, name: "西班牙"},
            {id: 15, name: "意大利"},
            {id: 16, name: "澳大利亚"},
            {id: 17, name: "加拿大"},
            {id: 18, name: "拉丁美洲"},
            {id: 19, name: "其他"},
        ]
    },
    {
        id: 4,
        name: "语言",
        children: [
            {id: 1, name: "全部"},
            {id: 2, name: "国语"},
            {id: 3, name: "粤语"},
            {id: 4, name: "英语"},
            {id: 5, name: "法语"},
            {id: 6, name: "日语"},
            {id: 7, name: "韩语"},
            {id: 8, name: "泰语"},
            {id: 9, name: "德语"},
            {id: 10, name: "俄语"},
            {id: 11, name: "闽南语"},
            {id: 12, name: "丹麦语"},
            {id: 13, name: "波兰语"},
            {id: 14, name: "瑞典语"},
            {id: 15, name: "印地语"},
            {id: 16, name: "挪威语"},
            {id: 17, name: "西班牙语"},
            {id: 18, name: "意大利语"},
            {id: 19, name: "无对白"},
            {id: 20, name: "其他"},
        ]
    },
    {
        id: 5,
        name: "年代",
        children: [
            {id: 1, name: "全部"},
            {id: 2, name: "更早"},
            {id: 3, name: "2010"},
            {id: 4, name: "2011"},
            {id: 5, name: "2012"},
            {id: 6, name: "2013"},
            {id: 7, name: "2014"},
            {id: 8, name: "2015"},
            {id: 9, name: "2016"},
            {id: 10, name: "2017"},
            {id: 11, name: "2018"},
            {id: 12, name: "2019"},
            {id: 13, name: "2020"},
            {id: 14, name: "2021"},
            {id: 15, name: "2022"},
        ]
    },
]
</script>

<template>
    <div v-if="showSearchGroup" class="lg:pt-[40px] md:pt-[25px] pt-[10px]">
        <div class="lg:bg-black md:bg-black bg-transparent pt-[20px]">
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
                                <button @click="() => handleSearchType(item.id, detailItem.id)"
                                    class="text-[14px] font-bold lg:leading-[19.6px] md:leading-[21px] leading-[22px]
                                    lg:text-[#ffffffbf] md:text-[#ffffffbf] text-white truncate
                                    rounded-[4px] py-[3px] px-[15px]" 
                                    :class="(item.id == searchTypeId && detailItem.id == searchTypeDetailId) ? 'group-selected' : ''">
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
                            :class="(item.id == searchTypeId && detailItem.id == searchTypeDetailId) ? 'group-selected' : ''"
                            @click="() => handleSearchType(item.id, detailItem.id)">
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
                searchTypeId: '',
                searchTypeDetailId: '',
            };
        },
        mounted() {
            window.addEventListener("mouseup", this.onMouseUp);
        },
        destroyed() {
            window.removeEventListener("mouseup", this.onMouseUp);
        },
        methods: {
            handleSearchType(id, detailId) {
                this.searchTypeId = id;
                this.searchTypeDetailId = detailId
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
</style>