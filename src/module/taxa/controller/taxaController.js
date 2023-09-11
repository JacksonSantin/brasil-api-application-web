import { ref, onMounted } from "vue";
import { Taxa } from "../domain/model/taxa";
import { cardTaxas } from "../const/cardTaxas";
import Toastify from 'toastify-js'

const taxaController = (
  getTaxaUseCase,
  getInformacoesNomeSiglaUseCase
) => () => {
  const taxa = ref("")
  const modelTaxa = ref(new Taxa({}))
  const cardTaxa = ref(cardTaxas)
  const loading = ref(false)
  const formScreen = ref(true)
  const qtdCards = ref(3)

  const getTaxa = async () => {
    try {
      loading.value = true

      modelTaxa.value = await getTaxaUseCase()

      floatToReal()
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

  const floatToReal = () => {
    modelTaxa.value.forEach((item) => {
      if (item.valor) {
        item.valor = item.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
      }
    });
  }

  const getInformationTaxa = async () => {
    try {
      loading.value = true
      formScreen.value = true

      const params = {
        sigla: taxa.value
      }

      modelTaxa.value = await getInformacoesNomeSiglaUseCase(params)

      modelTaxa.value.valor = modelTaxa.value.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

      if (modelTaxa.value) {
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

  onMounted(async () => {
    await getTaxa()
  })

  const returnToFormScreen = async () => {
    formScreen.value = true
    loading.value = false
    taxa.value = ""
    await getTaxa()
  }

  return {
    loading,
    taxa,
    modelTaxa,
    cardTaxa,
    formScreen,
    qtdCards,
    getInformationTaxa,
    returnToFormScreen
  }
}

export { taxaController }
