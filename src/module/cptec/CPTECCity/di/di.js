import { axiosInstance } from "@/core/axios";
import { cptecCityController } from "../controller/cptecCityController";

import { getCityRepository } from "../data/repository/getCityRepository";
import { getCityUseCase } from "../domain/usecase/getCityUseCase";

const instance = axiosInstance;

const getCityRepositoryImpl =
  getCityRepository(instance);
const getCityUseCaseImpl = getCityUseCase(
  getCityRepositoryImpl
);

const cptecCityControllerImpl = cptecCityController(getCityUseCaseImpl);

export { cptecCityControllerImpl };
