<template>
  <v-card
    :loading="controller.loading.value"
    :title="`Condição atual no(a) ${controller.modelWaves.value.cidade}/${controller.modelWaves.value.estado}`"
    class="mx-auto"
    max-width="600"
  >
    <v-card-item>
      <template v-slot:subtitle>
        <v-icon
          icon="mdi-calendar"
          size="18"
          color="error"
          class="me-1 pb-1"
        ></v-icon>

        {{ controller.modelWaves.value.atualizado_em }}
      </template>
    </v-card-item>

    <div
      v-for="onda in controller.modelWaves.value.ondas[0].dados_ondas"
      :key="onda"
    >
      <div class="d-flex py-3 justify-space-between">
        <v-list-item density="compact" prepend-icon="mdi-weather-windy">
          <v-list-item-subtitle>{{ onda.vento }} km/h </v-list-item-subtitle>
        </v-list-item>

        <v-list-item density="compact" prepend-icon="mdi-navigation">
          <v-list-item-subtitle
            >{{ onda.direcao_vento }}
            -
            {{ onda.direcao_vento_desc }}
          </v-list-item-subtitle>
        </v-list-item>
      </div>
      <div class="d-flex py-3 justify-space-between">
        <v-list-item density="compact" prepend-icon="mdi-ruler">
          <v-list-item-subtitle>{{ onda.altura_onda }}</v-list-item-subtitle>
        </v-list-item>
        <v-list-item density="compact" prepend-icon="mdi-navigation">
          <v-list-item-subtitle
            >{{ onda.direcao_onda }}
            -
            {{ onda.direcao_onda_desc }}
          </v-list-item-subtitle>
        </v-list-item>
      </div>
      <div class="d-flex py-3 justify-space-between">
        <v-list-item density="compact" prepend-icon="mdi-waves">
          <v-list-item-subtitle>{{ onda.agitacao }}</v-list-item-subtitle>
        </v-list-item>
        <v-list-item density="compact" prepend-icon="mdi-clock">
          <v-list-item-subtitle
            >{{ onda.hora }}
          </v-list-item-subtitle>
        </v-list-item>
      </div>
      <v-divider></v-divider>
    </div>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        class="text-none text-subtitle-1 text-white"
        color="#2466E0"
        size="large"
        variant="flat"
        block
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