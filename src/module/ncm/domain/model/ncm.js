import dayjs from "dayjs";

class Ncm {
  constructor({
    codigo = "",
    descricao = "",
    data_inicio = "",
    data_fim = "",
    tipo_ato = "",
    numero_ato = "",
    ano_ato = "",
  }) {
    this.codigo = codigo,
    this.descricao = descricao,
    this.data_inicio = data_inicio ? dayjs(data_inicio, "YYYY-MM-DD").format("DD/MM/YYYY") : "",
    this.data_fim = data_fim ? dayjs(data_fim, "YYYY-MM-DD").format("DD/MM/YYYY") : "",
    this.tipo_ato = tipo_ato,
    this.numero_ato = numero_ato,
    this.ano_ato = ano_ato
  }
}

export { Ncm };
