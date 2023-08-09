import { ref } from "vue";
import { CepV2 } from "../domain/model/cepV2";
import L from 'leaflet'

const cepV2Controller = (
  getCepUseCase,
) => () => {
  const typedZipCode = ref("")
  const url = ref("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
  const center = ref([])
  const markerLatLng = ref([])
  const modelCepV2 = ref(new CepV2({}))
  const loading = ref(false)
  const formScreen = ref(true)
  const zoom = ref(15)

  const getCep = async () => {
    try {
      loading.value = true
      formScreen.value = true

      const param = {
        cep: typedZipCode.value
      }

      modelCepV2.value = await getCepUseCase(param)

      if (modelCepV2.value) {
        formScreen.value = false
      }

    } catch (error) {
      throw error
    } finally {
      loading.value = true
    }
  }

  const buscaCoordenadas = async () => {
    markerLatLng.value = [modelCepV2.value.location.coordinates.longitude, modelCepV2.value.location.coordinates.latitude]
    center.value = [modelCepV2.value.location.coordinates.longitude, modelCepV2.value.location.coordinates.latitude]

    const map = L.map('map').setView(markerLatLng.value, zoom.value);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

    L.marker(center.value).addTo(map)
  }

  const returnToFormScreen = async () => {
    formScreen.value = true
    loading.value = false
    typedZipCode.value = ""
  }

  return {
    typedZipCode,
    modelCepV2,
    loading,
    formScreen,
    zoom,
    center,
    url,
    markerLatLng,
    getCep,
    returnToFormScreen,
    buscaCoordenadas
  }
}

export { cepV2Controller }