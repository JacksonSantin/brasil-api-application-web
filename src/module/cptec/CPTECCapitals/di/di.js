import { axiosInstance } from "@/core/axios";
import { cptecCapitalsController } from "../controller/cptecCapitalsController";

import { getConditionsCapitalsRepository } from "../data/repository/getConditionsCapitalsRepository";
import { getConditionsCapitalsUseCase } from "../domain/usecase/getConditionsCapitalsUseCase";

const instance = axiosInstance;

const getConditionsCapitalsRepositoryImpl =
  getConditionsCapitalsRepository(instance);
const getConditionsCapitalsUseCaseImpl = getConditionsCapitalsUseCase(
  getConditionsCapitalsRepositoryImpl
);

const cptecCapitalsControllerImpl = cptecCapitalsController(getConditionsCapitalsUseCaseImpl);

export { cptecCapitalsControllerImpl };
