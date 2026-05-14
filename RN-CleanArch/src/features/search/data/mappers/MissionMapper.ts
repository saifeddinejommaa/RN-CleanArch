import Mission from '../../domain/entities/Mission';
import MissionResponse from '../responses/MissionResponse';

export function mapMissionResponseToEntity(response: MissionResponse): Mission {
  return {
    logo: response.logo,
    id: response.id,
    backgroundColor: response.backgroundColor,
    campaignOccupationId: response.campaignOccupationId,
    missionTitle: response.missionTitle,
    startDate: new Date(response.startDate),
    endDate: new Date(response.endDate),
    addressList: response.addressList,
    brandName: response.brandName,
    campaignName: response.campaignName,
    missionPlace: response.missionPlace,
    occupationName: response.occupationName,
    price: response.price,
  };
}
