<template>
  <v-container>
    <card-cep-v2 v-if="controller.formScreen.value" :controller="controller" />
    <card-cep-v2-return
      v-if="!controller.formScreen.value"
      :controller="controller"
    />
  </v-container>
</template>

<script setup>
import { cepV2ControllerImpl } from "../di/di";
import CardCepV2 from "../components/cardCepV2.vue";
import CardCepV2Return from "../components/cardCepV2Return.vue";
const controller = cepV2ControllerImpl();
</script>

<style>
</style>