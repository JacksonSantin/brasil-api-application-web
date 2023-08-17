const getDddRepository = (axios) => async (ddd) => {
  try {
    const response = await axios.get(`/ddd/v1/${ddd.ddd}`, {})

    return response?.data ?? {}
  } catch (error) {
    if(error.response.status === 404 || error.response.status === 500)  {
      throw error.response.data.message
    }
    throw error
  }
}

export { getDddRepository }