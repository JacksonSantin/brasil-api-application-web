<template>
  <v-container>
    <card-waves
      v-if="controller.changeScreen.value"
      :controller="controller"
    />
    <card-search-wave
      v-if="!controller.changeScreen.value"
      :controller="controller"
    />
  </v-container>
</template>

<script setup>
import { cptecWavesControllerImpl } from "../di/di";
import CardWaves from "../components/cardWaves.vue";
import CardSearchWave from "../components/cardSearchWave.vue";
const controller = cptecWavesControllerImpl();
</script>

<style>
</style>