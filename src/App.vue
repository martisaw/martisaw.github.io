<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavBar from './components/NavBar.vue'
import Welcome from './components/Welcome.vue'
</script>

<template>
  <!--<img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />-->
  <div class="bg-gray-900 text-white p-2 grid grid-cols-3">
    <div class="text-left">ENV42DAY</div>
    <div class="text-center">logo</div>
    <div class="text-right">Insta</div>
  </div>
  <!--<Welcome></Welcome> FIX LATER-->
  <Welcome href="" img="./src/assets/DSC05029.jpg" text="The Manifest"></Welcome>
  <Welcome href="" img="./src/assets/DSC05025.jpg" text="How it works"></Welcome>
  <Welcome href="" img="./src/assets/DSC05041.jpg" text="Trashwall"></Welcome>
  <Welcome href="" img="./src/assets/DSC05037.jpg" text="Contribute"></Welcome>
  <Welcome href="" img="./src/assets/DSC05033.jpg" text="About us"></Welcome>
  <NavBar class="sticky bottom-0"></NavBar>
  
  <div>Imprint</div>
  <div>Privacy</div>
  
</template>


<style></style>
