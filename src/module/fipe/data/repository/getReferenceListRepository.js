import { Reference } from "../../domain/model/reference";

const getReferenceListRepository = (axios) => async () => {
  try {
    const response = await axios.get("/fipe/tabelas/v1", {})

    return response?.data?.map((reference) => new Reference(reference)) ?? []
  } catch (error) {
    throw error;
  }
};

export { getReferenceListRepository };
