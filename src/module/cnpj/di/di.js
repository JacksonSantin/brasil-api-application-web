import { axiosInstance } from "@/core/axios";
import { cnpjController } from "../controller/cnpjController";

import { getCnpjRepository } from "../data/repository/getCnpjRepository";
import { getCnpjUseCase } from "../domain/usecase/getCnpjUseCase";

const instance = axiosInstance

const getCnpjRepositoryImpl = getCnpjRepository(instance)
const getCnpjUseCaseImpl = getCnpjUseCase(getCnpjRepositoryImpl)

const cnpjControllerImpl = cnpjController(getCnpjUseCaseImpl)

export { cnpjControllerImpl }