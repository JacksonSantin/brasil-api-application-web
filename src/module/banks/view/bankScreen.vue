<template>
  <v-container>
    <table-banks :controller="controller" />
    <dialog-form :controller="controller" />
  </v-container>
</template>

<script setup>
import { bankControllerImpl } from "../di/di";
import TableBanks from "../components/tableBanks.vue";
import DialogForm from "../components/dialogForm.vue";
const controller = bankControllerImpl();
</script>

<style>
</style>