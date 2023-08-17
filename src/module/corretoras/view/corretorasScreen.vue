<template>
  <v-container>
    <card-corretoras
      v-if="controller.formScreen.value"
      :controller="controller"
    />
    <card-corretoras-return
      v-if="!controller.formScreen.value"
      :controller="controller"
    />
  </v-container>
</template>

<script setup>
import { corretorasControllerImpl } from "../di/di";
import CardCorretoras from "../components/cardCorretoras.vue";
import CardCorretorasReturn from "../components/cardCorretorasReturn.vue";
const controller = corretorasControllerImpl();
</script>

<style>
</style>