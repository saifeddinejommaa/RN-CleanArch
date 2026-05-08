import { Result } from "../../../../core/common/Result";
import UpComingMission from "../entities/UpComingMission";
import IHomeRepository from "../repositories/IHomeRepository";

class GetUpComingMissionUseCase {
    constructor(private homeRepsotiory:IHomeRepository){}

    async execute() : Promise<Result<UpComingMission[] | null>> {
        return await this.homeRepsotiory.GetUpComingMission();
    }
}

export default GetUpComingMissionUseCase;