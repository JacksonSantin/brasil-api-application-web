const getBanksWithCodeRepository = (axios) => async (code) => {
  try {
    const response = await axios.get(`/banks/v1/${code}`, {})

    return response?.data ?? {}
  } catch (error) {
    throw error
  }
}

export { getBanksWithCodeRepository }