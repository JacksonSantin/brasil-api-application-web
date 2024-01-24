<template>
  <v-container>
    <card-airports
      v-if="controller.changeScreen.value"
      :controller="controller"
    />
    <card-search-airport
      v-if="!controller.changeScreen.value"
      :controller="controller"
    />
  </v-container>
</template>

<script setup>
import { cptecAirportsControllerImpl } from "../di/di";
import CardAirports from "../components/cardAirports.vue";
import CardSearchAirport from "../components/cardSearchAirport.vue";
const controller = cptecAirportsControllerImpl();
</script>

<style>
</style>