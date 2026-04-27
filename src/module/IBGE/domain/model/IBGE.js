class IBGE {
  constructor({ id = 0, sigla = "", nome = "", regiao = {} }) {
    this.id = id,
    this.sigla = sigla,
    this.nome = nome,
    this.regiao = regiao
  }
}

export { IBGE };
