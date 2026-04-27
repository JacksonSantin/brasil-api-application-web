const getPixUseCase = (repository) => async () => {
  try {
    return await repository()
  } catch (error) {
    throw error
  }
}

export { getPixUseCase }