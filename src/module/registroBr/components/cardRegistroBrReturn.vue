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
              label="Código Status"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelRegistroBr.value.status_code"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Status"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelRegistroBr.value.status"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Domínio"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelRegistroBr.value.fqdn"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="fqdnace"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelRegistroBr.value.fqdnace"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-switch
              v-model="controller.modelRegistroBr.value.exempt"
              hide-details
              inset
              disabled
              :label="`${!controller.modelRegistroBr.value.exempt ? 'Não' : 'Sim'}`"
            ></v-switch>
          </v-col>
        </v-row>
        <v-row v-for="(host, index) in controller.hosts.value" :key="index">
          <v-col cols="12">
            <v-text-field
              label="Hosts"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.hosts.value[index]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Status de Publicação"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelRegistroBr.value.publicationStatus"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Data de Expiração"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelRegistroBr.value.expiresAt"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row
          v-for="(suggestion, index) in controller.suggestions.value"
          :key="index"
        >
          <v-col cols="12">
            <v-text-field
              label="Sugestões"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.suggestions.value[index]"
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