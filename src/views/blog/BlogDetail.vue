<template>
    <div class="w-full font-normal_font">
        <div class="lg:bg-blog_bg_pc md:bg-blog_bg_pc bg-blog_bg_mobile bg-no-repeat
            lg:h-[638px] md:h-[520px] h-[342px] w-full bg-[length:100%_100%] relative">
            <div class="h-full lg:py-[105px] md:py-[60px] py-[26px] relative container mx-auto text-center">
                <div class="lg:px-0 md:px-[35px] px-[35px]">
                    <p class="lg:text-[64px] md:text-[44px] text-[32px] leading-14
                        text-themeGradient font-bold lg:tracking-[5px] tracking-0">
                        {{ $t("blog.blogTitle") }}
                    </p>
                    <p class="lg:w-[847px] w-full mx-auto
                        lg:text-[20px] md:text-[17px] text-[14px] lg:mt-[40px] md:mt-[20px] mt-[6px]
                        lg:leading-[30px] md:leading-[25px] leading-[21px] font-medium text-justify text-white">
                        {{ $t("blog.blogDesc") }}
                    </p>
                </div>
            </div>
        </div>
        <div class="lg:w-[1170px] md:w-full w-full mx-auto px-[17px] width-custom">
            <div class="breadcrumb mt-[30px] lg:block md:block hidden">
                <a class="text-[20px] leading-[30px] text-[#666] font-medium" href="/blog">
                    {{ $t("blog.blog") }}
                </a>
                <span class="text-[#C9CDD4] px-[15px]">/</span>
                <a class="text-[20px] leading-[30px] text-[#333] font-medium">
                    {{ $t("blog.phoenixMorningPost") }}
                </a>
            </div>

            <div class="detail-info lg:mt-[60px] md:mt-[40px] mt-[20px] lg:mb-[30px] md:mb-[15px] mb-[6px]
                lg:text-center md:text-center text-left">
                <h3 class="lg:text-[40px] md:text-[30px] text-[20px] leading-[30px] font-bold
                    lg:text-black md:text-black text-[#141414] blog_overflow_title h-[50px]">
                    {{ $t("blog.blogItemTitle1") }}
                </h3>
                <p class="lg:text-[#666] md:text-[#666] text-[#696969] font-medium
                    lg:text-[18px] md:text-[16px] text-[14px] leading-[26px] lg:my-[30px] md:my-[20px] my-[10px]">
                    2023-01-13
                </p>

                <div>
                    <p class="lg:block md:block hidden text-[20px] text-black leading-[40px] indent-[32px]
                        text-left">
                        {{ $t("blog.blogDetailDesc1") }}
                    </p>
                    <img class="lg:block md:block hidden mx-auto my-[30px]" alt="blog detail img"
                        src="../../assets/chinese_pc/blog/blog_detail_img_pc.png"/>
                    <img class="lg:hidden md:hidden block mx-auto mt-[10px] mb-[30px]" alt="blog detail img"
                        src="../../assets/chinese_mobile/blog/blog_detail_img_mobile.png"/>

                    <div class="lg:mb-[120px] md:mb-[75px] mb-[30px]">
                        <p class="lg:hidden md:hidden block text-[16px] text-black leading-[30px] indent-[32px]
                            text-left">
                            {{ $t("blog.blogDetailDesc1") }}
                        </p>
                        <p class="text-black font-medium lg:text-[20px] md:text-[18px] text-[16px] text-left
                            lg:leading-[40px] md:leading-[35px] leading-[30px] lg:indent-[32px] md:indent-[32px]">
                            {{ $t("blog.blogDetailDesc2") }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BlogDetail',
  components: {
  }
}
</script>
<style scoped>
.text-themeGradient {
    background: -webkit-linear-gradient(0deg, #6A46E5 35%, #EE6DBC 75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
@media (min-width: 1440px) {
    .width-custom {
        width: 1170px;
    }
}
@media (min-width: 1024px) and (max-width: 1439px) {
    .width-custom {
        width: 990px;
    }
}
@media (max-width: 767px) {
    .blog_overflow_title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>