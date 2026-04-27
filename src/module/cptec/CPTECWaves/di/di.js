import { axiosInstance } from "@/core/axios";
import { cptecWavesController } from "../controller/cptecWavesController";

import { getWavesRepository } from "../data/repository/getWavesRepository";
import { getWavesUseCase } from "../domain/usecase/getWavesUseCase";

const instance = axiosInstance;

const getWavesRepositoryImpl =
  getWavesRepository(instance);
const getWavesUseCaseImpl = getWavesUseCase(
  getWavesRepositoryImpl
);

const cptecWavesControllerImpl = cptecWavesController(getWavesUseCaseImpl);

export { cptecWavesControllerImpl };
