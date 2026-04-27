const getBanksRepository = (axios) => async () => {
  try {
    const response = await axios.get("/banks/v1", {})

    return response?.data ?? []
  } catch (error) {
    if (error.response.status === 404) {
      throw error.response.data.message
    }
    throw error
  }
}

export { getBanksRepository }