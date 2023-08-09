<template>
  <v-container>
    <table-banks :controller="controller" />
  </v-container>
</template>

<script setup>
import { bankControllerImpl } from "../di/di";
import TableBanks from "../components/tableBanks.vue";
const controller = bankControllerImpl();
</script>

<style>
</style>