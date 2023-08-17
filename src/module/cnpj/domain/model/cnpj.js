import { CnaesSecundarios } from "./cnaesSecundarios"
import { Qsa } from "./qsa"

class Cnpj {
  constructor({
    cnpj = "",
    identificador_matriz_filial = 0,
    descricao_matriz_filial = "",
    razao_social = "",
    nome_fantasia = "",
    situacao_cadastral = 0,
    descricao_situacao_cadastral = "",
    data_situacao_cadastral = "",
    motivo_situacao_cadastral = 0,
    nome_cidade_exterior = null,
    codigo_natureza_juridica = 0,
    data_inicio_atividade = "",
    cnae_fiscal = 0,
    cnae_fiscal_descricao = "",
    descricao_tipo_logradouro = "",
    logradouro = "",
    numero = "",
    complemento = "",
    bairro = "",
    cep = 0,
    uf = "",
    codigo_municipio = 0,
    municipio = "",
    ddd_telefone_1 = "",
    ddd_telefone_2 = null,
    ddd_fax = null,
    qualificacao_do_responsavel = 0,
    capital_social = 0,
    porte = 0,
    descricao_porte = "",
    opcao_pelo_simples = false,
    data_opcao_pelo_simples = null,
    data_exclusao_do_simples = null,
    opcao_pelo_mei = false,
    situacao_especial = null,
    data_situacao_especial = null,
    cnaes_secundarios = [],
    qsa = []
  }) {
    this.cnpj = cnpj
    this.identificador_matriz_filial = identificador_matriz_filial
    this.descricao_matriz_filial = descricao_matriz_filial
    this.razao_social = razao_social
    this.nome_fantasia = nome_fantasia
    this.situacao_cadastral = situacao_cadastral
    this.descricao_situacao_cadastral = descricao_situacao_cadastral
    this.data_situacao_cadastral = data_situacao_cadastral
    this.motivo_situacao_cadastral = motivo_situacao_cadastral
    this.nome_cidade_exterior = nome_cidade_exterior
    this.codigo_natureza_juridica = codigo_natureza_juridica
    this.data_inicio_atividade = data_inicio_atividade
    this.cnae_fiscal = cnae_fiscal
    this.cnae_fiscal_descricao = cnae_fiscal_descricao
    this.descricao_tipo_logradouro = descricao_tipo_logradouro
    this.logradouro = logradouro
    this.numero = numero
    this.complemento = complemento
    this.bairro = bairro
    this.cep = cep
    this.uf = uf
    this.codigo_municipio = codigo_municipio
    this.municipio = municipio
    this.ddd_telefone_1 = ddd_telefone_1
    this.ddd_telefone_2 = ddd_telefone_2
    this.ddd_fax = ddd_fax
    this.qualificacao_do_responsavel = qualificacao_do_responsavel
    this.capital_social = capital_social
    this.porte = porte
    this.descricao_porte = descricao_porte
    this.opcao_pelo_simples = opcao_pelo_simples
    this.data_opcao_pelo_simples = data_opcao_pelo_simples
    this.data_exclusao_do_simples = data_exclusao_do_simples
    this.opcao_pelo_mei = opcao_pelo_mei
    this.situacao_especial = situacao_especial
    this.data_situacao_especial = data_situacao_especial
    this.cnaes_secundarios = cnaes_secundarios.map((r) =>
      new CnaesSecundarios(r)
    )
    this.qsa = qsa.map((r) => new Qsa(r))
  }
}

export { Cnpj }