import { ref, onMounted } from "vue";
import { headersBank } from "../const/headersBank";
import { Banks } from "../domain/model/banks";
import Toastify from "toastify-js";

const bankController = (getBanksUseCase) => () => {
  const headersBanks = ref(headersBank);
  const itemsBank = ref([]);
  const modelBank = ref(new Banks({}));
  const dialogForm = ref(false);

  const getBanks = async () => {
    try {
      itemsBank.value = await getBanksUseCase();
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
    modelBank.value = { ...item };
    dialogForm.value = true;
  };

  onMounted(async () => {
    await getBanks();
  });

  return {
    headersBanks,
    itemsBank,
    dialogForm,
    modelBank,
    showItem,
  };
};

export { bankController };
