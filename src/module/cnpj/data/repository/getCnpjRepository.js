const getCnpjRepository = (axios) => async (cnpj) => {
  try {
    const response = await axios(`/cnpj/v1/${cnpj.cnpj}`, {})

    return response?.data ?? {}
  } catch (error) {
    throw error
  }
}

export { getCnpjRepository }