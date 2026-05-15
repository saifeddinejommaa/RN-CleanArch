import { RequestResult } from "../../../../core/common/RequestResult";
import Promoter from "../entities/Promoter";
import IPromoterRepository from "../repositories/IPromoterRespository";

class GetPromoterUseCase{
    constructor(
        private promoterRepository: IPromoterRepository
    ){}

    async execute(): Promise<RequestResult<Promoter>>{
        return await this.promoterRepository.getPromoter();
    }
}

export default GetPromoterUseCase;