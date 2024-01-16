import Toastify from "toastify-js";
import { onMounted, ref } from "vue";
import { cbbVehicle } from "../const/cbbVehicle";
import {
  headerReferenceList,
  headerVehicle,
  headerVehiclePrice,
} from "../const/headers";
import { Vehicle } from "../domain/model/vehicle";

const fipeController =
  (getPriceUseCase, getReferenceListUseCase, getVehicleUseCase) => () => {
    const vehicleSelected = ref(null);
    const searchVehicle = ref("");
    const loading = ref(false);
    const dialogForm = ref(false);
    const itemsBrands = ref([]);
    const itemsReference = ref([]);
    const itemsVehiclePrice = ref([]);
    const comboBVehicle = ref(cbbVehicle);
    const headerBrands = ref(headerVehicle);
    const headerReference = ref(headerReferenceList);
    const headerVehiclePriceFipe = ref(headerVehiclePrice);
    const modelVeiculo = ref(new Vehicle({}));

    const getReferenceItems = async () => {
      try {
        loading.value = true;
        itemsReference.value = await getReferenceListUseCase();
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

    const getVehicleBrands = async (vehicleSelected) => {
      try {
        loading.value = true;

        if (vehicleSelected) {
          itemsBrands.value = await getVehicleUseCase(vehicleSelected);
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

    const getVehiclePrice = async (searchVehicle) => {
      try {
        loading.value = true;
        if (searchVehicle) {
          itemsVehiclePrice.value = await getPriceUseCase(searchVehicle);
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

    const showItem = async (item) => {
      modelVeiculo.value = { ...item };
      dialogForm.value = true;
    };

    onMounted(async () => {
      await getReferenceItems();
    });

    return {
      comboBVehicle,
      loading,
      dialogForm,
      vehicleSelected,
      itemsBrands,
      itemsReference,
      itemsVehiclePrice,
      headerBrands,
      headerReference,
      headerVehiclePriceFipe,
      searchVehicle,
      modelVeiculo,
      showItem,
      getVehicleBrands,
      getReferenceItems,
      getVehiclePrice,
    };
  };

export { fipeController };
