<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <table-fipe :controller="controller" />
      </v-col>
      <v-col cols="6">
        <table-vehicle-price :controller="controller" />
      </v-col>
    </v-row>
    <dialog-form :controller="controller" />
  </v-container>
</template>

<script setup>
import { fipeControllerImpl } from "../di/di";
import TableFipe from "../components/tableFipe.vue";
import TableVehiclePrice from "../components/tableVehiclePrice.vue";
import DialogForm from "../components/cardFipe.vue";
const controller = fipeControllerImpl();
</script>

<style>
</style>