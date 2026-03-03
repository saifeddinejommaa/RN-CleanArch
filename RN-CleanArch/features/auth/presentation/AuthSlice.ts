import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LoginUseCase } from '../domain/useCases/LoginUseCase';
import { LogoutUseCase } from '../domain/useCases/LogoutUseCase';
import { CheckAuthUseCase } from '../domain/useCases/CheckAuthUseCase';
import { container } from '../../../core/di/container';

interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  error: String | null;
}

const initialState: AuthState = {
  error: null,
  isLoading: false,
  isLoggedIn: false,
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
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = action.error.message || 'Login failed';
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = action.payload;
        state.error = null;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = action.error.message || 'Login failed';
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = action.error.message || 'Login failed';
      });
  },
});

export default authSlice.reducer;
