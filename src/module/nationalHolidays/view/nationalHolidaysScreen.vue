<template>
  <v-container>
    <card-national-holidays
      v-if="controller.formScreen.value"
      :controller="controller"
    />
    <card-national-holidays-return
      v-if="!controller.formScreen.value"
      :controller="controller"
    />
  </v-container>
</template>

<script setup>
import { nationalHolidaysControllerImpl } from "../di/di";
import CardNationalHolidays from "../components/cardNationalHolidays.vue";
import CardNationalHolidaysReturn from "../components/cardNationalHolidaysReturn.vue";
const controller = nationalHolidaysControllerImpl();
</script>

<style>
</style>