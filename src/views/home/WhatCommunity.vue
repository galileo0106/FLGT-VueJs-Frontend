<script setup>
import { ref } from "vue";
const datas = [
  {id: "1", name: "存储和分布节点", value: 2800, unit: "+", icon: "/src/assets/chinese_pc/btn-node.svg"},
  {id: "2", name: "社区", value: 2500, unit: "万", icon: "/src/assets/chinese_pc/btn-community.svg"},
  {id: "3", name: "网红博主", value: 800, unit: "多万", icon: "/src/assets/chinese_pc/btn-internet.svg"},
  {id: "4", name: "版权合作方", value: 1500, unit: "多家", icon: "/src/assets/chinese_pc/btn-copyright.svg"},
]
</script>

<template>
  <div class="bg-[#150550] bg-no-repeat lg:h-[100%] md:h-[100%] h-[1290px] w-full bg-contain">
    <div class="h-full lg:py-[66px] md:py-[40px] py-[20px] container m-auto">
      <div class="title">
        <div class="text-white font-medium lg:text-[42px] md:text-[30px] text-[18px] text-center">
          凤凰社区是什么
        </div>
        <div class="title-border mt-[21px]"></div>
      </div>
      <div class="">
        <div class="lg:w-[920px] md:w-[550px] w-[315px]
          lg:rounded-[40px] md:rounded-[26px] rounded-[12px] lg:pt-[47px] md:pt-[35px] pt-[10px]
          bg-[#fdfdfd1a] m-auto text-center lg:mt-[60px] md:mt-[40px] mt-[21px] 
          lg:px-[20px] md:px-[24px] px-[29px]">
          <div class="breadcrumb">
            <div>
              <p class="lg:text-[36px] md:text-[26px] text-[16px] text-white">元宇宙</p>
              <div class="h-[2px] bg-[#CE40DB] w-[200px] lg:mt-[17px] mx-auto"></div>
            </div>
            <div class="lg:mt-[40px] md:mt-[27px] mt-[15px] grid lg:grid-cols-5 md:grid-cols-3 grid-cols-3 gap-1">
              <div>
                <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">元宇宙生活</span>
              </div>
              <div>
                <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">元宇宙社交</span>
              </div>
              <div>
                <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">元宇宙购物</span>
              </div>
              <div>
                <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">元宇宙游戏</span>
              </div>
              <div>
                <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">元宇宙交易中心</span>
              </div>
          </div>
          </div>

          <div class="content text-left lg:mt-[20px] md:mt-[18px] mt-[15px] px-[20px] pb-[20px] mx-auto">
              <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                1. 将个人身份与元宇宙3D虚拟世界结合
              </p>
              <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                2. 将个人资产和数据通过凤凰链保存和确权
              </p>
              <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                3. 将每个人的生活与娱乐融入到凤凰元宇宙社区
              </p>
          </div>
        </div>
        <div class="lg:w-[920px] md:w-[550px] w-[315px]
          lg:rounded-[40px] md:rounded-[26px] rounded-[12px] lg:pt-[47px] md:pt-[35px] pt-[10px]
          bg-[#fdfdfd1a] m-auto text-center lg:mt-[60px] md:mt-[40px] mt-[21px] 
          lg:px-[41px] md:px-[29px] px-[18px]">
          <div class="breadcrumb">
            <div>
              <p class="lg:text-[36px] md:text-[26px] text-[16px] text-white">小程序应用</p>
              <div class="h-[2px] bg-[#CE40DB] w-[200px] lg:mt-[17px] mx-auto"></div>
            </div>
            <div class="lg:mt-[40px] md:mt-[27px] mt-[15px] 
              grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3">
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">影视</span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. 电影众筹
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. 电影NFT发行与交易
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    3. 电影流量广告即时分成
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    4. FLGT内容挖矿
                  </p>
                </div>
              </div>
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">NFT交易平台</span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. 版权保护
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. NFT和短视频与设计结合
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    3. 艺术品快速变形
                  </p>
                </div>
              </div>
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">GameFI</span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. 所有游戏统一身份 
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. 道具上链
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    3. 游戏中挖矿
                  </p>
                </div>
              </div>
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">DeFi</span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. 用户抵押自己的资产获得借贷
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. 用户将自己资产放在平台理财
                  </p>
                </div>
              </div>
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">商城</span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. 区块链代币支付
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. 商品可溯源
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    3. 社区担保支付
                  </p>
                </div>
              </div>
          </div>
          </div>
        </div>
        <div class="lg:w-[920px] md:w-[550px] w-[315px]
          lg:rounded-[40px] md:rounded-[26px] rounded-[12px] lg:pt-[47px] md:pt-[35px] pt-[10px]
          bg-[#fdfdfd1a] m-auto text-center lg:mt-[60px] md:mt-[40px] mt-[21px] 
          lg:px-[41px] md:px-[29px] px-[18px]">
          <div class="breadcrumb">
            <div>
              <p class="lg:text-[36px] md:text-[26px] text-[16px] text-white">平台层</p>
              <div class="h-[2px] bg-[#CE40DB] w-[200px] lg:mt-[17px] mx-auto"></div>
            </div>
            <div class="lg:mt-[40px] md:mt-[27px] mt-[15px] 
              grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3">
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">短视频社交</span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. 采用SOCIALFI模式
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. 引入POV挖矿模式
                  </p>
                </div>
              </div>
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">钱包</span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. 存储凤凰链上所有代币
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. 兼容其他链的代币资产
                  </p>
                </div>
              </div>
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">去中心化交易所</span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. 币币交易
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. OTC交易
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    3. 合约交易
                  </p>
                </div>
              </div>
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">统一身份证系统</span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. WEB3.0统一身份
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. 匿名交易保护
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    3. 权益身份对应
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    4. 身份加密保护
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-[920px] md:w-[550px] w-[315px]
          lg:rounded-[40px] md:rounded-[26px] rounded-[12px] lg:pt-[47px] md:pt-[35px] pt-[10px]
          bg-[#fdfdfd1a] m-auto text-center lg:mt-[60px] md:mt-[40px] mt-[21px] 
          lg:px-[203px] md:px-[120px] px-[45px]">
          <div class="breadcrumb">
            <div>
              <p class="lg:text-[36px] md:text-[26px] text-[16px] text-white">凤凰链</p>
              <div class="h-[2px] bg-[#CE40DB] w-[200px] lg:mt-[17px] mx-auto"></div>
            </div>
            <div class="mx-auto">
              <div class="lg:mt-[40px] md:mt-[27px] mt-[15px] 
                grid lg:grid-cols-2 grid-cols-1 gap-3">
                <div>
                  <div class="text-left">
                    <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                    <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">存储链</span>
                  </div>
                  <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                    <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                      1. 去中心化存储，由IPFS源码升级
                    </p>
                    <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                      2. 存储电影和文件
                    </p>
                    <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                      3. 存储小程序源码去中心化存储，由I[FS源码升级
                    </p>
                  </div>
                </div>
                <div>
                  <div class="text-left">
                    <img src="../../assets/chinese_pc/right_arrow.svg" alt="right arrow" class="inline" />
                    <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">资产链</span>
                  </div>
                  <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                    <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                      1. 由FTH源码升级
                    </p>
                    <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                      2. 运行用户身份体系
                    </p>
                    <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                      3. 运行资产合约
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>
 
<style scoped>
.title-border{
  background: radial-gradient(circle, #1F9CBC 20%, rgba(25, 161, 190, 0) 0%, #1F9CBC 18.78%, #7D4192 79.79%, rgba(125, 65, 146, 0) 97.05%);
  margin: auto;
  height: 4px;
}

.btn-community {
  background: linear-gradient(#3D1C82 0%, #F4027A 100%);
  border-radius: 5px;
}

@media (min-width: 768px) {
  .title-border {
    width: 360px;
  }

  .btn-community {
    width: 380px;
  }
}

@media (max-width: 767px) {
  .title-border {
    width: 200px;
  }

  .btn-community {
    width: 156px;
  }
}
</style>
