import { ref } from "vue";
import { RegistroBr } from "../domain/model/registroBr";
import Toastify from 'toastify-js'

const registroBrController = (
  getRegistroBrUseCase
) => () => {
  const domain = ref("")
  const hosts = ref([])
  const suggestions = ref([])
  const modelRegistroBr = ref(new RegistroBr({}))
  const loading = ref(false)
  const formScreen = ref(true)

  const getRegistroBr = async () => {
    try {
      loading.value = true
      formScreen.value = true

      const params = {
        domain: domain.value
      }

      modelRegistroBr.value = await getRegistroBrUseCase(params)

      hosts.value = [...modelRegistroBr.value.hosts]
      suggestions.value = [...modelRegistroBr.value.suggestions]

      if (modelRegistroBr.value) {
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
    domain.value = ""
  }

  return {
    loading,
    domain,
    modelRegistroBr,
    formScreen,
    hosts,
    suggestions,
    getRegistroBr,
    returnToFormScreen
  }
}

export { registroBrController }
