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
          <v-col cols="4">
            <v-text-field
              label="CEP"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCepV2.value.cep"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Cidade"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCepV2.value.city"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Estado"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCepV2.value.state"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="4">
            <v-text-field
              label="Bairro"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCepV2.value.neighborhood"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Rua"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCepV2.value.street"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Serviço"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCepV2.value.service"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <div
              v-if="
                controller.modelCepV2.value.location.coordinates.latitude !==
                  undefined &&
                controller.modelCepV2.value.location.coordinates.longitude !==
                  undefined
              "
              id="map"
            ></div>
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

<script>
export default {
  mounted() {
    this.controller.buscaCoordenadas();
  },
};
</script>

<style scoped>
#map {
  height: 300px;
}
</style>