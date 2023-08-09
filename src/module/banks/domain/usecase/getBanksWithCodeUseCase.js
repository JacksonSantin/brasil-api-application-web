const getBanksWithCodeUseCase = (repository) => async (code) => {
  try {
    return await repository(code)
  } catch (error) {
    throw error
  }
}

export { getBanksWithCodeUseCase }