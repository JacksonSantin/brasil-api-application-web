<template>
  <v-card :loading="controller.loading.value" class="mx-auto" max-width="500">
    <v-card-title>
      Previsão de
      {{ controller.modelCity.value.cidade }}/{{
        controller.modelCity.value.estado
      }}
      <v-spacer></v-spacer>
      <v-icon
        icon="mdi-calendar"
        size="18"
        color="error"
        class="me-1 pb-1"
      ></v-icon>
      {{ controller.modelCity.value.atualizado_em }}
    </v-card-title>

    <v-expand-transition>
      <div v-if="controller.expand.value">
        <v-list class="bg-transparent">
          <v-list-item
            v-for="item in controller.modelCity.value.clima"
            :key="item"
            :title="`${item.data} - ${item.condicao_desc}`"
            :subtitle="`${item.min}&deg;C/${item.max}&deg;C - UV: ${item.indice_uv}`"
            :append-icon="controller.getCondition(item.condicao)"
          >
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn @click="controller.expand.value = !controller.expand.value">
        {{
          !controller.expand.value ? "Mostrar Relatório" : "Esconder Relatório"
        }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        class="text-none text-subtitle-1 text-white"
        color="#2466E0"
        size="large"
        variant="flat"
        @click="controller.returnToFormScreen()"
      >
        Voltar
      </v-btn>
    </v-card-actions>
  </v-card>
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