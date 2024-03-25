<template>
  <v-container>
    <card-capitals :controller="controller" />
  </v-container>
</template>

<script setup>
import { cptecCapitalsControllerImpl } from "../di/di";
import CardCapitals from "../components/cardCapitals.vue";
const controller = cptecCapitalsControllerImpl();
</script>

<style>
</style>