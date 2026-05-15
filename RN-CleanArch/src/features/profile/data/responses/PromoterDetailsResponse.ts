import DocumentResponse from "./documentResponse";

type PromoterDetailsResponse = {
  id: number;
  firstName: string;
  lastName: string;
  civilityId: number;
  birthDate: string;
  nationalityCountryId: number;
  birthCity?: string;
  birthCountryId: number;
  communicationLanguageId?: number;
  mobile?: string;

  // Address
  addressNumber?: string;
  addressStreet?: string;
  addressZip?: string;
  addressCity?: string;
  addressCountry?: string;
  addressCountryId?: number;

  // Profile
  height?: number;
  shirtSizeId?: number;
  jacketSizeId?: number;
  skirtSizeId?: number;
  shoeSize?: number;

  // Security
  securityNumber?: string;
  email?: string;
  bankBic?: string;
  bankName?: string;
  bankAgency?: string;
  bankAccount?: string;
  bankIban?: string;
  bankRecipient?: string;

  profilePhotos: DocumentResponse[];
};

export default PromoterDetailsResponse;
