import { Result } from "../../../../core/common/Result";
import CurrentMission from "../entities/CurrentMission";

interface IHomeRepository {
    GetRurrentMission() : Promise<Result<CurrentMission | null>>
}

export default IHomeRepository;