import { ref } from "vue";
import { Cep } from "../domain/model/cep";
import Toastify from 'toastify-js'

const cepController = (
  getCepUseCase,
) => () => {
  const typedZipCode = ref("")
  const modelCep = ref(new Cep({}))
  const loading = ref(false)
  const formScreen = ref(true)

  const getCepWithoutFormatting = () => {
    const cepNumbersOnly = typedZipCode.value.replace(/\D/g, '');
    getCep(cepNumbersOnly);
  }

  const getCep = async (cepNumbersOnly) => {
    try {
      loading.value = true
      formScreen.value = true

      const param = {
        cep: cepNumbersOnly
      }

      modelCep.value = await getCepUseCase(param)

      if (modelCep.value) {
        formScreen.value = false
      }

    } catch (error) {
      Toastify({
        text: error,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
          background: "red",
          borderRadius: "50px"
        },
      }).showToast();
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
    getCepWithoutFormatting,
    returnToFormScreen
  }
}

export { cepController }