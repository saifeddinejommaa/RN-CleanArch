import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestState } from '../../../core/state/RequestState';
import CurrentMission from '../domain/entities/CurrentMission';
import { container } from '../../../core/di/container';
import GetCurrentMissionUseCase from '../domain/useCases/GetCurrentMissionUseCase';

interface HomeState {
  currentMission: RequestState<CurrentMission>;
}

const initialState: HomeState = {
  currentMission: {
    data: null,
    status: 'initial',
    error: undefined,
  },
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

const homeSlice = createSlice({
  name: 'auth',
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
      });
  },
});

export default homeSlice.reducer;