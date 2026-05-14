import { Result } from "../../../../core/common/Result";
import Mission from "../entities/Mission";
import SearchParams from "../params/SearchParams";

interface ISearchRepository {
    getAllMissions(searchParams: SearchParams) : Promise<Result<Mission[] | null>>
}

export default ISearchRepository;