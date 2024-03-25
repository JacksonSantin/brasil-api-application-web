import { Capital } from "../../domain/model/capital";

const getConditionsCapitalsRepository = (axios) => async () => {
  try {
    const response = await axios.get("cptec/v1/clima/capital", {});

    return response?.data?.map((capital) => new Capital(capital));
  } catch (error) {
    throw error;
  }
};

export { getConditionsCapitalsRepository };
