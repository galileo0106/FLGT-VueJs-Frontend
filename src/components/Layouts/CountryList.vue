<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="bg-white h-screen ml-[4]">
        <div v-for="country in countryList" :key="country.id" class="flex flex-row justify-between">
            <p class="text-left text-[#333] text-[16px] leading-[22px] py-4">{{ country.name }}</p>
            <p class="text-right text-[#333] text-[14px] leading-[20px] py-[17px] pr-4">{{ country.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "CountryList",
    data() {
        return {
            countryList: [
            { id: 1, name: "中国大陆", value: "+86" },
                { id: 2, name: "中国台湾", value: "+886" },
                { id: 3, name: "中国香港", value: "+852" },
                { id: 4, name: "中国澳门", value: "+853" },
                { id: 5, name: "美国", value: "+1" },
                { id: 6, name: "英国", value: "+44" },
                { id: 7, name: "比利时", value: "+32" },
                { id: 8, name: "澳大利亚", value: "+61" },
                { id: 9, name: "法国", value: "+33" },
                { id: 10, name: "日本", value: "+81" },
                { id: 11, name: "韩国", value: "+82" },
                { id: 12, name: "新加坡", value: "+65" },
                { id: 13, name: "泰国", value: "+66" },
                { id: 14, name: "中国台湾", value: "+886" },
            ]
        }
    }
}
</script>

<style scoped>
</style>
