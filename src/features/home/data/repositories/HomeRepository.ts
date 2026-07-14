import { current } from "@reduxjs/toolkit";
import { IHttpService } from "../../../../core/services/httpServices/IHttpService";
import CurrentMission from "../../domain/entities/CurrentMission";
import IHomeRepository from "../../domain/repositories/IHomeRepository";
import ApiResponse from "../../../../core/services/httpServices/ApiResponse";
import { RequestResult } from "../../../../core/common/RequestResult";
import UpComingMission from "../../domain/entities/UpComingMission";

class HomeRepository implements IHomeRepository {
  constructor(private http: IHttpService) {}
  async GetUpComingMission(): Promise<RequestResult<UpComingMission[] | null>> {
    try {
      var response: ApiResponse<UpComingMission[] | null> = await this.http.get<
        UpComingMission[] | null
      >("/api/v3/me/home/incoming");

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

  async GetCurrentMission(): Promise<RequestResult<CurrentMission | null>> {
    try {
      var response: ApiResponse<CurrentMission | null> =
        await this.http.get<CurrentMission | null>("/api/v3/me/home/current");
        
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
