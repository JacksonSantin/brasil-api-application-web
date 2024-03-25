import { TtDadosOndas } from "./ttDadosOndas";

class TtOndas {
  constructor({ data = "", dados_ondas = [] }) {
    this.data = data;
    this.dados_ondas = dados_ondas.map(
      (dados_ondas) => new TtDadosOndas(dados_ondas)
    );
  }
}

export { TtOndas };
