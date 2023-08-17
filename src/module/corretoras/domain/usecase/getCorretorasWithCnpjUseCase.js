const getCorretorasWithCnpjUseCase = (repository) => async (cnpj) => {
  try {
    return await repository(cnpj)
  } catch (error) {
    throw error
  }
}

export { getCorretorasWithCnpjUseCase }