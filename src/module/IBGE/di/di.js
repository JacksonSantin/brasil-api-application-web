import { axiosInstance } from "@/core/axios";
import { ibgeController } from "../controller/ibgeController";

import { getIbgeRepository } from "../data/repository/getIbgeRepository";
import { getIbgeUseCase } from "../domain/usecase/getIbgeUseCase";

import { getCityRepository } from "../data/repository/getCityRepository";
import { getCityUseCase } from "../domain/usecase/getCityUseCase";

const instance = axiosInstance;

const getIbgeRepositoryImpl = getIbgeRepository(instance);
const getIbgeUseCaseImpl = getIbgeUseCase(getIbgeRepositoryImpl);

const getCityRepositoryImpl = getCityRepository(instance);
const getCityUseCaseImpl = getCityUseCase(getCityRepositoryImpl);

const ibgeControllerImpl = ibgeController(
  getIbgeUseCaseImpl,
  getCityUseCaseImpl
);

export { ibgeControllerImpl };
