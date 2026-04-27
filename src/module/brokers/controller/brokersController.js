import { ref } from "vue";
import { Brokers } from "../domain/model/brokers";
import Toastify from 'toastify-js'

const brokersController = (
  getBrokersWithCnpjUseCase
) => () => {
  const typedCnpj = ref("")
  const loading = ref(false)
  const formScreen = ref(true)
  const modelBrokers = ref(new Brokers({}))

  const getCnpjWithoutFormatting = () => {
    const cnpjNumbersOnly = typedCnpj.value.replace(/\D/g, '');
    getBrokers(cnpjNumbersOnly);
  }

  const getBrokers = async (cnpjNumbersOnly) => {
    try {
      loading.value = true

      const params = {
        cnpj: cnpjNumbersOnly
      }

      modelBrokers.value = await getBrokersWithCnpjUseCase(params)

      if (modelBrokers.value) {
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
    modelBrokers,
    getCnpjWithoutFormatting,
    returnToFormScreen
  }
}

export { brokersController }