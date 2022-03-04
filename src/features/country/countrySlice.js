import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCountry, paginateHelper, fetchDevApi } from './countryAPI';

const initialState = {
  data: [],
  list: [],
  test: [],
  loading: false,
  error: null,
  lee: [],
};

export const fetchCountries = createAsyncThunk('fetch/country', async (url) => {
  const response = await fetchCountry(url);
  return response;
});

// test api call
export const featchDev = createAsyncThunk('fetch/dev', async (url) => {
  const response = await fetchDevApi(url);
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
    handleLee: (state) => {
      state.lee = [{ name: 'apk', age: 39 }];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.list = paginateHelper(payload, 0, 8);
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.loading = false;
      })
      .addCase(featchDev.pending, (state) => {
        state.loading = true;
      })
      .addCase(featchDev.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.test = payload;
      })
      .addCase(featchDev.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { loadMore, handleLee } = countrySlice.actions;

export const selectValues = (state) => state.country;

export default countrySlice.reducer;
