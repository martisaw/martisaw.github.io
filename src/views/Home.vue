<script setup>
import Welcome from '../components/Welcome.vue'
import strawCup from '../assets/DSC05029.jpg'
import straw from '../assets/DSC05025.jpg'
import cup from '../assets/DSC05041.jpg'
import toothbrush from '../assets/DSC05037.jpg'
import mask from '../assets/DSC05033.jpg'
</script>

<template>
  <Welcome href="" :img=strawCup text="The Manifest"></Welcome>
  <Welcome href="" :img=straw text="How it works"></Welcome>
  <Welcome href="" :img=cup text="Trashwall"></Welcome>
  <Welcome href="" :img=toothbrush text="Contribute"></Welcome>
  <Welcome href="" :img=mask text="About us"></Welcome>
</template>