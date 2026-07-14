import { RequestResult } from "../../../../core/common/RequestResult";
import CurrentMission from "../entities/CurrentMission";
import UpComingMission from "../entities/UpComingMission";

interface IHomeRepository {
  GetUpComingMission(): Promise<RequestResult<UpComingMission[] | null>>;
  GetCurrentMission(): Promise<RequestResult<CurrentMission | null>>;
}

export default IHomeRepository;
