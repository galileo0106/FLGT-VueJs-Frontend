<script setup>
    import Navbar from "./components/Layouts/Navbar.vue";
    import Footer from "./components/Layouts/Footer.vue";
</script>

<template>
    <div class="w-full font-normal_font" id="app">
        <Navbar/>
            <router-view/>
        <Footer></Footer>
      </div>
</template>

<script>
import en from './assets/lang/en.json';
import zh from './assets/lang/zh.json';
    export default {
        name: 'app',
        data() {
            return {
                defaultLanguage: "zh",
            }
        },
        beforeMount() {
          if(window.location.pathname == "/") {
            this.$router.push("/home");
          }
          let lang = !!localStorage.getItem("lang") ? localStorage.getItem("lang") : this.defaultLanguage;

          this.$i18n.locale = lang;
          this.$i18n.setLocaleMessage(lang, lang == "en" ? en : lang == "zh" ? zh : null);
        },
    }
</script>

<style>
    .carousel__prev, .carousel__next {
        color: white !important;
    }
    .video-js .vjs-big-play-button {
        top: 50% !important;
        left: 45% !important;
    }

    body {
        overflow: overlay;
    }

    *::-webkit-scrollbar {
        display: block;
        width: 10px;
    }

    *::-webkit-scrollbar-button {
        display: none;
    }

    *::-webkit-scrollbar-track {
        background-color: #00000000;
    }

    *::-webkit-scrollbar-track-piece {
        background-color: #00000000;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #00000000;
        border: 5px solid transparent;
        border-radius: 24px;
        box-shadow: 4px 0px 0px 4px #00000040 inset;
    }

    *::-webkit-scrollbar-thumb:hover {
        background-color: #00000040;
        border: 0px solid transparent;
        box-shadow: none;
    }
</style>
