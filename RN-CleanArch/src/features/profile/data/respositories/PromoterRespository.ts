import { RequestResult } from '../../../../core/common/RequestResult';
import { IHttpService } from '../../../../core/services/httpServices/IHttpService';
import Promoter from '../../domain/entities/Promoter';
import PromoterDetails from '../../domain/entities/PromoterDetails';
import IPromoterRepository from '../../domain/repositories/IPromoterRespository';
import { MapperPromoterDetailsResponseToEntity } from '../mappers/PromoterDetailsMapper';
import { MapperPromoterResponseToEntity } from '../mappers/PromoterMapper';
import PromoterDetailsResponse from '../responses/PromoterDetailsResponse';
import PromoterResponse from '../responses/PromoterResponse';

class PromoterRepository implements IPromoterRepository {
  private httpService: IHttpService;
  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }
  async getPromoterDetails(): Promise<RequestResult<PromoterDetails>> {
    var response = await this.httpService.get<PromoterDetailsResponse>('/api/v3/me');

    if (response.status !== 200) {
      return { success: false, error: response.messages };
    }

    var promoterDetailsResponse: PromoterDetailsResponse | null = response.data;

    if (promoterDetailsResponse === null) {
      return { success: false, error: 'Promoter data is null' };
    }

    var promoter = MapperPromoterDetailsResponseToEntity(promoterDetailsResponse);

    return { success: true, data: promoter };
  }

  async getPromoter(): Promise<RequestResult<Promoter>> {
    var response = await this.httpService.get<PromoterResponse>('/api/v3/me/detail');

    if (response.status !== 200) {
      return { success: false, error: response.messages };
    }

    var promoterResponse: PromoterResponse | null = response.data;

    if (promoterResponse === null) {
      return { success: false, error: 'Promoter data is null' };
    }

    var promoter = MapperPromoterResponseToEntity(promoterResponse);

    return { success: true, data: promoter };
  }
}

export default PromoterRepository;
