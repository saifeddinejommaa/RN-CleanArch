import { Result } from "../../../../core/common/Result";
import CurrentMission from "../entities/CurrentMission";
import UpComingMission from "../entities/UpComingMission";

interface IHomeRepository {
    GetUpComingMission(): Promise<Result<UpComingMission[]| null>>;
    GetRurrentMission() : Promise<Result<CurrentMission | null>>
}

export default IHomeRepository;