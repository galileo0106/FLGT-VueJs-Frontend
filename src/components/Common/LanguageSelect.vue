<template>
    <div class="language-select ml-5" :tabindex="tabindex" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open">
            {{ selectedLangName }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div class="px-3 py-2" :class="selected == option ? 'text-red' : ''"
             v-for="option of options" :key="option.id"
                @click="() => handleLanguage(option)">
                {{ option.name }}
            </div>
        </div>
    </div>
</template>
  
<script>
import en from '../../assets/lang/en.json';
import zh from '../../assets/lang/zh.json';
    export default {
        props: {
            default: {
                type: String,
                required: false,
                default: null,
            },
            tabindex: {
                type: Number,
                required: false,
                default: 0,
            },
        },
        data() {
            var lang = localStorage.getItem("lang");
            return {
                options: [
                    {id: 1, name: '中文', value: 'zh'}, {id: 2, name: 'English', value: 'en'}
                ],
                selected: 'zh',
                selectedLangName: lang == "zh" ? '中文' : lang == "en" ? "English" : "",
                open: false,
                activeLanguage: this.$i18n.locale
            };
        },
        methods: {
            handleLanguage: function(option) {
                this.selected = option.value;
                this.selectedLangName = option.name;
                this.open = false;
                
                var lang = option.value;
                this.activeLanguage = lang; // update CSS class in selector
                this.$i18n.locale = lang;
                this.$i18n.setLocaleMessage(lang, lang == "en" ? en : lang == "zh" ? zh : null);
                // persist selected language
                localStorage.setItem("lang", lang);
                window.location.reload();
            }
        }
    };
</script>
  
<style scoped>
.language-select {
    position: relative;
    width: 75px;
    padding-left: 10px;
    text-align: left;
    outline: none;
}
  
.language-select .selected {
    color: #333;
    cursor: pointer;
    user-select: none;
}
  
.language-select .selected:after {
    position: absolute;
    content: "";
    top: 22px;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #fff transparent transparent transparent;
}
  
.language-select .items {
    color: red;
    overflow: hidden;
    background: white;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    box-shadow: 0px 2px 10px #aaa;
}
  
.language-select .items div {
    color: #333;
    cursor: pointer;
    user-select: none;
}
  
.language-select .items div:hover {
    background-color: rgba(246, 96, 47, 0.1);
}
  
.selectHide {
    display: none;
}

.text-red {
    color: #F02148 !important;
}
</style>
  