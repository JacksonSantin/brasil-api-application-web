const getTaxaRepository = (axios) => async () => {
  try {
    const response = await axios.get('/taxas/v1', {})

    return response?.data ?? []
  } catch (error) {
    throw error
  }
}

export { getTaxaRepository }