type PromoterIdentity = {
    firstName: string;
    lastName: string;
    civilityId: number;
    birthDate: Date;
    nationalityCountryId: number;
    birthCity?: string;
    birthCountryId: number;
    communicationLanguageId?: number;
    mobile?: string;
    securityNumber?: string;
}

export default PromoterIdentity;