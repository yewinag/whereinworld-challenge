import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import countryReducer from '../features/country/countrySlice';

export const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});
setupListeners(store.dispatch);
