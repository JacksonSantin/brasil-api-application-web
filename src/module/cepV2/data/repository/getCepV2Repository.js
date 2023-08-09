const getCepV2Repository = (axios) => async (cep) => {
  try {
    const response = await axios.get(`/cep/v2/${cep.cep}`, {})

    return response?.data ?? {}
  } catch (error) {
    throw error
  }
}

export { getCepV2Repository }