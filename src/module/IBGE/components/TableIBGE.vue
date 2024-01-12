<template>
  <v-data-table
    :items="controller.rows.value"
    :headers="controller.headers.value"
    :loading="controller.loading.value"
    class="elevation-1"
    density="compact"
    show-expand
  >
    <template v-slot:item.actions="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="controller.showItem(item.sigla)"
      >
        mdi-eye
      </v-icon>
    </template>
    <template v-slot:expanded-row="{ columns, item }">
      <tr>
        <td :colspan="columns.length">
          ID Estado: <b>{{ item.regiao.id }}</b>
        </td>
      </tr>
      <tr>
        <td :colspan="columns.length">
          Sigla Estado: <b>{{ item.regiao.sigla }}</b>
        </td>
      </tr>
      <tr>
        <td :colspan="columns.length">
          Nome Estado: <b>{{ item.regiao.nome }}</b>
        </td>
      </tr>
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