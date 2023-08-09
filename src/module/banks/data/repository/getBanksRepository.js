const getBanksRepository = (axios) => async () => {
  try {
    const response = await axios.get("/banks/v1", {})

    return response?.data ?? []
  } catch (error) {
    throw error
  }
}

export { getBanksRepository }