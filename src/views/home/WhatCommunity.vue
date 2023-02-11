<template>
  <div class="bg-[#150550] bg-no-repeat lg:h-[100%] md:h-[100%] h-full w-full bg-contain">
    <div class="h-full lg:py-[66px] md:py-[40px] py-[20px] container m-auto">
      <div class="title">
        <div class="text-white font-medium lg:text-[42px] md:text-[30px] text-[18px] text-center">
          {{ $t("home.whatIsPhoenixCommunity") }}
        </div>
        <div class="title-border mt-[21px]"></div>
      </div>
      <div class="relative">
        <div class="lg:w-[920px] md:w-[550px] w-[315px] backdrop-blur-xl relative z-[10]
          lg:rounded-[40px] md:rounded-[26px] rounded-[12px] lg:pt-[47px] md:pt-[35px] pt-[10px]
          bg-[#fdfdfd1a] m-auto text-center lg:mt-[60px] md:mt-[40px] mt-[21px] 
          lg:px-[41px] md:px-[29px] px-[18px]">
          <div class="breadcrumb">
            <div>
              <p class="lg:text-[36px] md:text-[26px] text-[16px] text-white">{{ $t("home.metaverse") }}</p>
              <div class="h-[2px] bg-[#CE40DB] w-[200px] lg:mt-[17px] mx-auto"></div>
            </div>
            <div class="lg:mt-[40px] md:mt-[27px] mt-[15px] grid lg:grid-cols-5 md:grid-cols-3 grid-cols-3 gap-1">
              <div>
                <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">{{ $t("home.metaverseLife") }}</span>
              </div>
              <div>
                <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">{{ $t("home.metaverseSocial") }}</span>
              </div>
              <div>
                <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">{{ $t("home.metaverseShopping") }}</span>
              </div>
              <div>
                <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">{{ $t("home.metaverseGames") }}</span>
              </div>
              <div>
                <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">{{ $t("home.metaverseTradingCenter") }}</span>
              </div>
          </div>
          </div>

          <div class="content text-left lg:mt-[20px] md:mt-[18px] mt-[15px] px-[20px] pb-[20px] mx-auto">
              <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                1. {{ $t("home.metaverseDesc1") }}
              </p>
              <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                2. {{ $t("home.metaverseDesc2") }}
              </p>
              <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                3. {{ $t("home.metaverseDesc3") }}
              </p>
          </div>
        </div>
        <div class="absolute arrow_1">
          <img src="../../assets/chinese_pc/home/colored_arrow_1.png" alt="arrow_red"
            class="lg:block md:block hidden" />
          <img src="../../assets/chinese_mobile/home/colored_arrow_1.png" alt="arrow_red"
            class="lg:hidden md:hidden block " />
        </div>
      </div>
      <div class="relative">
        <div class="lg:w-[920px] md:w-[550px] w-[315px] backdrop-blur-xl relative z-[10]
          lg:rounded-[40px] md:rounded-[26px] rounded-[12px] lg:pt-[47px] md:pt-[35px] pt-[10px]
          bg-[#fdfdfd1a] m-auto text-center lg:mt-[60px] md:mt-[40px] mt-[21px] 
          lg:px-[41px] md:px-[29px] px-[18px]">
          <div class="breadcrumb">
            <div>
              <p class="lg:text-[36px] md:text-[26px] text-[16px] text-white">{{ $t("home.appletApplication") }}</p>
              <div class="h-[2px] bg-[#CE40DB] w-[200px] lg:mt-[17px] mx-auto"></div>
            </div>
            <div class="lg:mt-[40px] md:mt-[27px] mt-[15px] 
              grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3">
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">{{ $t("home.filmAndTelevision") }}</span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. {{ $t("home.filmAndTelevisionDesc1") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. {{ $t("home.filmAndTelevisionDesc2") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    3. {{ $t("home.filmAndTelevisionDesc3") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    4. {{ $t("home.filmAndTelevisionDesc4") }}
                  </p>
                </div>
              </div>
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">{{ $t("home.NFTTradingPlatform") }}</span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. {{ $t("home.NFTTradingPlatformDesc1") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. {{ $t("home.NFTTradingPlatformDesc2") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    3. {{ $t("home.NFTTradingPlatformDesc3") }}
                  </p>
                </div>
              </div>
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">{{ $t("home.gameFI") }}</span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. {{ $t("home.gameFIDesc1") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. {{ $t("home.gameFIDesc2") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    3. {{ $t("home.gameFIDesc3") }}
                  </p>
                </div>
              </div>
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">
                    {{ $t("home.deFi") }}
                  </span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. {{ $t("home.deFiDesc1") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. {{ $t("home.deFiDesc2") }}
                  </p>
                </div>
              </div>
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">
                    {{ $t("home.mall") }}
                  </span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. {{ $t("home.mailDesc1") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. {{ $t("home.mailDesc2") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    3. {{ $t("home.mailDesc3") }}
                  </p>
                </div>
              </div>
          </div>
          </div>
        </div>
        <div class="absolute arrow_2">
          <img src="../../assets/chinese_pc/home/colored_arrow_2.png" alt="arrow_red"
            class="lg:block md:block hidden" />
          <img src="../../assets/chinese_mobile/home/colored_arrow_2.png" alt="arrow_red"
            class="lg:hidden md:hidden block" />
        </div>
      </div>
      <div class="relative">
        <div class="lg:w-[920px] md:w-[550px] w-[315px] backdrop-blur-xl relative z-[10]
          lg:rounded-[40px] md:rounded-[26px] rounded-[12px] lg:pt-[47px] md:pt-[35px] pt-[10px]
          bg-[#fdfdfd1a] m-auto text-center lg:mt-[60px] md:mt-[40px] mt-[21px] 
          lg:px-[41px] md:px-[29px] px-[18px]">
          <div class="breadcrumb">
            <div>
              <p class="lg:text-[36px] md:text-[26px] text-[16px] text-white">{{ $t("home.platformLayer") }}</p>
              <div class="h-[2px] bg-[#CE40DB] w-[200px] lg:mt-[17px] mx-auto"></div>
            </div>
            <div class="lg:mt-[40px] md:mt-[27px] mt-[15px] 
              grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3">
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">
                    {{ $t("home.shortVideoSocial") }}
                  </span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. {{ $t("home.shortVideoSocialDesc1") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. {{ $t("home.shortVideoSocialDesc2") }}
                  </p>
                </div>
              </div>
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">
                    {{ $t("home.wallet") }}
                  </span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. {{ $t("home.platformWalletDesc1") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. {{ $t("home.platformWalletDesc2") }}
                  </p>
                </div>
              </div>
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">
                    {{ $t("home.decentralizedExchange") }}
                  </span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. {{ $t("home.decentralizedExchangeDesc1") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. {{ $t("home.decentralizedExchangeDesc2") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    3. {{ $t("home.decentralizedExchangeDesc3") }}
                  </p>
                </div>
              </div>
              <div>
                <div class="text-left">
                  <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                  <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">
                    {{ $t("home.unifiedIDSystem") }}
                  </span>
                </div>
                <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    1. {{ $t("home.unifiedIDSystemDesc1") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    2. {{ $t("home.unifiedIDSystemDesc2") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    3. {{ $t("home.unifiedIDSystemDesc3") }}
                  </p>
                  <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                    4. {{ $t("home.unifiedIDSystemDesc4") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute arrow_3">
          <img src="../../assets/chinese_pc/home/colored_arrow_3.png" alt="arrow_red"
            class="lg:block md:block hidden" />
          <img src="../../assets/chinese_mobile/home/colored_arrow_3.png" alt="arrow_red"
            class="lg:hidden md:hidden block" />
        </div>
        <div class="lg:w-[920px] md:w-[550px] w-[315px] backdrop-blur-xl relative z-[10]
          lg:rounded-[40px] md:rounded-[26px] rounded-[12px] lg:pt-[47px] md:pt-[35px] pt-[10px]
          bg-[#fdfdfd1a] m-auto text-center lg:mt-[60px] md:mt-[40px] mt-[21px] 
          lg:px-[203px] md:px-[120px] px-[45px]">
          <div class="breadcrumb">
            <div>
              <p class="lg:text-[36px] md:text-[26px] text-[16px] text-white">
                {{ $t("home.phoenixChain") }}
              </p>
              <div class="h-[2px] bg-[#CE40DB] w-[200px] lg:mt-[17px] mx-auto"></div>
            </div>
            <div class="mx-auto">
              <div class="lg:mt-[40px] md:mt-[27px] mt-[15px] 
                grid lg:grid-cols-2 grid-cols-1 gap-3">
                <div>
                  <div class="text-left">
                    <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                    <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">
                      {{ $t("home.storageChain") }}
                    </span>
                  </div>
                  <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                    <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                      1. {{ $t("home.storageChainDesc1") }}
                    </p>
                    <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                      2. {{ $t("home.storageChainDesc2") }}
                    </p>
                    <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                      3. {{ $t("home.storageChainDesc3") }}
                    </p>
                  </div>
                </div>
                <div>
                  <div class="text-left">
                    <img src="../../assets/chinese_pc/home/right_arrow.svg" alt="right arrow" class="inline" />
                    <span class="lg:text-[22px] md:text-[17px] text-[12px] text-white font-medium ml-1">
                      {{ $t("home.assetChain") }}
                    </span>
                  </div>
                  <div class="content text-left lg:mt-[20px] md:mt-[15px] mt-[10px] pb-[20px] mx-auto">
                    <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                      1. {{ $t("home.assetChainDesc1") }}
                    </p>
                    <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                      2. {{ $t("home.assetChainDesc2") }}
                    </p>
                    <p class="lg:text-[18px] md:text-[14px] text-[10px] font-medium text-white">
                      3. {{ $t("home.assetChainDesc3") }}
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

<script>
</script>
 
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

@media (min-width: 1536px) {
  .arrow_1 {
    top: 70%;
    left: 15.5%;
  }

  .arrow_2 {
    top: 80%;
    right: 16.5%;
  }

  .arrow_3 {
    top: 30%;
    left: 16.5%;
  }
}

@media (min-width: 1280px) and (max-width: 1535px) {
  .arrow_1 {
    top: 70%;
    left: 9%;
  }

  .arrow_2 {
    top: 80%;
    right: 10%;
  }

  .arrow_3 {
    top: 30%;
    left: 10%;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .arrow_1 {
    top: 70%;
    left: -1%;
  }

  .arrow_2 {
    top: 80%;
    right: 0;
  }

  .arrow_3 {
    top: 30%;
    left: 0;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .arrow_1 {
    top: 50%;
    left: 6%;
  }

  .arrow_2 {
    top: 70%;
    right: 7%;
  }

  .arrow_3 {
    top: 30%;
    left: 7%;
  }
}

@media (min-width: 768px) {
  .title-border {
    width: 360px;
  }

  .btn-community {
    width: 380px;
  }
}

@media (min-width: 526px) and (max-width: 767px) {
  .arrow_1 {
    top: 50%;
    left: 19%;
  }

  .arrow_2 {
    top: 75%;
    right: 20%;
  }

  .arrow_3 {
    top: 40%;
    left: 21.5%;
  }
}

@media (min-width: 426px) and (max-width: 525px) {
  .arrow_1 {
    top: 50%;
    left: 12%;
  }

  .arrow_2 {
    top: 75%;
    right: 14%;
  }

  .arrow_3 {
    top: 40%;
    left: 15%;
  }
}

@media (max-width: 425px) {
  .arrow_1 {
    top: 36%;
    left: 4%;
  }

  .arrow_2 {
    top: 62%;
    right: 5%;
  }

  .arrow_3 {
    top: 32%;
    left: 5%;
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
