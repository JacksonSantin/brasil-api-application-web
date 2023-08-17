const getCorretorasWithCnpjRepository = (axios) => async (cnpj) => {
  try {
    const response = await axios.get(`/cvm/corretoras/v1/${cnpj.cnpj}`, {})

    return response?.data ?? {}
  } catch (error) {
    throw error
  }
}

export { getCorretorasWithCnpjRepository }