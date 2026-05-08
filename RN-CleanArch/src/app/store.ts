import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/presentation/AuthSlice';
import homeReducer from '../features/home/presentation/HomeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
