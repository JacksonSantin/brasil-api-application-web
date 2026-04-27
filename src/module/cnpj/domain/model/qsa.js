import dayjs from "dayjs"

class Qsa {
  constructor({
    pais = null,
    nome_socio = "",
    codigo_pais = null,
    faixa_etaria = "",
    cnpj_cpf_do_socio = "",
    qualificacao_socio = "",
    codigo_faixa_etaria = 0,
    data_entrada_sociedade = "",
    identificador_de_socio = 0,
    cpf_representante_legal = "",
    nome_representante_legal = "",
    codigo_qualificacao_socio = 0,
    qualificacao_representante_legal = "",
    codigo_qualificacao_representante_legal = 0,
  }) {
    this.pais = pais
    this.nome_socio = nome_socio
    this.codigo_pais = codigo_pais
    this.faixa_etaria = faixa_etaria
    this.cnpj_cpf_do_socio = cnpj_cpf_do_socio
    this.qualificacao_socio = qualificacao_socio
    this.codigo_faixa_etaria = codigo_faixa_etaria
    this.data_entrada_sociedade = data_entrada_sociedade ? dayjs(data_entrada_sociedade, "YYYY-MM-DD").format("DD/MM/YYYY") : ""
    this.identificador_de_socio = identificador_de_socio
    this.cpf_representante_legal = cpf_representante_legal
    this.nome_representante_legal = nome_representante_legal
    this.codigo_qualificacao_socio = codigo_qualificacao_socio
    this.qualificacao_representante_legal = qualificacao_representante_legal
    this.codigo_qualificacao_representante_legal = codigo_qualificacao_representante_legal
  }
}

export { Qsa }