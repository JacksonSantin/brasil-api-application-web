import { Waves } from "../../domain/model/waves";

const getWavesRepository = (axios) => async (cityCode) => {
  try {
    const response = await axios.get(
      `cptec/v1/ondas/${cityCode.cityCode}`,
      {}
    );

    return new Waves(response?.data ?? {});
  } catch (error) {
    if (error.response.status === 404) {
      throw error.response.data.message;
    }
    throw error;
  }
};

export { getWavesRepository };
