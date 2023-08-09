class CepV2 {
  constructor({
    cep = "",
    state = "",
    city = "",
    neighborhood = "",
    street = "",
    service = "",
  }) {
    this.cep = cep
    this.state = state
    this.city = city
    this.neighborhood = neighborhood
    this.street = street
    this.service = service
  }
}

export { CepV2 }