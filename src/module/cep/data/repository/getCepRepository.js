const getCepRepository = (axios) => async (cep) => {
  try {
    const response = await axios.get(`/cep/v1/${cep.cep}`, {})

    return response?.data ?? {}
  } catch (error) {
    if(error.response.status === 404)  {
      throw error.response.data.message
    }
    throw error
  }
}

export { getCepRepository }