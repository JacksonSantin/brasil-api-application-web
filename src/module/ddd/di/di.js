import { axiosInstance } from "@/core/axios";
import { dddController } from "../controller/dddController";

import { getDddRepository } from "../data/repository/getDddRepository";
import { getDddUseCase } from "../domain/usecase/getDddUseCase";

const instance = axiosInstance

const getDddRepositoryImpl = getDddRepository(instance)
const getDddUseCaseImpl = getDddUseCase(getDddRepositoryImpl)

const dddControllerImpl = dddController(getDddUseCaseImpl)

export { dddControllerImpl }