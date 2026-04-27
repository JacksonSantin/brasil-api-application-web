<template>
  <v-data-table
    :loading="controller.loading.value"
    :items="controller.itemsReference.value"
    :headers="controller.headerReference.value"
    density="compact"
    class="elevation-1"
  >
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

<style>
</style>