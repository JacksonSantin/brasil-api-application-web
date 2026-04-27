import { NationalHolidays } from "../../domain/model/nationalHolidays"

const getNationalHolidaysRepository = (axios) => async (ano) => {
  try {
    const response = await axios.get(`/feriados/v1/${ano.ano}`, {})

    return response?.data?.map((ano) => new NationalHolidays(ano)) ?? []
  } catch (error) {
    if (error.response.status === 404 || error.response.status === 500) {
      throw error.response.data.message
    }
    throw error
  }
}

export { getNationalHolidaysRepository }