import { axiosInstance } from "@/core/axios";
import { taxaController } from "../controller/taxaController";

import { getTaxaRepository } from "../data/repository/getTaxaRepository";
import { getTaxaUseCase } from "../domain/usecase/getTaxaUseCase";

import { getInformacoesNomeSiglaRepository } from "../data/repository/getInformacoesNomeSiglaRepository";
import { getInformacoesNomeSiglaUseCase } from "../domain/usecase/getInformacoesNomeSiglaUseCase";

const instance = axiosInstance

const getTaxaRepositoryImpl = getTaxaRepository(instance)
const getTaxaUseCaseImpl = getTaxaUseCase(getTaxaRepositoryImpl)

const getInformacoesNomeSiglaRepositoryImpl = getInformacoesNomeSiglaRepository(instance)
const getInformacoesNomeSiglaUseCaseImpl = getInformacoesNomeSiglaUseCase(getInformacoesNomeSiglaRepositoryImpl)

const taxaControllerImpl = taxaController(getTaxaUseCaseImpl, getInformacoesNomeSiglaUseCaseImpl)

export { taxaControllerImpl }