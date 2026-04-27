const getWavesUseCase = (repository) => async (cityCode) => {
  try {
    return await repository(cityCode);
  } catch (error) {
    throw error;
  }
};

export { getWavesUseCase };
