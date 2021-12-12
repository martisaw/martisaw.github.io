<script setup>

function openMenu(){
  const nav = document.getElementById('nav')
  const menuIcon = document.getElementById('menu-icon')
  const menuClose = document.getElementById('menu-close')
  nav.classList.remove("max-h-0")
  
  menuIcon.classList.toggle("hidden")
  menuClose.classList.toggle("hidden")
  nav.classList.add("max-h-96")
}

function closeMenu(){  
  const nav = document.getElementById('nav')
  const menuIcon = document.getElementById('menu-icon')
  const menuClose = document.getElementById('menu-close')
  
  nav.classList.remove("max-h-96")
  nav.classList.add("max-h-0")
  menuIcon.classList.toggle("hidden")
  menuClose.classList.toggle("hidden")
}

</script>

<template>
<div class="w-full h-12 bg-gray-900"><!--Spacer for fixed bottom--></div>
<div class="fixed bottom-0 w-full bg-gray-900 bg-opacity-90 text-white rounded-t-2xl">
  <div id="nav" class="grid justify-items-center space-y-2 max-h-0 overflow-hidden transition-[max-height] ease-in">
    <div class="invisible">Spacer</div>
    <div class=""><router-link class="p-4 text-xl" to="/">Home</router-link></div>
    <div class=""><router-link class="p-4 text-xl" to="/">Manifest</router-link></div>
    <div class=""><router-link class="p-4 text-xl" to="/">How it works</router-link></div>
    <div class=""><router-link class="p-4 text-xl" to="/">Trashwall</router-link></div>
    <div class=""><router-link class="p-4 text-xl" to="/">Contribute</router-link></div>
    <div class=""><router-link class="p-4 text-xl" to="/">About us</router-link></div>
    <div>Insta Icon</div>
    <div class="invisible">Spacer</div>
  </div>  
  <div id="menu-close" @click="closeMenu" class="flex justify-center p-2 hidden">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </div>
  <div id="menu-icon" @click="openMenu" class="flex justify-center p-2">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
  </div>
</div>
</template>
