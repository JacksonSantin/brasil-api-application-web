import { axiosInstance } from "@/core/axios";
import { cityController } from "../controller/cityController";

import { getCityRepository } from "../data/repository/getCityRepository";
import { getCityUseCase } from "../domain/usecase/getCityUseCase";

import { getPlacesRepository } from "../data/repository/getPlacesRepository";
import { getPlaceUseCase } from "../domain/usecase/getPlaceUseCase";

const instance = axiosInstance;

const getCityRepositoryImpl = getCityRepository(instance);
const getCityUseCaseImpl = getCityUseCase(getCityRepositoryImpl);

const getPlacesRepositoryImpl = getPlacesRepository(instance);
const getPlaceUseCaseImpl = getPlaceUseCase(getPlacesRepositoryImpl);

const cityControllerImpl = cityController(
  getCityUseCaseImpl,
  getPlaceUseCaseImpl
);

export { cityControllerImpl };
