import { axiosInstance } from "@/core/axios";
import { isbnController } from "../controller/isbnController";

import { getIsbnRepository } from "../data/repository/getIsbnRepository";
import { getIsbnUseCase } from "../domain/usecase/getIsbnUseCase";

const instance = axiosInstance

const getIsbnRepositoryImpl = getIsbnRepository(instance)
const getIsbnUseCaseImpl = getIsbnUseCase(getIsbnRepositoryImpl)

const isbnControllerImpl = isbnController(getIsbnUseCaseImpl)

export { isbnControllerImpl }