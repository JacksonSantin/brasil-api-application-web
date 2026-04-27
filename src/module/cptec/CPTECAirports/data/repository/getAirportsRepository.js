import { Airports } from "../../domain/model/airports";

const getAirportsRepository = (axios) => async (icaoCode) => {
  try {
    const response = await axios.get(
      `cptec/v1/clima/aeroporto/${icaoCode.icaoCode}`,
      {}
    );

    return new Airports(response?.data ?? {});
  } catch (error) {
    if (error.response.status === 404) {
      throw error.response.data.message;
    }
    throw error;
  }
};

export { getAirportsRepository };
