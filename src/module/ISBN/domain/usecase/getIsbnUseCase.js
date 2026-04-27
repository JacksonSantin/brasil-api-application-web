const getIsbnUseCase = (repository) => async (isbn) => {
  try {
    return await repository(isbn)
  } catch (error) {
    throw error
  }
}

export { getIsbnUseCase }