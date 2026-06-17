type InterventionPointSummary = {
  interventionPointId: number;
  interventionPointName: string;
  latitude: number;
  longitude: number;
  interventionPointAddress: string;
  interventionPointMarkName?: string;
};

export default InterventionPointSummary;
