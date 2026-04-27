import { axiosInstance } from "@/core/axios";
import { bankController } from "../controller/bankController"

import { getBanksRepository } from "../data/repository/getBanksRepository";
import { getBanksUseCase } from "../domain/usecase/getBanksUseCase";

const instance = axiosInstance
const getBanksRepositoryImpl = getBanksRepository(instance)
const getBanksUseCaseImpl = getBanksUseCase(getBanksRepositoryImpl)

const bankControllerImpl = bankController(getBanksUseCaseImpl)

export { bankControllerImpl }