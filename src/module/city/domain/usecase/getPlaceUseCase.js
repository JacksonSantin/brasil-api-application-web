const getPlaceUseCase = (repository) => async (cityName) => {
  try {
    return await repository(cityName);
  } catch (error) {
    throw error;
  }
};

export { getPlaceUseCase };
