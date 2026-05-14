import { Result } from '../../../../core/common/Result';
import SearchFilters from '../../presentation/types/SearchFilters';
import Mission from '../entities/Mission';
import ISearchRepository from '../repositories/searchRepository';
import SearchParams from '../params/SearchParams';

 class GetAllMissionsUseCase {
  constructor(private repository: ISearchRepository) {}

  async execute(
    filters: SearchFilters,
    pageNumber: number,
  ): Promise<Result<Mission[] | null>> {
    const searchParams: SearchParams = {
      latitude: 48.867161,
      longitude: 2.289531,
      selectedDays: filters.selectedDays || [],
      pageNumber: pageNumber,
      singleOccupation:true,
      noOverlappedTimeSlot:true,
      noRecommendedMissions:true,

      pageSize: 10,
      ...(filters.distance != null && {
        distance: filters.distance,
      }),
    
      ...(filters.startDate != null && {
        startDate: filters.startDate,
      }),
    
      ...(filters.endDate != null && {
        endDate: filters.endDate,
      }),
    
      ...(filters.selectedDays != null && {
        selectedDays: filters.selectedDays,
      }),
    };

    return await this.repository.getAllMissions(searchParams);
  }
}

export default GetAllMissionsUseCase;


