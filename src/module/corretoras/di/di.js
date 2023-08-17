import { axiosInstance } from "@/core/axios";
import { corretorasController } from "../controller/corretorasController";

import { getCorretorasWithCnpjRepository } from "../data/repository/getCorretorasWithCnpjRepository";
import { getCorretorasWithCnpjUseCase } from "../domain/usecase/getCorretorasWithCnpjUseCase";

const instance = axiosInstance

const getCorretorasWithCnpjRepositoryImpl = getCorretorasWithCnpjRepository(instance)
const getCorretorasWithCnpjUseCaseImpl = getCorretorasWithCnpjUseCase(getCorretorasWithCnpjRepositoryImpl)

const corretorasControllerImpl = corretorasController(getCorretorasWithCnpjUseCaseImpl)

export { corretorasControllerImpl }
