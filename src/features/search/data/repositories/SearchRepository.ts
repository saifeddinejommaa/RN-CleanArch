import { RequestResult } from '../../../../core/common/RequestResult';
import ApiResponse from '../../../../core/services/httpServices/ApiResponse';
import { IHttpService } from '../../../../core/services/httpServices/IHttpService';
import Mission from '../../domain/entities/Mission';
import SearchParams from '../../domain/params/SearchParams';
import ISearchRepository from '../../domain/repositories/searchRepository';
import { mapMissionResponseToEntity } from '../mappers/MissionMapper';
import MissionResponse from '../responses/MissionResponse';
import MissionsListResponse from '../responses/MissionsListRespons';

class SearchRepository implements ISearchRepository {
  constructor(private httpService: IHttpService) {}

  async getAllMissions(
    searchParams: SearchParams,
  ): Promise<RequestResult<Mission[] | null>> {
    const response: ApiResponse<MissionsListResponse> =
      await this.httpService.get<MissionsListResponse>('/api/v2/missions', {
        params: searchParams,
      });

    if (response.status != 200) {
      return {
        success: false,
        error: response.messages,
      };
    }

    const missionsListResponse: MissionsListResponse | null = response.data;

    const missionsResonseResult = missionsListResponse?.results;

    return {
      success: true,
      data:
        missionsResonseResult !== undefined && missionsResonseResult !== null
          ? missionsResonseResult.map(mapMissionResponseToEntity)
          : null,
    };
  }
}

export default SearchRepository;
