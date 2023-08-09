import { axiosInstance } from "@/core/axios";
import { cepController } from "../controller/cepController";

import { getCepRepository } from "../data/repository/getCepRepository";
import { getCepUseCase } from "../domain/usecase/getCepUseCase";

const instance = axiosInstance

const getCepRepositoryImpl = getCepRepository(instance)
const getCepUseCaseImpl = getCepUseCase(getCepRepositoryImpl)
const cepControllerImpl = cepController(getCepUseCaseImpl)

export { cepControllerImpl }