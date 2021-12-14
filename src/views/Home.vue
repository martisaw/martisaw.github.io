<script setup>
import Welcome from '../components/Welcome.vue'
import strawCup from '../assets/DSC05029_mobile.jpg'
import straw from '../assets/DSC05025_mobile.jpg'
import cup from '../assets/DSC05041_mobile.jpg'
import toothbrush from '../assets/DSC05037_mobile.jpg'
import mask from '../assets/DSC05033_mobile.jpg'
</script>

<template>
  <Welcome href="" :img=strawCup text="The Manifest"></Welcome>
  <Welcome href="" :img=straw text="How it works"></Welcome>
  <Welcome href="" :img=cup text="Trashwall"></Welcome>
  <Welcome href="" :img=toothbrush text="Contribute"></Welcome>
  <Welcome href="" :img=mask text="About us"></Welcome>
</template>