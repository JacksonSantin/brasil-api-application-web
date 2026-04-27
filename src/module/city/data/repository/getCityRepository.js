import { City } from "../../domain/model/city";

const getCityRepository = (axios) => async () => {
  try {
    const response = await axios.get("/cptec/v1/cidade", {});

    return response?.data?.map((city) => new City(city)) ?? [];
  } catch (error) {
    throw error;
  }
};

export { getCityRepository };
