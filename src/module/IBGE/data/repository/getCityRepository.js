import { City } from "../../domain/model/city";

const getCityRepository = (axios) => async (uf) => {
  try {
    const response = await axios.get(
      `/ibge/municipios/v1/${uf}?providers=dados-abertos-br,gov,wikipedia`,
      {}
    );

    return response?.data?.map((city) => new City(city)) ?? [];
  } catch (error) {
    if (error.response.status === 404) {
      throw error.response.data.message;
    }
    throw error;
  }
};

export { getCityRepository };
