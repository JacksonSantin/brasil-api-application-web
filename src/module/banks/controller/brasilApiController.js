import { ref, onMounted } from "vue";
import { headersBank } from "../const/headersBank";
import { Banks } from "../domain/model/banks";

const brasilApiController = (
  getBanksUseCase,
  getBanksWithCodeUseCase,
) => () => {

  const headersBanks = ref(headersBank)
  const itemsBank = ref([])
  const modelBank = ref(new Banks({}))

  const getBanks = async () => {
    try {
      modelBank.value = await getBanksUseCase()
    } catch (error) {
      throw error
    }
  }

  onMounted(async () => {
    await getBanks()
  })

  return {
    headersBanks,
    itemsBank,
  }
}

export { brasilApiController }