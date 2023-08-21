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
          <v-col cols="12" class="d-flex align-center justify-center">
            <v-img :src="controller.modelIsbn.value.cover_url" max-width="50%"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="ISBN"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelIsbn.value.isbn"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Título"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelIsbn.value.title"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Subtítulo"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelIsbn.value.subtitle"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-for="(isbn, index) in controller.authors.value" :key="index">
          <v-col cols="12">
            <v-text-field
              label="Nome Autor"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.authors.value[index]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Editora"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelIsbn.value.publisher"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea
              label="Sinopse"
              variant="outlined"
              rows="6"
              no-resize
              outlined
              hide-details
              v-model="controller.modelIsbn.value.synopsis"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Largura"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.dimensions.value.width"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Altura"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.dimensions.value.height"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Unidade"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.dimensions.value.unit"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Ano"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelIsbn.value.year"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Formato"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelIsbn.value.format"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Nº Páginas"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelIsbn.value.page_count"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-for="(isbn, index) in controller.subjects.value" :key="index">
          <v-col cols="12">
            <v-text-field
              label="Assuntos"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.subjects.value[index]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Localização"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelIsbn.value.location"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Preço de Varejo"
              variant="underlined"
              density="compact"
              v-mask="'R$ #.###.###.###,##'"
              hide-details
              v-model="controller.modelIsbn.value.retail_price"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Fornecedor"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelIsbn.value.provider"
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