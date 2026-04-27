import { axiosInstance } from "@/core/axios";
import { fipeController } from "../controller/fipeController";

import { getPriceRepository } from "../data/repository/getPriceRepository";
import { getPriceUseCase } from "../domain/usecase/getPriceUseCase";

import { getReferenceListRepository } from "../data/repository/getReferenceListRepository";
import { getReferenceListUseCase } from "../domain/usecase/getReferenceListUseCase";

import { getVehicleRepository } from "../data/repository/getVehicleRepository";
import { getVehicleUseCase } from "../domain/usecase/getVehicleUseCase";

const instance = axiosInstance;

const getPriceRepositoryImpl = getPriceRepository(instance);
const getPriceUseCaseImpl = getPriceUseCase(getPriceRepositoryImpl);

const getReferenceListRepositoryImpl = getReferenceListRepository(instance);
const getReferenceListUseCaseImpl = getReferenceListUseCase(
  getReferenceListRepositoryImpl
);

const getVehicleRepositoryImpl = getVehicleRepository(instance);
const getVehicleUseCaseImpl = getVehicleUseCase(getVehicleRepositoryImpl);

const fipeControllerImpl = fipeController(
  getPriceUseCaseImpl,
  getReferenceListUseCaseImpl,
  getVehicleUseCaseImpl
);

export { fipeControllerImpl };
