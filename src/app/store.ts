import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/presentation/AuthSlice';
import homeReducer from '../features/home/presentation/HomeSlice';
import searchReducer from '../features/search/presentation/SearchSlice';
import ProfileReducer from '../features/profile/presentation/ProfileSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    search: searchReducer,
    promoter:ProfileReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
