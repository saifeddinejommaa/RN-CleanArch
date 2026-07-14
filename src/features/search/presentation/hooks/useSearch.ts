import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMissions } from "../SearchSlice";
import { AppDispatch, RootState } from "../../../../app/store";
import { RequestStatus } from "../../../shared/presentation/RequestSatus";

export const useSearch = () => {
  const dispatch = useDispatch<AppDispatch>();

  const searchState = useSelector((state: RootState) => state.search);

  const sortedList = useMemo(() => {
    return searchState.missions.data
      ? [...searchState.missions.data].sort((a, b) => {
          return (
            new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          );
        })
      : [];
  }, [searchState.missions.data]);

  useEffect(() => {
    dispatch(getAllMissions());
  }, []);

  return {
    isLoading: searchState.missions.status === RequestStatus.loading,
    error: searchState.missions.error,
    missions: sortedList,
  };
}
