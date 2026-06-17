import { RequestResult } from '../../../core/common/RequestResult';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { container } from '../../../core/di/container';
import { RequestState } from '../../../core/state/RequestState';
import Promoter from '../domain/entities/Promoter';
import PromoterDetails from '../domain/entities/PromoterDetails';
import GetPromoterUseCase from '../domain/usecases/GetPromoterUseCase';
import GetPromoterDetailsUseCase from '../domain/usecases/GetPromoterDetailsUseCase';

type ProfileState = {
  promoter: RequestState<Promoter | null>;
  promoterDetails: RequestState<PromoterDetails | null>;
};

const defaultState: ProfileState = {
  promoter: {
    data: null,
    status: 'initial',
    error: undefined,
  },
  promoterDetails: {
    data: null,
    status: 'initial',
    error: undefined,
  },
};

export const getPromoter = createAsyncThunk<RequestResult<Promoter>, void>(
  'profile/getPromoter',
  async () => {
    const getPromoterUseCase =
      container.resolve<GetPromoterUseCase>('GetPromoterUseCase');
    return getPromoterUseCase.execute();
  },
);

export const getPromoterDetails = createAsyncThunk<RequestResult<PromoterDetails>, void>(
  'profile/getPromoterDetails',
  async () => {
    const getPromoterDetailsUseCase =
      container.resolve<GetPromoterDetailsUseCase>('GetPromoterUseCase');
    return getPromoterDetailsUseCase.execute();
  },
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState: defaultState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPromoter.pending, (state) => {
        state.promoter = { data: null, status: 'loading', error: undefined };
      })
      .addCase(getPromoter.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.promoter = {
            data: action.payload.data,
            status: 'success',
            error: undefined,
          };
        } else {
          state.promoter = { data: null, status: 'error', error: action.payload.error };
        }
      })
      .addCase(getPromoterDetails.pending, (state) => {
        state.promoterDetails = { data: null, status: 'loading', error: undefined };
      })
      .addCase(getPromoterDetails.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.promoterDetails = {
            data: action.payload.data,
            status: 'success',
            error: undefined,
          };
        } else {
          state.promoterDetails = {
            data: null,
            status: 'error',
            error: action.payload.error,
          };
        }
      });
  },
});

export default profileSlice.reducer;
