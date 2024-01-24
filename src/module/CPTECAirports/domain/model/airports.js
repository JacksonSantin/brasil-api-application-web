import dayjs from "dayjs"

class Airports {
  constructor({
    codigo_icao = "",
    atualizado_em = "",
    pressao_atmosferica = "",
    visibilidade = "",
    vento = 0,
    direcao_vento = 0,
    umidade = 0,
    condicao = "",
    condicao_desc = "",
    temp = 0,
  }) {
    this.codigo_icao = codigo_icao,
    this.atualizado_em = atualizado_em ? dayjs(atualizado_em, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("DD/MM/YYYY HH:mm:ss") : "",
    this.pressao_atmosferica = pressao_atmosferica,
    this.visibilidade = visibilidade,
    this.vento = vento,
    this.direcao_vento = direcao_vento,
    this.umidade = umidade,
    this.condicao = condicao,
    this.condicao_desc = condicao_desc,
    this.temp = temp
  }
}

export { Airports };