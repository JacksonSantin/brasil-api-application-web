<template>
  <v-card class="mx-auto" width="850">
    <v-card-title class="text-center pa-0">
      <v-toolbar flat dark color="#2466E0" class="text-white">
        <v-toolbar-title>Registro.BR</v-toolbar-title>
      </v-toolbar>
    </v-card-title>
    <v-card-text class="mt-5">
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            color="#2466E0"
            label="Domínio"
            placeholder="Digite aqui o domínio"
            variant="underlined"
            density="compact"
            clearable
            v-model="controller.domain.value"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        class="text-none text-subtitle-1 text-white"
        color="#2466E0"
        size="large"
        variant="flat"
        block
        :loading="controller.loading.value"
        :disabled="controller.loading.value"
        @click="controller.getRegistroBr()"
      >
        BUSCAR
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