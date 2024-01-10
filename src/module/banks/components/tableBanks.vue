<template>
  <v-data-table
    :headers="controller.headersBanks.value"
    :items="controller.itemsBank.value"
    density="compact"
    class="elevation-1"
  >
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