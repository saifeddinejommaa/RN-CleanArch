import { RequestResult } from "../../../../core/common/RequestResult";
import PromoterDetails from "../entities/PromoterDetails";
import IPromoterRepository from "../repositories/IPromoterRespository";

class GetPromoterDetailsUseCase{
    constructor(
        private promoterRepository: IPromoterRepository
    ){}

    async execute(): Promise<RequestResult<PromoterDetails>>{
        return await this.promoterRepository.getPromoterDetails();
    }
}

export default GetPromoterDetailsUseCase;