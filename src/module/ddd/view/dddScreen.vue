<template>
  <v-container>
    <card-ddd v-if="controller.formScreen.value" :controller="controller" />
    <card-ddd-return
      v-if="!controller.formScreen.value"
      :controller="controller"
    />
  </v-container>
</template>

<script setup>
import { dddControllerImpl } from "../di/di";
import CardDdd from "../components/cardDdd.vue";
import CardDddReturn from "../components/cardDddReturn.vue";
const controller = dddControllerImpl();
</script>

<style>
</style>