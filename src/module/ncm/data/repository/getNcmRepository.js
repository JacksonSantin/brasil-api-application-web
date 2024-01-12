import { Ncm } from "../../domain/model/ncm"

const getNcmRepository = (axios) => async () => {
  try {
    const response = await axios.get("/ncm/v1", {})

    return response?.data?.map((ncm) => new Ncm(ncm)) ?? []
  } catch (error) {
    if (error.response.status === 404 || error.response.status === 500) {
      throw error.response.data.message
    }
    throw error
  }
}

export { getNcmRepository }