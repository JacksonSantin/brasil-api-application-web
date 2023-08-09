import { axiosInstance } from "@/core/axios";
import { bankController } from "../controller/bankController"

import { getBanksRepository } from "../data/repository/getBanksRepository";
import { getBanksUseCase } from "../domain/usecase/getBanksUseCase";
import { getBanksWithCodeRepository } from "../data/repository/getBanksWithCodeRepository";
import { getBanksWithCodeUseCase } from "../domain/usecase/getBanksWithCodeUseCase";

const instance = axiosInstance
const getBanksRepositoryImpl = getBanksRepository(instance)
const getBanksUseCaseImpl = getBanksUseCase(getBanksRepositoryImpl)
const getBanksWithCodeRepositoryImpl = getBanksWithCodeRepository(instance)
const getBanksWithCodeUseCaseImpl = getBanksWithCodeUseCase(getBanksWithCodeRepositoryImpl)

const bankControllerImpl = bankController(getBanksUseCaseImpl, getBanksWithCodeUseCaseImpl)

export { bankControllerImpl }