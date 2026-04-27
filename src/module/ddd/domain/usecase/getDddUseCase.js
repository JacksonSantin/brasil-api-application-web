const getDddUseCase = (repository) => async (ddd) => {
  try {
    return await repository(ddd)
  } catch (error) {
    throw error
  }
}

export { getDddUseCase }