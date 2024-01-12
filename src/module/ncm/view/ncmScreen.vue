<template>
  <v-container>
    <table-ncm :controller="controller" />
  </v-container>
</template>

<script setup>
import { ncmControllerImpl } from "../di/di";
import TableNcm from "../components/tableNcm.vue";
const controller = ncmControllerImpl();
</script>

<style>
</style>