import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestState } from '../../../core/state/RequestState';
import CurrentMission from '../domain/entities/CurrentMission';
import { container } from '../../../core/di/container';
import GetCurrentMissionUseCase from '../domain/useCases/GetCurrentMissionUseCase';
import UpComingMission from '../domain/entities/UpComingMission';
import GetUpComingMissionUseCase from '../domain/useCases/GetUpComingMissionUseCase';

interface HomeState {
  currentMission: RequestState<CurrentMission>;
  upComingMission:RequestState<UpComingMission[]>;
}

const initialState: HomeState = {
  currentMission: {
    data: null,
    status: 'initial',
    error: undefined,
  },
  upComingMission : {
    data: null,
    status: 'initial',
    error: undefined,
  }
};

export const getCurrentMissionAction = createAsyncThunk(
  'home/currentMission',
  async () => {
    const getCurrentMissionUseCase = container.resolve<GetCurrentMissionUseCase>(
      'GetCurrentMissionUseCase',
    );
    return getCurrentMissionUseCase.execute();
  },
);

export const getUpComingMissionAction = createAsyncThunk(
  'home/upComingMission',
  async () => {
    const getUpComingMissionUseCase = container.resolve<GetUpComingMissionUseCase>(
      'GetUpComingMissionUseCase',
    );
    return getUpComingMissionUseCase.execute();
  },
);

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentMissionAction.pending, (state) => {
        state.currentMission = { data: null, status: 'loading', error: undefined };
      })
      .addCase(getCurrentMissionAction.fulfilled, (state, action) => {
        if(action.payload.success){
        state.currentMission = {
          data: action.payload.data,
          status: 'success',
          error: undefined,
        };
      }
      else {
        state.currentMission = {
          data: null,
          status: 'error',
          error: action.payload.error || 'error',
        };
      }
      })
      .addCase(getCurrentMissionAction.rejected, (state, action) => {
        state.currentMission = {
          data: null,
          status: 'error',
          error: action.error.message || 'error',
        };
      })
      .addCase(getUpComingMissionAction.pending, (state) => {
        state.upComingMission = { data: null, status: 'loading', error: undefined };
      })
      .addCase(getUpComingMissionAction.fulfilled, (state, action) => {
        if(action.payload.success){
        state.upComingMission = {
          data: action.payload.data,
          status: 'success',
          error: undefined,
        };
      }
      else {
        state.upComingMission = {
          data: null,
          status: 'error',
          error: action.payload.error || 'error',
        };
      }
      })
      .addCase(getUpComingMissionAction.rejected, (state, action) => {
        state.upComingMission = {
          data: null,
          status: 'error',
          error: action.error.message || 'error',
        };
      })
  },
  
});

export default homeSlice.reducer;