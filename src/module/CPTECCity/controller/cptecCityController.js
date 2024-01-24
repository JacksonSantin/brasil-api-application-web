import { ref } from "vue";
import { City } from "../domain/model/city";
import Toastify from "toastify-js";

const cptecCityController = (getCityUseCase) => () => {
  const modelCity = ref(new City({}));
  const loading = ref(false);
  const expand = ref(false);
  const changeScreen = ref(false);
  const idCity = ref(0);

  const getCity = async () => {
    try {
      loading.value = true;

      const params = {
        cityCode: idCity.value,
      };

      modelCity.value = await getCityUseCase(params);

      if (modelCity.value) {
        changeScreen.value = true;
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
    changeScreen.value = false;
    loading.value = false;
    idCity.value = "";
  };

  const getCondition = async (condition) => {
    switch (condition) {
      case "pn":
        return "mdi-weather-partly-cloudy";
      case "c":
        return "mdi-weather-rainy";
      case "ci":
        return "mdi-weather-rainy";
      case "ps":
        return "mdi-weather-sunny";
      case "pc":
        return "mdi-weather-pouring";
      default:
        return "mdi-weather-sunny";
    }
  };

  return {
    modelCity,
    expand,
    loading,
    idCity,
    changeScreen,
    getCity,
    getCondition,
    returnToFormScreen,
  };
};

export { cptecCityController };
