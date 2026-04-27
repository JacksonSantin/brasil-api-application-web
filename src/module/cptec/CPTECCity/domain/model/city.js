import dayjs from "dayjs"
import { Forecast } from "./forecast";

class City {
  constructor({
    cidade = "",
    estado = "",
    atualizado_em = "",
    clima = [],
  }) {
    this.cidade = cidade,
    this.estado = estado,
    this.atualizado_em = atualizado_em ? dayjs(atualizado_em, "YYYY-MM-DD").format("DD/MM/YYYY") : "",
    this.clima = clima.map((clima) => new Forecast(clima))
  }
}

export { City };