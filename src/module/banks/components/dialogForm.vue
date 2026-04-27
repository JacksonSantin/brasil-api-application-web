<template>
  <v-form readonly>
    <v-dialog v-model="controller.dialogForm.value" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Informações do Banco</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row dense>
              <v-col cols="12">
                <v-text-field
                  v-model="controller.modelBank.value.code"
                  color="#2466E0"
                  label="Código"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="controller.modelBank.value.ispb"
                  color="#2466E0"
                  label="ISPB"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="controller.modelBank.value.fullName"
                  color="#2466E0"
                  label="Nome Completo"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="controller.modelBank.value.name"
                  color="#2466E0"
                  label="Nome"
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