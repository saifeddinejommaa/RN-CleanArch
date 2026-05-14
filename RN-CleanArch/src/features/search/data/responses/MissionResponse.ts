import MissionAddressResponse from './MissionAddressResponse';

interface MissionResponse {
  id: number;
  campaignOccupationId: number;
  logo: string | null;
  backgroundColor: string;
  missionTitle: string;
  campaignName: string;
  startDate: string;
  endDate: string;
  price: string;
  brandName: string;
  addressList: MissionAddressResponse[];
  occupationName: string;
  missionPlace: string;
}

export default MissionResponse;
