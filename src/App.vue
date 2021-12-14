<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavBar from './components/NavBar.vue'
import Welcome from './components/Welcome.vue'
</script>

<template>
  
  
  <div class="bg-gray-900 text-white p-2 grid grid-cols-3">
    <div class="text-left">ENV42DAY</div>
    <div class="text-center">logo</div>
    <div class="text-right">Insta</div>
  </div>
  
  <router-view></router-view>
  <div class="bg-gray-900 text-white p-2 grid justify-items-center">
    <div class=""><router-link class="" to="/">Imprint</router-link></div>
    <div class=""><router-link class="" to="/">Privacy</router-link></div>
  </div>
  <!--<NavBar class="sticky bottom-0"></NavBar>-->
  <NavBar></NavBar>
  
  
</template>


<style></style>
