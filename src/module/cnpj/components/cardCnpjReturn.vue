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
              v-model="controller.modelCnpj.value.cnpj"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Razão Social"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.razao_social"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Nome Fantasia"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.nome_fantasia"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Capital Social"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="controller.modelCnpj.value.capital_social"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Natureza Jurídica"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.natureza_juridica"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Situação Especial"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.situacao_especial"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Situação Cadastral"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="controller.modelCnpj.value.situacao_cadastral"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Motivo Situação Cadastral"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="controller.modelCnpj.value.motivo_situacao_cadastral"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Porte"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.porte"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Código Porte"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="controller.modelCnpj.value.codigo_porte"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Opção pelo Simples"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.opcao_pelo_simples"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Opção pelo MEI"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.opcao_pelo_mei"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Data Opção pelo MEI"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.data_opcao_pelo_mei"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Data Exclusão do MEI"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.data_exclusao_do_mei"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Data Início Atividade"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.data_inicio_atividade"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field
              label="Data Situação Especial"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.data_situacao_especial"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Data Opção pelo Simples"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.data_opcao_pelo_simples"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Data Situação Cadastral"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.data_situacao_cadastral"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Data Exclusão do Simples"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.data_exclusao_do_simples"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field
              label="Rua"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.logradouro"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Complemento"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.complemento"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Bairro"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.bairro"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Número"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="controller.modelCnpj.value.numero"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field
              label="Município"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.municipio"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Código Município"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="controller.modelCnpj.value.codigo_municipio"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="País"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.pais"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="UF"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.uf"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field
              label="CEP"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.cep"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Código Município IBGE"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="controller.modelCnpj.value.codigo_municipio_ibge"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Nome Cidade no Exterior"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.nome_cidade_no_exterior"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Descrição Tipo de Logradouro"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.descricao_tipo_de_logradouro"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field
              label="E-mail"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.email"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Fax"
              variant="underlined"
              density="compact"
              v-mask="'(##) ####-####'"
              hide-details
              v-model="controller.modelCnpj.value.ddd_fax"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Telefone 1"
              variant="underlined"
              density="compact"
              v-mask="['(##) ####-####', '(##) #####-####']"
              hide-details
              v-model="controller.modelCnpj.value.ddd_telefone_1"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Telefone 2"
              variant="underlined"
              density="compact"
              v-mask="['(##) ####-####', '(##) #####-####']"
              hide-details
              v-model="controller.modelCnpj.value.ddd_telefone_2"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-text-field
              label="CNAE Fiscal"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="controller.modelCnpj.value.cnae_fiscal"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="CNAE Fiscal Descrição"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.cnae_fiscal_descricao"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Código País"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="controller.modelCnpj.value.codigo_pais"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Código Natureza Jurídica"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="controller.modelCnpj.value.codigo_natureza_juridica"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Descrição Porte"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.descricao_porte"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Descrição Situação Cadastral"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.descricao_situacao_cadastral"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Descrição Motivo Situação Cadastral"
              variant="underlined"
              density="compact"
              hide-details
              v-model="
                controller.modelCnpj.value.descricao_motivo_situacao_cadastral
              "
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Descrição Identificador Matriz Filial"
              variant="underlined"
              density="compact"
              hide-details
              v-model="
                controller.modelCnpj.value.descricao_identificador_matriz_filial
              "
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              label="Identificador Matriz Filial"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="controller.modelCnpj.value.identificador_matriz_filial"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="ENTE Federativo Responsável"
              variant="underlined"
              density="compact"
              hide-details
              v-model="controller.modelCnpj.value.ente_federativo_responsavel"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Qualificação do Responsável"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="controller.modelCnpj.value.qualificacao_do_responsavel"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row
          v-for="(qsa, index) in controller.modelCnpj.value.qsa"
          :key="index"
        >
          <v-col cols="3">
            <v-text-field
              label="Nome Sócio"
              variant="underlined"
              density="compact"
              hide-details
              v-model="qsa.nome_socio"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="CNPJ/CPF do Sócio"
              variant="underlined"
              density="compact"
              hide-details
              v-model="qsa.cnpj_cpf_do_socio"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Faixa Etaria"
              variant="underlined"
              density="compact"
              hide-details
              v-model="qsa.faixa_etaria"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Qualificação Sócio"
              variant="underlined"
              density="compact"
              hide-details
              v-model="qsa.qualificacao_socio"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Código Faixa Etária"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="qsa.codigo_faixa_etaria"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="CPF Representante Legal"
              variant="underlined"
              density="compact"
              hide-details
              v-model="qsa.cpf_representante_legal"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Nome Representante Legal"
              variant="underlined"
              density="compact"
              hide-details
              v-model="qsa.nome_representante_legal"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Nome Representante Legal"
              variant="underlined"
              density="compact"
              hide-details
              v-model="qsa.nome_representante_legal"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Identificador de Sócio"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="qsa.identificador_de_socio"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Data Entrada Sociedade"
              variant="underlined"
              density="compact"
              hide-details
              v-model="qsa.data_entrada_sociedade"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              label="Código Qualificação Sócio"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="qsa.codigo_qualificacao_socio"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Qualificação Representante Legal"
              variant="underlined"
              density="compact"
              hide-details
              v-model="qsa.qualificacao_representante_legal"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Cód. Qualificação Representante Legal"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="qsa.codigo_qualificacao_representante_legal"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              label="Código País"
              variant="underlined"
              density="compact"
              type="number"
              hide-details
              v-model.number="qsa.codigo_pais"
            ></v-text-field>
          </v-col>
          <v-col cols="9">
            <v-text-field
              label="País"
              variant="underlined"
              density="compact"
              hide-details
              v-model="qsa.pais"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row
          v-for="(cnae, index) in controller.modelCnpj.value.cnaes_secundarios"
          :key="index"
        >
          <v-col cols="3">
            <v-text-field
              label="Código"
              type="number"
              variant="underlined"
              density="compact"
              hide-details
              v-model.number="cnae.codigo"
            ></v-text-field>
          </v-col>
          <v-col cols="9">
            <v-text-field
              label="Descrição"
              variant="underlined"
              density="compact"
              hide-details
              v-model="cnae.descricao"
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