import { ref } from "vue";
import { Waves } from "../domain/model/waves";
import Toastify from "toastify-js";

const cptecWavesController = (getWavesUseCase) => () => {
  const modelWaves = ref(new Waves({}));
  const loading = ref(false);
  const idCity = ref(0);
  const changeScreen = ref(false);

  const getWaves = async () => {
    try {
      loading.value = true;

      const params = {
        cityCode: idCity.value
      }

      modelWaves.value = await getWavesUseCase(params);
      console.log("🚀 ~ getWaves ~ modelWaves.value:", modelWaves.value)

      if(modelWaves.value) {
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
    idCity.value = ""
  }

  return {
    modelWaves,
    loading,
    idCity,
    changeScreen,
    getWaves,
    returnToFormScreen
  };
};

export { cptecWavesController };
