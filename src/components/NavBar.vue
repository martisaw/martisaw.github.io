<script setup>
function toggle(){
  const nav = document.getElementById('nav')
  nav.classList.toggle("hidden")
}

</script>

<template>
<div class=" bg-gray-900 text-white" >
  <div id="nav" class="flex-col justify-center">
    <div class="flex justify-center"><router-link class="p-2" to="/">Home</router-link></div>
    <div class="flex justify-center"><router-link class="p-2" to="/">Manifest</router-link></div>
    <div class="flex justify-center"><router-link class="p-2" to="/">How it works</router-link></div>
    <div class="flex justify-center"><router-link class="p-2" to="/">Trashwall</router-link></div>
    <div class="flex justify-center"><router-link class="p-2" to="/">Contribute</router-link></div>
    <div class="flex justify-center"><router-link class="p-2" to="/">About us</router-link></div>
  </div>
  
  <div id="icon" @click="toggle" class="p-2">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
  </div>
</div>
</template>


<style scoped>
</style>
