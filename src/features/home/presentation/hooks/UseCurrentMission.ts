import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../app/store";
import { useEffect } from "react";
import {
  getCurrentMissionAction,
} from "../HomeSlice";
import { RequestStatus } from "../../../shared/presentation/RequestSatus";

export const UseCurrentMission = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentMissionState = useSelector((state: RootState) => state.home);
  useEffect(() => {
    dispatch(getCurrentMissionAction());
  },[dispatch]);

  return {
    isLoading: currentMissionState.currentMission.status === RequestStatus.loading,
    currentMission: currentMissionState.currentMission.data,
    error: currentMissionState.currentMission.error,
  };
}
