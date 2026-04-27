const getIsbnRepository = (axios) => async (isbn) => {
  try {
    const response = await axios.get(`/isbn/v1/${isbn.isbn}`, {})

    return response?.data ?? {}
  } catch (error) {
    if (error.response.status === 400 ||error.response.status === 404 || error.response.status === 500) {
      throw error.response.data.message
    }
    throw error
  }
}

export { getIsbnRepository }