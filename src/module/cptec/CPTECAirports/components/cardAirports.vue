<template>
  <v-card
    :loading="controller.loading.value"
    :title="`Condição atual na capital ${controller.modelAirports.value.codigo_icao}`"
    class="mx-auto"
    max-width="368"
  >
    <v-card-item :title="controller.modelAirports.value.codigo_icao">
      <template v-slot:subtitle>
        <v-icon
          icon="mdi-calendar"
          size="18"
          color="error"
          class="me-1 pb-1"
        ></v-icon>

        {{ controller.modelAirports.value.atualizado_em }}
      </template>
      {{ controller.modelAirports.value.condicao_desc }}
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col class="text-h2" cols="6">
          {{ controller.modelAirports.value.temp }}&deg;C
        </v-col>

        <v-col cols="6" class="text-right">
          <v-icon color="yellow" icon="mdi-weather-sunny" size="88"></v-icon>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item density="compact" prepend-icon="mdi-weather-windy">
        <v-list-item-subtitle
          >{{ controller.modelAirports.value.vento }} km/h</v-list-item-subtitle
        >
      </v-list-item>

      <v-list-item density="compact" prepend-icon="mdi-navigation">
        <v-list-item-subtitle>{{
          controller.modelAirports.value.direcao_vento
        }}</v-list-item-subtitle>
      </v-list-item>
    </div>
    <div class="d-flex py-3 justify-space-between">
      <v-list-item density="compact" prepend-icon="mdi-atm">
        <v-list-item-subtitle>{{
          controller.modelAirports.value.pressao_atmosferica
        }}</v-list-item-subtitle>
      </v-list-item>
      <v-list-item density="compact" prepend-icon="mdi-water-percent">
        <v-list-item-subtitle
          >{{ controller.modelAirports.value.umidade }}%</v-list-item-subtitle
        >
      </v-list-item>
      <v-list-item density="compact" prepend-icon="mdi-eye-outline">
        <v-list-item-subtitle
          >{{ controller.modelAirports.value.visibilidade }}</v-list-item-subtitle
        >
      </v-list-item>
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