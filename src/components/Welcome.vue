<script setup>

defineProps({
  href: String,
  img: String,
  text: String
})
</script>

<template>
<router-link to="/" class="group">
    <div class="relative">
        <img class="" :src="img">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="bg-gray-900 bg-opacity-50 rounded-md px-2 text-neutral-300 font-bold text-3xl">{{text}}</div>
        </div>
    </div>
</router-link>
<div class="py-1 bg-gray-900"></div>
</template>

<style scoped>
</style>
