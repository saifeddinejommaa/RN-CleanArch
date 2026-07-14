import { useDispatch, useSelector } from "react-redux";
import { getUpComingMissionAction } from "../HomeSlice";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../../../app/store";
import { RequestStatus } from "../../../shared/presentation/RequestSatus";

export const UseUpcomingMission = () => {
  const dispatch = useDispatch<AppDispatch>();
  const upcomingMissionState = useSelector((state: RootState) => state.home);
  useEffect(() => {
    dispatch(getUpComingMissionAction());
  }, [dispatch]);

  return {
    isLoading:
      upcomingMissionState.upComingMission.status === RequestStatus.loading,
    error: upcomingMissionState.upComingMission.error,
    upcomingMission: upcomingMissionState.upComingMission.data,
  };
};
