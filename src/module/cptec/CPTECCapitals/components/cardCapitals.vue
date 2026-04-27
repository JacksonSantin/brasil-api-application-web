<template>
  <div class="d-flex flex-wrap ga-5">
    <v-card
      v-for="capital in controller.modelCapital.value"
      :key="capital"
      :loading="controller.loading.value"
      class="mx-auto"
      :title="`Condição atual na capital ${capital.codigo_icao}`"
      max-width="368"
    >
      <v-card-item :title="`${capital.codigo_icao} - ${capital.condicao_desc}`">
        <template v-slot:subtitle>
          <v-icon
            icon="mdi-calendar"
            size="18"
            color="error"
            class="me-1 pb-1"
          ></v-icon>

          {{ capital.atualizado_em }}
        </template>
      </v-card-item>

      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
          <v-col class="text-h2" cols="6"> {{ capital.temp }}&deg;C </v-col>

          <v-col cols="6" class="text-right">
            <v-icon
              color="yellow"
              icon="mdi-weather-sunny"
              size="88"
            ></v-icon>
          </v-col>
        </v-row>
      </v-card-text>

      <div class="d-flex py-3 justify-space-between">
        <v-list-item density="compact" prepend-icon="mdi-weather-windy">
          <v-list-item-subtitle>{{ capital.vento }} km/h</v-list-item-subtitle>
        </v-list-item>

        <v-list-item density="compact" prepend-icon="mdi-navigation">
          <v-list-item-subtitle>{{
            capital.direcao_vento
          }}</v-list-item-subtitle>
        </v-list-item>
      </div>
      <div class="d-flex py-3 justify-space-between">
        <v-list-item density="compact" prepend-icon="mdi-atm">
          <v-list-item-subtitle>{{
            capital.pressao_atmosferica
          }}</v-list-item-subtitle>
        </v-list-item>
        <v-list-item density="compact" prepend-icon="mdi-water-percent">
          <v-list-item-subtitle>{{
            capital.umidade
          }}%</v-list-item-subtitle>
        </v-list-item>
      </div>

    </v-card>
  </div>
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