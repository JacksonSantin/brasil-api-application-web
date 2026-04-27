const getPriceUseCase = (repository) => async (codigoFipe) => {
  try {
    return await repository(codigoFipe);
  } catch (error) {
    throw error;
  }
};

export { getPriceUseCase };
