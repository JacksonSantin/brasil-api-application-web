import { ref } from "vue";
import { Corretoras } from "../domain/model/corretoras";
import dayjs from "dayjs";

const corretorasController = (
  getCorretorasWithCnpjUseCase
) => () => {
  const typedCnpj = ref("")
  const loading = ref(false)
  const formScreen = ref(true)
  const modelCorretoras = ref(new Corretoras({}))

  const getCnpjWithoutFormatting = () => {
    const cnpjNumbersOnly = typedCnpj.value.replace(/\D/g, '');
    getCorretoras(cnpjNumbersOnly);
  }

  const getCorretoras = async (cnpjNumbersOnly) => {
    try {
      loading.value = true

      const params = {
        cnpj: cnpjNumbersOnly
      }

      modelCorretoras.value = await getCorretorasWithCnpjUseCase(params)

      modelCorretoras.value.data_patrimonio_liquido = modelCorretoras.value.data_patrimonio_liquido ? dayjs(modelCorretoras.value.data_patrimonio_liquido, "YYYY-MM-DD").format("DD/MM/YYYY") : ""
      modelCorretoras.value.data_inicio_situacao = modelCorretoras.value.data_inicio_situacao ? dayjs(modelCorretoras.value.data_inicio_situacao, "YYYY-MM-DD").format("DD/MM/YYYY") : ""
      modelCorretoras.value.data_registro = modelCorretoras.value.data_registro ? dayjs(modelCorretoras.value.data_registro, "YYYY-MM-DD").format("DD/MM/YYYY") : ""

      if (modelCorretoras.value) {
        formScreen.value = false
      }
    } catch (error) {
      throw error
    } finally {
      loading.value = false
    }
  }

  const returnToFormScreen = async () => {
    formScreen.value = true
    loading.value = false
    typedCnpj.value = ""
  }

  return {
    typedCnpj,
    loading,
    formScreen,
    modelCorretoras,
    getCnpjWithoutFormatting,
    returnToFormScreen
  }
}

export { corretorasController }