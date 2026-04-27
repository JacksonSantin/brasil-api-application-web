<template>
  <v-container>
    <table-pix :controller="controller" />
  </v-container>
</template>

<script setup>
import { pixControllerImpl } from "../di/di";
import TablePix from "../components/tablePix.vue";
const controller = pixControllerImpl();
</script>

<style>
</style>