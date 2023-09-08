<template>
   <v-data-table
    v-model:items-per-page="controller.itemsPerPage"
    :headers="controller.header"
    :items="controller.rows"
    item-value="ispb"
    class="elevation-1"
  ></v-data-table>
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