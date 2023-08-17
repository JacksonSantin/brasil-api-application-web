import { ref } from "vue";
import { Ddd } from "../domain/model/ddd";
import Toastify from 'toastify-js'

const dddController = (
  getDddUseCase
) => () => {
  const typedDdd = ref(0)
  const loading = ref(false)
  const formScreen = ref(true)
  const cities = ref([])
  const modelDdd = ref(new Ddd({}))

  const getDdd = async () => {
    try {
      loading.value = true

      const params = {
        ddd: typedDdd.value
      }

      modelDdd.value = await getDddUseCase(params)

      cities.value = [...modelDdd.value.cities]

      if (modelDdd.value) {
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
    typedDdd.value = ""
  }

  return {
    typedDdd,
    loading,
    modelDdd,
    formScreen,
    cities,
    getDdd,
    returnToFormScreen
  }
}

export { dddController }