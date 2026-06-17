import { RequestResult } from '../../../../core/common/RequestResult';
import UpComingMission from '../entities/UpComingMission';
import IHomeRepository from '../repositories/IHomeRepository';

class GetUpComingMissionUseCase {
  constructor(private homeRepsotiory: IHomeRepository) {}

  async execute(): Promise<RequestResult<UpComingMission[] | null>> {
    return await this.homeRepsotiory.GetUpComingMission();
  }
}

export default GetUpComingMissionUseCase;
