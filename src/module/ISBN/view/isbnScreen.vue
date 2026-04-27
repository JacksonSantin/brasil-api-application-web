<template>
  <v-container>
    <card-isbn
      v-if="controller.formScreen.value"
      :controller="controller"
    />
    <card-isbn-return
      v-if="!controller.formScreen.value"
      :controller="controller"
    />
  </v-container>
</template>

<script setup>
import { isbnControllerImpl } from "../di/di";
import CardIsbn from "../components/cardIsbn.vue";
import CardIsbnReturn from "../components/cardIsbnReturn.vue";
const controller = isbnControllerImpl();
</script>

<style>
</style>