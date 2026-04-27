<template>
  <v-container>
    <card-cep v-if="controller.formScreen.value" :controller="controller" />
    <card-cep-return v-if="!controller.formScreen.value" :controller="controller" />
  </v-container>
</template>

<script setup>
import { cepControllerImpl } from "../di/di";
import CardCep from "../components/cardCep.vue";
import CardCepReturn from "../components/cardCepReturn.vue";
const controller = cepControllerImpl();
</script>

<style>
</style>