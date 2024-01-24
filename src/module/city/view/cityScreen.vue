<template>
  <v-container>
    <table-city :controller="controller" />
    <dialog-form :controller="controller" />
  </v-container>
</template>

<script setup>
import { cityControllerImpl } from "../di/di";
import tableCity from "../components/tableCity.vue";
import DialogForm from "../components/dialogForm.vue";
const controller = cityControllerImpl();
</script>

<style>
</style>