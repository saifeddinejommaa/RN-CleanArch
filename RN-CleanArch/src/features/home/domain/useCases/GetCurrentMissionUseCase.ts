import { Result } from '../../../../core/common/Result';
import CurrentMission from '../entities/CurrentMission';
import IHomeRepository from '../repositories/IHomeRepository';

class GetCurrentMissionUseCase {
  constructor(private homeRepository: IHomeRepository) {}
  
  execute(): Promise<Result<CurrentMission | null>> {
    var currentMission = this.homeRepository.GetRurrentMission();
    return currentMission;
  }
}

export default GetCurrentMissionUseCase;
