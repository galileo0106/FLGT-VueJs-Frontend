<script setup>

const blogList = [
    {
        id: 1,
        title: "凤凰早报 | 展望2023年世界趋势动态最新报道",
        description: "凤凰社区的创建是基于三个层面，分别是链层，工具层，DAPP层。。其中链层是凤凰链，凤凰链是由IPFS链和ETH链升级后形成的，IPFS链是凤凰链的存储链部分，ETH链是凤凰链的资产链部分。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img1_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img1_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 2,
        title: "FTX Japan发布客户资产管理状况报告公司持有余额超过客户存入资产",
        description: "FTX旗下日本加密衍生品交易所FTX Japan今日凌晨在官网上披露了客户资产管理情况。在其支持的14种加密货币均存入公司的冷钱包中，冷钱包存有的加密货币余额均大于客户在该平台存入的资金余额。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img2_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img2_mobile.png",
        createdDate: "2022-11-13"
    },
    {
        id: 3,
        title: "凤凰观察：虚拟资产不可或缺的自由市场",
        description: "迈克先生为此针对存储链和资产链进行了完善升级。工具层分别是钱包，交易所，凤凰社APP。其中钱包和凤凰社区APP已经上线，后续交易所也会上线。DAPP层分别是商城，NFT交易，DEFI，游戏，影视，短视频，socinlfi（社交金融），socinlfi是迈克先生采取了在POS共识的基础上加了独特设计，即按照对社区内容的贡献度来挖矿。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img3_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img3_mobile.png",
        createdDate: "2022-11-09"
    },
    {
        id: 4,
        title: "凤凰早报 | 展望2023年世界趋势动态最新报道",
        description: "凤凰社区的创建是基于三个层面，分别是链层，工具层，DAPP层。。其中链层是凤凰链，凤凰链是由IPFS链和ETH链升级后形成的，IPFS链是凤凰链的存储链部分，ETH链是凤凰链的资产链部分。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img4_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img4_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 5,
        title: "FTX Japan发布客户资产管理状况报告公司持有余额超过客户存入资产",
        description: "FTX旗下日本加密衍生品交易所FTX Japan今日凌晨在官网上披露了客户资产管理情况。在其支持的14种加密货币均存入公司的冷钱包中，冷钱包存有的加密货币余额均大于客户在该平台存入的资金余额。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img5_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img5_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 6,
        title: "凤凰观察：虚拟资产不可或缺的自由市场",
        description: "迈克先生为此针对存储链和资产链进行了完善升级。工具层分别是钱包，交易所，凤凰社APP。其中钱包和凤凰社区APP已经上线，后续交易所也会上线。DAPP层分别是商城，NFT交易，DEFI，游戏，影视，短视频，socinlfi（社交金融），socinlfi是迈克先生采取了在POS共识的基础上加了独特设计，即按照对社区内容的贡献度来挖矿。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img6_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img6_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 7,
        title: "凤凰早报 | 展望2023年世界趋势动态最新报道",
        description: "凤凰社区的创建是基于三个层面，分别是链层，工具层，DAPP层。。其中链层是凤凰链，凤凰链是由IPFS链和ETH链升级后形成的，IPFS链是凤凰链的存储链部分，ETH链是凤凰链的资产链部分。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img7_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img7_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 8,
        title: "FTX Japan发布客户资产管理状况报告公司持有余额超过客户存入资产",
        description: "FTX旗下日本加密衍生品交易所FTX Japan今日凌晨在官网上披露了客户资产管理情况。在其支持的14种加密货币均存入公司的冷钱包中，冷钱包存有的加密货币余额均大于客户在该平台存入的资金余额。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img8_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img8_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 9,
        title: "凤凰观察：虚拟资产不可或缺的自由市场",
        description: "迈克先生为此针对存储链和资产链进行了完善升级。工具层分别是钱包，交易所，凤凰社APP。其中钱包和凤凰社区APP已经上线，后续交易所也会上线。DAPP层分别是商城，NFT交易，DEFI，游戏，影视，短视频，socinlfi（社交金融），socinlfi是迈克先生采取了在POS共识的基础上加了独特设计，即按照对社区内容的贡献度来挖矿。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img9_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img9_mobile.png",
        createdDate: "2022-11-18"
    },
]
</script>

<template>
    <div class="lg:pt-[40px] md:pt-[30px] pt-[20px] bg-white container mx-auto">
        <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
            <div class="col-span-1 lg:ml-[10px] md:mx-0 mx-[50px]">
                <select class="bg-gray-50 border border-[#DFDFDF] rounded-[2px] text-[14px] leading-[22px]
                    text-themeGreyText1 block w-full p-[10px]">
                    <option selected>所有类型</option>
                </select>
            </div>
            <div class="lg:col-span-2 md:col-span-2 col-span-1 lg:mx-[10px] md:mx-[10px] mx-[50px] lg:my-0 md:my-0 my-[20px]">
                <div class="flex flex-row">
                    <div class="w-full">
                        <input type="text" placeholder="Please enter" 
                            class="border border-[#F02148] px-[10px] py-[6px] rounded-[2px] w-full" />
                    </div>
                    <div class="w-[108px] ml-[10px]">
                        <button class="text-[14px] leading-[22px] font-bold search-btn
                            text-white p-[8px] text-center w-full">搜素</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-6 gap-3 
            lg:mb-[30px] md:mb-[45px] mb-[70px] lg:mt-[40px] md:mt-[30px] mt-[20px] mx-[10px]">
            <div v-for="item in blogList" :key="item.id"
                class="col-span-1 lg:mb-[30px] md:mb-[25px] mb-[20px]">
                <img :src="item.img_pc" :alt="item.title" class="w-full lg:block md:block hidden" />
                <img :src="item.img_mobile" :alt="item.title" class="w-full lg:hidden md:hidden block" />
                <div class="rounded-[10px] card bg-white lg:px-[25px] md:px-[18px] px-[11px] 
                    lg:py-[25px] md:py-[20px] py-[15px]">
                    <p class="lg:text-[18px] md:text-[16px] text-[14px] font-bold blog_overflow_title
                        lg:leading-[25px] md:leading-[22px] leading-[18px] text-[#141414]">
                        {{ item.title }}
                    </p>
                    <p class="lg:text-[15px] lg:leading-[27px] text-[#868383] font-medium mt-[14px]
                        lg:block md:block hidden blog_overflow_description">
                        {{ item.description }}
                    </p>
                    <p class="lg:text-[14px] md:text-[13px] text-[12px] font-medium leading-[22px] text-[#696969] mt-[10px]">
                        {{ item.createdDate }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
</style>