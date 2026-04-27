const getCityUseCase = (repository) => async (uf) => {
  try {
    return await repository(uf);
  } catch (error) {
    throw error;
  }
};

export { getCityUseCase };
