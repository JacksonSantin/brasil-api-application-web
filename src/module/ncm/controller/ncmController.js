import { onMounted, ref } from "vue";
import { Ncm } from "../domain/model/ncm";
import { headers } from "../const/headers";
import Toastify from "toastify-js";

const ncmController = (getNcmUseCase) => () => {
  const modelNcm = ref(new Ncm({}));
  const rows = ref([]);
  const header = ref(headers);
  const search = ref("");

  const getNcm = async () => {
    try {
      rows.value = await getNcmUseCase();
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
    getNcm();
  });

  return {
    modelNcm,
    header,
    rows,
    search,
  };
};

export { ncmController };
