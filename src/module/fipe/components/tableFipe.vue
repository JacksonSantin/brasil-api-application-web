<template>
  <div class="text-center">
    <v-select
      label="Selecione o tipo veículo"
      item-title="t"
      item-value="v"
      density="compact"
      variant="underlined"
      clearable=""
      :items="controller.comboBVehicle.value"
      :disabled="controller.loading.value"
      @update:modelValue="controller.getVehicleBrands($event)"
      @click:clear="controller.getReferenceItems()"
      v-model="controller.vehicleSelected.value"
    ></v-select>
  </div>

  <v-data-table
    v-if="controller.vehicleSelected.value"
    :loading="controller.loading.value"
    :items="controller.itemsBrands.value"
    :headers="controller.headerBrands.value"
    density="compact"
    class="elevation-1"
  >
    <template v-slot:loading>
      <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
    </template>
  </v-data-table>

  <table-reference-list v-else :controller="controller" />
</template>

<script setup>
import tableReferenceList from "./tableReferenceList.vue";
defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style>
</style>