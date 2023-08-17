const getBrokersWithCnpjUseCase = (repository) => async (cnpj) => {
  try {
    return await repository(cnpj)
  } catch (error) {
    throw error
  }
}

export { getBrokersWithCnpjUseCase }