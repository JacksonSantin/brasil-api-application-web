class TtDadosOndas {
  constructor({
    vento = 0,
    direcao_vento = "",
    direcao_vento_desc = "",
    altura_onda = 0,
    direcao_onda = "",
    direcao_onda_desc = "",
    agitacao = "",
    hora = "",
  }) {
    this.vento = vento;
    this.direcao_vento = direcao_vento;
    this.direcao_vento_desc = direcao_vento_desc;
    this.altura_onda = altura_onda;
    this.direcao_onda = direcao_onda;
    this.direcao_onda_desc = direcao_onda_desc;
    this.agitacao = agitacao;
    this.hora = hora;
  }
}

export { TtDadosOndas };
