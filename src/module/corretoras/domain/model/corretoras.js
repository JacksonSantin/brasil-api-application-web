class Corretoras {
  constructor({
    cnpj = "",
    type = "",
    nome_social = "",
    nome_comercial = "",
    status = "",
    email = "",
    telefone = "",
    cep = "",
    pais = "",
    uf = "",
    municipio = "",
    bairro = "",
    complemento = "",
    logradouro = "",
    data_patrimonio_liquido = "",
    valor_patrimonio_liquido = "",
    codigo_cvm = "",
    data_inicio_situacao = "",
    data_registro = "",
  }) {
    this.cnpj = cnpj
    this.type = type
    this.nome_social = nome_social
    this.nome_comercial = nome_comercial
    this.status = status
    this.email = email
    this.telefone = telefone
    this.cep = cep
    this.pais = pais
    this.uf = uf
    this.municipio = municipio
    this.bairro = bairro
    this.complemento = complemento
    this.logradouro = logradouro
    this.data_patrimonio_liquido = data_patrimonio_liquido
    this.valor_patrimonio_liquido = valor_patrimonio_liquido
    this.codigo_cvm = codigo_cvm
    this.data_inicio_situacao = data_inicio_situacao
    this.data_registro = data_registro
  }
}

export { Corretoras }