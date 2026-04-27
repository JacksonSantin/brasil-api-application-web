import { axiosInstance } from "@/core/axios";
import { pixController } from "../controller/pixController";

import { getPixRepository } from "../data/repository/getPixRepository";
import { getPixUseCase } from "../domain/usecase/getPixUseCase";

const instance = axiosInstance

const getPixRepositoryImpl = getPixRepository(instance)
const getPixUseCaseImpl = getPixUseCase(getPixRepositoryImpl)

const pixControllerImpl = pixController(getPixUseCaseImpl)

export { pixControllerImpl }