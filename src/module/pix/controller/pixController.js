import { onMounted, ref } from "vue";
import { Pix } from "../domain/model/pix";
import { headers } from "../const/headers";
import Toastify from "toastify-js";

const pixController = (getPixUseCase) => () => {
  const modelPix = ref(new Pix({}));
  const rows = ref([]);
  const header = ref(headers);
  const itemsPerPage = ref(30);

  const getPix = async () => {
    try {
      rows.value = await getPixUseCase();
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

  onMounted(() => {
    getPix();
  });

  return {
    modelPix,
    header,
    rows,
    itemsPerPage,
  };
};

export { pixController };
