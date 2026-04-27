import { Taxa } from "../../domain/model/taxa"

const getInformacoesNomeSiglaRepository = (axios) => async (sigla) => {
  try {
    const response = await axios.get(`/taxas/v1/${sigla.sigla}`, {})

    return new Taxa(response?.data ?? {})
  } catch (error) {
    if (error.response.status === 404) {
      throw error.response.data.message
    }
    throw error
  }
}

export { getInformacoesNomeSiglaRepository }