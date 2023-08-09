import { ref } from "vue";
import { Cep } from "../domain/model/cep";

const cepController = (
  getCepUseCase,
) => () => {
  const typedZipCode = ref("")
  const modelCep = ref(new Cep({}))
  const loading = ref(false)
  const formScreen = ref(true)

  const getCep = async () => {
    try {
      loading.value = true
      formScreen.value = true

      const param = {
        cep: typedZipCode.value
      }

      modelCep.value = await getCepUseCase(param)

      if (modelCep.value) {
        formScreen.value = false
      }

    } catch (error) {
      throw error
    } finally {
      loading.value = true
    }
  }

  const returnToFormScreen = async () => {
    formScreen.value = true
    loading.value = false
    typedZipCode.value = ""
  }

  return {
    typedZipCode,
    modelCep,
    loading,
    formScreen,
    getCep,
    returnToFormScreen
  }
}

export { cepController }