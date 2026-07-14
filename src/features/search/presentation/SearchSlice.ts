import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestState } from '../../../core/state/RequestState';
import Mission from '../domain/entities/Mission';
import { container } from '../../../core/di/container';
import GetCurrentMissionUseCase from '../domain/useCases/GetAllMissionsUseCase';
import SearchFilters from './types/SearchFilters';
import { RootState } from '../../../app/store';
import { RequestResult } from '../../../core/common/RequestResult';
import { RequestStatus } from '../../shared/presentation/RequestSatus';

type SearchState = {
  missions: RequestState<Mission[] | null>;
  pageNumber: number;
  searchFilters: SearchFilters;
};

const defaultState: SearchState = {
  missions: {
    data: null,
    status: RequestStatus.initial,
    error: undefined,
  },
  searchFilters: {
    selectedDays: [1, 2, 3, 4, 5, 6, 7],
  },
  pageNumber: 0,
};

export const getAllMissions = createAsyncThunk<
  RequestResult<Mission[] | null>,
  void,
  { state: RootState }
>('search/getAllMissions', async (_, thunkAPI) => {
  const getAllMissionsUseCase = container.resolve<GetCurrentMissionUseCase>(
    'GetAllMissionsUseCase',
  );
  const state = thunkAPI.getState();

  const filters: SearchFilters = state.search.searchFilters;

  const pageNumber = state.search.pageNumber;

  return getAllMissionsUseCase.execute(filters, pageNumber);
});

const searchSlice = createSlice({
  name: 'search',
  initialState: defaultState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMissions.pending, (state) => {
        state.missions = { data: null, status: RequestStatus.loading, error: undefined };
      })
      .addCase(getAllMissions.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.missions = {
            data: action.payload.data,
            status: RequestStatus.success,
            error: undefined,
          };
        } else {
          state.missions = {
            data: null,
            status: RequestStatus.error,
            error: action.payload.error || 'error',
          };
        }
      })
      .addCase(getAllMissions.rejected, (state, action) => {
        state.missions = {
          data: null,
          status: RequestStatus.error,
          error: action.error.message || 'error',
        };
      });
  },
});

export default searchSlice.reducer;
