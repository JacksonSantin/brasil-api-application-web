import { ref, onMounted } from "vue";
import { headersCity } from "../const/headersCity";
import { Place } from "../domain/model/place";
import Toastify from "toastify-js";

const cityController = (getCityUseCase, getPlaceUseCase) => () => {
  const loading = ref(false);
  const dialogForm = ref(false);
  const headersCitys = ref(headersCity);
  const cityName = ref("");
  const itemsCity = ref([]);
  const modelPlace = ref(new Place({}));
  const search = ref("");

  const getCity = async () => {
    try {
      loading.value = true;
      itemsCity.value = await getCityUseCase();
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

  const showItem = async (item) => {
    try {
      loading.value = true;
      cityName.value = item;
      modelPlace.value = await getPlaceUseCase(item);
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

  onMounted(async () => {
    await getCity();
  });

  return {
    loading,
    dialogForm,
    headersCitys,
    cityName,
    itemsCity,
    modelPlace,
    search,
    showItem,
  };
};

export { cityController };
