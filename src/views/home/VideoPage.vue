<template>
  <div class="lg:bg-video_page md:bg-video_page bg-[#170550] bg-no-repeat 
      bg-[length:100%_100%] video_pc_size">
      <div class="relative h-full lg:bg-video_circle_pc md:bg-video_circle_pc 
          bg-video_circle_mobile bg-no-repeat circle_bg">
        <div class="relative ecology_img lg:block md:block hidden float-right z-10">
          <p class="lg:text-[28px] md:text-[20px] leading-[23.8px] text-white">{{ $t("home.ecology") }}</p>
          <img src="../../assets/chinese_pc/home/full_application_ecology_pc.png" 
            alt="ecology" class="relative" />
        </div>
        <div class="absolute public_chain lg:block md:block hidden float-right z-10">
          <div class="flex">
            <p class="lg:text-[22px] leading-[23.8px] text-white flex items-end">{{ $t("home.publicChain") }}</p>
            <img src="../../assets/chinese_pc/home/public_chain_pc.png" 
              alt="public chain" class="relative" />
          </div>
        </div>
        <div class="absolute wallet_img lg:block md:block hidden float-right z-10">
          <div class="flex">
            <p class="lg:text-[22px] leading-[23.8px] text-white flex items-end">{{ $t("home.downloadWallet") }}</p>
            <img src="../../assets/chinese_pc/home/wallet_pc.png" 
              alt="wallet" class="relative" />
          </div>
        </div>
        <div class="absolute exchange_img lg:block md:block hidden float-right z-10">
          <div class="flex">
            <p class="lg:text-[22px] leading-[23.8px] text-white flex items-center">{{ $t("home.downloadExchange") }}</p>
            <img src="../../assets/chinese_pc/home/exchange_pc.png" 
              alt="exchange" class="relative" />
          </div>
        </div>
        <div class="absolute socialFi_img lg:block md:block hidden float-right z-10">
          <div class="flex">
            <p class="lg:text-[22px] leading-[23.8px] text-white flex items-center">{{ $t("home.socialFi") }}</p>
            <img src="../../assets/chinese_pc/home/socialFI_pc.png" 
              alt="socialFi" class="relative" />
          </div>
        </div>
        <div class="absolute gameFi_img lg:block md:block hidden float-right z-10">
          <div class="flex">
            <p class="lg:text-[22px] leading-[23.8px] text-white flex items-start">{{ $t("home.gameFi") }}</p>
            <img src="../../assets/chinese_pc/home/gameFI_pc.png" 
              alt="gameFi" class="relative" />
          </div>
        </div>
        <div class="absolute trading_center_img lg:block md:block hidden float-right z-10">
          <div class="flex">
            <p class="lg:text-[22px] leading-[23.8px] text-white flex items-start">{{ $t("home.tradingCenter") }}</p>
            <img src="../../assets/chinese_pc/home/net_trading_center_pc.png" 
              alt="trading_center" class="relative" />
          </div>
        </div>
        <div class="lg:block md:block hidden relative top-[23.5%]">
            <div class="bg-laptop_pc bg-no-repeat laptop_pc bg-[length:78%_100%] h-[180px] relative">
              <div class="w-[77.2%] video_player_size">
                <video controls class="h-full mx-auto relative top-[17%]">
                  <source src="../../assets/movie/fhsq.mp4" type="video/mp4">
                </video>
              </div>
            </div>
        </div>
        <div class="lg:hidden md:hidden block px-3 py-6">
          <div class="bg-laptop_mobile h-[230px] bg-no-repeat bg-[length:100%_100%] relative">
            <div class="h-[200px] w-[270px] mx-auto">
              <video controls class="w-full h-full">
                <source src="../../assets/movie/fhsq.mp4" type="video/mp4">
              </video>
            </div>
          </div>
          <div class="relative mb-5 h-[240px] pb-3">
              <div class="absolute lg:hidden md:hidden ecology_mobile inline-block float-left">
                <div class="flex">
                  <p class="text-[16px] leading-[23.8px] font-bold text-white flex items-center tracking-widest	">{{ $t("home.ecology") }}</p>
                  <img src="../../assets/chinese_mobile/home/full_application_ecology_mobile.png" 
                    alt="ecology_mobile" class="relative ml-1" />
                </div>
              </div>
              <div class="absolute lg:hidden md:hidden public_chain_mobile inline-block">
                <div class="flex">
                  <img src="../../assets/chinese_mobile/home/public_chain_mobile.png" 
                    alt="public_chain_mobile" class="relative" />
                  <p class="text-[14px] leading-[23.8px] text-white flex items-center mb-2 ml-1">{{ $t("home.publicChain") }}</p>
                </div>
              </div>
              <div class="absolute lg:hidden md:hidden wallet_mobile inline-block">
                <div class="flex">
                  <img src="../../assets/chinese_mobile/home/wallet_mobile.png" 
                    alt="wallet_mobile" class="relative" />
                  <p class="text-[14px] leading-[23.8px] text-white flex items-center mb-2 ml-1">{{ $t("home.downloadWallet") }}</p>
                </div>
              </div>
              <div class="absolute lg:hidden md:hidden exchange_mobile inline-block float-right">
                <div class="flex">
                  <img src="../../assets/chinese_mobile/home/exchange_mobile.png" 
                    alt="exchange_mobile" class="relative" />
                  <p class="text-[14px] leading-[23.8px] text-white flex items-center mb-2 ml-1">{{ $t("home.downloadExchange") }}</p>
                </div>
              </div>
              <div class="absolute lg:hidden md:hidden socialFI_mobile inline-block float-right">
                <div class="flex">
                  <img src="../../assets/chinese_mobile/home/socialFI_mobile.png" 
                    alt="socialFI_mobile" class="relative" />
                  <p class="text-[14px] leading-[23.8px] text-white flex items-center mb-1 ml-1">{{ $t("home.socialFi") }}</p>
                </div>
              </div>
              <div class="absolute lg:hidden md:hidden gameFI_mobile inline-block float-right">
                <div class="flex">
                  <img src="../../assets/chinese_mobile/home/gameFI_mobile.png" 
                    alt="gameFI_mobile" class="relative" />
                  <p class="text-[14px] leading-[23.8px] text-white flex items-center mb-2 ml-1">{{ $t("home.gameFi") }}</p>
                </div>
              </div>
              <div class="absolute lg:hidden md:hidden trading_center_mobile inline-block float-right">
                <div class="flex">
                  <img src="../../assets/chinese_mobile/home/net_trading_center_mobile.png" 
                    alt="net_trading_center_mobile" class="relative" />
                  <p class="text-[14px] leading-[23.8px] text-white flex items-center ml-1">{{ $t("home.tradingCenter") }}</p>
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
.ecology_img img, .public_chain img,
.wallet_img img, .exchange_img img,
.socialFi_img img, .gameFi_img img,
.trading_center_img img,
.ecology_mobile img,
.public_chain_mobile img, .wallet_mobile img,
.exchange_mobile img, .socialFI_mobile img,
.gameFI_mobile img, .trading_center_mobile img {
  transition: 0.2s all ease-in-out;
}
.ecology_img img:hover, .public_chain img:hover,
.wallet_img img:hover, .exchange_img img:hover,
.socialFi_img img:hover, .gameFi_img img:hover,
.trading_center_img img:hover,
.ecology_mobile img:hover,
.public_chain_mobile img:hover, .wallet_mobile img:hover,
.exchange_mobile img:hover, .socialFI_mobile img:hover,
.gameFI_mobile img:hover, .trading_center_mobile img:hover {
  transform: scale(1.3);
}

@media (min-width: 1440px) {
  .video_pc_size {
    height: 710px;
  }
  .laptop_pc {
    height: 377px;
  }
  .video_player_size {
    height: 240px;
  }

  .circle_bg {
    background-size: 32% 90%;
    background-position: top 100% right 34%;
  }

  .ecology_img {
    top: 36.8%;
    right: 33%;
  }

  .ecology_img > img {
    left: -24px;
    margin-top: 16px;
  }  

  .public_chain {
    top: 7%;
    right: 32.3%;
  }
  .public_chain > p {
    padding-bottom: 14px;
  }

  .wallet_img {
    top: 15%;
    right: 27%;
  }
  .wallet_img > p {
    padding-bottom: 10px;
  }

  .exchange_img {
    top: 29%;
    right: 22.8%;
  }

  .socialFi_img {
    top: 48%;
    right: 21.3%;
  }

  .gameFi_img {
    top: 66%;
    right: 22.5%;
  }

  .trading_center_img {
    top: 81%;
    right: 26.3%;
  }
}
@media (width: 1440px) {
  .video_pc_size {
    height: 575px;
  }
  .laptop_pc {
    height: 290px;
  }
  .video_player_size {
    height: 185px;
  }

  .circle_bg {
    background-size: 32% 90%;
    background-position: top 100% right 34%;
  }

  .ecology_img {
    right: 30%;
    top: 36.5%;
  }

  .ecology_img > p {
    font-size: 21px;
  }

  .ecology_img > img {
    left: -20px;
    width: 80%;
    margin-top: 10px;
  }

  .public_chain {
    top: 7%;
    right: 31%;
  }
  .public_chain > p {
    padding-bottom: 4px;
  }
  .public_chain > img, .wallet_img > img {
    width: 55%;
  }
  .public_chain > p, .wallet_img > p,
  .exchange_img > p, .socialFi_img > p,
  .gameFi_img > p, .trading_center_img > p {
    font-size: 17px;
  }

  .wallet_img {
    top: 15%;
    right: 25.5%;
  }
  .wallet_img > p{
    padding-bottom: 2px;
  }

  .exchange_img {
    top: 29%;
    right: 21.3%;
  }

  .exchange_img > img {
    width: 50%;
  }

  .socialFi_img {
    top: 48%;
    right: 19.5%;
  }

  .socialFi_img > img {
    width: 40%;
  }

  .gameFi_img {
    top: 66%;
    right: 21.2%;
  }

  .gameFi_img > img {
    width: 45%;
  }

  .trading_center_img {
    top: 81%;
    right: 24.8%;
  }

  .trading_center_img > img {
    width: 35%;
  }
  
}
@media (min-width: 1024px) and (max-width: 1439px) {
  .video_pc_size {
    height: 410px;
  }
  .laptop_pc {
    height: 205px;
  }
  .video_player_size {
    height: 130px;
  }

  .circle_bg {
    background-size: 35% 90%;
    background-position: top 100% right 35%;
  }

  .ecology_img {
    right: 26%;
    top: 35.5%;
  }

  .ecology_img > p {
    font-size: 15px;
  }

  .ecology_img > img {
    left: -15px;
    width: 56%;
    margin-top: 4px;
  }

  .public_chain {
    top: 7%;
    right: 28.5%;
  }
  .public_chain img, .wallet_img img,
  .exchange_img img {
    width: 45%;
  }
  .public_chain p, .wallet_img p,
  .exchange_img p, .socialFi_img p,
  .gameFi_img p, .trading_center_img p {
    font-size: 13px;
    padding-bottom: 0;
  }

  .wallet_img {
    top: 15%;
    right: 23%;
  }

  .exchange_img {
    top: 29%;
    right: 19.2%;
  }

  .socialFi_img {
    top: 48%;
    right: 17.5%;
  }

  .socialFi_img img {
    width: 35%;
  }

  .gameFi_img {
    top: 66%;
    right: 19%;
  }

  .gameFi_img img {
    width: 40%;
  }

  .trading_center_img {
    top: 81%;
    right: 22.5%;
  }

  .trading_center_img img {
    width: 30%;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .video_pc_size {
    height: 320px;
  }
  .laptop_pc {
    height: 155px;
  }
  .video_player_size {
    height: 100px;
  }

  .circle_bg {
    background-size: 35% 90%;
    background-position: top 100% right 38%;
  }

  .ecology_img {
    right: 23.5%;
    top: 34%;
  }

  .ecology_img p {
    font-size: 11px;
  }

  .ecology_img img {
    left: -12px;
    width: 46%;
    margin-top: 0;
  }
  .public_chain {
    top: 7%;
    right: 27.5%;
  }
  .public_chain img, .wallet_img img,
  .exchange_img img {
    width: 35%;
  }
  .public_chain p, .wallet_img p,
  .exchange_img p, .socialFi_img p,
  .gameFi_img p, .trading_center_img p {
    font-size: 10px;
    padding-bottom: 0;
  }

  .wallet_img {
    top: 15%;
    right: 22%;
  }

  .exchange_img {
    top: 29%;
    right: 18.3%;
  }

  .socialFi_img {
    top: 48%;
    right: 17%;
  }

  .socialFi_img img {
    width: 32%;
  }

  .gameFi_img {
    top: 65%;
    right: 18%;
  }

  .gameFi_img img {
    width: 35%;
  }

  .trading_center_img {
    top: 80%;
    right: 22%;
  }

  .trading_center_img img {
    width: 28%;
  }
}
@media (max-width: 767px) {
  .video_pc_size {
    height: 500px;
  }

  .circle_bg {
    background-size: 57% 36%;
    background-position: top 87% left 39%;
  }
}

@media (max-width: 425px) {
  .ecology_mobile {
    top: 33%;
    left: 10%;
  }

  .public_chain_mobile {
    top: 4%;
    right: 35%;
  }

  .wallet_mobile {
    top: 15%;
    right: 23%;
  }

  .exchange_mobile {
    top: 31%;
    right: 10%;
  }

  .socialFI_mobile {
    top: 49%;
    right: 3.5%;
  }

  .gameFI_mobile {
    top: 66%;
    right: 11%;
  }

  .trading_center_mobile {
    top: 77%;
    right: 17%;
  }
}

@media (min-width: 426px) and (max-width: 767px) {
  .ecology_mobile {
    top: 33%;
    left: 24%;
  }

  .public_chain_mobile {
    top: 4%;
    right: 40%;
  }

  .wallet_mobile {
    top: 15%;
    right: 28%;
  }

  .exchange_mobile {
    top: 31%;
    right: 18%;
  }

  .socialFI_mobile {
    top: 49%;
    right: 14%;
  }

  .gameFI_mobile {
    top: 66%;
    right: 22%;
  }

  .trading_center_mobile {
    top: 77%;
    right: 29%;
  }
}
</style>
