import { ref, onMounted } from "vue";
import { Capital } from "../domain/model/capital";
import Toastify from "toastify-js";

const cptecCapitalsController = (getConditionsCapitalsUseCase) => () => {
  const modelCapital = ref(new Capital({}));
  const loading = ref(false);

  const getConditionsCapitals = async () => {
    try {
      loading.value = true;
      modelCapital.value = await getConditionsCapitalsUseCase();
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

  onMounted(async () => {
    await getConditionsCapitals();
  });
  return {
    modelCapital,
    loading,
  };
};

export { cptecCapitalsController };
