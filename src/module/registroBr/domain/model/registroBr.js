import dayjs from "dayjs"

class RegistroBr {
  constructor({
    status_code = 0,
    status = "",
    fqdn = "",
    fqdnace = "",
    exempt = false,
    hosts = [],
    "publication-status": publicationStatus = "",
    "expires-at": expiresAt = "",
    suggestions = []
  }) {
    this.status_code = status_code
    this.status = status
    this.fqdn = fqdn
    this.fqdnace = fqdnace
    this.exempt = exempt
    this.hosts = hosts
    this.publicationStatus = publicationStatus
    this.expiresAt = expiresAt ? dayjs(expiresAt).format("DD/MM/YYYY") : ""
    this.suggestions = suggestions
  }
}

export { RegistroBr }