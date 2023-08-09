const getCepV2UseCase = (repository) => async (cep) => {
  try {
    return await repository(cep)
  } catch (error) {
    throw error
  }
}

export { getCepV2UseCase }