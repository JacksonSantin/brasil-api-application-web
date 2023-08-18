import { ref } from "vue";
import { Isbn } from "../domain/model/isbn";
import Toastify from 'toastify-js'

const isbnController = (
  getIsbnUseCase
) => () => {
  const isbn = ref("")
  const authors = ref([])
  const modelIsbn = ref(new Isbn({}))
  const loading = ref(false)
  const formScreen = ref(true)

  const getIsbn = async () => {
    try {
      loading.value = true
      formScreen.value = true

      const params = {
        isbn: isbn.value
      }

      modelIsbn.value = await getIsbnUseCase(params)

      authors.value = [...modelIsbn.value.authors]

      if (modelIsbn.value) {
        formScreen.value = false
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
          borderRadius: "50px"
        },
      }).showToast();
    } finally {
      loading.value = false
    }
  }

  const returnToFormScreen = async () => {
    formScreen.value = true
    loading.value = false
    isbn.value = ""
  }

  return {
    loading,
    isbn,
    modelIsbn,
    formScreen,
    authors,
    getIsbn,
    returnToFormScreen
  }
}

export { isbnController }
