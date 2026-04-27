<template>
  <v-data-table
    :loading="controller.loading.value"
    :items="controller.itemsVehiclePrice.value"
    :headers="controller.headerVehiclePriceFipe.value"
    :search="controller.searchVehicle.value"
    no-data-text="Informe o código FIPE para retornar os dados"
    density="compact"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-text-field
        label="Buscar Veículo"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        variant="underlined"
        class="pa-2"
        single-line
        clearable
        flat
        hide-details
        @update:modelValue="controller.getVehiclePrice($event)"
        v-model="controller.searchVehicle.value"
      ></v-text-field>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon size="small" class="me-2" @click="controller.showItem(item)">
        mdi-eye
      </v-icon>
    </template>
    <template v-slot:loading>
      <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
    </template>
  </v-data-table>
</template>

<script setup>
defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
:deep(td) {
  white-space: nowrap;
}
</style>