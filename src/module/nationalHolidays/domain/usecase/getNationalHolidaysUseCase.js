const getNationalHolidaysUseCase = (repository) => async (ano) => {
  try {
    return await repository(ano)
  } catch (error) {
    throw error
  }
}

export { getNationalHolidaysUseCase }