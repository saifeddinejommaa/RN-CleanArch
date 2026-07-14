import { RequestResult } from "../../../../core/common/RequestResult";
import CurrentMission from "../entities/CurrentMission";
import IHomeRepository from "../repositories/IHomeRepository";

class GetCurrentMissionUseCase {
  constructor(private homeRepository: IHomeRepository) {}

  execute(): Promise<RequestResult<CurrentMission | null>> {
    var currentMission = this.homeRepository.GetCurrentMission();
    return currentMission;
  }
}

export default GetCurrentMissionUseCase;
