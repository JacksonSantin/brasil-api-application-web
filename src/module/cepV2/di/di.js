import { axiosInstance } from "@/core/axios";
import { cepV2Controller } from "../controller/cepV2Controller";

import { getCepV2Repository } from "../data/repository/getCepV2Repository";
import { getCepV2UseCase } from "../domain/usecase/getCepV2UseCase";

const instance = axiosInstance

const getCepV2RepositoryImpl = getCepV2Repository(instance)
const getCepV2UseCaseImpl = getCepV2UseCase(getCepV2RepositoryImpl)
const cepV2ControllerImpl = cepV2Controller(getCepV2UseCaseImpl)

export { cepV2ControllerImpl }