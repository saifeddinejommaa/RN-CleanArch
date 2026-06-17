import { RequestResult } from '../../../../core/common/RequestResult';
import Promoter from '../entities/Promoter';
import PromoterDetails from '../entities/PromoterDetails';

interface IPromoterRepository {
  getPromoter: () => Promise<RequestResult<Promoter>>;
  getPromoterDetails: () => Promise<RequestResult<PromoterDetails>>;
}

export default IPromoterRepository;