import { Brokers } from "../../domain/model/brokers"

const getBrokersWithCnpjRepository = (axios) => async (cnpj) => {
  try {
    const response = await axios.get(`/cvm/corretoras/v1/${cnpj.cnpj}`, {})

    return new Brokers(response?.data ?? {})
  } catch (error) {
    if(error.response.status === 404)  {
      throw error.response.data.message
    }
    throw error
  }
}

export { getBrokersWithCnpjRepository }