interface SearchParams {
  startDate?: Date;
  endDate?: Date;
  latitude?: number;
  longitude?: number;
  selectedDays: number[];
  distance?: number;
  singleOccupation: boolean;
  noOverlappedTimeSlot: boolean;
  noRecommendedMissions: boolean;
  interventionPointId?: number;
  campaignOccupationId?: number;
  pageNumber?: number;
  pageSize?: number;
}

export default SearchParams;
