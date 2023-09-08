<template>
  <v-container>
    <card-registro-br
      v-if="controller.formScreen.value"
      :controller="controller"
    />
    <card-registro-br-return
      v-if="!controller.formScreen.value"
      :controller="controller"
    />
  </v-container>
</template>

<script setup>
import { registroBrControllerImpl } from "../di/di";
import CardRegistroBr from "../components/cardRegistroBr.vue";
import CardRegistroBrReturn from "../components/cardRegistroBrReturn.vue";
const controller = registroBrControllerImpl();
</script>

<style>
</style>