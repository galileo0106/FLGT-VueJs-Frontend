<script setup>
</script>

<template>
    <div class="w-full font-normal_font">
        <div class="lg:bg-movie_bg_pc md:bg-movie_bg_pc bg-black h-full lg:pb-[60px] md:pb-[40px] pb-[20px]">
            <div class="lg:max-w-[1120px] mx-auto lg:px-[10px] md:px-[10px] px-0 lg:py-[20px] md:py-[20px] py-0">
                <div class="lg:flex md:flex hidden flex-row">
                    <div class="lg:min-w-[830px] md:min-w-[500px] bg-[#2e323bbf]"
                        :class="selectedTab1 == 'desc' ? 'h-[702px]' : 'h-[1181px]'">
                        <div class="w-full">
                            <video-player controls
                                class="w-full"
                                :poster="coverUrl"
                                :src="movieUrl"
                                aspectRatio="16:9"
                            />
                        </div>
                        <div class="">
                            <div class="relative py-[10px] px-4">
                                <h3 class="lg:text-[32px] md:text-[24px] text-[20px] truncate font-medium
                                    lg:leading-[44.8px] md:leading-[33.6px] leading-[22.4px] text-white">
                                    {{ movie.detail.title }}
                                </h3>
                                <div class="absolute right-4 top-[25px]">
                                    <span class="text-[#A0A0A0] text-[12px] leading-[16.8px] font-medium">
                                        <i class="fa fa-heart mr-[7px]"></i>
                                        {{ movie.detail.likes }}
                                    </span>
                                    <span class="text-[#A0A0A0] text-[12px] leading-[16.8px] font-medium 
                                        lg:ml-[40px] md:ml-[20px]">
                                        <i class="fa fa-share mr-[7px]"></i>
                                        分享
                                    </span>
                                </div>
                            </div>
                            <div class="pt-[10px] pb-[40px]">
                                <ul class="nav nav-tabs flex flex-row md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" 
                                    id="tabs-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <p class="text-white cursor-pointer lg:text-center md:text-center text-left
                                            nav-link block font-medium lg:text-[20px] md:text-[18px] text-[16px] 
                                            lg:leading-[28px] md:leading-[25px] leading-[22.4px] uppercase
                                            border-x-0 border-t-0 lg:px-3 md:px-3 px-0 lg:mr-0 md:mr-0 mr-[40px]" 
                                            :class="selectedTab1 == 'desc' ? 
                                                ' lg:text-[#F02148] md:text-[#F02148] text-white' : 
                                                'lg:text-white md:text-white text-[#999]'"
                                            id="tabs-desc-tab" data-bs-toggle="pill" 
                                            data-bs-target="#tabs-desc" role="tab" aria-controls="tabs-desc"
                                            aria-selected="true" @click="() => handleTab1('desc')">
                                            简介 <small></small>
                                        </p>
                                        <div class="border-red-gradient border-b border-[#F02148] w-[20px] mx-auto"
                                            :class="selectedTab1 == 'desc' ? 'block': 'hidden'"></div>
                                    </li>
                                    <li class="nav-item lg:px-6 md:px-3 px-0 flex" role="presentation">
                                        <span>
                                            <span class=" text-white cursor-pointer lg:text-center md:text-center text-left
                                                nav-link block font-medium lg:text-[20px] md:text-[18px] text-[16px] 
                                                lg:leading-[28px] md:leading-[25px] leading-[22.4px] uppercase
                                                border-x-0 border-t-0" 
                                                :class="selectedTab1 == 'discuss' ? 
                                                    ' lg:text-[#F02148] md:text-[#F02148] text-white' : 
                                                    'lg:text-white md:text-white text-[#999]'"
                                                id="tabs-discuss-tab" data-bs-toggle="pill" d
                                                ata-bs-target="#tabs-discuss" role="tab" aria-controls="tabs-discuss" 
                                                aria-selected="false" @click="() => handleTab1('discuss')">
                                                讨论 
                                            </span>
                                            <div class="border-red-gradient border-b border-[#F02148] w-[20px] mx-auto"
                                                :class="selectedTab1 == 'discuss' ? 'block': 'hidden'"></div>
                                        </span>
                                        <small class="ml-1 pt-2"
                                            :class="selectedTab1 == 'discuss' ? 'lg:text-[#F02148] md:text-[#F02148] text-white' : 
                                                'lg:text-white md:text-white text-[#999]'">
                                            {{ movie.discuss.count }}
                                        </small>
                                    </li>
                                </ul>
                                <div class="tab-content" id="tabs-tabContent">
                                    <div class="tab-pane fade text-white" :class="selectedTab1 == 'desc' ? 'show active block' : 'hidden'"
                                        id="tabs-desc" role="tabpanel" aria-labelledby="tabs-desc-tab">
                                        <div class="lg:mt-[40px] md:mt-[20px] lg:mx-[20px] md:mx-[15px] mx-[10px] 
                                            h-[70px] overflow-y-auto w-[95%]">
                                            <span class="text-[14px] leading-[21px] text-white description"
                                                :class="!showAllDesc ? 'overflow_text_2' : ''">
                                                {{ movie.detail.desc }}
                                            </span>
                                            <span class="text-[14px] text-[#15C3CA] leading-[19.6px] font-medium"
                                                @click="handleShowDesc">
                                                {{ !showAllDesc ? '展开' : '收起' }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade text-white h-[570px] overflow-y-auto px-4 w-full lg:min-w-[800px] md:min-w-[500px]" 
                                        :class="selectedTab1 == 'discuss' ? 'show active block' : 'hidden'"
                                        id="tabs-discuss" role="tabpanel" aria-labelledby="tabs-discuss-tab">
                                        <div class="lg:my-[20px] md:my-[15px] my-[10px] py-[10px] flex px-[13px]">
                                            <div class="lg:w-[36px] lg:h-[36px] md:w-[30px] md:h-[30px] w-[24px] h-[24px] bg-[#A7A7A7] rounded-full">
                                                <i class="fa fa-user text-[#C4C4C4] mx-auto w-full lg:pt-[10px] md:pt-[7px] pt-1"></i>
                                            </div>
                                            <div class=" pl-2 pr-[20px] w-4/5">
                                                <input type="text" class="rounded bg-[#2C2C2C] lg:text-[12px] md:text-[10px] text-[8px]
                                                    text-[#ffffff80] p-[10px] w-full outline-none" placeholder="参与讨论" />
                                            </div>
                                            <div class="mr-[23px]">
                                                <button class="bg-[#2C2C2C] rounded lg:text-[14px] md:text-[12px] text-[10px] text-white font-medium leading-[19.6px] 
                                                    lg:w-[60px] md:w-[50px] py-[9px] px4">
                                                    发布
                                                </button>
                                            </div>
                                        </div>
                                        <div class="w-full bg-[#ffffff1a] h-[1px]"></div>
                                        <div v-for="discuss in movie.discuss.list" :key="discuss.id" 
                                            class="mt-[20px] flex flex-row">
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
                                                <div class="grid grid-cols-4 lg:border-[#ffffff1a] md:border-[#ffffff1a] border-[#515151] 
                                                    border-b-[0.2px]  pb-[24px]">
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
                    </div>
                    <div class="lg:max-w-[300px] w-full lg:py-[20px] md:py-[15px] py-[10px] lg:px-4 md:px-3 px-2
                        overflow-y-auto" :class="selectedTab1 == 'desc' ? 'h-[702px]' : 'h-[1181px]'">
                        <ul class="nav nav-tabs flex flex-row md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" 
                            id="tabs-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <p class="text-white cursor-pointer lg:text-center md:text-center text-left
                                    nav-link block font-medium lg:text-[20px] md:text-[18px] text-[16px] 
                                    lg:leading-[28px] md:leading-[25px] leading-[22.4px] uppercase
                                    border-x-0 border-t-0 lg:px-3 md:px-3 px-0 lg:mr-0 md:mr-0 mr-[40px]" 
                                    :class="selectedTab2 == 'volumn' ? 
                                        ' lg:text-[#F02148] md:text-[#F02148] text-white' : 
                                        'lg:text-white md:text-white text-[#999]'"
                                    id="tabs-volumn-tab" data-bs-toggle="pill" 
                                    data-bs-target="#tabs-volumn" role="tab" aria-controls="tabs-volumn"
                                    aria-selected="true" @click="() => handleTab2('volumn')">
                                    剧集
                                </p>
                                <div class="border-red-gradient border-b border-[#F02148] w-[20px] mx-auto"
                                    :class="selectedTab2 == 'volumn' ? 'block': 'hidden'"></div>
                            </li>
                            <li class="nav-item lg:px-6 md:px-3 px-0 flex" role="presentation">
                                <span>
                                    <span class=" text-white cursor-pointer lg:text-center md:text-center text-left
                                        nav-link block font-medium lg:text-[20px] md:text-[18px] text-[16px] 
                                        lg:leading-[28px] md:leading-[25px] leading-[22.4px] uppercase
                                        border-x-0 border-t-0" 
                                        :class="selectedTab2 == 'detail' ? 
                                            ' lg:text-[#F02148] md:text-[#F02148] text-white' : 
                                            'lg:text-white md:text-white text-[#999]'"
                                        id="tabs-detail-tab" data-bs-toggle="pill" d
                                        ata-bs-target="#tabs-detail" role="tab" aria-controls="tabs-detail" 
                                        aria-selected="false" @click="() => handleTab2('detail')">
                                        详情
                                    </span>
                                    <div class="border-red-gradient border-b border-[#F02148] w-[20px] mx-auto"
                                        :class="selectedTab2 == 'detail' ? 'block': 'hidden'"></div>
                                </span>
                            </li>
                        </ul>
                        <div class="tab-content overflow-y-auto" id="tabs-tabContent">
                            <div class="tab-pane fade text-white" :class="selectedTab2 == 'volumn' ? 'show active block' : 'hidden'"
                                id="tabs-volumn" role="tabpanel" aria-labelledby="tabs-volumn-tab">
                                <div class="lg:mt-[20px] md:mt-[15px] mt-[10px]">
                                    <div class="w-[55px] inline-block mr-[10px] mt-[10px]" v-for="i in movie.detail.sort" :key="i">
                                        <button class="rounded-[2px] text-[16px] leading-[22.4px] py-2 w-full" 
                                            :class="selectedVolumn == i ? 'bg-[#f0214840] text-[#F02148]' : 'bg-[#333] text-white'"
                                            @click="() => handleVolumn(i)">
                                            {{ i }}集
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade text-whiteoverflow-y-auto px-4" 
                                :class="selectedTab2 == 'detail' ? 'show active block' : 'hidden'"
                                id="tabs-detail" role="tabpanel" aria-labelledby="tabs-detail-tab">
                                <div class="lg:mt-5 md:mt-4 mt-3">
                                    <div class="lg:text-[12px] md:text-[10px] text-[8px] lg:leading-[24px] md:leading-[20px] leading-[16px]">
                                        <span class="text-[#A0A0A0]">导演：</span>
                                        <span class="text-white">{{ movie.detail.director }}</span>
                                    </div>
                                    <div class="lg:text-[12px] md:text-[10px] text-[8px] lg:leading-[24px] md:leading-[20px] leading-[16px]">
                                        <span class="text-[#A0A0A0]">主演：</span>
                                        <span class="text-white">{{ movie.detail.actor }}</span>
                                    </div>
                                    <div class="lg:text-[12px] md:text-[10px] text-[8px] lg:leading-[24px] md:leading-[20px] leading-[16px]">
                                        <span class="text-[#A0A0A0]">类型：</span>
                                        <span class="text-white">{{ movie.detail.kind }}</span>
                                    </div>
                                    <div class="lg:text-[12px] md:text-[10px] text-[8px] lg:leading-[24px] md:leading-[20px] leading-[16px]">
                                        <span class="text-[#A0A0A0]">制片地区：</span>
                                        <span class="text-white">{{ movie.detail.region }}</span>
                                    </div>
                                    <div class="lg:text-[12px] md:text-[10px] text-[8px] lg:leading-[24px] md:leading-[20px] leading-[16px]">
                                        <span class="text-[#A0A0A0]">语言：</span>
                                        <span class="text-white">{{ movie.detail.language }}</span>
                                    </div>
                                    <div class="lg:text-[12px] md:text-[10px] text-[8px] lg:leading-[24px] md:leading-[20px] leading-[16px]">
                                        <span class="text-[#A0A0A0]">评分：</span>
                                        <span class="text-white">{{ movie.detail.grade }}分</span>
                                    </div>
                                    <div class="lg:text-[12px] md:text-[10px] text-[8px] lg:leading-[24px] md:leading-[20px] leading-[16px]">
                                        <span class="text-[#A0A0A0]">上映时间：</span>
                                        <span class="text-white">{{ movie.detail.times }}</span>
                                    </div>
                                    <div class="lg:text-[12px] md:text-[10px] text-[8px] lg:leading-[24px] md:leading-[20px] leading-[16px]">
                                        <span class="text-[#A0A0A0]">影片时长：</span>
                                        <span class="text-white">{{ movie.detail.duration }}分钟</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:mt-[35px] md:mt-[28px] mt-[20px]">
                            <h3 class="lg:text-[20px] md:text-[17px] text-[14px] lg:leading-[28px] md:leading-[24px] leading-[20px]
                                text-white font-medium lg:mb-[15px] md:mb-4 mb-3">推荐</h3>
                            <div class="mb-4" v-for="item in movie.recommendList" :key="item.id">
                                <div class="flex">
                                    <img :src="item.cover" :alt="item.title" class="max-w-[128px]" />
                                    <div class="px-1">
                                        <h3 class="lg:text-[14px] md:text-[12px] text-[10px] leading-[19.6px] text-white">
                                            {{ item.title }}
                                        </h3>
                                        <p class="mt-1 text-[#999] lg:text-[12px] md:text-[10px] text-[8px]"
                                            :class="item.volumn == 1 ? 'hidden' : 'block'">
                                            全 {{ item.volumn }} 集
                                        </p>
                                        <div class="mt-[10px] flex">
                                            <span class="border border-[#B2B2B2] rounded px-2 py-1 flex">
                                                <i class="fa fa-play text-[#B2B2B2] w-[6px] h-[8px]"></i>
                                            </span>
                                            <span class="ml-1 text-[#999] lg:text-[12px] md:text-[10px] text-[8px]">
                                                {{ item.viewsNum }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:hidden md:hidden block">
                    <div class="relative">
                        <video-player controls class="w-full h-[210px]" 
                            :poster="coverUrl" 
                            :src="movieUrl"
                            aspectRatio="16:9"/>
                        <div class="absolute top-[6px] right-[12px] bg-[#00000080] text-white 
                            text-[12px] leading-[16.8px] font-medium py-[2px] px-2 rounded-[24px]
                            lg:hidden md:hidden block">
                            3秒后跳过
                        </div>
                    </div>
                    <div class="pt-[10px] px-4 pb-[7px]">
                        <ul class="nav nav-tabs flex flex-row md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 relative" 
                            id="tabs-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <p class="text-white cursor-pointer lg:text-center md:text-center text-left
                                    nav-link block font-medium lg:text-[20px] md:text-[18px] text-[16px] 
                                    lg:leading-[28px] md:leading-[25px] leading-[22.4px] uppercase
                                    border-x-0 border-t-0 lg:px-3 md:px-3 px-0 lg:mr-0 md:mr-0" 
                                    :class="selectedMobileTab == 'desc' ? 
                                        ' lg:text-[#F02148] md:text-[#F02148] text-white' : 
                                        'lg:text-white md:text-white text-[#999]'"
                                    id="tabs-desc-tab" data-bs-toggle="pill" 
                                    data-bs-target="#tabs-desc" role="tab" aria-controls="tabs-desc"
                                    aria-selected="true" @click="() => handleMobileTab('desc')">
                                    详情 <small></small>
                                </p>
                                <div class="border-red-gradient border-b border-[#F02148] w-[20px] mx-auto"
                                    :class="selectedMobileTab == 'desc' ? 'block': 'hidden'"></div>
                            </li>
                            <li class="nav-item pl-[40px] flex" role="presentation">
                                <span>
                                    <span class=" text-white cursor-pointer lg:text-center md:text-center text-left
                                        nav-link block font-medium lg:text-[20px] md:text-[18px] text-[16px] 
                                        lg:leading-[28px] md:leading-[25px] leading-[22.4px] uppercase
                                        border-x-0 border-t-0" 
                                        :class="selectedMobileTab == 'discuss' ? 
                                            ' lg:text-[#F02148] md:text-[#F02148] text-white' : 
                                            'lg:text-white md:text-white text-[#999]'"
                                        id="tabs-discuss-tab" data-bs-toggle="pill" d
                                        ata-bs-target="#tabs-discuss" role="tab" aria-controls="tabs-discuss" 
                                        aria-selected="false" @click="() => handleMobileTab('discuss')">
                                        讨论 
                                    </span>
                                    <div class="border-red-gradient border-b border-[#F02148] w-[20px] mx-auto"
                                        :class="selectedMobileTab == 'discuss' ? 'block': 'hidden'"></div>
                                </span>
                                <small class="ml-1 pt-2"
                                    :class="selectedMobileTab == 'discuss' ? 'lg:text-[#F02148] md:text-[#F02148] text-white' : 
                                        'lg:text-white md:text-white text-[#999]'">
                                    {{ movie.discuss.count }}
                                </small>
                            </li>
                            <span class="absolute top-[10px] right-0 text-[#B2B2B2] text-[12px] leading-[16.8px] font-medium 
                                lg:ml-[40px] md:ml-[20px] lg:hidden md:hidden block">
                                <i class="fa fa-heart mr-[7px] text-[15px]"></i>
                                {{ movie.detail.likes ? movie.detail.likes.toFixed(1): 0 }}
                            </span>
                        </ul>
                        <div class="tab-content" id="tabs-tabContent">
                            <div class="tab-pane fade text-white" :class="selectedMobileTab == 'desc' ? 'show active block' : 'hidden'"
                                id="tabs-desc" role="tabpanel" aria-labelledby="tabs-desc-tab">
                                <div class="mt-[10px]">
                                    <h3 class="lg:text-[22px] md:text-[20px] text-[18px] lg:leading-[30.8px] md:leading-[27px] leading-[25.2px]
                                        lg:text-white md:text-white text-[#F2F2F2] lg:mt-[22px] md:mt-[15px] mt-[10px]">
                                        {{ movie.detail.title }}
                                    </h3>
                                    <div class="grid grid-cols-2">
                                        <div>
                                            <span class="text-[#999] text-[12px] leading-[14px] font-medium mr-[16px]">
                                                <i class="far fa-clock text-[#1890FF] mr-[6px]"></i>
                                                {{ movie.detail.duration }} 分钟
                                            </span>

                                            <span class="text-[#999] text-[12px] leading-[14px] font-medium">
                                                <i class="fa fa-star text-[#FFA426] mr-[6px]"></i>
                                                {{ movie.detail.grade ? movie.detail.grade.toFixed(1) : 0 }}
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
                                            <div> {{ movie.detail.actor }}</div>
                                        </div>
                                        <div class="flex flex-row">
                                            <div class="mr-2">类型: </div>
                                            <div> {{ movie.detail.kind }}</div>
                                        </div>
                                        <div class="flex flex-row">
                                            <div class="mr-2">制片地区: </div>
                                            <div> {{ movie.detail.region }}</div>
                                        </div>
                                        <div class="flex flex-row">
                                            <div class="mr-2">首播: </div>
                                            <div> {{ movie.detail.times }}</div>
                                        </div>
                                    </div>

                                    <div class="lg:mt-[40px] md:mt-[20px] text-[14px] leading-[21px] text-white overflow_text_3 description">
                                        {{ movie.detail.description }}
                                    </div>
                                    <div class="lg:hidden md:hidden"
                                        :class="movie.detail.isIpfs == 1 ? 'hidden' : 'block'">
                                        <h3 class="text-[16px] text-white border-left-red-gradient border-l-[4px] 
                                            pl-[2px] mt-[16px] mb-[11px]">
                                            选集
                                        </h3>
                                        <section ref="el" style="width: 100%; overflow: auto; display: flex"
                                            :style="{ cursor: isDragging ? 'grabbing' : 'grab', scrollSnapType: isDragging ? '' : '', }"
                                            @mousedown="onMouseDown"
                                            @mouseup="onMouseUp">
                                            <div v-for="i in movie.detail.isIpfs" :key="i"
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
                            <div class="tab-pane fade text-white h-[570px] overflow-y-auto w-full relative" 
                                :class="selectedMobileTab == 'discuss' ? 'show active block' : 'hidden'"
                                id="tabs-discuss" role="tabpanel" aria-labelledby="tabs-discuss-tab">
                                <div v-for="discuss in movie.discuss.list" :key="discuss.id" 
                                    class="mt-[20px] flex flex-row border-b-[0.2px] pb-[24px] px-4
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
                                </div>
                                <div class="absolute bottom-0 w-full">
                                    <div class="bg-[#515151] h-[1px] w-full"></div>
                                    <input type="text" class="rounded bg-[#2C2C2C] text-[14px] mt-[10px]
                                        text-[#ffffff80] p-[10px] w-full outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:mt-10 md:mt-6 mt-[7px] px-[16px] relative">
                    <img src="../../assets/chinese_pc/movie/banner_movie1_pc.png" alt="banner" class="rounded-[4px] lg:block md:block hidden" />
                    <img src="../../assets/chinese_mobile/movie/banner_movie1_mobile.png" alt="banner" class="rounded-[4px] lg:hidden md:hidden block w-full" />
                    <div class="lg:hidden md:hidden block">
                        <div class="absolute text-[10px] leading-[15px] font-medium text-white left-[26px] top-0">
                            广告
                        </div>
                        <div class="absolute text-[12px] bg-[#00000040] rounded-full text-white right-[20px] top-[4px]">
                            <i class="fa fa-close mx-[5px]"></i>
                        </div>
                    </div>
                </div>

                <div class="lg:mt-[52px] md:mt-[36px] mt-[20px] px-[10px]">
                    <div>
                        <h3 class="lg:text-[32px] md:text-[24px] text-[16px] lg:leading-[44.8px] md:leading-[35px] leading-[22.4px] 
                            text-white lg:mb-[20px] md:mb-[15px] mb-[10px] font-bold">猜你喜欢</h3>
                        <div class="grid lg:grid-cols-6 md:lg:grid-cols-5 grid-cols-3 gap-3">
                            <div v-for="item in movieList" :key="item.id"
                                class="relative cursor-pointer">
                                <div @click="() => getMovie(item.id)">
                                    <div class="relative">
                                        <img :alt="item.title" class="rounded-[8px] w-full lg:h-[225px] md:h-[200px] h-[168px]"
                                            :src="'http://20.198.170.39:8080/' + item.cover2" />
                                        <div class="absolute top-[4px] text-white lg:text-[12px] md:text-[11px] text-[10px] font-medium
                                            lg:right-0 md:right-0 right-[4px] lg:bg-[#f0214880] md:bg-[#f0214880] bg-[#00000080] text-center
                                            lg:px-2 md:px-2 px-1 lg:rounded-l-[12px] md:rounded-l-[12px] rounded">
                                            电影
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <span class="text-left text-[11px] text-[#F2F2F2] font-bold
                                            overflow_text leading-[15px] mt-1 truncate">{{ item.title }}</span>
                                        <span class="my-[7px] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[15px]
                                            text-[#F02148] font-medium text-right
                                            lg:relative md:relative absolute 
                                            lg:bottom-0 md:bottom-0 right-[5px] bottom-[30px]">{{ item.grade.toFixed(1) }}</span>
                                    </div>
                                    <div class="block">
                                        <p class="text-[#999] font-medium lg:text-[14px] md:text-[12px] text-[10px] overflow_text
                                            lg:leading-[19.6px] md:leading-[15px]">
                                            {{ item.desc }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-[70px] text-center">
                    <button class="text-[14px] leading-[24px] font-bold text-white py-2 px-12 more-btn rounded-lg"
                        @click="this.moreList">
                        加载更多
                    </button>
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

                        <section class="modal-body text-white text-[14px] leading-[22px] px-5 pb-[40px] h-[200px] overflow-y-auto" 
                            id="modalDescription">
                            <slot name="body">
                                {{ movie.detail.desc }}
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
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
export default {
    name: 'PlayMovie',
    components: {
        VideoPlayer
    },
    data() {
        return {
            movie: {
                detail: {},
                discuss: {
                    count: 89,
                    list: [
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
                recommendList: [
                    { id: 1, cover: '/src/assets/chinese_pc/movie/recommend_movie1_pc.png', title: '老友记 第一季', volumn: 24, viewsNum: '332.5万' },
                    { id: 2, cover: '/src/assets/chinese_pc/movie/recommend_movie2_pc.png', title: '笑傲江湖', volumn: 40, viewsNum: '332.5万' },
                    { id: 3, cover: '/src/assets/chinese_pc/movie/recommend_movie3_pc.png', title: '红楼梦', volumn: 76, viewsNum: '332.5万' },
                    { id: 4, cover: '/src/assets/chinese_pc/movie/recommend_movie4_pc.png', title: '影', volumn: 1, viewsNum: '332.5万' },
                    { id: 5, cover: '/src/assets/chinese_pc/movie/recommend_movie5_pc.png', title: '阿凡达2', volumn: 1, viewsNum: '332.5万' },
                    { id: 6, cover: '/src/assets/chinese_pc/movie/recommend_movie6_pc.png', title: '无双', volumn: 1, viewsNum: '332.5万' }
                ]
            },
            movieList: [],
            movieUrl: "",
            coverUrl: "",
            selectedTab1: 'desc',
            selectedTab2: 'volumn',
            selectedMobileTab: 'desc',
            selectedVolumn: "1",
            showAllVolumn: false,
            isDragging: false,
            cursorPos: [0, 0],
            el: null,
            isModalVisible: false,
            showAllDesc: false,
            offset: 0,
        };
    },
    mounted() {
        this.getMovie(this.$route.params.id);
        this.getMovieList();
        window.addEventListener("mouseup", this.onMouseUp);
    },
    destroyed() {
        window.removeEventListener("mouseup", this.onMouseUp);
    },
    methods: {
        getMovie(id) {
            this.axios.get("http://20.198.170.39:8000/api/v1/film?id=" + id).then((res) => {
                if(res.status == 200) {
                    this.movie.detail = res.data.data;
                    this.movieUrl = this.videoUrl(res.data.data.url);
                    this.coverUrl = this.cover(res.data.data.cover);
                }
            });
        },
        getMovieList() {
            var params = {
                kindId: 0,
                languageId: 0,
                plotId: "0",
                regionId: 0,
                timeId: 0,
                offset: this.offset,
            };
            this.axios.post("http://20.198.170.39:8000/api/v1/user-films", params).then((res) => {
                if(res.status == 200) {
                    var tempList = this.movieList;
                    tempList.push.apply(tempList, res.data.data);
                    this.movieList = tempList;
                }
            });
        },
        toggleBtn: function () {
            this.showSearchGroup = !this.showSearchGroup;
        },
        handleTab1: function (tabName) {
            this.selectedTab1 = tabName;
        },
        handleTab2: function (tabName) {
            this.selectedTab2 = tabName;
        },
        handleMobileTab: function(tabName) {
            this.selectedMobileTab = tabName;
        },
        handleVolumn: function (volumn) {
            this.selectedVolumn = volumn;
        },
        handleShowAllVolumn: function () {
            this.showAllVolumn = !this.showAllVolumn;
        },
        handleShowDesc: function() {
            this.showAllDesc = !this.showAllDesc;
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
        },
        videoUrl(url) {
            if(url.indexOf("http") != -1){
                return url
            }else{
                return "http://104.43.88.63:8080/ipfs/"+url+"/playlist.m3u8"
            }
        },
        cover(img) {
            if(img.indexOf("thumb2.jpg") != -1){
                return `http://20.198.170.39:8080/${img}`
            }else{
                return `http://104.43.88.63:8080/ipfs/${img}`
            }
        },
        moreList() {
            this.offset += 18;
            this.getMovieList();
        }
    },
}
</script>

<style>
.overflow_text_2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
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

.more-btn {
    background: linear-gradient(to right, #F02148 8.34%, #FF5B21 100%);
}
</style>