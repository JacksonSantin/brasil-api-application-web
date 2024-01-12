import { IBGE } from "../../domain/model/IBGE";

const getIbgeRepository = (axios) => async () => {
  try {
    const response = await axios.get("/ibge/uf/v1", {});

    return response?.data?.map((ibge) => new IBGE(ibge)) ?? [];
  } catch (error) {
    throw error;
  }
};

export { getIbgeRepository };
