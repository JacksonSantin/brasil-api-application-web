const getRegistroBrUseCase = (repository) => async (domain) => {
  try {
    return await repository(domain)
  } catch (error) {
    throw error
  }
}

export { getRegistroBrUseCase }