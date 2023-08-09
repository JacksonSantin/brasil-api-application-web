<template>
  <v-container>
    <tabela-bancos :controller="controller" />
  </v-container>
</template>

<script setup>
import { brasilApiControllerImpl } from "../di/di";
import TabelaBancos from "../components/tabelaBancos.vue";
const controller = brasilApiControllerImpl();
</script>

<style>
</style>