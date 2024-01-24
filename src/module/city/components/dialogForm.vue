<template>
  <v-form readonly>
    <v-dialog v-model="controller.dialogForm.value" scrollable max-width="650px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Localidades de {{ controller.cityName.value }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row dense v-for="place in controller.modelPlace.value" :key="place">
              <v-col cols="4">
                <v-text-field
                  v-model="place.id"
                  color="#2466E0"
                  label="ID"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="place.nome"
                  color="#2466E0"
                  label="Nome"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="place.estado"
                  color="#2466E0"
                  label="Estado"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="controller.dialogForm.value = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
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