<template>
  <v-container>
    <card-brokers
      v-if="controller.formScreen.value"
      :controller="controller"
    />
    <card-brokers-return
      v-if="!controller.formScreen.value"
      :controller="controller"
    />
  </v-container>
</template>

<script setup>
import { brokersControllerImpl } from "../di/di";
import CardBrokers from "../components/cardBrokers.vue";
import CardBrokersReturn from "../components/cardBrokersReturn.vue";
const controller = brokersControllerImpl();
</script>

<style>
</style>