import { ref } from "vue";
import { NationalHolidays } from "../domain/model/nationalHolidays";
import Toastify from 'toastify-js'

const nationalHolidaysController = (
  getNationalHolidaysUseCase
) => () => {
  const ano = ref(0)
  const modelNationalHolidays = ref(new NationalHolidays({}))
  const loading = ref(false)
  const formScreen = ref(true)

  const getNationalHolidays = async () => {
    try {
      loading.value = true
      formScreen.value = true

      const params = {
        ano: ano.value
      }

      modelNationalHolidays.value = await getNationalHolidaysUseCase(params)

      if (modelNationalHolidays.value) {
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
    ano.value = 0
  }

  return {
    loading,
    ano,
    modelNationalHolidays,
    formScreen,
    getNationalHolidays,
    returnToFormScreen
  }
}

export { nationalHolidaysController }
