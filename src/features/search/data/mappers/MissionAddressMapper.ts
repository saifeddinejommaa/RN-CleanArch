import MissionAddress from '../../domain/entities/MissionAddress';
import MissionAddressResponse from '../responses/MissionAddressResponse';

export function MapMissionAddressResponseToModel(
  response: MissionAddressResponse,
): MissionAddress {
  return {
    addressName: response.addressName,
    distance: response.distance,
    id: response.id,
    latitude: response.latitude,
    longitude: response.longitude,
  };
}
