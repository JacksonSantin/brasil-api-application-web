<template>
  <v-container>
    <card-city
      v-if="controller.changeScreen.value"
      :controller="controller"
    />
    <card-search-city
      v-if="!controller.changeScreen.value"
      :controller="controller"
    />
  </v-container>
</template>

<script setup>
import { cptecCityControllerImpl } from "../di/di";
import CardCity from "../components/cardCity.vue";
import CardSearchCity from "../components/cardSearchCity.vue";
const controller = cptecCityControllerImpl();
</script>

<style>
</style>