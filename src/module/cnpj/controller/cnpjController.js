import { ref } from "vue";
import { Cnpj } from "../domain/model/cnpj";
import dayjs from "dayjs";

const cnpjController = (
  getCnpjUseCase
) => () => {
  const typedCnpj = ref("")
  const loading = ref(false)
  const formScreen = ref(true)
  const modelCnpj = ref(new Cnpj({}))

  const getCnpjWithoutFormatting = () => {
    const cnpjNumbersOnly = typedCnpj.value.replace(/\D/g, '');
    getCnpj(cnpjNumbersOnly);
  }

  const getCnpj = async (cnpjNumbersOnly) => {
    try {
      loading.value = true
      formScreen.value = true

      const param = {
        cnpj: cnpjNumbersOnly
      }

      modelCnpj.value = await getCnpjUseCase(param)

      modelCnpj.value.data_inicio_atividade = modelCnpj.value.data_inicio_atividade ? dayjs(modelCnpj.value.data_inicio_atividade, "YYYY-MM-DD").format("DD/MM/YYYY") : ""
      modelCnpj.value.data_situacao_cadastral = modelCnpj.value.data_situacao_cadastral ? dayjs(modelCnpj.value.data_situacao_cadastral, "YYYY-MM-DD").format("DD/MM/YYYY") : ""
      modelCnpj.value.data_opcao_pelo_simples = modelCnpj.value.data_opcao_pelo_simples ? dayjs(modelCnpj.value.data_opcao_pelo_simples, "YYYY-MM-DD").format("DD/MM/YYYY") : ""
      modelCnpj.value.data_exclusao_do_simples = modelCnpj.value.data_exclusao_do_simples ? dayjs(modelCnpj.value.data_exclusao_do_simples, "YYYY-MM-DD").format("DD/MM/YYYY") : ""
      modelCnpj.value.data_situacao_especial = modelCnpj.value.data_situacao_especial ? dayjs(modelCnpj.value.data_situacao_especial, "YYYY-MM-DD").format("DD/MM/YYYY") : ""
      modelCnpj.value.data_entrada_sociedade = modelCnpj.value.data_entrada_sociedade ? dayjs(modelCnpj.value.data_entrada_sociedade, "YYYY-MM-DD").format("DD/MM/YYYY") : ""

      if (modelCnpj.value) {
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
    modelCnpj,
    getCnpjWithoutFormatting,
    returnToFormScreen
  }
}

export { cnpjController }