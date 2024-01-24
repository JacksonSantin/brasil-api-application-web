const getAirportsUseCase = (repository) => async (icaoCode) => {
  try {
    return await repository(icaoCode);
  } catch (error) {
    throw error;
  }
};

export { getAirportsUseCase };
