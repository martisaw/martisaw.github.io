<script setup>

defineProps({
  href: String,
  img: String,
  text: String
})
</script>

<template>
<router-link to="/" class="group">
    <div class="relative m-2">
        <img class="rounded-lg" :src="img">
        
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div class="bg-gray-900 bg-opacity-50 rounded-md px-2 text-white font-bold text-2xl">{{text}}</div>
        </div>
        <div class="absolute bottom-2 right-2">
          <div class="bg-white rounded-md p-1 font-bold inline-flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>coming soon</span>
          </div>
        </div>
    </div>
</router-link>
<div class="py-1"></div>
</template>

<style scoped>
</style>
