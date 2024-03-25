import { ref } from "vue";
import { Airports } from "../domain/model/airports";
import Toastify from "toastify-js";

const cptecAirportsController = (getAirportsUseCase) => () => {
  const modelAirports = ref(new Airports({}));
  const loading = ref(false);
  const codigoIcao = ref("");
  const changeScreen = ref(false);

  const getAirports = async () => {
    try {
      loading.value = true;

      const params = {
        icaoCode: codigoIcao.value
      }

      modelAirports.value = await getAirportsUseCase(params);

      if(modelAirports.value) {
        changeScreen.value = true
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
          borderRadius: "50px",
        },
      }).showToast();
    } finally {
      loading.value = false;
    }
  };

  const returnToFormScreen = async () => {
    changeScreen.value = false
    loading.value = false
    codigoIcao.value = ""
  }

  return {
    modelAirports,
    loading,
    codigoIcao,
    changeScreen,
    getAirports,
    returnToFormScreen
  };
};

export { cptecAirportsController };
