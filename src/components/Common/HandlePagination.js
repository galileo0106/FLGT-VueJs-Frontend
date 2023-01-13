import { ref, computed } from "vue";

export default function handlePagination() {
  let page = ref(1);

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
    {
        id: 10,
        title: "凤凰早报 | 展望2023年世界趋势动态最新报道",
        description: "凤凰社区的创建是基于三个层面，分别是链层，工具层，DAPP层。。其中链层是凤凰链，凤凰链是由IPFS链和ETH链升级后形成的，IPFS链是凤凰链的存储链部分，ETH链是凤凰链的资产链部分。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img1_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img1_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 11,
        title: "FTX Japan发布客户资产管理状况报告公司持有余额超过客户存入资产",
        description: "FTX旗下日本加密衍生品交易所FTX Japan今日凌晨在官网上披露了客户资产管理情况。在其支持的14种加密货币均存入公司的冷钱包中，冷钱包存有的加密货币余额均大于客户在该平台存入的资金余额。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img2_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img2_mobile.png",
        createdDate: "2022-11-13"
    },
    {
        id: 12,
        title: "凤凰观察：虚拟资产不可或缺的自由市场",
        description: "迈克先生为此针对存储链和资产链进行了完善升级。工具层分别是钱包，交易所，凤凰社APP。其中钱包和凤凰社区APP已经上线，后续交易所也会上线。DAPP层分别是商城，NFT交易，DEFI，游戏，影视，短视频，socinlfi（社交金融），socinlfi是迈克先生采取了在POS共识的基础上加了独特设计，即按照对社区内容的贡献度来挖矿。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img3_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img3_mobile.png",
        createdDate: "2022-11-09"
    },
    {
        id: 13,
        title: "凤凰早报 | 展望2023年世界趋势动态最新报道",
        description: "凤凰社区的创建是基于三个层面，分别是链层，工具层，DAPP层。。其中链层是凤凰链，凤凰链是由IPFS链和ETH链升级后形成的，IPFS链是凤凰链的存储链部分，ETH链是凤凰链的资产链部分。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img4_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img4_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 14,
        title: "FTX Japan发布客户资产管理状况报告公司持有余额超过客户存入资产",
        description: "FTX旗下日本加密衍生品交易所FTX Japan今日凌晨在官网上披露了客户资产管理情况。在其支持的14种加密货币均存入公司的冷钱包中，冷钱包存有的加密货币余额均大于客户在该平台存入的资金余额。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img5_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img5_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 15,
        title: "凤凰观察：虚拟资产不可或缺的自由市场",
        description: "迈克先生为此针对存储链和资产链进行了完善升级。工具层分别是钱包，交易所，凤凰社APP。其中钱包和凤凰社区APP已经上线，后续交易所也会上线。DAPP层分别是商城，NFT交易，DEFI，游戏，影视，短视频，socinlfi（社交金融），socinlfi是迈克先生采取了在POS共识的基础上加了独特设计，即按照对社区内容的贡献度来挖矿。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img6_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img6_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 16,
        title: "凤凰早报 | 展望2023年世界趋势动态最新报道",
        description: "凤凰社区的创建是基于三个层面，分别是链层，工具层，DAPP层。。其中链层是凤凰链，凤凰链是由IPFS链和ETH链升级后形成的，IPFS链是凤凰链的存储链部分，ETH链是凤凰链的资产链部分。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img7_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img7_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 17,
        title: "FTX Japan发布客户资产管理状况报告公司持有余额超过客户存入资产",
        description: "FTX旗下日本加密衍生品交易所FTX Japan今日凌晨在官网上披露了客户资产管理情况。在其支持的14种加密货币均存入公司的冷钱包中，冷钱包存有的加密货币余额均大于客户在该平台存入的资金余额。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img8_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img8_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 18,
        title: "凤凰观察：虚拟资产不可或缺的自由市场",
        description: "迈克先生为此针对存储链和资产链进行了完善升级。工具层分别是钱包，交易所，凤凰社APP。其中钱包和凤凰社区APP已经上线，后续交易所也会上线。DAPP层分别是商城，NFT交易，DEFI，游戏，影视，短视频，socinlfi（社交金融），socinlfi是迈克先生采取了在POS共识的基础上加了独特设计，即按照对社区内容的贡献度来挖矿。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img9_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img9_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 19,
        title: "凤凰早报 | 展望2023年世界趋势动态最新报道",
        description: "凤凰社区的创建是基于三个层面，分别是链层，工具层，DAPP层。。其中链层是凤凰链，凤凰链是由IPFS链和ETH链升级后形成的，IPFS链是凤凰链的存储链部分，ETH链是凤凰链的资产链部分。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img1_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img1_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 20,
        title: "FTX Japan发布客户资产管理状况报告公司持有余额超过客户存入资产",
        description: "FTX旗下日本加密衍生品交易所FTX Japan今日凌晨在官网上披露了客户资产管理情况。在其支持的14种加密货币均存入公司的冷钱包中，冷钱包存有的加密货币余额均大于客户在该平台存入的资金余额。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img2_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img2_mobile.png",
        createdDate: "2022-11-13"
    },
    {
        id: 21,
        title: "凤凰观察：虚拟资产不可或缺的自由市场",
        description: "迈克先生为此针对存储链和资产链进行了完善升级。工具层分别是钱包，交易所，凤凰社APP。其中钱包和凤凰社区APP已经上线，后续交易所也会上线。DAPP层分别是商城，NFT交易，DEFI，游戏，影视，短视频，socinlfi（社交金融），socinlfi是迈克先生采取了在POS共识的基础上加了独特设计，即按照对社区内容的贡献度来挖矿。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img3_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img3_mobile.png",
        createdDate: "2022-11-09"
    },
    {
        id: 22,
        title: "凤凰早报 | 展望2023年世界趋势动态最新报道",
        description: "凤凰社区的创建是基于三个层面，分别是链层，工具层，DAPP层。。其中链层是凤凰链，凤凰链是由IPFS链和ETH链升级后形成的，IPFS链是凤凰链的存储链部分，ETH链是凤凰链的资产链部分。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img4_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img4_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 23,
        title: "FTX Japan发布客户资产管理状况报告公司持有余额超过客户存入资产",
        description: "FTX旗下日本加密衍生品交易所FTX Japan今日凌晨在官网上披露了客户资产管理情况。在其支持的14种加密货币均存入公司的冷钱包中，冷钱包存有的加密货币余额均大于客户在该平台存入的资金余额。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img5_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img5_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 24,
        title: "凤凰观察：虚拟资产不可或缺的自由市场",
        description: "迈克先生为此针对存储链和资产链进行了完善升级。工具层分别是钱包，交易所，凤凰社APP。其中钱包和凤凰社区APP已经上线，后续交易所也会上线。DAPP层分别是商城，NFT交易，DEFI，游戏，影视，短视频，socinlfi（社交金融），socinlfi是迈克先生采取了在POS共识的基础上加了独特设计，即按照对社区内容的贡献度来挖矿。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img6_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img6_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 25,
        title: "凤凰早报 | 展望2023年世界趋势动态最新报道",
        description: "凤凰社区的创建是基于三个层面，分别是链层，工具层，DAPP层。。其中链层是凤凰链，凤凰链是由IPFS链和ETH链升级后形成的，IPFS链是凤凰链的存储链部分，ETH链是凤凰链的资产链部分。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img7_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img7_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 26,
        title: "FTX Japan发布客户资产管理状况报告公司持有余额超过客户存入资产",
        description: "FTX旗下日本加密衍生品交易所FTX Japan今日凌晨在官网上披露了客户资产管理情况。在其支持的14种加密货币均存入公司的冷钱包中，冷钱包存有的加密货币余额均大于客户在该平台存入的资金余额。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img8_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img8_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 27,
        title: "凤凰观察：虚拟资产不可或缺的自由市场",
        description: "迈克先生为此针对存储链和资产链进行了完善升级。工具层分别是钱包，交易所，凤凰社APP。其中钱包和凤凰社区APP已经上线，后续交易所也会上线。DAPP层分别是商城，NFT交易，DEFI，游戏，影视，短视频，socinlfi（社交金融），socinlfi是迈克先生采取了在POS共识的基础上加了独特设计，即按照对社区内容的贡献度来挖矿。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img9_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img9_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 28,
        title: "凤凰早报 | 展望2023年世界趋势动态最新报道",
        description: "凤凰社区的创建是基于三个层面，分别是链层，工具层，DAPP层。。其中链层是凤凰链，凤凰链是由IPFS链和ETH链升级后形成的，IPFS链是凤凰链的存储链部分，ETH链是凤凰链的资产链部分。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img1_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img1_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 29,
        title: "FTX Japan发布客户资产管理状况报告公司持有余额超过客户存入资产",
        description: "FTX旗下日本加密衍生品交易所FTX Japan今日凌晨在官网上披露了客户资产管理情况。在其支持的14种加密货币均存入公司的冷钱包中，冷钱包存有的加密货币余额均大于客户在该平台存入的资金余额。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img2_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img2_mobile.png",
        createdDate: "2022-11-13"
    },
    {
        id: 30,
        title: "凤凰观察：虚拟资产不可或缺的自由市场",
        description: "迈克先生为此针对存储链和资产链进行了完善升级。工具层分别是钱包，交易所，凤凰社APP。其中钱包和凤凰社区APP已经上线，后续交易所也会上线。DAPP层分别是商城，NFT交易，DEFI，游戏，影视，短视频，socinlfi（社交金融），socinlfi是迈克先生采取了在POS共识的基础上加了独特设计，即按照对社区内容的贡献度来挖矿。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img3_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img3_mobile.png",
        createdDate: "2022-11-09"
    },
    {
        id: 31,
        title: "凤凰观察：虚拟资产不可或缺的自由市场",
        description: "迈克先生为此针对存储链和资产链进行了完善升级。工具层分别是钱包，交易所，凤凰社APP。其中钱包和凤凰社区APP已经上线，后续交易所也会上线。DAPP层分别是商城，NFT交易，DEFI，游戏，影视，短视频，socinlfi（社交金融），socinlfi是迈克先生采取了在POS共识的基础上加了独特设计，即按照对社区内容的贡献度来挖矿。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img3_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img3_mobile.png",
        createdDate: "2022-11-09"
    },
    {
        id: 32,
        title: "凤凰早报 | 展望2023年世界趋势动态最新报道",
        description: "凤凰社区的创建是基于三个层面，分别是链层，工具层，DAPP层。。其中链层是凤凰链，凤凰链是由IPFS链和ETH链升级后形成的，IPFS链是凤凰链的存储链部分，ETH链是凤凰链的资产链部分。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img4_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img4_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 33,
        title: "FTX Japan发布客户资产管理状况报告公司持有余额超过客户存入资产",
        description: "FTX旗下日本加密衍生品交易所FTX Japan今日凌晨在官网上披露了客户资产管理情况。在其支持的14种加密货币均存入公司的冷钱包中，冷钱包存有的加密货币余额均大于客户在该平台存入的资金余额。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img5_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img5_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 34,
        title: "凤凰观察：虚拟资产不可或缺的自由市场",
        description: "迈克先生为此针对存储链和资产链进行了完善升级。工具层分别是钱包，交易所，凤凰社APP。其中钱包和凤凰社区APP已经上线，后续交易所也会上线。DAPP层分别是商城，NFT交易，DEFI，游戏，影视，短视频，socinlfi（社交金融），socinlfi是迈克先生采取了在POS共识的基础上加了独特设计，即按照对社区内容的贡献度来挖矿。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img6_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img6_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 35,
        title: "凤凰早报 | 展望2023年世界趋势动态最新报道",
        description: "凤凰社区的创建是基于三个层面，分别是链层，工具层，DAPP层。。其中链层是凤凰链，凤凰链是由IPFS链和ETH链升级后形成的，IPFS链是凤凰链的存储链部分，ETH链是凤凰链的资产链部分。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img7_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img7_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 36,
        title: "FTX Japan发布客户资产管理状况报告公司持有余额超过客户存入资产",
        description: "FTX旗下日本加密衍生品交易所FTX Japan今日凌晨在官网上披露了客户资产管理情况。在其支持的14种加密货币均存入公司的冷钱包中，冷钱包存有的加密货币余额均大于客户在该平台存入的资金余额。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img8_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img8_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 37,
        title: "凤凰观察：虚拟资产不可或缺的自由市场",
        description: "迈克先生为此针对存储链和资产链进行了完善升级。工具层分别是钱包，交易所，凤凰社APP。其中钱包和凤凰社区APP已经上线，后续交易所也会上线。DAPP层分别是商城，NFT交易，DEFI，游戏，影视，短视频，socinlfi（社交金融），socinlfi是迈克先生采取了在POS共识的基础上加了独特设计，即按照对社区内容的贡献度来挖矿。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img9_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img9_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 38,
        title: "凤凰早报 | 展望2023年世界趋势动态最新报道",
        description: "凤凰社区的创建是基于三个层面，分别是链层，工具层，DAPP层。。其中链层是凤凰链，凤凰链是由IPFS链和ETH链升级后形成的，IPFS链是凤凰链的存储链部分，ETH链是凤凰链的资产链部分。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img1_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img1_mobile.png",
        createdDate: "2022-11-18"
    },
    {
        id: 39,
        title: "FTX Japan发布客户资产管理状况报告公司持有余额超过客户存入资产",
        description: "FTX旗下日本加密衍生品交易所FTX Japan今日凌晨在官网上披露了客户资产管理情况。在其支持的14种加密货币均存入公司的冷钱包中，冷钱包存有的加密货币余额均大于客户在该平台存入的资金余额。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img2_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img2_mobile.png",
        createdDate: "2022-11-13"
    },
    {
        id: 40,
        title: "凤凰观察：虚拟资产不可或缺的自由市场",
        description: "迈克先生为此针对存储链和资产链进行了完善升级。工具层分别是钱包，交易所，凤凰社APP。其中钱包和凤凰社区APP已经上线，后续交易所也会上线。DAPP层分别是商城，NFT交易，DEFI，游戏，影视，短视频，socinlfi（社交金融），socinlfi是迈克先生采取了在POS共识的基础上加了独特设计，即按照对社区内容的贡献度来挖矿。",
        img_pc: "/src/assets/chinese_pc/blog/blog_img3_pc.png",
        img_mobile: "/src/assets/chinese_mobile/blog/blog_img3_mobile.png",
        createdDate: "2022-11-09"
    },
  ];
  const data = blogList.map((item) => {
    return { index: item, data: item };
  });

  const perPage = 9;
  const pageSize = 3;
  const totalPage = Math.ceil(data.length / perPage);

  const paginatedData = computed(() =>
    data.slice((page.value - 1) * perPage, page.value * perPage)
  );

  const nextPage = () => {
    if (page.value !== Math.ceil(totalPage / perPage)) {
      page.value += 1;
      console.log(page.value)
    }
  };

  const backPage = () => {
    if (page.value !== 1) {
      page.value -= 1;
    }
  };

  const goToPage = (numPage) => {
    page.value = numPage;
  };

  return { data, paginatedData, perPage, page, nextPage, backPage, goToPage, pageSize };
}
