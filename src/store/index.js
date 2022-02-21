import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { countryApi } from '../services/countryAPI';
import formReducer from '../features/form/formSlice';
import countryReducer from '../features/country/countrySlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    country: countryReducer,
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});
setupListeners(store.dispatch);
