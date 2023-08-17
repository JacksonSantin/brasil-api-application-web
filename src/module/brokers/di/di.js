import { axiosInstance } from "@/core/axios";
import { brokersController } from "../controller/brokersController";

import { getBrokersWithCnpjRepository } from "../data/repository/getBrokersWithCnpjRepository";
import { getBrokersWithCnpjUseCase } from "../domain/usecase/getBrokersWithCnpjUseCase";

const instance = axiosInstance

const getBrokersWithCnpjRepositoryImpl = getBrokersWithCnpjRepository(instance)
const getBrokersWithCnpjUseCaseImpl = getBrokersWithCnpjUseCase(getBrokersWithCnpjRepositoryImpl)

const brokersControllerImpl = brokersController(getBrokersWithCnpjUseCaseImpl)

export { brokersControllerImpl }
