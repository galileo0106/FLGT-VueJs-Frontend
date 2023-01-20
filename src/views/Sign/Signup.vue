<script setup>
</script>

<template>
    <div class="w-full font-normal_font">
        <div class="bg-sign_bg_pc bg-[length:100%_100%] w-full h-[695px] pt-[156px]">
            <div class="w-[931px] h-[440px] mx-auto">
                <div class="flex flex-row">
                    <div>
                        <img src="../../assets/chinese_pc/sign/login_left_img_pc.png" alt="left image" />
                    </div>
                    <div class="w-[360px] p-[30px] bg-white text-center">
                        <p class="text-[20px] font-bold leading-[23.8px] text-black">
                            <img src="../../assets/logo.svg" alt="fenghuang icon"
                                class="inline mr-[6px]" />
                            凤凰社区
                        </p>
                        <p class="mt-[20px] mb-[25px] text-[#333] text-[18px] leading-[23.8px] font-medium text-left">
                            欢迎注册
                        </p>
                        <div class="text-white" >
                            <div class="flex flex-row">
                                <div>
                                    <select class="bg-transparent text-[#666] text-[14px] text-medium leading-[19.6px] 
                                        py-[10px] mr-[10px] outline-none">
                                        <option v-for="item in countryList" :key="item.id" :value="item.value">
                                            {{ item.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="w-[2px] h-[20px] bg-[#D9D9D9] m-auto"></div>
                                <div>
                                    <input type="text" placeholder="请输入手机号/邮箱" 
                                        class="border-none text-[#666] text-[14px] leading-[19.6px] p-[10px] w-full outline-none" />
                                </div>
                            </div>
                            <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                            <div class="mt-[15px] relative">
                                <input type="text" placeholder="请输入登录密码" 
                                    class="border-none text-[#666] text-[14px] leading-[19.6px] py-[10px] w-full outline-none" />
                                <i class="text-[#666] cursor-pointer absolute right-0 top-[10px]" 
                                    :class="showPassword ? 'fa fa-eye' : 'fa fa-eye'" @click="handlePassword"></i>
                            </div>
                            <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                            <div class="mt-[15px] relative">
                                <input type="text" placeholder="再次输入登录密码" 
                                    class="border-none text-[#666] text-[14px] leading-[19.6px] py-[10px] w-full outline-none" />
                                <i class="absolute right-0 top-[10px] text-[#666] cursor-pointer" 
                                    :class="showConfirmPassword ? 'fa fa-eye' : 'fa fa-eye'"
                                    @click="handleConfirmPassword"></i>
                            </div>
                            <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                            <div class="mt-[30px] text-left">
                                <input type="checkbox" class="mr-1" />
                                <label class="text-[12px] leading-[20px] text-[#333]">同意：
                                    <a class="text-[#0057FF]">《用户协议》</a>和
                                    <a class="text-[#0057FF]">《隐私政策》</a></label>
                            </div>
                            <div class="mt-[10px]">
                                <button class="w-full rounded-[48px] login-btn text-white py-[10px]
                                    text-[16px] leading-[22.4px] text-center font-bold">登录</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            showPassword: false,
            showConfirmPassword: false,
            countryList: [
                { id: 1, name: "中国大陆+86", value: "中国大陆+86" },
                { id: 2, name: "中国台湾+886", value: "中国台湾+886" },
                { id: 3, name: "中国香港+852", value: "中国香港+852" },
                { id: 4, name: "中国澳门+853", value: "中国澳门+853" },
                { id: 5, name: "美国+1", value: "美国+1" },
                { id: 6, name: "英国+44", value: "英国+44" },
                { id: 7, name: "澳大利亚+61", value: "澳大利亚+61" },
                { id: 8, name: "俄罗斯+7", value: "俄罗斯+7" },
                { id: 9, name: "南非+27", value: "南非+27" },
                { id: 10, name: "荷兰+31", value: "荷兰+31" },
                { id: 11, name: "比利时+32", value: "比利时+32" },
            ]
        }
    },
    methods: {
        handlePassword: function() {
            this.showPassword = !this.showPassword
        },
        handleConfirmPassword: function() {
            this.showConfirmPassword = !this.showConfirmPassword
        },
    }
}
</script>


<style>
.login-btn {
    background: linear-gradient(to right, #F02148 8.34%, #FF5B21 100%);
}
</style>