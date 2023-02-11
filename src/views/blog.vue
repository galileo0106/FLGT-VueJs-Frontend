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
        <BlogList/>
    </div>
</template>

<script>
import BlogList from "./blog/BlogList.vue"
export default {
  name: 'Blog',
  components: {
    BlogList
  },
  mounted() {
    window.scrollTo(0,0);
  }
}
</script>
<style scoped>
.text-themeGradient {
    background: -webkit-linear-gradient(0deg, #6A46E5 35%, #EE6DBC 75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>