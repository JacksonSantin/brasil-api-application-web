import { ref, onMounted } from "vue";
import { headersIBGE } from "../const/headersIBGE";
import { City } from "../domain/model/city";
import { IBGE } from "../domain/model/IBGE";
import Toastify from "toastify-js";

const ibgeController = (getIbgeUseCase, getCityUseCase) => () => {
  const modelIbge = ref(new IBGE({}));
  const modelCity = ref(new City({}));
  const uf = ref("");
  const rows = ref([]);
  const headers = ref(headersIBGE);
  const dialogForm = ref(false);
  const loading = ref(false);

  const getIbge = async () => {
    try {
      rows.value = await getIbgeUseCase();
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
    }
  };

  const showItem = async (item) => {
    try {
      loading.value = true;
      uf.value = item;
      modelCity.value = await getCityUseCase(item);
      dialogForm.value = true;
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

  onMounted(() => {
    getIbge();
  });

  return {
    modelIbge,
    modelCity,
    loading,
    uf,
    headers,
    rows,
    showItem,
    dialogForm,
  };
};

export { ibgeController };
