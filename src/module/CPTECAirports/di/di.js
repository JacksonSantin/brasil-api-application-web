import { axiosInstance } from "@/core/axios";
import { cptecAirportsController } from "../controller/cptecAirportsController";

import { getAirportsRepository } from "../data/repository/getAirportsRepository";
import { getAirportsUseCase } from "../domain/usecase/getAirportsUseCase";

const instance = axiosInstance;

const getAirportsRepositoryImpl =
  getAirportsRepository(instance);
const getAirportsUseCaseImpl = getAirportsUseCase(
  getAirportsRepositoryImpl
);

const cptecAirportsControllerImpl = cptecAirportsController(getAirportsUseCaseImpl);

export { cptecAirportsControllerImpl };
