import dayjs from "dayjs";
import { TtOndas } from "./ttOndas";

class Waves {
  constructor({ cidade = "", estado = "", atualizado_em = "", ondas = [] }) {
    this.cidade = cidade;
    this.estado = estado;
    this.atualizado_em = atualizado_em
      ? dayjs(atualizado_em, "YYYY-MM-DDTHH:mm:ss.SSSZ").format(
          "DD/MM/YYYY HH:mm:ss"
        )
      : "";
    this.ondas = ondas.map((ondas) => new TtOndas(ondas));
  }
}

export { Waves };
