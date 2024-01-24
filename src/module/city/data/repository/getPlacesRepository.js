import { Place } from "../../domain/model/place";

const getPlacesRepository = (axios) => async (cityName) => {
  try {
    const response = await axios.get(`/cptec/v1/cidade/${cityName}`, {});

    return response?.data?.map((place) => new Place(place)) ?? [];
  } catch (error) {
    if (error.response.status === 404) {
      throw error.response.data.message;
    }
    throw error;
  }
};

export { getPlacesRepository };
