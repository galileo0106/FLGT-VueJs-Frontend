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
</style>
