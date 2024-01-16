import { Type } from "../../domain/model/type";

const getVehicleRepository = (axios) => async (tipoVeiculo) => {
  try {
    const response = await axios.get(
      `/fipe/marcas/v1/${tipoVeiculo}`,
      {}
    );

    return response?.data?.map((vehicleType) => new Type(vehicleType)) ?? [];
  } catch (error) {
    if (error.response.status === 400) {
      throw error.response.data.message;
    }
    throw error;
  }
};

export { getVehicleRepository };
