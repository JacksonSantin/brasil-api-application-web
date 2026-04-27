<template>
  <v-card class="mx-auto" width="850">
    <v-card-title class="text-center pa-0">
      <v-toolbar flat dark color="#2466E0" class="text-white">
        <v-toolbar-title>Retorno</v-toolbar-title>
      </v-toolbar>
    </v-card-title>
    <v-card-text class="mt-3">
      <v-form readonly>
        <v-row
          v-for="(ano, index) in controller.modelNationalHolidays.value"
          :key="index"
        >
          <v-col cols="4">
            <v-text-field
              label="Data"
              variant="underlined"
              density="compact"
              hide-details
              v-model="ano.date"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Nome"
              variant="underlined"
              density="compact"
              hide-details
              v-model="ano.name"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Tipo"
              variant="underlined"
              density="compact"
              hide-details
              v-model="ano.type"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
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