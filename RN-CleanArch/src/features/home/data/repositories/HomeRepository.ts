import { current } from '@reduxjs/toolkit';
import { IHttpService } from '../../../../core/httpServices/IHttpService';
import CurrentMission from '../../domain/entities/CurrentMission';
import IHomeRepository from '../../domain/repositories/IHomeRepository';
import ApiResponse from '../../../../core/httpServices/ApiResponse';
import { Result } from '../../../../core/common/Result';

class HomeRepository implements IHomeRepository {
  constructor(private http: IHttpService) {}
  
  async GetRurrentMission(): Promise<Result<CurrentMission | null>> {
    try {
      var response: ApiResponse<CurrentMission | null> =
        await this.http.get<CurrentMission | null>('/api/v3/me/home/current');

      if (response.status != 200) {
        return {
          success: false,
          error: response.messages,
        };
      }

      return {
        success: true,
        data: response.data,
      };
    } catch (e: any) {
      return {
        success: false,
        error: e.message,
      };
    }
  }
}

export default HomeRepository;
