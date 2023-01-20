<script setup>
const guessingList = [
    {
        id: 1, 
        title: "梅兰芳", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie1_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie1_mobile.svg",
        score: 9.7,
    },
    {
        id: 2, 
        title: "唐人街探案3", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie2_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie2_mobile.svg",
        score: 9.7,
    },
    {
        id: 3, 
        title: "敦刻尔克", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie3_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie3_mobile.svg",
        score: 9.7,
    },
    {
        id: 4, 
        title: "流浪地球", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie4_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie4_mobile.svg",
        score: 9.7,
    },
    {
        id: 5, 
        title: "28区", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie5_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie5_mobile.svg",
        score: 9.7,
    },
    {
        id: 6, 
        title: "AUSRALIA", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie6_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie6_mobile.svg",
        score: 9.7,
    },
    {
        id: 7, 
        title: "决战中途岛", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie7_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie7_mobile.svg",
        score: 9.7,
    },
    {
        id: 8, 
        title: "亡者之战", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie8_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie8_mobile.svg",
        score: 9.7,
    },
    {
        id: 9, 
        title: "JOKER", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie9_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie9_mobile.svg",
        score: 9.7,
    },
    {
        id: 10, 
        title: "热汤", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie10_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie10_mobile.svg",
        score: 9.7,
    },
    {
        id: 11, 
        title: "我不是药神", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie11_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie11_mobile.svg",
        score: 9.7,
    },
    {
        id: 12, 
        title: "海神", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie12_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie12_mobile.svg",
        score: 9.7,
    },
    {
        id: 13, 
        title: "黄金时代", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie13_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie13_mobile.svg",
        score: 9.7,
    },
    {
        id: 14, 
        title: "我世界里的你", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie14_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie14_mobile.svg",
        score: 9.7,
    },
    {
        id: 15, 
        title: "恐怖故事", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie15_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie15_mobile.svg",
        score: 9.7,
    },
    {
        id: 16, 
        title: "哥，你好", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie16_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie16_mobile.svg",
        score: 9.7,
    },
    {
        id: 17, 
        title: "绑架游戏", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie17_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie17_mobile.svg",
        score: 9.7,
    },
    {
        id: 18, 
        title: "苍兰诀", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie18_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie18_mobile.svg",
        score: 9.7,
    },
    {
        id: 19, 
        title: "梅兰芳", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie19_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie19_mobile.svg",
        score: 9.7,
    },
    {
        id: 20, 
        title: "我们的岁月", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie20_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie20_mobile.svg",
        score: 9.7,
    },
    {
        id: 21, 
        title: "牯岭少年杀人案", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie21_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie21_mobile.svg",
        score: 9.7,
    },
    {
        id: 22, 
        title: "你好，北京", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie22_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie22_mobile.svg",
        score: 9.7,
    },
    {
        id: 23, 
        title: "队长老爸", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie23_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie23_mobile.svg",
        score: 9.7,
    },
    {
        id: 24, 
        title: "影", 
        starring: "主演：黎明/章子怡/徐绍群/孙红雷",
        img_pc: "/src/assets/chinese_pc/movie/movie24_pc.svg",
        img_mobile: "/src/assets/chinese_mobile/movie/movie24_mobile.svg",
        score: 9.7,
    },
];
</script>

<template>
    <div class="w-full font-normal_font">
        <div class="lg:bg-movie_bg_pc md:bg-movie_bg_pc bg-black h-full lg:pb-[60px] md:pb-[40px] pb-[20px]">
            <div class="lg:w-[1024px] md:w-[760px] w-full mx-auto lg:px-[10px] md:px-[10px] px-0 lg:py-[20px] md:py-[20px] py-0">
                <div>
                    <div class="grid lg:grid-cols-6 md:grid-cols-5 grid-cols-1">
                        <div class="lg:col-span-4 md:col-span-3 col-span-1 relative">
                            <div class="relative">
                                <img :src="movie.detail.url" :alt="movie.detail.title" 
                                    class="lg:rounded-[8px] md:rounded-[8px] rounded-none" />
                                <div class="absolute top-[35%] left-[43%] lg:hidden md:hidden block">
                                    <img src="../../assets/chinese_mobile/movie/play_icon_mobile.svg" alt="play icon" />
                                </div>
                                <div class="absolute top-[6px] right-[12px] bg-[#00000080] text-white 
                                    text-[12px] leading-[16.8px] font-medium py-[2px] px-2 rounded-[24px]
                                    lg:hidden md:hidden block">
                                    3秒后跳过
                                </div>
                            </div>
                            <div class="lg:block md:block hidden">
                                <h3 class="mt-[10px] lg:text-[32px] md:text-[24px] text-white leading-[44.8px] font-medium">
                                    {{ movie.detail.title }}
                                </h3>
                                <div class="mt-3 text-[#999] text-[14px] font-medium leading-[19.6px]">
                                    <span>{{ movie.detail.starScore }}分 · </span>
                                    <span>VIP · </span>
                                    <span>2015 · </span>
                                    <span>喜剧 · 爱情 · 奇幻 · </span>
                                    <span>周星驰</span>
                                </div>
                                <div class="absolute right-0 lg:bottom-[20px] md:bottom-[28px]">
                                    <span class="text-[#A0A0A0] text-[12px] leading-[16.8px] font-medium">
                                        <i class="fa fa-heart mr-[7px]"></i>
                                        21.8W
                                    </span>
                                    <span class="text-[#A0A0A0] text-[12px] leading-[16.8px] font-medium 
                                        lg:ml-[40px] md:ml-[20px]">
                                        <i class="fa fa-share mr-[7px]"></i>
                                        分享
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-2 md:col-span-2 col-span-1 lg:px-[20px] md:px-[18px] px-[16px] 
                            lg:py-[10px] md:py-[10px] py-0 mb-[7px]
                            lg:mx-[10px] md:mx-[10px] mx-0 lg:bg-[#14161abf] md:bg-[#14161abf] bg-[#15161A] rounded-[8px]">
                            <ul class="nav nav-tabs flex flex-row md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 relative" 
                                id="tabs-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <p class="text-white cursor-pointer lg:text-center md:text-center text-left
                                        nav-link block font-medium lg:text-[20px] md:text-[18px] text-[16px] 
                                        lg:leading-[28px] md:leading-[25px] leading-[22.4px] uppercase
                                        border-x-0 border-t-0 lg:px-3 md:px-3 px-0 lg:py-3 md:py-3 py-0 my-[10px] lg:mr-0 md:mr-0 mr-[40px]" 
                                        :class="selectedTab == 'detail' ? 
                                            ' lg:text-[#F02148] md:text-[#F02148] text-white border-red-gradient border-b border-[#F02148]' : 
                                            'lg:text-white md:text-white text-[#999] border-none'"
                                        id="tabs-detail-tab" data-bs-toggle="pill" 
                                        data-bs-target="#tabs-detail" role="tab" aria-controls="tabs-detail"
                                        aria-selected="true" @click="() => handleTab('detail')">
                                        简介 <small></small>
                                    </p>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <p class=" text-white cursor-pointer lg:text-center md:text-center text-left
                                        nav-link block font-medium lg:text-[20px] md:text-[18px] text-[16px] 
                                        lg:leading-[28px] md:leading-[25px] leading-[22.4px] uppercase
                                        border-x-0 border-t-0 lg:px-6 md:px-3 px-0 lg:py-3 md:py-3 py-0 my-[10px]" 
                                        :class="selectedTab == 'discuss' ? 
                                            ' lg:text-[#F02148] md:text-[#F02148] text-white border-red-gradient border-b border-[#F02148] ' : 
                                            'lg:text-white md:text-white text-[#999] border-none'"
                                        id="tabs-discuss-tab" data-bs-toggle="pill" d
                                        ata-bs-target="#tabs-discuss" role="tab" aria-controls="tabs-discuss" 
                                        aria-selected="false" @click="() => handleTab('discuss')">
                                        讨论 <small>819</small>
                                    </p>
                                </li>
                                <span class="absolute top-[10px] right-0 text-[#B2B2B2] text-[12px] leading-[16.8px] font-medium 
                                    lg:ml-[40px] md:ml-[20px] lg:hidden md:hidden block">
                                    <i class="fa fa-heart mr-[7px] text-[15px]"></i>
                                    21.8W
                                </span>
                            </ul>
                            <div class="tab-content" id="tabs-tabContent">
                                <div class="tab-pane fade text-white" :class="selectedTab == 'detail' ? 'show active block' : 'hidden'"
                                    id="tabs-detail" role="tabpanel" aria-labelledby="tabs-detail-tab">
                                    <h3 class="lg:text-[22px] md:text-[20px] text-[18px] lg:leading-[30.8px] md:leading-[27px] leading-[25.2px]
                                        lg:text-white md:text-white text-[#F2F2F2] lg:mt-[22px] md:mt-[15px] mt-[10px]">
                                        大话西游之大圣娶亲
                                    </h3>
                                    <div class="grid grid-cols-2">
                                        <div>
                                            <span class="text-[#999] text-[12px] leading-[14px] font-medium mr-[16px]">
                                                <i class="far fa-clock text-[#1890FF] mr-[6px]"></i>
                                                {{ movie.detail.time }} 分钟
                                            </span>

                                            <span class="text-[#999] text-[12px] leading-[14px] font-medium">
                                                <i class="fa fa-star text-[#FFA426] mr-[6px]"></i>
                                                {{ movie.detail.starScore }}
                                            </span>
                                        </div>
                                        <div class="text-right lg:hidden md:hidden block">
                                            <button class="text-[14px] text-[#999] leading-[19.6px] font-medium"
                                                @click="handleModal">
                                                简介 <i class="fas fa-angle-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="lg:mt-[26px] md:mt-[21px] mt-[16px] text-[#A0A0A0] text-[12px]
                                        lg:leading-[18px] md:leading-[17px] leading-[16px] font-medium">
                                        <div class="flex flex-row">
                                            <div class="mr-2">导演: </div>
                                            <div> {{ movie.detail.director }}</div>
                                        </div>
                                        <div class="flex flex-row">
                                            <div class="mr-2 lg:w-[50px] md:w-[38px]">主演: </div>
                                            <div> {{ movie.detail.starring }}</div>
                                        </div>
                                        <div class="flex flex-row">
                                            <div class="mr-2">类型: </div>
                                            <div> {{ movie.detail.type }}</div>
                                        </div>
                                        <div class="flex flex-row">
                                            <div class="mr-2">制片地区: </div>
                                            <div> {{ movie.detail.productionArea }}</div>
                                        </div>
                                        <div class="flex flex-row">
                                            <div class="mr-2">首播: </div>
                                            <div> {{ movie.detail.premiere }}</div>
                                        </div>
                                    </div>

                                    <div class="lg:mt-[40px] md:mt-[20px] text-[14px] leading-[21px] text-white overflow_text_3 description">
                                        {{ movie.detail.description }}
                                    </div>
                                </div>
                                <div class="tab-pane fade text-white h-[345px] overflow-y-auto" 
                                    :class="selectedTab == 'discuss' ? 'show active block' : 'hidden'"
                                    id="tabs-discuss" role="tabpanel" aria-labelledby="tabs-discuss-tab">
                                    <div v-for="discuss in movie.discussList" :key="discuss.id" 
                                        class="mt-[20px] flex flex-row border-b-[0.2px] pb-[24px]
                                            lg:border-[#ffffff1a] md:border-[#ffffff1a] border-[#515151]">
                                        <div class="mr-2">
                                            <img :src="discuss.avatar" :alt="discuss.name" class="w-[36px] h-[36px]" />
                                        </div>
                                        <div class="grid grid-cols-2 lg:hidden md:hidden w-full">
                                            <div class="col-span-1">
                                                <p class="text-[14px] text-[#999] leading-[19.6px]">{{ discuss.name }}</p>
                                                <span class="text-[12px] text-[#666] mr-2">{{ discuss.time }}</span>
                                                <span class="text-[12px] text-[#666]">{{ discuss.position }}</span>
                                            </div>
                                            <div class="col-span-1">
                                                <div class="flex justify-center items-center">
                                                    <span class="text-[#999] text-[12px] font-medium mr-[25px]">
                                                        <i class="far fa-thumbs-up text-[16px]"></i> 8657
                                                    </span>
                                                    <span class="text-[#999] text-[12px] font-medium">
                                                        <i class="fas fa-comment-dots text-[16px]"></i> 250
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-span-2">
                                                <p class="text-[16px] leading-[22.4px] text-white pr-[40px]">
                                                    {{ discuss.content }}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="lg:block md:block hidden w-3/4">
                                            <div>
                                                <p class="text-[#FF9900] text-[14px] font-medium leading-[19.6px] mb-[9px]">{{ discuss.name }}</p>
                                                <p class="text-white text-[14px] font-medium leading-[19.6px] mb-[11px]">{{ discuss.content }}</p>
                                            </div>
                                            <div class="grid grid-cols-2">
                                                <div class="text-left">
                                                    <span class="text-[#666] text-[12px] leading-[16.3px] font-medium">
                                                        {{ discuss.time }}·{{ discuss.position }}
                                                    </span>
                                                    <span class="text-white text-[12px] leading-[16.3px] font-medium ml-2">回复</span>
                                                </div>
                                                <div class="text-right">
                                                    <span class="text-[#999] text-[12px] font-medium mr-[25px] text-right">
                                                        <i class="far fa-thumbs-up text-[16px]"></i> 8657
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="movie.detail.movieType == 2">
                        <div class="lg:grid md:grid hidden lg:grid-cols-6 md:grid-cols-5 grid-cols-1 pt-[10px]">
                            <div class="lg:col-span-4 md:col-span-3 col-span-1">
                                <h3 class="pt-[10px] lg:text-[32px] md:text-[24px] text-[16px] text-white
                                    lg:leading-[44.8px] md:leading-[33.6px] leading-[22.4px] lg:pb-1 md:pb-[6px] pb-[11px]">
                                    剧集
                                </h3>
                                <div class="grid lg:grid-cols-10 md:grid-cols-6 gap-1 pr-[10px]" v-if="showAllVolumn">
                                    <div class="w-full" v-for="i in movie.detail.volumn" :key="i" >
                                        <button class="rounded-[2px] text-[16px] leading-[22.4px] py-2 px-[14px] w-full" 
                                            :class="selectedVolumn == i ? 'bg-[#f0214840] text-[#F02148]' : 'bg-[#333] text-white'"
                                            @click="() => handleVolumn(i)">
                                            {{ i }}集
                                        </button>
                                    </div>
                                </div>
                                <div class="grid lg:grid-cols-10 md:grid-cols-6 gap-1 pr-[10px]" v-else>
                                    <div class="w-full" v-for="i in 20" :key="i">
                                        <button class="rounded-[2px] text-[16px] leading-[22.4px] py-2 px-[14px] w-full" 
                                            :class="selectedVolumn == i ? 'bg-[#f0214840] text-[#F02148]' : 'bg-[#333] text-white'"
                                            @click="() => handleVolumn(i)">
                                            {{ i }}集
                                        </button>
                                    </div>
                                </div>
                                <div class="mt-[15px]" @click="() => handleShowAllVolumn()">
                                    <span class="text-[14px] text-[#999] leading-[19px]">
                                        显示全部剧集
                                        <i class="fas fa-angle-down	ml-2" v-if="!showAllVolumn"></i>
                                        <i class="fas fa-angle-up ml-2" v-else></i>
                                    </span>
                                </div>
                            </div>
                            <div class="lg:col-span-2 md:col-span-2 col-span-1 pl-[10px]">
                                <img src="../../assets/chinese_pc/movie/banner_movie2_pc.png" alt="banner" />
                            </div>
                        </div>
                        <div class="lg:hidden md:hidden block px-[16px]">
                            <h3 class="text-[16px] text-white border-left-red-gradient border-l-[4px] 
                                pl-[2px] mt-[16px] mb-[11px]">
                                选集
                            </h3>
                            <section ref="el" style="width: 100%; overflow: auto; display: flex"
                                :style="{ cursor: isDragging ? 'grabbing' : 'grab', scrollSnapType: isDragging ? '' : '', }"
                                @mousedown="onMouseDown"
                                @mouseup="onMouseUp">
                                <div v-for="i in movie.detail.volumn" :key="i"
                                    style="scroll-snap-align: start;" class="mr-2">
                                    <button @click="() => handleVolumn(i)"
                                        class="rounded-[4px] text-[16px] leading-[22.4px] py-1 px-[10px] w-full font-bold border" 
                                        :class="selectedVolumn == i ? 'border-[#F02148] text-[#F02148]' : 'border-[#666] text-white'">
                                        {{ i }}
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <div class="lg:mt-10 md:mt-6 mt-[7px] px-[16px] relative" v-if="movie.detail.movieType == 1">
                    <img src="../../assets/chinese_pc/movie/banner_movie1_pc.png" alt="banner" class="rounded-[4px] lg:block md:block hidden" />
                    <img src="../../assets/chinese_mobile/movie/banner_movie1_mobile.png" alt="banner" class="rounded-[4px] lg:hidden md:hidden block w-full" />
                    <div class="absolute text-[10px] leading-[15px] font-medium text-white left-[26px] top-0">
                        广告
                    </div>
                    <div class="absolute text-[12px] bg-[#00000040] rounded-full text-white right-[20px] top-[4px]">
                        <i class="fa fa-close mx-[5px]"></i>
                    </div>
                </div>

                <div class="lg:mt-[52px] md:mt-[36px] mt-[20px] px-[10px]">
                    <div>
                        <h3 class="lg:text-[32px] md:text-[24px] text-[16px] lg:leading-[44.8px] md:leading-[35px] leading-[22.4px] 
                            text-white lg:mb-[20px] md:mb-[15px] mb-[10px] font-bold">猜你喜欢</h3>
                        <div class="grid lg:grid-cols-6 md:lg:grid-cols-5 grid-cols-3 gap-3">
                            <div v-for="item in guessingList" :key="item.id"
                                class="relative">
                                <div class="relative">
                                    <img :alt="item.title" :src="item.img_pc" class="rounded-[8px] w-full" />
                                    <div class="absolute top-[4px] text-white lg:text-[12px] md:text-[11px] text-[10px] font-medium
                                        lg:right-0 md:right-0 right-[4px] lg:bg-[#f0214880] md:bg-[#f0214880] bg-[#00000080] text-center
                                        lg:px-2 md:px-2 px-1 lg:rounded-l-[12px] md:rounded-l-[12px] rounded">
                                        电影
                                    </div>
                                </div>
                                <div class="block">
                                    <span class="my-1 lg:text-[18px] md:text-[17px] text-[16px] lg:leading-[25px] md:leading-[20px] font-bold
                                        text-white text-left truncate">{{ item.title }}</span>
                                    <span class="my-[7px] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[15px]
                                        text-[#F02148] font-medium float-right
                                        lg:relative md:relative absolute 
                                        lg:bottom-0 md:bottom-0 right-[5px] bottom-[45px]">{{ item.score }}</span>
                                </div>
                                <div class="block">
                                    <p class="text-[#999] font-medium lg:text-[14px] md:text-[12px] text-[10px] overflow_text
                                        lg:leading-[19.6px] md:leading-[15px]">
                                        {{ item.starring }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-show="isModalVisible">
        <transition name="modal-fade">
            <div class="modal-backdrop">
                <div class="modal" 
                    role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                    <div class="bg-[#2C2C2C] rounded-[8px] box-shadow">
                        <header class="modal-header text-white text-center text-[18px] leading-[26px] font-medium 
                            mx-auto py-[10px]" id="modalTitle">
                            <slot name="header">
                                简介
                            </slot>
                        </header>

                        <section class="modal-body text-white text-[14px] leading-[22px] px-5 pb-[40px]" 
                            id="modalDescription">
                            <slot name="body">
                                {{ movie.detail.description }}
                            </slot>
                        </section>
                    </div>

                    <button type="button" @click="handleModal" aria-label="Close modal"
                        class="btn-close border rounded-full border-white cursor-pointer mx-auto mt-[80px] block">
                        <i class="fa fa-close text-[15px] text-white px-[7px]"></i>
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'PlayMovie',
    data() {
        return {
            movie: {
                detail: {
                    id: "1",
                    title: "大话西游之大圣娶亲",
                    url: "/src/assets/chinese_pc/movie/play_movie1_pc.png",
                    time: "152",
                    starScore: "9.6",
                    director: "刘镇伟",
                    starring: "周星驰 朱茵 莫文蔚 罗家英 吴孟达 蔡 少芬 蓝洁瑛 刘镇伟",
                    type: "喜剧 爱情 动作 奇幻 冒险",
                    productionArea: "中国香港",
                    premiere: "2014-10-24",
                    description: "该片主要讲述了至尊宝为了救白晶晶而穿越回到五百年前，遇见紫霞仙子之后发生一段感情并最终成长为孙悟空的故事......",
                    discussCount: 1125,
                    movieType: 2,
                    volumn: 56,
                },
                discussList: [
                    { id: 1, avatar: "/src/assets/chinese_pc/movie/discuss_avatar1_pc.png", name: "桐桐的夏天",
                        content: "伊甸园，已是黄昏独自愁", time: "10-21", position: "云南", thumnail: "8657" },
                    { id: 2, avatar: "/src/assets/chinese_pc/movie/discuss_avatar2_pc.png", name: "奔跑在孤傲的路上",
                        content: "不得不说，拍的太短了，更长点就好了。", time: "10-15", position: "湖北", thumnail: "4583" },
                    { id: 3, avatar: "/src/assets/chinese_pc/movie/discuss_avatar3_pc.png", name: "Dame2003",
                        content: "太有想象力了，整个片子有种独有的情怀！", time: "10-08", position: "河南", thumnail: "651" },
                    { id: 4, avatar: "/src/assets/chinese_pc/movie/discuss_avatar4_pc.png", name: "灰飞烟灭",
                        content: "烽烟滚，黄沙漫。。。", time: "10-08", position: "河南", thumnail: "651" },
                ]
            },
            selectedTab: 'detail',
            selectedVolumn: "1",
            showAllVolumn: false,
            isDragging: false,
            cursorPos: [0, 0],
            el: null,
            isModalVisible: false,
        };
    },
    mounted() {
        window.addEventListener("mouseup", this.onMouseUp);
    },
    destroyed() {
        window.removeEventListener("mouseup", this.onMouseUp);
    },
    methods: {
        toggleBtn: function () {
            this.showSearchGroup = !this.showSearchGroup;
        },
        handleTab: function (tabName) {
            this.selectedTab = tabName;
        },
        handleVolumn: function (volumn) {
            this.selectedVolumn = volumn;
        },
        handleShowAllVolumn: function () {
            this.showAllVolumn = !this.showAllVolumn;
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

        handleModal: function () {
            this.isModalVisible = !this.isModalVisible
        }
    },
}
</script>

<style>
.overflow_text_3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

@media (max-width: 767px) {
    .description {
        display: none;
    }

    .border-red-gradient {
        border-image-source: linear-gradient(to right, #F02148 0%, #f0214800 100%);
        border-bottom: 4px solid;
        border-image-slice: 1;
    }

    .border-left-red-gradient {
        border-image-source: linear-gradient( #F02148 0%, #f0214800 100%);
        border-bottom: 4px solid;
        border-image-slice: 1;
    }
}

.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    overflow-x: auto;
    display: block;
    flex-direction: column;
    width: 270px;
}

.box-shadow {
    box-shadow: 2px 2px 20px 1px;
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease;
}
</style>