import { axiosInstance } from "@/core/axios";
import { registroBrController } from "../controller/registroBrController";

import { getRegistroBrRepository } from "../data/repository/getRegistroBrRepository";
import { getRegistroBrUseCase } from "../domain/usecase/getRegistroBrUseCase";

const instance = axiosInstance

const getRegistroBrRepositoryImpl = getRegistroBrRepository(instance)
const getRegistroBrUseCaseImpl = getRegistroBrUseCase(getRegistroBrRepositoryImpl)

const registroBrControllerImpl = registroBrController(getRegistroBrUseCaseImpl)

export { registroBrControllerImpl }