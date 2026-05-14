import MissionAddress from './MissionAddress';

type Mission = {
  id: number;
  campaignOccupationId: number;
  logo: string;
  backgroundColor: string;
  missionTitle: string;
  campaignName: string;
  startDate: Date;
  endDate: Date;
  price: string;
  brandName: string;
  addressList: MissionAddress[];
  occupationName: string;
  missionPlace: string;
};

export default Mission;
