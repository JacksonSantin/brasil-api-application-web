<template>
  <v-data-table
    :headers="controller.header.value"
    :items="controller.rows.value"
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