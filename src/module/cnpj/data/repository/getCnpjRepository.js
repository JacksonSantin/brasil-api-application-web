import { Cnpj } from "../../domain/model/cnpj"

const getCnpjRepository = (axios) => async (cnpj) => {
  try {
    const response = await axios(`/cnpj/v1/${cnpj.cnpj}`, {})

    return new Cnpj(response?.data ?? {})
  } catch (error) {
    if(error.response.status === 404)  {
      throw error.response.data.message
    }
    throw error
  }
}

export { getCnpjRepository }