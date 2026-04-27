import { axiosInstance } from "@/core/axios";
import { ncmController } from "../controller/ncmController";

import { getNcmRepository } from "../data/repository/getNcmRepository";
import { getNcmUseCase } from "../domain/usecase/getNcmUseCase";

const instance = axiosInstance

const getNcmRepositoryImpl = getNcmRepository(instance)
const getNcmUseCaseImpl = getNcmUseCase(getNcmRepositoryImpl)

const ncmControllerImpl = ncmController(getNcmUseCaseImpl)

export { ncmControllerImpl }