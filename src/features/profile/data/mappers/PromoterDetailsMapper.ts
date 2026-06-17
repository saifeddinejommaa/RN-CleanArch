import PromoterDetails from "../../domain/entities/PromoterDetails";
import PromoterDetailsResponse from "../responses/PromoterDetailsResponse";

export function MapperPromoterDetailsResponseToEntity(response:PromoterDetailsResponse) : PromoterDetails{
    return {
        id: response.id,
        firstName: response.firstName,
        lastName: response.lastName,
        civilityId: response.civilityId,
        birthDate: new Date(response.birthDate),
        nationalityCountryId: response.nationalityCountryId,
        birthCity: response.birthCity,
        birthCountryId: response.birthCountryId,
        communicationLanguageId: response.communicationLanguageId,
        mobile: response.mobile,
      
        // Address
        addressNumber: response.addressNumber,
        addressStreet: response.addressStreet,
        addressZip: response.addressZip,
        addressCity: response.addressCity,
        addressCountry: response.addressCountry,
        addressCountryId: response.addressCountryId,
      
        // Profile
        height: response.height,
        shirtSizeId: response.shirtSizeId,
        jacketSizeId: response.jacketSizeId,
        skirtSizeId: response.skirtSizeId,
        shoeSize: response.shoeSize,
      
        // Security
        securityNumber: response.securityNumber,
        email: response.email,
        bankBic: response.bankBic,
        bankName: response.bankName,
        bankAgency: response.bankAgency,
        bankAccount: response.bankAccount,
        bankIban: response.bankIban,
        bankRecipient: response.bankRecipient,
      
        profilePhotos: response.profilePhotos.map(photo => ({
            id: photo.id,
            url: photo.url,
            scale: photo.scale,
          }))
    }
}