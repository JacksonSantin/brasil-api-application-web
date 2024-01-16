<template>
  <v-form readonly>
    <v-dialog v-model="controller.dialogForm.value" max-width="800px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Informações do Veículo</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row dense>
              <v-col cols="6">
                <v-text-field
                  v-model="controller.modelVeiculo.value.valor"
                  color="#2466E0"
                  label="Valor"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="controller.modelVeiculo.value.marca"
                  color="#2466E0"
                  label="Marca"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="controller.modelVeiculo.value.modelo"
                  color="#2466E0"
                  label="Modelo"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="controller.modelVeiculo.value.anoModelo"
                  color="#2466E0"
                  label="Ano Modelo"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="controller.modelVeiculo.value.combustivel"
                  color="#2466E0"
                  label="Combustível"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="controller.modelVeiculo.value.codigoFipe"
                  color="#2466E0"
                  label="Código FIPE"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="controller.modelVeiculo.value.mesReferencia"
                  color="#2466E0"
                  label="Mês Referência"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="controller.modelVeiculo.value.tipoVeiculo"
                  color="#2466E0"
                  label="Tipo Veículo"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="controller.modelVeiculo.value.siglaCombustivel"
                  color="#2466E0"
                  label="Sigla Combustível"
                  variant="underlined"
                  density="compact"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="controller.modelVeiculo.value.dataConsulta"
                  color="#2466E0"
                  label="Data Consulta"
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