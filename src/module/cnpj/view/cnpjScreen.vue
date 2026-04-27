<template>
  <v-container>
    <card-cnpj v-if="controller.formScreen.value" :controller="controller" />
    <card-cnpj-return
      v-if="!controller.formScreen.value"
      :controller="controller"
    />
  </v-container>
</template>

<script setup>
import { cnpjControllerImpl } from "../di/di";
import CardCnpj from "../components/cardCnpj.vue";
import CardCnpjReturn from "../components/cardCnpjReturn.vue";
const controller = cnpjControllerImpl();
</script>

<style>
</style>