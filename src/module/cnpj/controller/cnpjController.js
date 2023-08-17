import { ref } from "vue";
import { Cnpj } from "../domain/model/cnpj";
import Toastify from 'toastify-js'

const cnpjController = (
  getCnpjUseCase
) => () => {
  const typedCnpj = ref("")
  const loading = ref(false)
  const formScreen = ref(true)
  const modelCnpj = ref(new Cnpj({}))

  const getCnpjWithoutFormatting = () => {
    const cnpjNumbersOnly = typedCnpj.value.replace(/\D/g, '');
    getCnpj(cnpjNumbersOnly);
  }

  const getCnpj = async (cnpjNumbersOnly) => {
    try {
      loading.value = true
      formScreen.value = true

      const param = {
        cnpj: cnpjNumbersOnly
      }

      modelCnpj.value = await getCnpjUseCase(param)

      if (modelCnpj.value) {
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
      loading.value = false
    }
  }

  const returnToFormScreen = async () => {
    formScreen.value = true
    loading.value = false
    typedCnpj.value = ""
  }

  return {
    typedCnpj,
    loading,
    formScreen,
    modelCnpj,
    getCnpjWithoutFormatting,
    returnToFormScreen
  }
}

export { cnpjController }