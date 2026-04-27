<template>
  <v-container>
    <card-taxa
      v-if="controller.formScreen.value"
      :controller="controller"
    />
    <card-taxa-return
      v-if="!controller.formScreen.value"
      :controller="controller"
    />
  </v-container>
</template>

<script setup>
import { taxaControllerImpl } from "../di/di";
import CardTaxa from "../components/cardTaxa.vue";
import CardTaxaReturn from "../components/cardTaxaReturn.vue";
const controller = taxaControllerImpl();
</script>

<style>
</style>