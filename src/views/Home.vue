<script setup>
import Welcome from '../components/Welcome.vue'
import WelcomeDisabled from '../components/WelcomeDisabled.vue'
import strawCup from '../assets/DSC05029_mobile.jpg'
import straw from '../assets/DSC05025_mobile.jpg'
import cup from '../assets/DSC05041_mobile.jpg'
import toothbrush from '../assets/DSC05037_mobile.jpg'
import mask from '../assets/DSC05033_mobile.jpg'
</script>

<template>
  <WelcomeDisabled href="" :img=strawCup text="The Manifest"></WelcomeDisabled>
  <WelcomeDisabled href="" :img=straw text="How it works"></WelcomeDisabled>
  <WelcomeDisabled href="" :img=cup text="Trashwall"></WelcomeDisabled>
  <WelcomeDisabled href="" :img=toothbrush text="Contribute"></WelcomeDisabled>
  <WelcomeDisabled href="" :img=mask text="About us"></WelcomeDisabled>
</template>