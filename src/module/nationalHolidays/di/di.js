import { axiosInstance } from "@/core/axios";
import { nationalHolidaysController } from "../controller/nationalHolidaysController";

import { getNationalHolidaysRepository } from "../data/repository/getNationalHolidaysRepository";
import { getNationalHolidaysUseCase } from "../domain/usecase/getNationalHolidaysUseCase";

const instance = axiosInstance

const getNationalHolidaysRepositoryImpl = getNationalHolidaysRepository(instance)
const getNationalHolidaysUseCaseImpl = getNationalHolidaysUseCase(getNationalHolidaysRepositoryImpl)

const nationalHolidaysControllerImpl = nationalHolidaysController(getNationalHolidaysUseCaseImpl)

export { nationalHolidaysControllerImpl }