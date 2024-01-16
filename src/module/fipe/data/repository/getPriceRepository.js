import { Vehicle } from "../../domain/model/vehicle";

const getPriceRepository = (axios) => async (codigoFipe) => {
  try {
    const response = await axios.get(
      `/fipe/preco/v1/${codigoFipe}`,
      {}
    );

    return response?.data?.map((price) => new Vehicle(price)) ?? [];
  } catch (error) {
    if(error.response.status === 400)  {
      throw error.response.data.message
    }
    throw error;
  }
};

export { getPriceRepository };
