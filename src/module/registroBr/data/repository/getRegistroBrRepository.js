import { RegistroBr } from "../../domain/model/registroBr"

const getRegistroBrRepository = (axios) => async (domain) => {
  try {
    const response = await axios.get(`/registrobr/v1/${domain.domain}`, {})

    return new RegistroBr(response?.data ?? {})
  } catch (error) {
    if (error.response.status === 400) {
      throw error.response.data.message
    }
    throw error
  }
}

export { getRegistroBrRepository }