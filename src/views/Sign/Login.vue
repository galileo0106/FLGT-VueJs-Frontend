<script setup>
</script>

<template>
    <div class="w-full font-normal_font">
        <div class="bg-sign_bg_pc bg-[length:100%_100%] w-full h-[695px] pt-[156px] lg:block md:block hidden">
            <div class="lg:w-[931px] md:w-[710px] h-[440px] mx-auto">
                <div class="flex flex-row">
                    <div>
                        <img src="../../assets/chinese_pc/sign/login_left_img_pc.png" alt="left image" />
                    </div>
                    <div class="lg:w-[360px] md:w-[280px] p-[30px] bg-white text-center">
                        <p class="text-[20px] font-bold leading-[23.8px] text-black">
                            <img src="../../assets/logo.svg" alt="fenghuang icon"
                                class="inline mr-[6px]" />
                            凤凰社区
                        </p>
                        <div v-if="isLogin" class="lg:mt-[50px] md:mt-[20px]">
                            <img src="../../assets/chinese_pc/sign/register_success_pc.svg" alt="register success" 
                                class="mx-auto" />
                            <p class="mt-[10px] text-[20px] leading-[28px] text-[#333] text-center">注册成功</p>
                            <p class="text-[14px] leading-[23.8px] text-[#666]">您已注册成功，可前往登录</p>
                            <div class="lg:mt-[60px] md:mt-[40px]">
                                <button class="w-full rounded-[48px] login-btn text-white py-[10px]
                                    text-[16px] leading-[22.4px] text-center font-bold"
                                    @click="register">立即登录</button>
                            </div>
                        </div>
                        <div v-else>
                            <ul class="nav nav-tabs flex flex-row md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 relative mt-[33px]" 
                                id="tabs-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <p class="cursor-pointer lg:text-[18px] md:text-[12px] lg:leading-[23.8px] md:leading-[15px] font-medium py-1 lg:px-3 md:px-1"
                                        :class="selectedTab == 'password' ? 'text-[#F02148]' : 'text-[#333]'"
                                        id="tabs-password-tab" data-bs-toggle="pill" 
                                        data-bs-target="#tabs-password" role="tab" aria-controls="tabs-password" 
                                        aria-selected="false" @click="() => handleTab('password')">
                                        密码登录
                                    </p>
                                    <div class="w-[30px] h-[2px] mx-auto bg-[#F02148]"
                                        :class="selectedTab == 'password' ? 'block' : 'hidden'"></div>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <p class="cursor-pointer lg:text-[18px] md:text-[12px] lg:leading-[23.8px] md:leading-[15px] font-medium py-1 lg:px-3 md:px-1"
                                        :class="selectedTab == 'message' ? 'text-[#F02148]' : 'text-[#333]'"
                                        id="tabs-message-tab" data-bs-toggle="pill" 
                                        data-bs-target="#tabs-message" role="tab" aria-controls="tabs-message" 
                                        aria-selected="false" @click="() => handleTab('message')">短信登录</p>
                                    <div class="w-[30px] h-[2px] mx-auto bg-[#F02148]"
                                        :class="selectedTab == 'message' ? 'block' : 'hidden'"></div>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <p class="cursor-pointer lg:text-[18px] md:text-[12px] lg:leading-[23.8px] md:leading-[15px] font-medium py-1 lg:px-3 md:px-1"
                                        :class="selectedTab == 'qrCode' ? 'text-[#F02148]' : 'text-[#333]'"
                                        id="tabs-qrCode-tab" data-bs-toggle="pill" 
                                        data-bs-target="#tabs-qrCode" role="tab" aria-controls="tabs-qrCode" 
                                        aria-selected="false" @click="() => handleTab('qrCode')">扫码登录</p>
                                    <div class="w-[30px] h-[2px] mx-auto bg-[#F02148]"
                                        :class="selectedTab == 'qrCode' ? 'block' : 'hidden'"></div>
                                </li>
                            </ul>
                            <div class="tab-content" id="tabs-tabContent">
                                <div class="tab-pane fade text-white mt-[30px]" 
                                    :class="selectedTab == 'password' ? 'show active block' : 'hidden'"
                                    id="tabs-password" role="tabpanel" aria-labelledby="tabs-password-tab">
                                    <div class="flex flex-row">
                                        <div>
                                            <select class="bg-transparent text-[#666] 
                                                lg:text-[14px] md:text-[10px] text-medium lg:leading-[19.6px] md:leading-[14px]
                                                lg:py-[10px] md:py-[5px] lg:mr-[10px] md:mr-[5px] outline-none">
                                                <option v-for="item in countryList" :key="item.id" :value="item.value">
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="w-[2px] h-[20px] bg-[#D9D9D9] m-auto"></div>
                                        <div>
                                            <input type="text" placeholder="请输入手机号/邮箱" 
                                                class="border-none text-[#666] lg:text-[14px] md:text-[10px] 
                                                    lg:leading-[19.6px] md:leading-[14px] lg:p-[10px] md:p-[5px] w-full outline-none" />
                                        </div>
                                    </div>
                                    <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                                    <div class="mt-[15px]">
                                        <input type="text" placeholder="请输入密码" 
                                            class="border-none text-[#666] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[14px]
                                             lg:py-[10px] md:py-[5px] w-full outline-none" />
                                    </div>
                                    <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                                    <div class="mt-[15px]">
                                        <div class="grid grid-cols-2">
                                            <div class="col-span-1 text-left">
                                                <a class="text-[#333] lg:text-[12px] md:text-[10px] leading-[15.24px]"
                                                    href="/register">
                                                    注册账号
                                                </a>
                                            </div>
                                            <div class="col-span-1 text-right">
                                                <p class="text-[#333] lg:text-[12px] md:text-[10px] leading-[15.24px]">忘记密码?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="lg:mt-[30px] md:mt-[15px] text-left">
                                        <input type="checkbox" class="mr-1" />
                                        <label class="lg:text-[12px] md:text-[9px] leading-[20px] text-[#333]">同意：
                                            <a class="text-[#0057FF]">《用户协议》</a>和
                                            <a class="text-[#0057FF]">《隐私政策》</a></label>
                                    </div>
                                    <div class="mt-[10px]">
                                        <button class="w-full rounded-[48px] login-btn text-white lg:py-[10px] md:py-[5px]
                                            lg:text-[16px] md:text-[12px] leading-[22.4px] text-center font-bold"
                                            @click="register">登录</button>
                                    </div>
                                </div>
                                <div class="tab-pane fade text-white mt-[30px]" 
                                    :class="selectedTab == 'message' ? 'show active block' : 'hidden'"
                                    id="tabs-message" role="tabpanel" aria-labelledby="tabs-message-tab">
                                    <div class="flex flex-row">
                                        <div>
                                            <select class="bg-transparent text-[#666] lg:text-[14px] md:text-[10px] text-medium leading-[19.6px] 
                                                lg:py-[10px] md:py-[5px] lg:mr-[10px] md:mr-[5px] outline-none">
                                                <option v-for="item in countryList" :key="item.id" :value="item.value">
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="w-[2px] h-[20px] bg-[#D9D9D9] m-auto"></div>
                                        <div>
                                            <input type="text" placeholder="请输入手机号" 
                                                class="border-none text-[#666] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[14px]
                                                 lg:p-[10px] md:p-[5px] w-full outline-none" />
                                        </div>
                                    </div>
                                    <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                                    <div class="mt-[15px] relative">
                                        <input type="text" placeholder="请输入验证码" 
                                            class="border-none text-[#666] lg:text-[14px] md:text-[10px] lg:leading-[19.6px] md:leading-[14px]
                                             lg:py-[10px] md:py-[5px] w-full outline-none" />
                                        <a class="absolute right-0 top-[10px] text-[#F02148] lg:text-[14px] md:text-[10px] leading-[19.6px]">获取验证码</a>
                                    </div>
                                    <div class="w-full h-[1px] bg-[#D9D9D9]"></div>
                                    <div class="lg:mt-[60px] md:mt-[40px] text-left">
                                        <input type="checkbox" class="mr-1" />
                                        <label class="lg:text-[12px] md:text-[9px] leading-[20px] text-[#333]">同意：
                                            <a class="text-[#0057FF]">《用户协议》</a>和
                                            <a class="text-[#0057FF]">《隐私政策》</a></label>
                                    </div>
                                    <div class="mt-[10px]">
                                        <button class="w-full rounded-[48px] login-btn text-white lg:py-[10px] md:py-[5px]
                                            lg:text-[16px] md:text-[12px] leading-[22.4px] text-center font-bold"
                                            @click="register">登录</button>
                                    </div>
                                </div>
                                <div class="tab-pane fade text-white mt-[30px]" 
                                    :class="selectedTab == 'qrCode' ? 'show active block' : 'hidden'"
                                    id="tabs-qrCode" role="tabpanel" aria-labelledby="tabs-qrCode-tab">
                                    <p class="text-[#666] lg:text-[14px] md:text-[10px] leading-[19.6px] text-center">打开
                                        <a class="text-[#F02148]">凤凰手机APP</a><br/>扫描二维码登录
                                    </p>
                                    <div class="lg:mt-[20px] md:mt-[10px] lg:w-[150px] md:w-[100px] lg:h-[150px] md:h-[100px] mx-auto border border-[#BEBEBE] p-[20px]">
                                        <img src="../../assets/chinese_pc/sign/login_qr_code_pc.png" alt="qr code image" />
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
export default {
    name: 'Login',
    data() {
        return {
            selectedTab: "password",
            isLogin: false,
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
        handleTab: function(tab) {
            this.selectedTab = tab;
        },
        register: function() {
            this.isLogin = !this.isLogin;
        }
    }
}
</script>


<style>
.login-btn {
    background: linear-gradient(to right, #F02148 8.34%, #FF5B21 100%);
}
</style>