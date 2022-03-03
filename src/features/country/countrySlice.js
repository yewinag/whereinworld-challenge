import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCountry, paginateHelper } from './countryAPI';

const initialState = {
  data: [],
  list: [],
  loading: false,
  error: null,
};

export const fetchCountries = createAsyncThunk('fetch/country', async (url) => {
  const response = await fetchCountry(url);
  return response;
});

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    loadMore: (state) => {
      state.list = [
        ...state.list,
        ...paginateHelper(state.data, state.list.length, state.list.length + 8),
      ];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.list = paginateHelper(payload, 0, 8);
      })
      .addCase(fetchCountries.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { loadMore } = countrySlice.actions;

export const selectValues = (state) => state.country;

export default countrySlice.reducer;
