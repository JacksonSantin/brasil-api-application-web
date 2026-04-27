import dayjs from "dayjs"

class Pix {
  constructor({
    ispb = "",
    nome = "",
    nome_reduzido = "",
    modalidade_participacao = "",
    tipo_participacao = "",
    inicio_operacao = "",
  }) {
    this.ispb = ispb
    this.nome = nome
    this.nome_reduzido = nome_reduzido
    this.modalidade_participacao = modalidade_participacao
    this.tipo_participacao = tipo_participacao
    this.inicio_operacao = inicio_operacao ? dayjs(inicio_operacao, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("DD/MM/YYYY HH:mm:ss") : ""
  }
}

export { Pix }