const getReferenceListUseCase = (repository) => async () => {
  try {
    return await repository();
  } catch (error) {
    throw error;
  }
};

export { getReferenceListUseCase };
