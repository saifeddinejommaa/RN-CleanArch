import PromoterResponse from "../responses/PromoterResponse";

export function MapperPromoterResponseToEntity(response:PromoterResponse){
    return {
        id: response.id,
        firstName: response.firstName,
        lastName: response.lastName,
        civilityId: response.civilityId,
        latitude: response.latitude,
        longitude: response.longitude,
        isActive: response.isActive
    }
}