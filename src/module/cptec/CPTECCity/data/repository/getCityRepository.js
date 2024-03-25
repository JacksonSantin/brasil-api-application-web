import { City } from "../../domain/model/city";

const getCityRepository = (axios) => async (cityCode) => {
  try {
    const response = await axios.get(
      `cptec/v1/clima/previsao/${cityCode.cityCode}`,
      {}
    );

    return new City(response?.data ?? {});
  } catch (error) {
    if (error.response.status === 404) {
      throw error.response.data.message;
    }
    throw error;
  }
};

export { getCityRepository };
