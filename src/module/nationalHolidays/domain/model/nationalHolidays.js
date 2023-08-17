import dayjs from "dayjs"

class NationalHolidays {
  constructor({
    date = "",
    name = "",
    type = "",
  }) {
    this.date = date ? dayjs(date, "YYYY-MM-DD").format("DD/MM/YYYY") : ""
    this.name = name
    this.type = type
  }
}

export { NationalHolidays }