class Banks {
  constructor({
    ispb = "",
    name = "",
    code = 0,
    fullName = ""
  }) {
    this.ispb = ispb
    this.name = name
    this.code = code
    this.fullName = fullName
  }
}

export { Banks }