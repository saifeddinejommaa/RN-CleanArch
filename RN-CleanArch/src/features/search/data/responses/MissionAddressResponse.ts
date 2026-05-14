interface MissionAddressResponse {
  id: number;
  addressName: string;
  distance: number | null;
  latitude: number;
  longitude: number;
}

export default MissionAddressResponse;
