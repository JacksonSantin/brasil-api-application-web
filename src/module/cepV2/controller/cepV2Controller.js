import { ref } from "vue";
import { CepV2 } from "../domain/model/cepV2";
import L from 'leaflet'


const cepV2Controller = (
  getCepUseCase,
) => () => {
  const typedZipCode = ref("")
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
    if (
      modelCepV2.value.location.coordinates.latitude !== undefined &&
      modelCepV2.value.location.coordinates.longitude !== undefined
    ) {
      markerLatLng.value = [
        modelCepV2.value.location.coordinates.latitude,
        modelCepV2.value.location.coordinates.longitude
      ];

      var map = L.map('map').setView(markerLatLng.value, zoom.value);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

      var defaultIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        shadowSize: [41, 41]
      });

      L.marker(markerLatLng.value, { icon: defaultIcon }).addTo(map);
    }
  };


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
    markerLatLng,
    getCep,
    returnToFormScreen,
    buscaCoordenadas
  }
}

export { cepV2Controller }