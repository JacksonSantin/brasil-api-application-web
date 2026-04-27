const getVehicleUseCase = (repository) => async (tipoVeiculo) => {
  try {
    return await repository(tipoVeiculo);
  } catch (error) {
    throw error;
  }
};

export { getVehicleUseCase };
