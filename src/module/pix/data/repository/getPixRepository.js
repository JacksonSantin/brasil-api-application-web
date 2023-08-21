import { Pix } from "../../domain/model/pix"

const getPixRepository = (axios) => async () => {
  try {
    const response = await axios.get("/pix/v1/participants", {})

    return response?.data?.map((pix) => new Pix(pix)) ?? []
  } catch (error) {
    if (error.response.status === 404 || error.response.status === 500) {
      throw error.response.data.message
    }
    throw error
  }
}

export { getPixRepository }