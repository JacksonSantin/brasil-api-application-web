class RegistroBr {
  constructor({
    status_code = 0,
    status = "",
    fqdn = "",
    fqdnace = "",
    exempt = false,
    hosts = [],
    suggestions = []
  }) {
    this.status_code = status_code
    this.status = status
    this.fqdn = fqdn
    this.fqdnace = fqdnace
    this.exempt = exempt
    this.hosts = hosts
    this.suggestions = suggestions
  }
}

export { RegistroBr }