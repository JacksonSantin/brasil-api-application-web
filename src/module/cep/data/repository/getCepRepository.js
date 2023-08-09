const getCepRepository = (axios) => async (cep) => {
  try {
    const response = await axios.get(`/cep/v1/${cep.cep}`, {})

    return response?.data ?? {}
  } catch (error) {
    throw error
  }
}

export { getCepRepository }