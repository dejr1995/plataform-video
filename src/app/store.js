import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../features/UserSlice';
import PriceSlice from '../features/PriceSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    price: PriceSlice.reducer,
  },
});
