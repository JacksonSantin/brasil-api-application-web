import dayjs from "dayjs"

class Forecast {
  constructor({
    data = "",
    condicao = "",
    min = 0,
    max = 0,
    indice_uv = 0,
    condicao_desc = "",
  }) {
    this.data = data ? dayjs(data, "YYYY-MM-DD").format("DD/MM/YYYY") : "",
    this.condicao = condicao,
    this.min = min,
    this.max = max,
    this.indice_uv = indice_uv,
    this.condicao_desc = condicao_desc
  }
}

export { Forecast };
