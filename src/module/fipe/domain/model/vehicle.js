class Vehicle {
  constructor({
    valor = "",
    marca = "",
    modelo = "",
    anoModelo = 0,
    combustivel = "",
    codigoFipe = "",
    mesReferencia = "",
    tipoVeiculo = 0,
    siglaCombustivel = "",
    dataConsulta = "",
  }) {
    this.valor = valor;
    this.marca = marca;
    this.modelo = modelo;
    this.anoModelo = anoModelo;
    this.combustivel = combustivel;
    this.codigoFipe = codigoFipe;
    this.mesReferencia = mesReferencia;
    this.tipoVeiculo = tipoVeiculo;
    this.siglaCombustivel = siglaCombustivel;
    this.dataConsulta = dataConsulta;
  }
}

export { Vehicle };
