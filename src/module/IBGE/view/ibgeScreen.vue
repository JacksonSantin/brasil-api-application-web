<template>
  <v-container>
    <table-ibge :controller="controller" />
    <dialog-form :controller="controller" />
  </v-container>
</template>

<script setup>
import { ibgeControllerImpl } from "../di/di";
import TableIbge from "../components/TableIBGE.vue";
import DialogForm from "../components/dialogForm.vue";
const controller = ibgeControllerImpl();
</script>

<style>
</style>