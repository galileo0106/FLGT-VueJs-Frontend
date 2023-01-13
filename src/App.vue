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

<style>
.bg-gradient-to-r {
    background-image: none !important;
}

.to-indigo-400 {
    --tw-gradient-to: none !important;
}

.from-blue-400 {
    --tw-gradient-from: none !important;
    --tw-gradient-stops: none !important;
}
</style>
