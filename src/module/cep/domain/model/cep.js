class Cep {
  constructor({
    cep = "",
    state = "",
    city = "",
    service = ""
  }) {
    this.cep = cep
    this.state = state
    this.city = city
    this.service = service
  }
}

export { Cep }