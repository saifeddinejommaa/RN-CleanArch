import { RequestResult } from '../../../../core/common/RequestResult';
import Mission from '../entities/Mission';
import SearchParams from '../params/SearchParams';

interface ISearchRepository {
  getAllMissions(searchParams: SearchParams): Promise<RequestResult<Mission[] | null>>;
}

export default ISearchRepository;
