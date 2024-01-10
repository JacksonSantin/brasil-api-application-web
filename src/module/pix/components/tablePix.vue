<template>
   <v-data-table
    :headers="controller.header.value"
    :items="controller.rows.value"
    density="compact"
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