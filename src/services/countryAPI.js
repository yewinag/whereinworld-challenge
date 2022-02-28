import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../config/constants';

export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getCountryAll: builder.query({
      query: () => `/all`,
    }),
  }),
});

export const { useGetCountryAllQuery } = countryApi;
