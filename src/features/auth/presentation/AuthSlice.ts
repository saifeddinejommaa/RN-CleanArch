import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LoginUseCase } from '../domain/useCases/LoginUseCase';
import { LogoutUseCase } from '../domain/useCases/LogoutUseCase';
import { CheckAuthUseCase } from '../domain/useCases/CheckAuthUseCase';
import { container } from '../../../core/di/container';
import { RequestStatus } from '../../shared/presentation/RequestSatus';
import { RequestState } from '../../../core/state/RequestState';



const initialState: RequestState<boolean> = {
  status: RequestStatus.initial,
  data: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }) => {
    const loginUseCase = container.resolve<LoginUseCase>('LoginUseCase');
    return loginUseCase.execute(email, password);
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  const logoutUseCase = container.resolve<LogoutUseCase>('LogoutUseCase');
  return logoutUseCase.execute();
});

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
  const checkUseCase = container.resolve<CheckAuthUseCase>('CheckAuthUseCase');
  return checkUseCase.execute();
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = RequestStatus.loading;
      })
      .addCase(login.fulfilled, (state, action) => {
        if (!action.payload) {
          state.status = RequestStatus.error;
          state.error = 'Invalid credentials';
          return;
        }
        state.status = RequestStatus.success;
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = RequestStatus.error;
        state.error = action.error.message || 'Login failed';
      })
      .addCase(checkAuth.pending, (state) => {
        state.status = RequestStatus.loading;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.status = RequestStatus.success;
        state.data = action.payload;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.status = RequestStatus.error;
        state.data = false;
        state.error = action.error.message || 'Failed to check authentication';
      })
      .addCase(logout.pending, (state) => {
        state.status = RequestStatus.loading;
        state.data = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = RequestStatus.success;
        state.data = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = RequestStatus.error;
        state.data = true;
        state.error = action.error.message || 'Login failed';
      });
  },
});

export default authSlice.reducer;
