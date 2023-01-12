<template>
    <div class="language-select ml-5" :tabindex="tabindex" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open">
            {{ selected }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div class="px-3 py-2" :class="selected == option ? 'text-red' : ''"
             v-for="(option, i) of options" :key="i"
                @click="selected = option; open = false;">
                {{ option }}
            </div>
        </div>
    </div>
</template>
  
<script>
    export default {
        props: {
        options: {
            type: Array,
            required: true,
        },
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
            return {
                selected: this.default ? this.default : this.options.length > 0 ? this.options[0] : null,
                open: false,
            };
        },
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
  
.language-select .selected.open {
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
  