<template>
  <v-data-table
    :headers="controller.headersBanks.value"
    :items="controller.itemsBank.value"
    :search="controller.search.value"
    density="compact"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-text-field
        v-model="controller.search.value"
        label="Buscar"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        variant="solo-filled"
        class="pa-2"
        single-line
        flat
        hide-details
      ></v-text-field>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon size="small" class="me-2" @click="controller.showItem(item)">
        mdi-eye
      </v-icon>
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

<style>
</style>