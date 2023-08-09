<template>
  <v-card class="mx-auto" width="850">
    <v-card-title class="text-center pa-0">
      <v-toolbar flat dark color="#2466E0" class="text-white">
        <v-toolbar-title>Retorno</v-toolbar-title>
      </v-toolbar>
    </v-card-title>
    <v-card-text class="mt-3">
      <v-form readonly>
        <v-row dense>
          <v-col cols="3">
            <v-text-field
              label="CEP"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCep.value.cep"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Cidade"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCep.value.city"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Estado"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCep.value.state"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Serviço"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCep.value.service"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
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