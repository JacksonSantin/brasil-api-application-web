<template>
  <v-card class="mx-auto" width="850">
    <v-card-title class="text-center pa-0">
      <v-toolbar flat dark color="#2466E0" class="text-white">
        <v-toolbar-title>Retorno</v-toolbar-title>
      </v-toolbar>
    </v-card-title>
    <v-card-text class="mt-3">
      <v-form readonly>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="CNPJ"
              variant="underlined"
              density="compact"
              v-mask="'##.###.###/####-##'"
              hide-details
              v-model="controller.modelCorretoras.value.cnpj"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Tipo"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCorretoras.value.type"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Nome Social"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCorretoras.value.nome_social"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Nome Comercial"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCorretoras.value.nome_comercial"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Status"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCorretoras.value.status"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="E-mail"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCorretoras.value.email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Telefone"
              variant="underlined"
              density="compact"
              v-mask="['(##) ####-####', '(##) #####-####']"
              hide-details
              v-model="controller.modelCorretoras.value.telefone"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="CEP"
              variant="underlined"
              density="compact"
              v-mask="'#####-###'"
              hide-details
              v-model="controller.modelCorretoras.value.cep"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="País"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCorretoras.value.pais"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="UF"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCorretoras.value.uf"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Município"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCorretoras.value.municipio"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Bairro"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCorretoras.value.bairro"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Complemento"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCorretoras.value.complemento"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Logradouro"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCorretoras.value.logradouro"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Data Patrimônio Líquido"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCorretoras.value.data_patrimonio_liquido"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field
              label="Valor Patrimônio Líquido"
              variant="underlined"
              density="compact"
              v-mask="'R$ #.###.###.###,##'"
              hide-details
              v-model="
                controller.modelCorretoras.value.valor_patrimonio_liquido
              "
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Código CVM"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCorretoras.value.codigo_cvm"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Data Início Situação"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCorretoras.value.data_inicio_situacao"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Data Registro"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCorretoras.value.data_registro"
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